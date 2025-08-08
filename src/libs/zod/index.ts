import { zValidator } from "@hono/zod-validator";
import { z } from "zod";
import { Response } from "../response";

const Validate = (target: "json" | "form" | "query", schema: any) => {
  return zValidator(target, schema, (result, c) => {
    if (!result.success) {
      const errors = result.error.issues.reduce((acc, issue) => {
        const field = issue.path.join('.');
        acc[field] = issue.message;
        return acc;
      }, {} as Record<string, string>);
      return Response(c, errors, "Validation failed", 400);

    }
  });
};

export { Validate }
