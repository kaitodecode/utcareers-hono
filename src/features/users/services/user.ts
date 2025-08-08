import { Context } from "hono";
import * as bcrypt from "bcrypt";
import prisma from "../../../libs/prisma";
import { Response } from "../../../libs/response";
import { v4 } from "uuid";

// Get all users with Laravel-style pagination
export const GetUsersService = async (c: Context) => {
  try {
    const { page = 1, per_page = 15, search, role } = c.req.valid("query" as never);
    
    const skip = (page - 1) * per_page;
    
    // Build where clause
    const where: any = {};
    
    if (search) {
      where.OR = [
        { name: { contains: search } },
        { email: { contains: search } },
        { phone: { contains: search } }
      ];
    }
    
    if (role) {
      where.role = role;
    }
    
    // Get total count
    const total = await prisma.users.count({ where });
    
    // Get users
    const users = await prisma.users.findMany({
      where,
      skip,
      take: per_page,
      select: {
        id: true,
        photo: true,
        name: true,
        phone: true,
        email: true,
        address: true,
        description: true,
        role: true,
        verified_at: true,
        created_at: true,
        updated_at: true
      },
      orderBy: { created_at: 'desc' }
    });
    
    // Laravel-style pagination response
    const lastPage = Math.ceil(total / per_page);
    const from = skip + 1;
    const to = Math.min(skip + per_page, total);
    
    const paginationData = {
      current_page: page,
      data: users,
      first_page_url: `?page=1&per_page=${per_page}`,
      from: total > 0 ? from : null,
      last_page: lastPage,
      last_page_url: `?page=${lastPage}&per_page=${per_page}`,
      links: [
        {
          url: page > 1 ? `?page=${page - 1}&per_page=${per_page}` : null,
          label: "&laquo; Previous",
          active: false
        },
        ...Array.from({ length: lastPage }, (_, i) => ({
          url: `?page=${i + 1}&per_page=${per_page}`,
          label: (i + 1).toString(),
          active: i + 1 === page
        })),
        {
          url: page < lastPage ? `?page=${page + 1}&per_page=${per_page}` : null,
          label: "Next &raquo;",
          active: false
        }
      ],
      next_page_url: page < lastPage ? `?page=${page + 1}&per_page=${per_page}` : null,
      path: c.req.url.split('?')[0],
      per_page,
      prev_page_url: page > 1 ? `?page=${page - 1}&per_page=${per_page}` : null,
      to: total > 0 ? to : null,
      total
    };
    
    return Response(c, paginationData, "Users retrieved successfully", 200);
  } catch (error) {
    return Response(c, null, "Failed to retrieve users", 500);
  }
};

// Get single user by ID
export const GetUserService = async (c: Context) => {
  try {
    const { id } = c.req.param();
    
    const user = await prisma.users.findUnique({
      where: { id },
      select: {
        id: true,
        photo: true,
        name: true,
        phone: true,
        email: true,
        address: true,
        description: true,
        role: true,
        verified_at: true,
        created_at: true,
        updated_at: true
      }
    });
    
    if (!user) {
      return Response(c, null, "User not found", 404);
    }
    
    return Response(c, user, "User retrieved successfully", 200);
  } catch (error) {
    return Response(c, null, "Failed to retrieve user", 500);
  }
};

// Create new user
export const CreateUserService = async (c: Context) => {
  try {
    const data = c.req.valid("json" as never);
    const { name, phone, email, address, description, password, role } = data;
    
    // Check if email already exists
    const existingUser = await prisma.users.findFirst({
      where: {
        OR: [
          { email },
          { phone }
        ]
      }
    });
    
    if (existingUser) {
      if (existingUser.email === email) {
        return Response(c, null, "Email already exists", 400);
      }
      if (existingUser.phone === phone) {
        return Response(c, null, "Phone number already exists", 400);
      }
    }
    
    const user = await prisma.users.create({
      data: {
        id: v4(),
        name,
        phone,
        email,
        address,
        description,
        password: bcrypt.hashSync(password, 10),
        role: role || "pelamar"
      },
      select: {
        id: true,
        photo: true,
        name: true,
        phone: true,
        email: true,
        address: true,
        description: true,
        role: true,
        verified_at: true,
        created_at: true,
        updated_at: true
      }
    });
    
    return Response(c, user, "User created successfully", 201);
  } catch (error) {
    return Response(c, null, "Failed to create user", 500);
  }
};

// Update user
export const UpdateUserService = async (c: Context) => {
  try {
    const { id } = c.req.param();
    const { name, phone, email, address, description, password, role } = c.req.valid("json" as never);
    
    // Check if user exists
    const existingUser = await prisma.users.findUnique({
      where: { id }
    });
    
    if (!existingUser) {
      return Response(c, null, "User not found", 404);
    }
    
    // Check for email/phone conflicts if they're being updated
    if (email || phone) {
      const conflictUser = await prisma.users.findFirst({
        where: {
          AND: [
            { id: { not: id } },
            {
              OR: [
                email ? { email: email } : {},
                phone ? { phone: phone } : {}
              ].filter(obj => Object.keys(obj).length > 0)
            }
          ]
        }
      });
      
      if (conflictUser) {
        if (conflictUser.email === email) {
          return Response(c, null, "Email already exists", 400);
        }
        if (conflictUser.phone === phone) {
          return Response(c, null, "Phone number already exists", 400);
        }
      }
    }
    
    // Prepare update data
    const updateData: any = {
      name,
      phone,
      email,
      address,
      description,
      role
    };
    if (password) {
      updateData.password = bcrypt.hashSync(password, 10);
    }
    
    const user = await prisma.users.update({
      where: { id },
      data: updateData,
      select: {
        id: true,
        photo: true,
        name: true,
        phone: true,
        email: true,
        address: true,
        description: true,
        role: true,
        verified_at: true,
        created_at: true,
        updated_at: true
      }
    });
    
    return Response(c, user, "User updated successfully", 200);
  } catch (error) {
    return Response(c, null, "Failed to update user", 500);
  }
};

// Delete user
export const DeleteUserService = async (c: Context) => {
  try {
    const { id } = c.req.param();
    
    // Check if user exists
    const existingUser = await prisma.users.findUnique({
      where: { id }
    });
    
    if (!existingUser) {
      return Response(c, null, "User not found", 404);
    }
    
    await prisma.users.delete({
      where: { id }
    });
    
    return Response(c, null, "User deleted successfully", 200);
  } catch (error) {
    return Response(c, null, "Failed to delete user", 500);
  }
};