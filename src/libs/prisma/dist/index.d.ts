
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model applicants
 * 
 */
export type applicants = $Result.DefaultSelection<Prisma.$applicantsPayload>
/**
 * Model cache
 * 
 */
export type cache = $Result.DefaultSelection<Prisma.$cachePayload>
/**
 * Model cache_locks
 * 
 */
export type cache_locks = $Result.DefaultSelection<Prisma.$cache_locksPayload>
/**
 * Model companies
 * 
 */
export type companies = $Result.DefaultSelection<Prisma.$companiesPayload>
/**
 * Model failed_jobs
 * 
 */
export type failed_jobs = $Result.DefaultSelection<Prisma.$failed_jobsPayload>
/**
 * Model job_batches
 * 
 */
export type job_batches = $Result.DefaultSelection<Prisma.$job_batchesPayload>
/**
 * Model job_categories
 * 
 */
export type job_categories = $Result.DefaultSelection<Prisma.$job_categoriesPayload>
/**
 * Model job_posts
 * 
 */
export type job_posts = $Result.DefaultSelection<Prisma.$job_postsPayload>
/**
 * Model jobs
 * 
 */
export type jobs = $Result.DefaultSelection<Prisma.$jobsPayload>
/**
 * Model migrations
 * 
 */
export type migrations = $Result.DefaultSelection<Prisma.$migrationsPayload>
/**
 * Model selections
 * 
 */
export type selections = $Result.DefaultSelection<Prisma.$selectionsPayload>
/**
 * Model sessions
 * 
 */
export type sessions = $Result.DefaultSelection<Prisma.$sessionsPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model job_post_categories
 * 
 */
export type job_post_categories = $Result.DefaultSelection<Prisma.$job_post_categoriesPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const applicants_status: {
  pending: 'pending',
  selection: 'selection',
  accepted: 'accepted',
  rejected: 'rejected'
};

export type applicants_status = (typeof applicants_status)[keyof typeof applicants_status]


export const selections_stage: {
  portfolio: 'portfolio',
  interview: 'interview',
  medical_checkup: 'medical_checkup'
};

export type selections_stage = (typeof selections_stage)[keyof typeof selections_stage]


export const selections_status: {
  pending: 'pending',
  in_review: 'in_review',
  accepted: 'accepted',
  rejected: 'rejected'
};

export type selections_status = (typeof selections_status)[keyof typeof selections_status]


export const users_role: {
  pelamar: 'pelamar',
  admin: 'admin'
};

export type users_role = (typeof users_role)[keyof typeof users_role]


export const job_post_categories_type: {
  full_time: 'full_time',
  part_time: 'part_time',
  contract: 'contract',
  remote: 'remote'
};

export type job_post_categories_type = (typeof job_post_categories_type)[keyof typeof job_post_categories_type]


export const job_posts_status: {
  active: 'active',
  closed: 'closed'
};

export type job_posts_status = (typeof job_posts_status)[keyof typeof job_posts_status]

}

export type applicants_status = $Enums.applicants_status

export const applicants_status: typeof $Enums.applicants_status

export type selections_stage = $Enums.selections_stage

export const selections_stage: typeof $Enums.selections_stage

export type selections_status = $Enums.selections_status

export const selections_status: typeof $Enums.selections_status

export type users_role = $Enums.users_role

export const users_role: typeof $Enums.users_role

export type job_post_categories_type = $Enums.job_post_categories_type

export const job_post_categories_type: typeof $Enums.job_post_categories_type

export type job_posts_status = $Enums.job_posts_status

export const job_posts_status: typeof $Enums.job_posts_status

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Applicants
 * const applicants = await prisma.applicants.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Applicants
   * const applicants = await prisma.applicants.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.applicants`: Exposes CRUD operations for the **applicants** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Applicants
    * const applicants = await prisma.applicants.findMany()
    * ```
    */
  get applicants(): Prisma.applicantsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cache`: Exposes CRUD operations for the **cache** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Caches
    * const caches = await prisma.cache.findMany()
    * ```
    */
  get cache(): Prisma.cacheDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cache_locks`: Exposes CRUD operations for the **cache_locks** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cache_locks
    * const cache_locks = await prisma.cache_locks.findMany()
    * ```
    */
  get cache_locks(): Prisma.cache_locksDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.companies`: Exposes CRUD operations for the **companies** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Companies
    * const companies = await prisma.companies.findMany()
    * ```
    */
  get companies(): Prisma.companiesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.failed_jobs`: Exposes CRUD operations for the **failed_jobs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Failed_jobs
    * const failed_jobs = await prisma.failed_jobs.findMany()
    * ```
    */
  get failed_jobs(): Prisma.failed_jobsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.job_batches`: Exposes CRUD operations for the **job_batches** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Job_batches
    * const job_batches = await prisma.job_batches.findMany()
    * ```
    */
  get job_batches(): Prisma.job_batchesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.job_categories`: Exposes CRUD operations for the **job_categories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Job_categories
    * const job_categories = await prisma.job_categories.findMany()
    * ```
    */
  get job_categories(): Prisma.job_categoriesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.job_posts`: Exposes CRUD operations for the **job_posts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Job_posts
    * const job_posts = await prisma.job_posts.findMany()
    * ```
    */
  get job_posts(): Prisma.job_postsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.jobs`: Exposes CRUD operations for the **jobs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Jobs
    * const jobs = await prisma.jobs.findMany()
    * ```
    */
  get jobs(): Prisma.jobsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.migrations`: Exposes CRUD operations for the **migrations** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Migrations
    * const migrations = await prisma.migrations.findMany()
    * ```
    */
  get migrations(): Prisma.migrationsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.selections`: Exposes CRUD operations for the **selections** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Selections
    * const selections = await prisma.selections.findMany()
    * ```
    */
  get selections(): Prisma.selectionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sessions`: Exposes CRUD operations for the **sessions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.sessions.findMany()
    * ```
    */
  get sessions(): Prisma.sessionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.job_post_categories`: Exposes CRUD operations for the **job_post_categories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Job_post_categories
    * const job_post_categories = await prisma.job_post_categories.findMany()
    * ```
    */
  get job_post_categories(): Prisma.job_post_categoriesDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.13.0
   * Query Engine version: 361e86d0ea4987e9f53a565309b3eed797a6bcbd
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    applicants: 'applicants',
    cache: 'cache',
    cache_locks: 'cache_locks',
    companies: 'companies',
    failed_jobs: 'failed_jobs',
    job_batches: 'job_batches',
    job_categories: 'job_categories',
    job_posts: 'job_posts',
    jobs: 'jobs',
    migrations: 'migrations',
    selections: 'selections',
    sessions: 'sessions',
    users: 'users',
    job_post_categories: 'job_post_categories'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "applicants" | "cache" | "cache_locks" | "companies" | "failed_jobs" | "job_batches" | "job_categories" | "job_posts" | "jobs" | "migrations" | "selections" | "sessions" | "users" | "job_post_categories"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      applicants: {
        payload: Prisma.$applicantsPayload<ExtArgs>
        fields: Prisma.applicantsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.applicantsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$applicantsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.applicantsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$applicantsPayload>
          }
          findFirst: {
            args: Prisma.applicantsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$applicantsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.applicantsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$applicantsPayload>
          }
          findMany: {
            args: Prisma.applicantsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$applicantsPayload>[]
          }
          create: {
            args: Prisma.applicantsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$applicantsPayload>
          }
          createMany: {
            args: Prisma.applicantsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.applicantsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$applicantsPayload>
          }
          update: {
            args: Prisma.applicantsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$applicantsPayload>
          }
          deleteMany: {
            args: Prisma.applicantsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.applicantsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.applicantsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$applicantsPayload>
          }
          aggregate: {
            args: Prisma.ApplicantsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApplicants>
          }
          groupBy: {
            args: Prisma.applicantsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApplicantsGroupByOutputType>[]
          }
          count: {
            args: Prisma.applicantsCountArgs<ExtArgs>
            result: $Utils.Optional<ApplicantsCountAggregateOutputType> | number
          }
        }
      }
      cache: {
        payload: Prisma.$cachePayload<ExtArgs>
        fields: Prisma.cacheFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cacheFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cachePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cacheFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cachePayload>
          }
          findFirst: {
            args: Prisma.cacheFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cachePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cacheFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cachePayload>
          }
          findMany: {
            args: Prisma.cacheFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cachePayload>[]
          }
          create: {
            args: Prisma.cacheCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cachePayload>
          }
          createMany: {
            args: Prisma.cacheCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.cacheDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cachePayload>
          }
          update: {
            args: Prisma.cacheUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cachePayload>
          }
          deleteMany: {
            args: Prisma.cacheDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.cacheUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.cacheUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cachePayload>
          }
          aggregate: {
            args: Prisma.CacheAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCache>
          }
          groupBy: {
            args: Prisma.cacheGroupByArgs<ExtArgs>
            result: $Utils.Optional<CacheGroupByOutputType>[]
          }
          count: {
            args: Prisma.cacheCountArgs<ExtArgs>
            result: $Utils.Optional<CacheCountAggregateOutputType> | number
          }
        }
      }
      cache_locks: {
        payload: Prisma.$cache_locksPayload<ExtArgs>
        fields: Prisma.cache_locksFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cache_locksFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cache_locksPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cache_locksFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cache_locksPayload>
          }
          findFirst: {
            args: Prisma.cache_locksFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cache_locksPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cache_locksFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cache_locksPayload>
          }
          findMany: {
            args: Prisma.cache_locksFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cache_locksPayload>[]
          }
          create: {
            args: Prisma.cache_locksCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cache_locksPayload>
          }
          createMany: {
            args: Prisma.cache_locksCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.cache_locksDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cache_locksPayload>
          }
          update: {
            args: Prisma.cache_locksUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cache_locksPayload>
          }
          deleteMany: {
            args: Prisma.cache_locksDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.cache_locksUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.cache_locksUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cache_locksPayload>
          }
          aggregate: {
            args: Prisma.Cache_locksAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCache_locks>
          }
          groupBy: {
            args: Prisma.cache_locksGroupByArgs<ExtArgs>
            result: $Utils.Optional<Cache_locksGroupByOutputType>[]
          }
          count: {
            args: Prisma.cache_locksCountArgs<ExtArgs>
            result: $Utils.Optional<Cache_locksCountAggregateOutputType> | number
          }
        }
      }
      companies: {
        payload: Prisma.$companiesPayload<ExtArgs>
        fields: Prisma.companiesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.companiesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companiesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.companiesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companiesPayload>
          }
          findFirst: {
            args: Prisma.companiesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companiesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.companiesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companiesPayload>
          }
          findMany: {
            args: Prisma.companiesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companiesPayload>[]
          }
          create: {
            args: Prisma.companiesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companiesPayload>
          }
          createMany: {
            args: Prisma.companiesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.companiesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companiesPayload>
          }
          update: {
            args: Prisma.companiesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companiesPayload>
          }
          deleteMany: {
            args: Prisma.companiesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.companiesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.companiesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companiesPayload>
          }
          aggregate: {
            args: Prisma.CompaniesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompanies>
          }
          groupBy: {
            args: Prisma.companiesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompaniesGroupByOutputType>[]
          }
          count: {
            args: Prisma.companiesCountArgs<ExtArgs>
            result: $Utils.Optional<CompaniesCountAggregateOutputType> | number
          }
        }
      }
      failed_jobs: {
        payload: Prisma.$failed_jobsPayload<ExtArgs>
        fields: Prisma.failed_jobsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.failed_jobsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$failed_jobsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.failed_jobsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$failed_jobsPayload>
          }
          findFirst: {
            args: Prisma.failed_jobsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$failed_jobsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.failed_jobsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$failed_jobsPayload>
          }
          findMany: {
            args: Prisma.failed_jobsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$failed_jobsPayload>[]
          }
          create: {
            args: Prisma.failed_jobsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$failed_jobsPayload>
          }
          createMany: {
            args: Prisma.failed_jobsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.failed_jobsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$failed_jobsPayload>
          }
          update: {
            args: Prisma.failed_jobsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$failed_jobsPayload>
          }
          deleteMany: {
            args: Prisma.failed_jobsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.failed_jobsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.failed_jobsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$failed_jobsPayload>
          }
          aggregate: {
            args: Prisma.Failed_jobsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFailed_jobs>
          }
          groupBy: {
            args: Prisma.failed_jobsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Failed_jobsGroupByOutputType>[]
          }
          count: {
            args: Prisma.failed_jobsCountArgs<ExtArgs>
            result: $Utils.Optional<Failed_jobsCountAggregateOutputType> | number
          }
        }
      }
      job_batches: {
        payload: Prisma.$job_batchesPayload<ExtArgs>
        fields: Prisma.job_batchesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.job_batchesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$job_batchesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.job_batchesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$job_batchesPayload>
          }
          findFirst: {
            args: Prisma.job_batchesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$job_batchesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.job_batchesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$job_batchesPayload>
          }
          findMany: {
            args: Prisma.job_batchesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$job_batchesPayload>[]
          }
          create: {
            args: Prisma.job_batchesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$job_batchesPayload>
          }
          createMany: {
            args: Prisma.job_batchesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.job_batchesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$job_batchesPayload>
          }
          update: {
            args: Prisma.job_batchesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$job_batchesPayload>
          }
          deleteMany: {
            args: Prisma.job_batchesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.job_batchesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.job_batchesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$job_batchesPayload>
          }
          aggregate: {
            args: Prisma.Job_batchesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJob_batches>
          }
          groupBy: {
            args: Prisma.job_batchesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Job_batchesGroupByOutputType>[]
          }
          count: {
            args: Prisma.job_batchesCountArgs<ExtArgs>
            result: $Utils.Optional<Job_batchesCountAggregateOutputType> | number
          }
        }
      }
      job_categories: {
        payload: Prisma.$job_categoriesPayload<ExtArgs>
        fields: Prisma.job_categoriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.job_categoriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$job_categoriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.job_categoriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$job_categoriesPayload>
          }
          findFirst: {
            args: Prisma.job_categoriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$job_categoriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.job_categoriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$job_categoriesPayload>
          }
          findMany: {
            args: Prisma.job_categoriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$job_categoriesPayload>[]
          }
          create: {
            args: Prisma.job_categoriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$job_categoriesPayload>
          }
          createMany: {
            args: Prisma.job_categoriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.job_categoriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$job_categoriesPayload>
          }
          update: {
            args: Prisma.job_categoriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$job_categoriesPayload>
          }
          deleteMany: {
            args: Prisma.job_categoriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.job_categoriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.job_categoriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$job_categoriesPayload>
          }
          aggregate: {
            args: Prisma.Job_categoriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJob_categories>
          }
          groupBy: {
            args: Prisma.job_categoriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Job_categoriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.job_categoriesCountArgs<ExtArgs>
            result: $Utils.Optional<Job_categoriesCountAggregateOutputType> | number
          }
        }
      }
      job_posts: {
        payload: Prisma.$job_postsPayload<ExtArgs>
        fields: Prisma.job_postsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.job_postsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$job_postsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.job_postsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$job_postsPayload>
          }
          findFirst: {
            args: Prisma.job_postsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$job_postsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.job_postsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$job_postsPayload>
          }
          findMany: {
            args: Prisma.job_postsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$job_postsPayload>[]
          }
          create: {
            args: Prisma.job_postsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$job_postsPayload>
          }
          createMany: {
            args: Prisma.job_postsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.job_postsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$job_postsPayload>
          }
          update: {
            args: Prisma.job_postsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$job_postsPayload>
          }
          deleteMany: {
            args: Prisma.job_postsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.job_postsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.job_postsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$job_postsPayload>
          }
          aggregate: {
            args: Prisma.Job_postsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJob_posts>
          }
          groupBy: {
            args: Prisma.job_postsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Job_postsGroupByOutputType>[]
          }
          count: {
            args: Prisma.job_postsCountArgs<ExtArgs>
            result: $Utils.Optional<Job_postsCountAggregateOutputType> | number
          }
        }
      }
      jobs: {
        payload: Prisma.$jobsPayload<ExtArgs>
        fields: Prisma.jobsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.jobsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.jobsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobsPayload>
          }
          findFirst: {
            args: Prisma.jobsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.jobsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobsPayload>
          }
          findMany: {
            args: Prisma.jobsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobsPayload>[]
          }
          create: {
            args: Prisma.jobsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobsPayload>
          }
          createMany: {
            args: Prisma.jobsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.jobsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobsPayload>
          }
          update: {
            args: Prisma.jobsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobsPayload>
          }
          deleteMany: {
            args: Prisma.jobsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.jobsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.jobsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobsPayload>
          }
          aggregate: {
            args: Prisma.JobsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJobs>
          }
          groupBy: {
            args: Prisma.jobsGroupByArgs<ExtArgs>
            result: $Utils.Optional<JobsGroupByOutputType>[]
          }
          count: {
            args: Prisma.jobsCountArgs<ExtArgs>
            result: $Utils.Optional<JobsCountAggregateOutputType> | number
          }
        }
      }
      migrations: {
        payload: Prisma.$migrationsPayload<ExtArgs>
        fields: Prisma.migrationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.migrationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$migrationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.migrationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$migrationsPayload>
          }
          findFirst: {
            args: Prisma.migrationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$migrationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.migrationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$migrationsPayload>
          }
          findMany: {
            args: Prisma.migrationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$migrationsPayload>[]
          }
          create: {
            args: Prisma.migrationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$migrationsPayload>
          }
          createMany: {
            args: Prisma.migrationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.migrationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$migrationsPayload>
          }
          update: {
            args: Prisma.migrationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$migrationsPayload>
          }
          deleteMany: {
            args: Prisma.migrationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.migrationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.migrationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$migrationsPayload>
          }
          aggregate: {
            args: Prisma.MigrationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMigrations>
          }
          groupBy: {
            args: Prisma.migrationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<MigrationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.migrationsCountArgs<ExtArgs>
            result: $Utils.Optional<MigrationsCountAggregateOutputType> | number
          }
        }
      }
      selections: {
        payload: Prisma.$selectionsPayload<ExtArgs>
        fields: Prisma.selectionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.selectionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$selectionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.selectionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$selectionsPayload>
          }
          findFirst: {
            args: Prisma.selectionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$selectionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.selectionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$selectionsPayload>
          }
          findMany: {
            args: Prisma.selectionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$selectionsPayload>[]
          }
          create: {
            args: Prisma.selectionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$selectionsPayload>
          }
          createMany: {
            args: Prisma.selectionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.selectionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$selectionsPayload>
          }
          update: {
            args: Prisma.selectionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$selectionsPayload>
          }
          deleteMany: {
            args: Prisma.selectionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.selectionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.selectionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$selectionsPayload>
          }
          aggregate: {
            args: Prisma.SelectionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSelections>
          }
          groupBy: {
            args: Prisma.selectionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SelectionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.selectionsCountArgs<ExtArgs>
            result: $Utils.Optional<SelectionsCountAggregateOutputType> | number
          }
        }
      }
      sessions: {
        payload: Prisma.$sessionsPayload<ExtArgs>
        fields: Prisma.sessionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.sessionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.sessionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>
          }
          findFirst: {
            args: Prisma.sessionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.sessionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>
          }
          findMany: {
            args: Prisma.sessionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>[]
          }
          create: {
            args: Prisma.sessionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>
          }
          createMany: {
            args: Prisma.sessionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.sessionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>
          }
          update: {
            args: Prisma.sessionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>
          }
          deleteMany: {
            args: Prisma.sessionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.sessionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.sessionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>
          }
          aggregate: {
            args: Prisma.SessionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSessions>
          }
          groupBy: {
            args: Prisma.sessionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.sessionsCountArgs<ExtArgs>
            result: $Utils.Optional<SessionsCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      job_post_categories: {
        payload: Prisma.$job_post_categoriesPayload<ExtArgs>
        fields: Prisma.job_post_categoriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.job_post_categoriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$job_post_categoriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.job_post_categoriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$job_post_categoriesPayload>
          }
          findFirst: {
            args: Prisma.job_post_categoriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$job_post_categoriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.job_post_categoriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$job_post_categoriesPayload>
          }
          findMany: {
            args: Prisma.job_post_categoriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$job_post_categoriesPayload>[]
          }
          create: {
            args: Prisma.job_post_categoriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$job_post_categoriesPayload>
          }
          createMany: {
            args: Prisma.job_post_categoriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.job_post_categoriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$job_post_categoriesPayload>
          }
          update: {
            args: Prisma.job_post_categoriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$job_post_categoriesPayload>
          }
          deleteMany: {
            args: Prisma.job_post_categoriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.job_post_categoriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.job_post_categoriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$job_post_categoriesPayload>
          }
          aggregate: {
            args: Prisma.Job_post_categoriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJob_post_categories>
          }
          groupBy: {
            args: Prisma.job_post_categoriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Job_post_categoriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.job_post_categoriesCountArgs<ExtArgs>
            result: $Utils.Optional<Job_post_categoriesCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    applicants?: applicantsOmit
    cache?: cacheOmit
    cache_locks?: cache_locksOmit
    companies?: companiesOmit
    failed_jobs?: failed_jobsOmit
    job_batches?: job_batchesOmit
    job_categories?: job_categoriesOmit
    job_posts?: job_postsOmit
    jobs?: jobsOmit
    migrations?: migrationsOmit
    selections?: selectionsOmit
    sessions?: sessionsOmit
    users?: usersOmit
    job_post_categories?: job_post_categoriesOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ApplicantsCountOutputType
   */

  export type ApplicantsCountOutputType = {
    selections: number
  }

  export type ApplicantsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    selections?: boolean | ApplicantsCountOutputTypeCountSelectionsArgs
  }

  // Custom InputTypes
  /**
   * ApplicantsCountOutputType without action
   */
  export type ApplicantsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicantsCountOutputType
     */
    select?: ApplicantsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ApplicantsCountOutputType without action
   */
  export type ApplicantsCountOutputTypeCountSelectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: selectionsWhereInput
  }


  /**
   * Count Type CompaniesCountOutputType
   */

  export type CompaniesCountOutputType = {
    job_posts: number
  }

  export type CompaniesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job_posts?: boolean | CompaniesCountOutputTypeCountJob_postsArgs
  }

  // Custom InputTypes
  /**
   * CompaniesCountOutputType without action
   */
  export type CompaniesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompaniesCountOutputType
     */
    select?: CompaniesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CompaniesCountOutputType without action
   */
  export type CompaniesCountOutputTypeCountJob_postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: job_postsWhereInput
  }


  /**
   * Count Type Job_categoriesCountOutputType
   */

  export type Job_categoriesCountOutputType = {
    job_post_categories: number
  }

  export type Job_categoriesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job_post_categories?: boolean | Job_categoriesCountOutputTypeCountJob_post_categoriesArgs
  }

  // Custom InputTypes
  /**
   * Job_categoriesCountOutputType without action
   */
  export type Job_categoriesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job_categoriesCountOutputType
     */
    select?: Job_categoriesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Job_categoriesCountOutputType without action
   */
  export type Job_categoriesCountOutputTypeCountJob_post_categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: job_post_categoriesWhereInput
  }


  /**
   * Count Type Job_postsCountOutputType
   */

  export type Job_postsCountOutputType = {
    job_post_categories: number
  }

  export type Job_postsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job_post_categories?: boolean | Job_postsCountOutputTypeCountJob_post_categoriesArgs
  }

  // Custom InputTypes
  /**
   * Job_postsCountOutputType without action
   */
  export type Job_postsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job_postsCountOutputType
     */
    select?: Job_postsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Job_postsCountOutputType without action
   */
  export type Job_postsCountOutputTypeCountJob_post_categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: job_post_categoriesWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    applicants: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applicants?: boolean | UsersCountOutputTypeCountApplicantsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountApplicantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: applicantsWhereInput
  }


  /**
   * Count Type Job_post_categoriesCountOutputType
   */

  export type Job_post_categoriesCountOutputType = {
    applicants: number
    selections: number
  }

  export type Job_post_categoriesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applicants?: boolean | Job_post_categoriesCountOutputTypeCountApplicantsArgs
    selections?: boolean | Job_post_categoriesCountOutputTypeCountSelectionsArgs
  }

  // Custom InputTypes
  /**
   * Job_post_categoriesCountOutputType without action
   */
  export type Job_post_categoriesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job_post_categoriesCountOutputType
     */
    select?: Job_post_categoriesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Job_post_categoriesCountOutputType without action
   */
  export type Job_post_categoriesCountOutputTypeCountApplicantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: applicantsWhereInput
  }

  /**
   * Job_post_categoriesCountOutputType without action
   */
  export type Job_post_categoriesCountOutputTypeCountSelectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: selectionsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model applicants
   */

  export type AggregateApplicants = {
    _count: ApplicantsCountAggregateOutputType | null
    _min: ApplicantsMinAggregateOutputType | null
    _max: ApplicantsMaxAggregateOutputType | null
  }

  export type ApplicantsMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    job_post_category_id: string | null
    status: $Enums.applicants_status | null
    cv: string | null
    national_identity_card: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type ApplicantsMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    job_post_category_id: string | null
    status: $Enums.applicants_status | null
    cv: string | null
    national_identity_card: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type ApplicantsCountAggregateOutputType = {
    id: number
    user_id: number
    job_post_category_id: number
    status: number
    cv: number
    national_identity_card: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type ApplicantsMinAggregateInputType = {
    id?: true
    user_id?: true
    job_post_category_id?: true
    status?: true
    cv?: true
    national_identity_card?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type ApplicantsMaxAggregateInputType = {
    id?: true
    user_id?: true
    job_post_category_id?: true
    status?: true
    cv?: true
    national_identity_card?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type ApplicantsCountAggregateInputType = {
    id?: true
    user_id?: true
    job_post_category_id?: true
    status?: true
    cv?: true
    national_identity_card?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type ApplicantsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which applicants to aggregate.
     */
    where?: applicantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of applicants to fetch.
     */
    orderBy?: applicantsOrderByWithRelationInput | applicantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: applicantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` applicants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` applicants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned applicants
    **/
    _count?: true | ApplicantsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApplicantsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApplicantsMaxAggregateInputType
  }

  export type GetApplicantsAggregateType<T extends ApplicantsAggregateArgs> = {
        [P in keyof T & keyof AggregateApplicants]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApplicants[P]>
      : GetScalarType<T[P], AggregateApplicants[P]>
  }




  export type applicantsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: applicantsWhereInput
    orderBy?: applicantsOrderByWithAggregationInput | applicantsOrderByWithAggregationInput[]
    by: ApplicantsScalarFieldEnum[] | ApplicantsScalarFieldEnum
    having?: applicantsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApplicantsCountAggregateInputType | true
    _min?: ApplicantsMinAggregateInputType
    _max?: ApplicantsMaxAggregateInputType
  }

  export type ApplicantsGroupByOutputType = {
    id: string
    user_id: string
    job_post_category_id: string
    status: $Enums.applicants_status
    cv: string
    national_identity_card: string
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    _count: ApplicantsCountAggregateOutputType | null
    _min: ApplicantsMinAggregateOutputType | null
    _max: ApplicantsMaxAggregateOutputType | null
  }

  type GetApplicantsGroupByPayload<T extends applicantsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApplicantsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApplicantsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApplicantsGroupByOutputType[P]>
            : GetScalarType<T[P], ApplicantsGroupByOutputType[P]>
        }
      >
    >


  export type applicantsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    job_post_category_id?: boolean
    status?: boolean
    cv?: boolean
    national_identity_card?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    job_post_categories?: boolean | job_post_categoriesDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    selections?: boolean | applicants$selectionsArgs<ExtArgs>
    _count?: boolean | ApplicantsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["applicants"]>



  export type applicantsSelectScalar = {
    id?: boolean
    user_id?: boolean
    job_post_category_id?: boolean
    status?: boolean
    cv?: boolean
    national_identity_card?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type applicantsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "job_post_category_id" | "status" | "cv" | "national_identity_card" | "created_at" | "updated_at" | "deleted_at", ExtArgs["result"]["applicants"]>
  export type applicantsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job_post_categories?: boolean | job_post_categoriesDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    selections?: boolean | applicants$selectionsArgs<ExtArgs>
    _count?: boolean | ApplicantsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $applicantsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "applicants"
    objects: {
      job_post_categories: Prisma.$job_post_categoriesPayload<ExtArgs>
      users: Prisma.$usersPayload<ExtArgs>
      selections: Prisma.$selectionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      job_post_category_id: string
      status: $Enums.applicants_status
      cv: string
      national_identity_card: string
      created_at: Date | null
      updated_at: Date | null
      deleted_at: Date | null
    }, ExtArgs["result"]["applicants"]>
    composites: {}
  }

  type applicantsGetPayload<S extends boolean | null | undefined | applicantsDefaultArgs> = $Result.GetResult<Prisma.$applicantsPayload, S>

  type applicantsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<applicantsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApplicantsCountAggregateInputType | true
    }

  export interface applicantsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['applicants'], meta: { name: 'applicants' } }
    /**
     * Find zero or one Applicants that matches the filter.
     * @param {applicantsFindUniqueArgs} args - Arguments to find a Applicants
     * @example
     * // Get one Applicants
     * const applicants = await prisma.applicants.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends applicantsFindUniqueArgs>(args: SelectSubset<T, applicantsFindUniqueArgs<ExtArgs>>): Prisma__applicantsClient<$Result.GetResult<Prisma.$applicantsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Applicants that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {applicantsFindUniqueOrThrowArgs} args - Arguments to find a Applicants
     * @example
     * // Get one Applicants
     * const applicants = await prisma.applicants.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends applicantsFindUniqueOrThrowArgs>(args: SelectSubset<T, applicantsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__applicantsClient<$Result.GetResult<Prisma.$applicantsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Applicants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {applicantsFindFirstArgs} args - Arguments to find a Applicants
     * @example
     * // Get one Applicants
     * const applicants = await prisma.applicants.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends applicantsFindFirstArgs>(args?: SelectSubset<T, applicantsFindFirstArgs<ExtArgs>>): Prisma__applicantsClient<$Result.GetResult<Prisma.$applicantsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Applicants that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {applicantsFindFirstOrThrowArgs} args - Arguments to find a Applicants
     * @example
     * // Get one Applicants
     * const applicants = await prisma.applicants.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends applicantsFindFirstOrThrowArgs>(args?: SelectSubset<T, applicantsFindFirstOrThrowArgs<ExtArgs>>): Prisma__applicantsClient<$Result.GetResult<Prisma.$applicantsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Applicants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {applicantsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Applicants
     * const applicants = await prisma.applicants.findMany()
     * 
     * // Get first 10 Applicants
     * const applicants = await prisma.applicants.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const applicantsWithIdOnly = await prisma.applicants.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends applicantsFindManyArgs>(args?: SelectSubset<T, applicantsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$applicantsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Applicants.
     * @param {applicantsCreateArgs} args - Arguments to create a Applicants.
     * @example
     * // Create one Applicants
     * const Applicants = await prisma.applicants.create({
     *   data: {
     *     // ... data to create a Applicants
     *   }
     * })
     * 
     */
    create<T extends applicantsCreateArgs>(args: SelectSubset<T, applicantsCreateArgs<ExtArgs>>): Prisma__applicantsClient<$Result.GetResult<Prisma.$applicantsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Applicants.
     * @param {applicantsCreateManyArgs} args - Arguments to create many Applicants.
     * @example
     * // Create many Applicants
     * const applicants = await prisma.applicants.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends applicantsCreateManyArgs>(args?: SelectSubset<T, applicantsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Applicants.
     * @param {applicantsDeleteArgs} args - Arguments to delete one Applicants.
     * @example
     * // Delete one Applicants
     * const Applicants = await prisma.applicants.delete({
     *   where: {
     *     // ... filter to delete one Applicants
     *   }
     * })
     * 
     */
    delete<T extends applicantsDeleteArgs>(args: SelectSubset<T, applicantsDeleteArgs<ExtArgs>>): Prisma__applicantsClient<$Result.GetResult<Prisma.$applicantsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Applicants.
     * @param {applicantsUpdateArgs} args - Arguments to update one Applicants.
     * @example
     * // Update one Applicants
     * const applicants = await prisma.applicants.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends applicantsUpdateArgs>(args: SelectSubset<T, applicantsUpdateArgs<ExtArgs>>): Prisma__applicantsClient<$Result.GetResult<Prisma.$applicantsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Applicants.
     * @param {applicantsDeleteManyArgs} args - Arguments to filter Applicants to delete.
     * @example
     * // Delete a few Applicants
     * const { count } = await prisma.applicants.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends applicantsDeleteManyArgs>(args?: SelectSubset<T, applicantsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Applicants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {applicantsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Applicants
     * const applicants = await prisma.applicants.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends applicantsUpdateManyArgs>(args: SelectSubset<T, applicantsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Applicants.
     * @param {applicantsUpsertArgs} args - Arguments to update or create a Applicants.
     * @example
     * // Update or create a Applicants
     * const applicants = await prisma.applicants.upsert({
     *   create: {
     *     // ... data to create a Applicants
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Applicants we want to update
     *   }
     * })
     */
    upsert<T extends applicantsUpsertArgs>(args: SelectSubset<T, applicantsUpsertArgs<ExtArgs>>): Prisma__applicantsClient<$Result.GetResult<Prisma.$applicantsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Applicants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {applicantsCountArgs} args - Arguments to filter Applicants to count.
     * @example
     * // Count the number of Applicants
     * const count = await prisma.applicants.count({
     *   where: {
     *     // ... the filter for the Applicants we want to count
     *   }
     * })
    **/
    count<T extends applicantsCountArgs>(
      args?: Subset<T, applicantsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApplicantsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Applicants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicantsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ApplicantsAggregateArgs>(args: Subset<T, ApplicantsAggregateArgs>): Prisma.PrismaPromise<GetApplicantsAggregateType<T>>

    /**
     * Group by Applicants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {applicantsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends applicantsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: applicantsGroupByArgs['orderBy'] }
        : { orderBy?: applicantsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, applicantsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApplicantsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the applicants model
   */
  readonly fields: applicantsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for applicants.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__applicantsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    job_post_categories<T extends job_post_categoriesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, job_post_categoriesDefaultArgs<ExtArgs>>): Prisma__job_post_categoriesClient<$Result.GetResult<Prisma.$job_post_categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    selections<T extends applicants$selectionsArgs<ExtArgs> = {}>(args?: Subset<T, applicants$selectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$selectionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the applicants model
   */
  interface applicantsFieldRefs {
    readonly id: FieldRef<"applicants", 'String'>
    readonly user_id: FieldRef<"applicants", 'String'>
    readonly job_post_category_id: FieldRef<"applicants", 'String'>
    readonly status: FieldRef<"applicants", 'applicants_status'>
    readonly cv: FieldRef<"applicants", 'String'>
    readonly national_identity_card: FieldRef<"applicants", 'String'>
    readonly created_at: FieldRef<"applicants", 'DateTime'>
    readonly updated_at: FieldRef<"applicants", 'DateTime'>
    readonly deleted_at: FieldRef<"applicants", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * applicants findUnique
   */
  export type applicantsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the applicants
     */
    select?: applicantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the applicants
     */
    omit?: applicantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: applicantsInclude<ExtArgs> | null
    /**
     * Filter, which applicants to fetch.
     */
    where: applicantsWhereUniqueInput
  }

  /**
   * applicants findUniqueOrThrow
   */
  export type applicantsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the applicants
     */
    select?: applicantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the applicants
     */
    omit?: applicantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: applicantsInclude<ExtArgs> | null
    /**
     * Filter, which applicants to fetch.
     */
    where: applicantsWhereUniqueInput
  }

  /**
   * applicants findFirst
   */
  export type applicantsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the applicants
     */
    select?: applicantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the applicants
     */
    omit?: applicantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: applicantsInclude<ExtArgs> | null
    /**
     * Filter, which applicants to fetch.
     */
    where?: applicantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of applicants to fetch.
     */
    orderBy?: applicantsOrderByWithRelationInput | applicantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for applicants.
     */
    cursor?: applicantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` applicants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` applicants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of applicants.
     */
    distinct?: ApplicantsScalarFieldEnum | ApplicantsScalarFieldEnum[]
  }

  /**
   * applicants findFirstOrThrow
   */
  export type applicantsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the applicants
     */
    select?: applicantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the applicants
     */
    omit?: applicantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: applicantsInclude<ExtArgs> | null
    /**
     * Filter, which applicants to fetch.
     */
    where?: applicantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of applicants to fetch.
     */
    orderBy?: applicantsOrderByWithRelationInput | applicantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for applicants.
     */
    cursor?: applicantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` applicants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` applicants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of applicants.
     */
    distinct?: ApplicantsScalarFieldEnum | ApplicantsScalarFieldEnum[]
  }

  /**
   * applicants findMany
   */
  export type applicantsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the applicants
     */
    select?: applicantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the applicants
     */
    omit?: applicantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: applicantsInclude<ExtArgs> | null
    /**
     * Filter, which applicants to fetch.
     */
    where?: applicantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of applicants to fetch.
     */
    orderBy?: applicantsOrderByWithRelationInput | applicantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing applicants.
     */
    cursor?: applicantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` applicants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` applicants.
     */
    skip?: number
    distinct?: ApplicantsScalarFieldEnum | ApplicantsScalarFieldEnum[]
  }

  /**
   * applicants create
   */
  export type applicantsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the applicants
     */
    select?: applicantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the applicants
     */
    omit?: applicantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: applicantsInclude<ExtArgs> | null
    /**
     * The data needed to create a applicants.
     */
    data: XOR<applicantsCreateInput, applicantsUncheckedCreateInput>
  }

  /**
   * applicants createMany
   */
  export type applicantsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many applicants.
     */
    data: applicantsCreateManyInput | applicantsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * applicants update
   */
  export type applicantsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the applicants
     */
    select?: applicantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the applicants
     */
    omit?: applicantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: applicantsInclude<ExtArgs> | null
    /**
     * The data needed to update a applicants.
     */
    data: XOR<applicantsUpdateInput, applicantsUncheckedUpdateInput>
    /**
     * Choose, which applicants to update.
     */
    where: applicantsWhereUniqueInput
  }

  /**
   * applicants updateMany
   */
  export type applicantsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update applicants.
     */
    data: XOR<applicantsUpdateManyMutationInput, applicantsUncheckedUpdateManyInput>
    /**
     * Filter which applicants to update
     */
    where?: applicantsWhereInput
    /**
     * Limit how many applicants to update.
     */
    limit?: number
  }

  /**
   * applicants upsert
   */
  export type applicantsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the applicants
     */
    select?: applicantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the applicants
     */
    omit?: applicantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: applicantsInclude<ExtArgs> | null
    /**
     * The filter to search for the applicants to update in case it exists.
     */
    where: applicantsWhereUniqueInput
    /**
     * In case the applicants found by the `where` argument doesn't exist, create a new applicants with this data.
     */
    create: XOR<applicantsCreateInput, applicantsUncheckedCreateInput>
    /**
     * In case the applicants was found with the provided `where` argument, update it with this data.
     */
    update: XOR<applicantsUpdateInput, applicantsUncheckedUpdateInput>
  }

  /**
   * applicants delete
   */
  export type applicantsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the applicants
     */
    select?: applicantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the applicants
     */
    omit?: applicantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: applicantsInclude<ExtArgs> | null
    /**
     * Filter which applicants to delete.
     */
    where: applicantsWhereUniqueInput
  }

  /**
   * applicants deleteMany
   */
  export type applicantsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which applicants to delete
     */
    where?: applicantsWhereInput
    /**
     * Limit how many applicants to delete.
     */
    limit?: number
  }

  /**
   * applicants.selections
   */
  export type applicants$selectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the selections
     */
    select?: selectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the selections
     */
    omit?: selectionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: selectionsInclude<ExtArgs> | null
    where?: selectionsWhereInput
    orderBy?: selectionsOrderByWithRelationInput | selectionsOrderByWithRelationInput[]
    cursor?: selectionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SelectionsScalarFieldEnum | SelectionsScalarFieldEnum[]
  }

  /**
   * applicants without action
   */
  export type applicantsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the applicants
     */
    select?: applicantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the applicants
     */
    omit?: applicantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: applicantsInclude<ExtArgs> | null
  }


  /**
   * Model cache
   */

  export type AggregateCache = {
    _count: CacheCountAggregateOutputType | null
    _avg: CacheAvgAggregateOutputType | null
    _sum: CacheSumAggregateOutputType | null
    _min: CacheMinAggregateOutputType | null
    _max: CacheMaxAggregateOutputType | null
  }

  export type CacheAvgAggregateOutputType = {
    expiration: number | null
  }

  export type CacheSumAggregateOutputType = {
    expiration: number | null
  }

  export type CacheMinAggregateOutputType = {
    key: string | null
    value: string | null
    expiration: number | null
  }

  export type CacheMaxAggregateOutputType = {
    key: string | null
    value: string | null
    expiration: number | null
  }

  export type CacheCountAggregateOutputType = {
    key: number
    value: number
    expiration: number
    _all: number
  }


  export type CacheAvgAggregateInputType = {
    expiration?: true
  }

  export type CacheSumAggregateInputType = {
    expiration?: true
  }

  export type CacheMinAggregateInputType = {
    key?: true
    value?: true
    expiration?: true
  }

  export type CacheMaxAggregateInputType = {
    key?: true
    value?: true
    expiration?: true
  }

  export type CacheCountAggregateInputType = {
    key?: true
    value?: true
    expiration?: true
    _all?: true
  }

  export type CacheAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cache to aggregate.
     */
    where?: cacheWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of caches to fetch.
     */
    orderBy?: cacheOrderByWithRelationInput | cacheOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cacheWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` caches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` caches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned caches
    **/
    _count?: true | CacheCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CacheAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CacheSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CacheMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CacheMaxAggregateInputType
  }

  export type GetCacheAggregateType<T extends CacheAggregateArgs> = {
        [P in keyof T & keyof AggregateCache]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCache[P]>
      : GetScalarType<T[P], AggregateCache[P]>
  }




  export type cacheGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cacheWhereInput
    orderBy?: cacheOrderByWithAggregationInput | cacheOrderByWithAggregationInput[]
    by: CacheScalarFieldEnum[] | CacheScalarFieldEnum
    having?: cacheScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CacheCountAggregateInputType | true
    _avg?: CacheAvgAggregateInputType
    _sum?: CacheSumAggregateInputType
    _min?: CacheMinAggregateInputType
    _max?: CacheMaxAggregateInputType
  }

  export type CacheGroupByOutputType = {
    key: string
    value: string
    expiration: number
    _count: CacheCountAggregateOutputType | null
    _avg: CacheAvgAggregateOutputType | null
    _sum: CacheSumAggregateOutputType | null
    _min: CacheMinAggregateOutputType | null
    _max: CacheMaxAggregateOutputType | null
  }

  type GetCacheGroupByPayload<T extends cacheGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CacheGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CacheGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CacheGroupByOutputType[P]>
            : GetScalarType<T[P], CacheGroupByOutputType[P]>
        }
      >
    >


  export type cacheSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    key?: boolean
    value?: boolean
    expiration?: boolean
  }, ExtArgs["result"]["cache"]>



  export type cacheSelectScalar = {
    key?: boolean
    value?: boolean
    expiration?: boolean
  }

  export type cacheOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"key" | "value" | "expiration", ExtArgs["result"]["cache"]>

  export type $cachePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cache"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      key: string
      value: string
      expiration: number
    }, ExtArgs["result"]["cache"]>
    composites: {}
  }

  type cacheGetPayload<S extends boolean | null | undefined | cacheDefaultArgs> = $Result.GetResult<Prisma.$cachePayload, S>

  type cacheCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<cacheFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CacheCountAggregateInputType | true
    }

  export interface cacheDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cache'], meta: { name: 'cache' } }
    /**
     * Find zero or one Cache that matches the filter.
     * @param {cacheFindUniqueArgs} args - Arguments to find a Cache
     * @example
     * // Get one Cache
     * const cache = await prisma.cache.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends cacheFindUniqueArgs>(args: SelectSubset<T, cacheFindUniqueArgs<ExtArgs>>): Prisma__cacheClient<$Result.GetResult<Prisma.$cachePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cache that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {cacheFindUniqueOrThrowArgs} args - Arguments to find a Cache
     * @example
     * // Get one Cache
     * const cache = await prisma.cache.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends cacheFindUniqueOrThrowArgs>(args: SelectSubset<T, cacheFindUniqueOrThrowArgs<ExtArgs>>): Prisma__cacheClient<$Result.GetResult<Prisma.$cachePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cache that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cacheFindFirstArgs} args - Arguments to find a Cache
     * @example
     * // Get one Cache
     * const cache = await prisma.cache.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends cacheFindFirstArgs>(args?: SelectSubset<T, cacheFindFirstArgs<ExtArgs>>): Prisma__cacheClient<$Result.GetResult<Prisma.$cachePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cache that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cacheFindFirstOrThrowArgs} args - Arguments to find a Cache
     * @example
     * // Get one Cache
     * const cache = await prisma.cache.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends cacheFindFirstOrThrowArgs>(args?: SelectSubset<T, cacheFindFirstOrThrowArgs<ExtArgs>>): Prisma__cacheClient<$Result.GetResult<Prisma.$cachePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Caches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cacheFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Caches
     * const caches = await prisma.cache.findMany()
     * 
     * // Get first 10 Caches
     * const caches = await prisma.cache.findMany({ take: 10 })
     * 
     * // Only select the `key`
     * const cacheWithKeyOnly = await prisma.cache.findMany({ select: { key: true } })
     * 
     */
    findMany<T extends cacheFindManyArgs>(args?: SelectSubset<T, cacheFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cachePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cache.
     * @param {cacheCreateArgs} args - Arguments to create a Cache.
     * @example
     * // Create one Cache
     * const Cache = await prisma.cache.create({
     *   data: {
     *     // ... data to create a Cache
     *   }
     * })
     * 
     */
    create<T extends cacheCreateArgs>(args: SelectSubset<T, cacheCreateArgs<ExtArgs>>): Prisma__cacheClient<$Result.GetResult<Prisma.$cachePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Caches.
     * @param {cacheCreateManyArgs} args - Arguments to create many Caches.
     * @example
     * // Create many Caches
     * const cache = await prisma.cache.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends cacheCreateManyArgs>(args?: SelectSubset<T, cacheCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cache.
     * @param {cacheDeleteArgs} args - Arguments to delete one Cache.
     * @example
     * // Delete one Cache
     * const Cache = await prisma.cache.delete({
     *   where: {
     *     // ... filter to delete one Cache
     *   }
     * })
     * 
     */
    delete<T extends cacheDeleteArgs>(args: SelectSubset<T, cacheDeleteArgs<ExtArgs>>): Prisma__cacheClient<$Result.GetResult<Prisma.$cachePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cache.
     * @param {cacheUpdateArgs} args - Arguments to update one Cache.
     * @example
     * // Update one Cache
     * const cache = await prisma.cache.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends cacheUpdateArgs>(args: SelectSubset<T, cacheUpdateArgs<ExtArgs>>): Prisma__cacheClient<$Result.GetResult<Prisma.$cachePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Caches.
     * @param {cacheDeleteManyArgs} args - Arguments to filter Caches to delete.
     * @example
     * // Delete a few Caches
     * const { count } = await prisma.cache.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends cacheDeleteManyArgs>(args?: SelectSubset<T, cacheDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Caches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cacheUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Caches
     * const cache = await prisma.cache.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends cacheUpdateManyArgs>(args: SelectSubset<T, cacheUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cache.
     * @param {cacheUpsertArgs} args - Arguments to update or create a Cache.
     * @example
     * // Update or create a Cache
     * const cache = await prisma.cache.upsert({
     *   create: {
     *     // ... data to create a Cache
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cache we want to update
     *   }
     * })
     */
    upsert<T extends cacheUpsertArgs>(args: SelectSubset<T, cacheUpsertArgs<ExtArgs>>): Prisma__cacheClient<$Result.GetResult<Prisma.$cachePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Caches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cacheCountArgs} args - Arguments to filter Caches to count.
     * @example
     * // Count the number of Caches
     * const count = await prisma.cache.count({
     *   where: {
     *     // ... the filter for the Caches we want to count
     *   }
     * })
    **/
    count<T extends cacheCountArgs>(
      args?: Subset<T, cacheCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CacheCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cache.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CacheAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CacheAggregateArgs>(args: Subset<T, CacheAggregateArgs>): Prisma.PrismaPromise<GetCacheAggregateType<T>>

    /**
     * Group by Cache.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cacheGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends cacheGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cacheGroupByArgs['orderBy'] }
        : { orderBy?: cacheGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, cacheGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCacheGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cache model
   */
  readonly fields: cacheFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cache.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cacheClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the cache model
   */
  interface cacheFieldRefs {
    readonly key: FieldRef<"cache", 'String'>
    readonly value: FieldRef<"cache", 'String'>
    readonly expiration: FieldRef<"cache", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * cache findUnique
   */
  export type cacheFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cache
     */
    select?: cacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cache
     */
    omit?: cacheOmit<ExtArgs> | null
    /**
     * Filter, which cache to fetch.
     */
    where: cacheWhereUniqueInput
  }

  /**
   * cache findUniqueOrThrow
   */
  export type cacheFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cache
     */
    select?: cacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cache
     */
    omit?: cacheOmit<ExtArgs> | null
    /**
     * Filter, which cache to fetch.
     */
    where: cacheWhereUniqueInput
  }

  /**
   * cache findFirst
   */
  export type cacheFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cache
     */
    select?: cacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cache
     */
    omit?: cacheOmit<ExtArgs> | null
    /**
     * Filter, which cache to fetch.
     */
    where?: cacheWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of caches to fetch.
     */
    orderBy?: cacheOrderByWithRelationInput | cacheOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for caches.
     */
    cursor?: cacheWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` caches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` caches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of caches.
     */
    distinct?: CacheScalarFieldEnum | CacheScalarFieldEnum[]
  }

  /**
   * cache findFirstOrThrow
   */
  export type cacheFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cache
     */
    select?: cacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cache
     */
    omit?: cacheOmit<ExtArgs> | null
    /**
     * Filter, which cache to fetch.
     */
    where?: cacheWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of caches to fetch.
     */
    orderBy?: cacheOrderByWithRelationInput | cacheOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for caches.
     */
    cursor?: cacheWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` caches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` caches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of caches.
     */
    distinct?: CacheScalarFieldEnum | CacheScalarFieldEnum[]
  }

  /**
   * cache findMany
   */
  export type cacheFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cache
     */
    select?: cacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cache
     */
    omit?: cacheOmit<ExtArgs> | null
    /**
     * Filter, which caches to fetch.
     */
    where?: cacheWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of caches to fetch.
     */
    orderBy?: cacheOrderByWithRelationInput | cacheOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing caches.
     */
    cursor?: cacheWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` caches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` caches.
     */
    skip?: number
    distinct?: CacheScalarFieldEnum | CacheScalarFieldEnum[]
  }

  /**
   * cache create
   */
  export type cacheCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cache
     */
    select?: cacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cache
     */
    omit?: cacheOmit<ExtArgs> | null
    /**
     * The data needed to create a cache.
     */
    data: XOR<cacheCreateInput, cacheUncheckedCreateInput>
  }

  /**
   * cache createMany
   */
  export type cacheCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many caches.
     */
    data: cacheCreateManyInput | cacheCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cache update
   */
  export type cacheUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cache
     */
    select?: cacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cache
     */
    omit?: cacheOmit<ExtArgs> | null
    /**
     * The data needed to update a cache.
     */
    data: XOR<cacheUpdateInput, cacheUncheckedUpdateInput>
    /**
     * Choose, which cache to update.
     */
    where: cacheWhereUniqueInput
  }

  /**
   * cache updateMany
   */
  export type cacheUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update caches.
     */
    data: XOR<cacheUpdateManyMutationInput, cacheUncheckedUpdateManyInput>
    /**
     * Filter which caches to update
     */
    where?: cacheWhereInput
    /**
     * Limit how many caches to update.
     */
    limit?: number
  }

  /**
   * cache upsert
   */
  export type cacheUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cache
     */
    select?: cacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cache
     */
    omit?: cacheOmit<ExtArgs> | null
    /**
     * The filter to search for the cache to update in case it exists.
     */
    where: cacheWhereUniqueInput
    /**
     * In case the cache found by the `where` argument doesn't exist, create a new cache with this data.
     */
    create: XOR<cacheCreateInput, cacheUncheckedCreateInput>
    /**
     * In case the cache was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cacheUpdateInput, cacheUncheckedUpdateInput>
  }

  /**
   * cache delete
   */
  export type cacheDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cache
     */
    select?: cacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cache
     */
    omit?: cacheOmit<ExtArgs> | null
    /**
     * Filter which cache to delete.
     */
    where: cacheWhereUniqueInput
  }

  /**
   * cache deleteMany
   */
  export type cacheDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which caches to delete
     */
    where?: cacheWhereInput
    /**
     * Limit how many caches to delete.
     */
    limit?: number
  }

  /**
   * cache without action
   */
  export type cacheDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cache
     */
    select?: cacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cache
     */
    omit?: cacheOmit<ExtArgs> | null
  }


  /**
   * Model cache_locks
   */

  export type AggregateCache_locks = {
    _count: Cache_locksCountAggregateOutputType | null
    _avg: Cache_locksAvgAggregateOutputType | null
    _sum: Cache_locksSumAggregateOutputType | null
    _min: Cache_locksMinAggregateOutputType | null
    _max: Cache_locksMaxAggregateOutputType | null
  }

  export type Cache_locksAvgAggregateOutputType = {
    expiration: number | null
  }

  export type Cache_locksSumAggregateOutputType = {
    expiration: number | null
  }

  export type Cache_locksMinAggregateOutputType = {
    key: string | null
    owner: string | null
    expiration: number | null
  }

  export type Cache_locksMaxAggregateOutputType = {
    key: string | null
    owner: string | null
    expiration: number | null
  }

  export type Cache_locksCountAggregateOutputType = {
    key: number
    owner: number
    expiration: number
    _all: number
  }


  export type Cache_locksAvgAggregateInputType = {
    expiration?: true
  }

  export type Cache_locksSumAggregateInputType = {
    expiration?: true
  }

  export type Cache_locksMinAggregateInputType = {
    key?: true
    owner?: true
    expiration?: true
  }

  export type Cache_locksMaxAggregateInputType = {
    key?: true
    owner?: true
    expiration?: true
  }

  export type Cache_locksCountAggregateInputType = {
    key?: true
    owner?: true
    expiration?: true
    _all?: true
  }

  export type Cache_locksAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cache_locks to aggregate.
     */
    where?: cache_locksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cache_locks to fetch.
     */
    orderBy?: cache_locksOrderByWithRelationInput | cache_locksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cache_locksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cache_locks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cache_locks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cache_locks
    **/
    _count?: true | Cache_locksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Cache_locksAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Cache_locksSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Cache_locksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Cache_locksMaxAggregateInputType
  }

  export type GetCache_locksAggregateType<T extends Cache_locksAggregateArgs> = {
        [P in keyof T & keyof AggregateCache_locks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCache_locks[P]>
      : GetScalarType<T[P], AggregateCache_locks[P]>
  }




  export type cache_locksGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cache_locksWhereInput
    orderBy?: cache_locksOrderByWithAggregationInput | cache_locksOrderByWithAggregationInput[]
    by: Cache_locksScalarFieldEnum[] | Cache_locksScalarFieldEnum
    having?: cache_locksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Cache_locksCountAggregateInputType | true
    _avg?: Cache_locksAvgAggregateInputType
    _sum?: Cache_locksSumAggregateInputType
    _min?: Cache_locksMinAggregateInputType
    _max?: Cache_locksMaxAggregateInputType
  }

  export type Cache_locksGroupByOutputType = {
    key: string
    owner: string
    expiration: number
    _count: Cache_locksCountAggregateOutputType | null
    _avg: Cache_locksAvgAggregateOutputType | null
    _sum: Cache_locksSumAggregateOutputType | null
    _min: Cache_locksMinAggregateOutputType | null
    _max: Cache_locksMaxAggregateOutputType | null
  }

  type GetCache_locksGroupByPayload<T extends cache_locksGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Cache_locksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Cache_locksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Cache_locksGroupByOutputType[P]>
            : GetScalarType<T[P], Cache_locksGroupByOutputType[P]>
        }
      >
    >


  export type cache_locksSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    key?: boolean
    owner?: boolean
    expiration?: boolean
  }, ExtArgs["result"]["cache_locks"]>



  export type cache_locksSelectScalar = {
    key?: boolean
    owner?: boolean
    expiration?: boolean
  }

  export type cache_locksOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"key" | "owner" | "expiration", ExtArgs["result"]["cache_locks"]>

  export type $cache_locksPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cache_locks"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      key: string
      owner: string
      expiration: number
    }, ExtArgs["result"]["cache_locks"]>
    composites: {}
  }

  type cache_locksGetPayload<S extends boolean | null | undefined | cache_locksDefaultArgs> = $Result.GetResult<Prisma.$cache_locksPayload, S>

  type cache_locksCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<cache_locksFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Cache_locksCountAggregateInputType | true
    }

  export interface cache_locksDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cache_locks'], meta: { name: 'cache_locks' } }
    /**
     * Find zero or one Cache_locks that matches the filter.
     * @param {cache_locksFindUniqueArgs} args - Arguments to find a Cache_locks
     * @example
     * // Get one Cache_locks
     * const cache_locks = await prisma.cache_locks.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends cache_locksFindUniqueArgs>(args: SelectSubset<T, cache_locksFindUniqueArgs<ExtArgs>>): Prisma__cache_locksClient<$Result.GetResult<Prisma.$cache_locksPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cache_locks that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {cache_locksFindUniqueOrThrowArgs} args - Arguments to find a Cache_locks
     * @example
     * // Get one Cache_locks
     * const cache_locks = await prisma.cache_locks.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends cache_locksFindUniqueOrThrowArgs>(args: SelectSubset<T, cache_locksFindUniqueOrThrowArgs<ExtArgs>>): Prisma__cache_locksClient<$Result.GetResult<Prisma.$cache_locksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cache_locks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cache_locksFindFirstArgs} args - Arguments to find a Cache_locks
     * @example
     * // Get one Cache_locks
     * const cache_locks = await prisma.cache_locks.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends cache_locksFindFirstArgs>(args?: SelectSubset<T, cache_locksFindFirstArgs<ExtArgs>>): Prisma__cache_locksClient<$Result.GetResult<Prisma.$cache_locksPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cache_locks that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cache_locksFindFirstOrThrowArgs} args - Arguments to find a Cache_locks
     * @example
     * // Get one Cache_locks
     * const cache_locks = await prisma.cache_locks.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends cache_locksFindFirstOrThrowArgs>(args?: SelectSubset<T, cache_locksFindFirstOrThrowArgs<ExtArgs>>): Prisma__cache_locksClient<$Result.GetResult<Prisma.$cache_locksPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cache_locks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cache_locksFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cache_locks
     * const cache_locks = await prisma.cache_locks.findMany()
     * 
     * // Get first 10 Cache_locks
     * const cache_locks = await prisma.cache_locks.findMany({ take: 10 })
     * 
     * // Only select the `key`
     * const cache_locksWithKeyOnly = await prisma.cache_locks.findMany({ select: { key: true } })
     * 
     */
    findMany<T extends cache_locksFindManyArgs>(args?: SelectSubset<T, cache_locksFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cache_locksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cache_locks.
     * @param {cache_locksCreateArgs} args - Arguments to create a Cache_locks.
     * @example
     * // Create one Cache_locks
     * const Cache_locks = await prisma.cache_locks.create({
     *   data: {
     *     // ... data to create a Cache_locks
     *   }
     * })
     * 
     */
    create<T extends cache_locksCreateArgs>(args: SelectSubset<T, cache_locksCreateArgs<ExtArgs>>): Prisma__cache_locksClient<$Result.GetResult<Prisma.$cache_locksPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cache_locks.
     * @param {cache_locksCreateManyArgs} args - Arguments to create many Cache_locks.
     * @example
     * // Create many Cache_locks
     * const cache_locks = await prisma.cache_locks.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends cache_locksCreateManyArgs>(args?: SelectSubset<T, cache_locksCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cache_locks.
     * @param {cache_locksDeleteArgs} args - Arguments to delete one Cache_locks.
     * @example
     * // Delete one Cache_locks
     * const Cache_locks = await prisma.cache_locks.delete({
     *   where: {
     *     // ... filter to delete one Cache_locks
     *   }
     * })
     * 
     */
    delete<T extends cache_locksDeleteArgs>(args: SelectSubset<T, cache_locksDeleteArgs<ExtArgs>>): Prisma__cache_locksClient<$Result.GetResult<Prisma.$cache_locksPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cache_locks.
     * @param {cache_locksUpdateArgs} args - Arguments to update one Cache_locks.
     * @example
     * // Update one Cache_locks
     * const cache_locks = await prisma.cache_locks.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends cache_locksUpdateArgs>(args: SelectSubset<T, cache_locksUpdateArgs<ExtArgs>>): Prisma__cache_locksClient<$Result.GetResult<Prisma.$cache_locksPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cache_locks.
     * @param {cache_locksDeleteManyArgs} args - Arguments to filter Cache_locks to delete.
     * @example
     * // Delete a few Cache_locks
     * const { count } = await prisma.cache_locks.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends cache_locksDeleteManyArgs>(args?: SelectSubset<T, cache_locksDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cache_locks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cache_locksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cache_locks
     * const cache_locks = await prisma.cache_locks.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends cache_locksUpdateManyArgs>(args: SelectSubset<T, cache_locksUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cache_locks.
     * @param {cache_locksUpsertArgs} args - Arguments to update or create a Cache_locks.
     * @example
     * // Update or create a Cache_locks
     * const cache_locks = await prisma.cache_locks.upsert({
     *   create: {
     *     // ... data to create a Cache_locks
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cache_locks we want to update
     *   }
     * })
     */
    upsert<T extends cache_locksUpsertArgs>(args: SelectSubset<T, cache_locksUpsertArgs<ExtArgs>>): Prisma__cache_locksClient<$Result.GetResult<Prisma.$cache_locksPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cache_locks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cache_locksCountArgs} args - Arguments to filter Cache_locks to count.
     * @example
     * // Count the number of Cache_locks
     * const count = await prisma.cache_locks.count({
     *   where: {
     *     // ... the filter for the Cache_locks we want to count
     *   }
     * })
    **/
    count<T extends cache_locksCountArgs>(
      args?: Subset<T, cache_locksCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Cache_locksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cache_locks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Cache_locksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Cache_locksAggregateArgs>(args: Subset<T, Cache_locksAggregateArgs>): Prisma.PrismaPromise<GetCache_locksAggregateType<T>>

    /**
     * Group by Cache_locks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cache_locksGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends cache_locksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cache_locksGroupByArgs['orderBy'] }
        : { orderBy?: cache_locksGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, cache_locksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCache_locksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cache_locks model
   */
  readonly fields: cache_locksFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cache_locks.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cache_locksClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the cache_locks model
   */
  interface cache_locksFieldRefs {
    readonly key: FieldRef<"cache_locks", 'String'>
    readonly owner: FieldRef<"cache_locks", 'String'>
    readonly expiration: FieldRef<"cache_locks", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * cache_locks findUnique
   */
  export type cache_locksFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cache_locks
     */
    select?: cache_locksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cache_locks
     */
    omit?: cache_locksOmit<ExtArgs> | null
    /**
     * Filter, which cache_locks to fetch.
     */
    where: cache_locksWhereUniqueInput
  }

  /**
   * cache_locks findUniqueOrThrow
   */
  export type cache_locksFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cache_locks
     */
    select?: cache_locksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cache_locks
     */
    omit?: cache_locksOmit<ExtArgs> | null
    /**
     * Filter, which cache_locks to fetch.
     */
    where: cache_locksWhereUniqueInput
  }

  /**
   * cache_locks findFirst
   */
  export type cache_locksFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cache_locks
     */
    select?: cache_locksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cache_locks
     */
    omit?: cache_locksOmit<ExtArgs> | null
    /**
     * Filter, which cache_locks to fetch.
     */
    where?: cache_locksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cache_locks to fetch.
     */
    orderBy?: cache_locksOrderByWithRelationInput | cache_locksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cache_locks.
     */
    cursor?: cache_locksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cache_locks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cache_locks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cache_locks.
     */
    distinct?: Cache_locksScalarFieldEnum | Cache_locksScalarFieldEnum[]
  }

  /**
   * cache_locks findFirstOrThrow
   */
  export type cache_locksFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cache_locks
     */
    select?: cache_locksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cache_locks
     */
    omit?: cache_locksOmit<ExtArgs> | null
    /**
     * Filter, which cache_locks to fetch.
     */
    where?: cache_locksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cache_locks to fetch.
     */
    orderBy?: cache_locksOrderByWithRelationInput | cache_locksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cache_locks.
     */
    cursor?: cache_locksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cache_locks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cache_locks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cache_locks.
     */
    distinct?: Cache_locksScalarFieldEnum | Cache_locksScalarFieldEnum[]
  }

  /**
   * cache_locks findMany
   */
  export type cache_locksFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cache_locks
     */
    select?: cache_locksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cache_locks
     */
    omit?: cache_locksOmit<ExtArgs> | null
    /**
     * Filter, which cache_locks to fetch.
     */
    where?: cache_locksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cache_locks to fetch.
     */
    orderBy?: cache_locksOrderByWithRelationInput | cache_locksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cache_locks.
     */
    cursor?: cache_locksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cache_locks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cache_locks.
     */
    skip?: number
    distinct?: Cache_locksScalarFieldEnum | Cache_locksScalarFieldEnum[]
  }

  /**
   * cache_locks create
   */
  export type cache_locksCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cache_locks
     */
    select?: cache_locksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cache_locks
     */
    omit?: cache_locksOmit<ExtArgs> | null
    /**
     * The data needed to create a cache_locks.
     */
    data: XOR<cache_locksCreateInput, cache_locksUncheckedCreateInput>
  }

  /**
   * cache_locks createMany
   */
  export type cache_locksCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cache_locks.
     */
    data: cache_locksCreateManyInput | cache_locksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cache_locks update
   */
  export type cache_locksUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cache_locks
     */
    select?: cache_locksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cache_locks
     */
    omit?: cache_locksOmit<ExtArgs> | null
    /**
     * The data needed to update a cache_locks.
     */
    data: XOR<cache_locksUpdateInput, cache_locksUncheckedUpdateInput>
    /**
     * Choose, which cache_locks to update.
     */
    where: cache_locksWhereUniqueInput
  }

  /**
   * cache_locks updateMany
   */
  export type cache_locksUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cache_locks.
     */
    data: XOR<cache_locksUpdateManyMutationInput, cache_locksUncheckedUpdateManyInput>
    /**
     * Filter which cache_locks to update
     */
    where?: cache_locksWhereInput
    /**
     * Limit how many cache_locks to update.
     */
    limit?: number
  }

  /**
   * cache_locks upsert
   */
  export type cache_locksUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cache_locks
     */
    select?: cache_locksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cache_locks
     */
    omit?: cache_locksOmit<ExtArgs> | null
    /**
     * The filter to search for the cache_locks to update in case it exists.
     */
    where: cache_locksWhereUniqueInput
    /**
     * In case the cache_locks found by the `where` argument doesn't exist, create a new cache_locks with this data.
     */
    create: XOR<cache_locksCreateInput, cache_locksUncheckedCreateInput>
    /**
     * In case the cache_locks was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cache_locksUpdateInput, cache_locksUncheckedUpdateInput>
  }

  /**
   * cache_locks delete
   */
  export type cache_locksDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cache_locks
     */
    select?: cache_locksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cache_locks
     */
    omit?: cache_locksOmit<ExtArgs> | null
    /**
     * Filter which cache_locks to delete.
     */
    where: cache_locksWhereUniqueInput
  }

  /**
   * cache_locks deleteMany
   */
  export type cache_locksDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cache_locks to delete
     */
    where?: cache_locksWhereInput
    /**
     * Limit how many cache_locks to delete.
     */
    limit?: number
  }

  /**
   * cache_locks without action
   */
  export type cache_locksDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cache_locks
     */
    select?: cache_locksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cache_locks
     */
    omit?: cache_locksOmit<ExtArgs> | null
  }


  /**
   * Model companies
   */

  export type AggregateCompanies = {
    _count: CompaniesCountAggregateOutputType | null
    _min: CompaniesMinAggregateOutputType | null
    _max: CompaniesMaxAggregateOutputType | null
  }

  export type CompaniesMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    website: string | null
    logo: string | null
    location: string | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type CompaniesMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    website: string | null
    logo: string | null
    location: string | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type CompaniesCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    website: number
    logo: number
    location: number
    description: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type CompaniesMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    website?: true
    logo?: true
    location?: true
    description?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type CompaniesMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    website?: true
    logo?: true
    location?: true
    description?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type CompaniesCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    website?: true
    logo?: true
    location?: true
    description?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type CompaniesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which companies to aggregate.
     */
    where?: companiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of companies to fetch.
     */
    orderBy?: companiesOrderByWithRelationInput | companiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: companiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned companies
    **/
    _count?: true | CompaniesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompaniesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompaniesMaxAggregateInputType
  }

  export type GetCompaniesAggregateType<T extends CompaniesAggregateArgs> = {
        [P in keyof T & keyof AggregateCompanies]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompanies[P]>
      : GetScalarType<T[P], AggregateCompanies[P]>
  }




  export type companiesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: companiesWhereInput
    orderBy?: companiesOrderByWithAggregationInput | companiesOrderByWithAggregationInput[]
    by: CompaniesScalarFieldEnum[] | CompaniesScalarFieldEnum
    having?: companiesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompaniesCountAggregateInputType | true
    _min?: CompaniesMinAggregateInputType
    _max?: CompaniesMaxAggregateInputType
  }

  export type CompaniesGroupByOutputType = {
    id: string
    name: string
    email: string
    phone: string
    website: string | null
    logo: string | null
    location: string
    description: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    _count: CompaniesCountAggregateOutputType | null
    _min: CompaniesMinAggregateOutputType | null
    _max: CompaniesMaxAggregateOutputType | null
  }

  type GetCompaniesGroupByPayload<T extends companiesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompaniesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompaniesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompaniesGroupByOutputType[P]>
            : GetScalarType<T[P], CompaniesGroupByOutputType[P]>
        }
      >
    >


  export type companiesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    website?: boolean
    logo?: boolean
    location?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    job_posts?: boolean | companies$job_postsArgs<ExtArgs>
    _count?: boolean | CompaniesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["companies"]>



  export type companiesSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    website?: boolean
    logo?: boolean
    location?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type companiesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone" | "website" | "logo" | "location" | "description" | "created_at" | "updated_at" | "deleted_at", ExtArgs["result"]["companies"]>
  export type companiesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job_posts?: boolean | companies$job_postsArgs<ExtArgs>
    _count?: boolean | CompaniesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $companiesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "companies"
    objects: {
      job_posts: Prisma.$job_postsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      phone: string
      website: string | null
      logo: string | null
      location: string
      description: string | null
      created_at: Date | null
      updated_at: Date | null
      deleted_at: Date | null
    }, ExtArgs["result"]["companies"]>
    composites: {}
  }

  type companiesGetPayload<S extends boolean | null | undefined | companiesDefaultArgs> = $Result.GetResult<Prisma.$companiesPayload, S>

  type companiesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<companiesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompaniesCountAggregateInputType | true
    }

  export interface companiesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['companies'], meta: { name: 'companies' } }
    /**
     * Find zero or one Companies that matches the filter.
     * @param {companiesFindUniqueArgs} args - Arguments to find a Companies
     * @example
     * // Get one Companies
     * const companies = await prisma.companies.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends companiesFindUniqueArgs>(args: SelectSubset<T, companiesFindUniqueArgs<ExtArgs>>): Prisma__companiesClient<$Result.GetResult<Prisma.$companiesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Companies that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {companiesFindUniqueOrThrowArgs} args - Arguments to find a Companies
     * @example
     * // Get one Companies
     * const companies = await prisma.companies.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends companiesFindUniqueOrThrowArgs>(args: SelectSubset<T, companiesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__companiesClient<$Result.GetResult<Prisma.$companiesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companiesFindFirstArgs} args - Arguments to find a Companies
     * @example
     * // Get one Companies
     * const companies = await prisma.companies.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends companiesFindFirstArgs>(args?: SelectSubset<T, companiesFindFirstArgs<ExtArgs>>): Prisma__companiesClient<$Result.GetResult<Prisma.$companiesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Companies that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companiesFindFirstOrThrowArgs} args - Arguments to find a Companies
     * @example
     * // Get one Companies
     * const companies = await prisma.companies.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends companiesFindFirstOrThrowArgs>(args?: SelectSubset<T, companiesFindFirstOrThrowArgs<ExtArgs>>): Prisma__companiesClient<$Result.GetResult<Prisma.$companiesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companiesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.companies.findMany()
     * 
     * // Get first 10 Companies
     * const companies = await prisma.companies.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companiesWithIdOnly = await prisma.companies.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends companiesFindManyArgs>(args?: SelectSubset<T, companiesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companiesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Companies.
     * @param {companiesCreateArgs} args - Arguments to create a Companies.
     * @example
     * // Create one Companies
     * const Companies = await prisma.companies.create({
     *   data: {
     *     // ... data to create a Companies
     *   }
     * })
     * 
     */
    create<T extends companiesCreateArgs>(args: SelectSubset<T, companiesCreateArgs<ExtArgs>>): Prisma__companiesClient<$Result.GetResult<Prisma.$companiesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Companies.
     * @param {companiesCreateManyArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const companies = await prisma.companies.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends companiesCreateManyArgs>(args?: SelectSubset<T, companiesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Companies.
     * @param {companiesDeleteArgs} args - Arguments to delete one Companies.
     * @example
     * // Delete one Companies
     * const Companies = await prisma.companies.delete({
     *   where: {
     *     // ... filter to delete one Companies
     *   }
     * })
     * 
     */
    delete<T extends companiesDeleteArgs>(args: SelectSubset<T, companiesDeleteArgs<ExtArgs>>): Prisma__companiesClient<$Result.GetResult<Prisma.$companiesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Companies.
     * @param {companiesUpdateArgs} args - Arguments to update one Companies.
     * @example
     * // Update one Companies
     * const companies = await prisma.companies.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends companiesUpdateArgs>(args: SelectSubset<T, companiesUpdateArgs<ExtArgs>>): Prisma__companiesClient<$Result.GetResult<Prisma.$companiesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Companies.
     * @param {companiesDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.companies.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends companiesDeleteManyArgs>(args?: SelectSubset<T, companiesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companiesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const companies = await prisma.companies.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends companiesUpdateManyArgs>(args: SelectSubset<T, companiesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Companies.
     * @param {companiesUpsertArgs} args - Arguments to update or create a Companies.
     * @example
     * // Update or create a Companies
     * const companies = await prisma.companies.upsert({
     *   create: {
     *     // ... data to create a Companies
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Companies we want to update
     *   }
     * })
     */
    upsert<T extends companiesUpsertArgs>(args: SelectSubset<T, companiesUpsertArgs<ExtArgs>>): Prisma__companiesClient<$Result.GetResult<Prisma.$companiesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companiesCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.companies.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
    **/
    count<T extends companiesCountArgs>(
      args?: Subset<T, companiesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompaniesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompaniesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompaniesAggregateArgs>(args: Subset<T, CompaniesAggregateArgs>): Prisma.PrismaPromise<GetCompaniesAggregateType<T>>

    /**
     * Group by Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companiesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends companiesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: companiesGroupByArgs['orderBy'] }
        : { orderBy?: companiesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, companiesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompaniesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the companies model
   */
  readonly fields: companiesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for companies.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__companiesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    job_posts<T extends companies$job_postsArgs<ExtArgs> = {}>(args?: Subset<T, companies$job_postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$job_postsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the companies model
   */
  interface companiesFieldRefs {
    readonly id: FieldRef<"companies", 'String'>
    readonly name: FieldRef<"companies", 'String'>
    readonly email: FieldRef<"companies", 'String'>
    readonly phone: FieldRef<"companies", 'String'>
    readonly website: FieldRef<"companies", 'String'>
    readonly logo: FieldRef<"companies", 'String'>
    readonly location: FieldRef<"companies", 'String'>
    readonly description: FieldRef<"companies", 'String'>
    readonly created_at: FieldRef<"companies", 'DateTime'>
    readonly updated_at: FieldRef<"companies", 'DateTime'>
    readonly deleted_at: FieldRef<"companies", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * companies findUnique
   */
  export type companiesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companies
     */
    select?: companiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the companies
     */
    omit?: companiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companiesInclude<ExtArgs> | null
    /**
     * Filter, which companies to fetch.
     */
    where: companiesWhereUniqueInput
  }

  /**
   * companies findUniqueOrThrow
   */
  export type companiesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companies
     */
    select?: companiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the companies
     */
    omit?: companiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companiesInclude<ExtArgs> | null
    /**
     * Filter, which companies to fetch.
     */
    where: companiesWhereUniqueInput
  }

  /**
   * companies findFirst
   */
  export type companiesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companies
     */
    select?: companiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the companies
     */
    omit?: companiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companiesInclude<ExtArgs> | null
    /**
     * Filter, which companies to fetch.
     */
    where?: companiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of companies to fetch.
     */
    orderBy?: companiesOrderByWithRelationInput | companiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for companies.
     */
    cursor?: companiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of companies.
     */
    distinct?: CompaniesScalarFieldEnum | CompaniesScalarFieldEnum[]
  }

  /**
   * companies findFirstOrThrow
   */
  export type companiesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companies
     */
    select?: companiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the companies
     */
    omit?: companiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companiesInclude<ExtArgs> | null
    /**
     * Filter, which companies to fetch.
     */
    where?: companiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of companies to fetch.
     */
    orderBy?: companiesOrderByWithRelationInput | companiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for companies.
     */
    cursor?: companiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of companies.
     */
    distinct?: CompaniesScalarFieldEnum | CompaniesScalarFieldEnum[]
  }

  /**
   * companies findMany
   */
  export type companiesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companies
     */
    select?: companiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the companies
     */
    omit?: companiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companiesInclude<ExtArgs> | null
    /**
     * Filter, which companies to fetch.
     */
    where?: companiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of companies to fetch.
     */
    orderBy?: companiesOrderByWithRelationInput | companiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing companies.
     */
    cursor?: companiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` companies.
     */
    skip?: number
    distinct?: CompaniesScalarFieldEnum | CompaniesScalarFieldEnum[]
  }

  /**
   * companies create
   */
  export type companiesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companies
     */
    select?: companiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the companies
     */
    omit?: companiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companiesInclude<ExtArgs> | null
    /**
     * The data needed to create a companies.
     */
    data: XOR<companiesCreateInput, companiesUncheckedCreateInput>
  }

  /**
   * companies createMany
   */
  export type companiesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many companies.
     */
    data: companiesCreateManyInput | companiesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * companies update
   */
  export type companiesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companies
     */
    select?: companiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the companies
     */
    omit?: companiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companiesInclude<ExtArgs> | null
    /**
     * The data needed to update a companies.
     */
    data: XOR<companiesUpdateInput, companiesUncheckedUpdateInput>
    /**
     * Choose, which companies to update.
     */
    where: companiesWhereUniqueInput
  }

  /**
   * companies updateMany
   */
  export type companiesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update companies.
     */
    data: XOR<companiesUpdateManyMutationInput, companiesUncheckedUpdateManyInput>
    /**
     * Filter which companies to update
     */
    where?: companiesWhereInput
    /**
     * Limit how many companies to update.
     */
    limit?: number
  }

  /**
   * companies upsert
   */
  export type companiesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companies
     */
    select?: companiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the companies
     */
    omit?: companiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companiesInclude<ExtArgs> | null
    /**
     * The filter to search for the companies to update in case it exists.
     */
    where: companiesWhereUniqueInput
    /**
     * In case the companies found by the `where` argument doesn't exist, create a new companies with this data.
     */
    create: XOR<companiesCreateInput, companiesUncheckedCreateInput>
    /**
     * In case the companies was found with the provided `where` argument, update it with this data.
     */
    update: XOR<companiesUpdateInput, companiesUncheckedUpdateInput>
  }

  /**
   * companies delete
   */
  export type companiesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companies
     */
    select?: companiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the companies
     */
    omit?: companiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companiesInclude<ExtArgs> | null
    /**
     * Filter which companies to delete.
     */
    where: companiesWhereUniqueInput
  }

  /**
   * companies deleteMany
   */
  export type companiesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which companies to delete
     */
    where?: companiesWhereInput
    /**
     * Limit how many companies to delete.
     */
    limit?: number
  }

  /**
   * companies.job_posts
   */
  export type companies$job_postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_posts
     */
    select?: job_postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the job_posts
     */
    omit?: job_postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: job_postsInclude<ExtArgs> | null
    where?: job_postsWhereInput
    orderBy?: job_postsOrderByWithRelationInput | job_postsOrderByWithRelationInput[]
    cursor?: job_postsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Job_postsScalarFieldEnum | Job_postsScalarFieldEnum[]
  }

  /**
   * companies without action
   */
  export type companiesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companies
     */
    select?: companiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the companies
     */
    omit?: companiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companiesInclude<ExtArgs> | null
  }


  /**
   * Model failed_jobs
   */

  export type AggregateFailed_jobs = {
    _count: Failed_jobsCountAggregateOutputType | null
    _avg: Failed_jobsAvgAggregateOutputType | null
    _sum: Failed_jobsSumAggregateOutputType | null
    _min: Failed_jobsMinAggregateOutputType | null
    _max: Failed_jobsMaxAggregateOutputType | null
  }

  export type Failed_jobsAvgAggregateOutputType = {
    id: number | null
  }

  export type Failed_jobsSumAggregateOutputType = {
    id: bigint | null
  }

  export type Failed_jobsMinAggregateOutputType = {
    id: bigint | null
    uuid: string | null
    connection: string | null
    queue: string | null
    payload: string | null
    exception: string | null
    failed_at: Date | null
  }

  export type Failed_jobsMaxAggregateOutputType = {
    id: bigint | null
    uuid: string | null
    connection: string | null
    queue: string | null
    payload: string | null
    exception: string | null
    failed_at: Date | null
  }

  export type Failed_jobsCountAggregateOutputType = {
    id: number
    uuid: number
    connection: number
    queue: number
    payload: number
    exception: number
    failed_at: number
    _all: number
  }


  export type Failed_jobsAvgAggregateInputType = {
    id?: true
  }

  export type Failed_jobsSumAggregateInputType = {
    id?: true
  }

  export type Failed_jobsMinAggregateInputType = {
    id?: true
    uuid?: true
    connection?: true
    queue?: true
    payload?: true
    exception?: true
    failed_at?: true
  }

  export type Failed_jobsMaxAggregateInputType = {
    id?: true
    uuid?: true
    connection?: true
    queue?: true
    payload?: true
    exception?: true
    failed_at?: true
  }

  export type Failed_jobsCountAggregateInputType = {
    id?: true
    uuid?: true
    connection?: true
    queue?: true
    payload?: true
    exception?: true
    failed_at?: true
    _all?: true
  }

  export type Failed_jobsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which failed_jobs to aggregate.
     */
    where?: failed_jobsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of failed_jobs to fetch.
     */
    orderBy?: failed_jobsOrderByWithRelationInput | failed_jobsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: failed_jobsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` failed_jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` failed_jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned failed_jobs
    **/
    _count?: true | Failed_jobsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Failed_jobsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Failed_jobsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Failed_jobsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Failed_jobsMaxAggregateInputType
  }

  export type GetFailed_jobsAggregateType<T extends Failed_jobsAggregateArgs> = {
        [P in keyof T & keyof AggregateFailed_jobs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFailed_jobs[P]>
      : GetScalarType<T[P], AggregateFailed_jobs[P]>
  }




  export type failed_jobsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: failed_jobsWhereInput
    orderBy?: failed_jobsOrderByWithAggregationInput | failed_jobsOrderByWithAggregationInput[]
    by: Failed_jobsScalarFieldEnum[] | Failed_jobsScalarFieldEnum
    having?: failed_jobsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Failed_jobsCountAggregateInputType | true
    _avg?: Failed_jobsAvgAggregateInputType
    _sum?: Failed_jobsSumAggregateInputType
    _min?: Failed_jobsMinAggregateInputType
    _max?: Failed_jobsMaxAggregateInputType
  }

  export type Failed_jobsGroupByOutputType = {
    id: bigint
    uuid: string
    connection: string
    queue: string
    payload: string
    exception: string
    failed_at: Date
    _count: Failed_jobsCountAggregateOutputType | null
    _avg: Failed_jobsAvgAggregateOutputType | null
    _sum: Failed_jobsSumAggregateOutputType | null
    _min: Failed_jobsMinAggregateOutputType | null
    _max: Failed_jobsMaxAggregateOutputType | null
  }

  type GetFailed_jobsGroupByPayload<T extends failed_jobsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Failed_jobsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Failed_jobsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Failed_jobsGroupByOutputType[P]>
            : GetScalarType<T[P], Failed_jobsGroupByOutputType[P]>
        }
      >
    >


  export type failed_jobsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    connection?: boolean
    queue?: boolean
    payload?: boolean
    exception?: boolean
    failed_at?: boolean
  }, ExtArgs["result"]["failed_jobs"]>



  export type failed_jobsSelectScalar = {
    id?: boolean
    uuid?: boolean
    connection?: boolean
    queue?: boolean
    payload?: boolean
    exception?: boolean
    failed_at?: boolean
  }

  export type failed_jobsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "uuid" | "connection" | "queue" | "payload" | "exception" | "failed_at", ExtArgs["result"]["failed_jobs"]>

  export type $failed_jobsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "failed_jobs"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      uuid: string
      connection: string
      queue: string
      payload: string
      exception: string
      failed_at: Date
    }, ExtArgs["result"]["failed_jobs"]>
    composites: {}
  }

  type failed_jobsGetPayload<S extends boolean | null | undefined | failed_jobsDefaultArgs> = $Result.GetResult<Prisma.$failed_jobsPayload, S>

  type failed_jobsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<failed_jobsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Failed_jobsCountAggregateInputType | true
    }

  export interface failed_jobsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['failed_jobs'], meta: { name: 'failed_jobs' } }
    /**
     * Find zero or one Failed_jobs that matches the filter.
     * @param {failed_jobsFindUniqueArgs} args - Arguments to find a Failed_jobs
     * @example
     * // Get one Failed_jobs
     * const failed_jobs = await prisma.failed_jobs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends failed_jobsFindUniqueArgs>(args: SelectSubset<T, failed_jobsFindUniqueArgs<ExtArgs>>): Prisma__failed_jobsClient<$Result.GetResult<Prisma.$failed_jobsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Failed_jobs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {failed_jobsFindUniqueOrThrowArgs} args - Arguments to find a Failed_jobs
     * @example
     * // Get one Failed_jobs
     * const failed_jobs = await prisma.failed_jobs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends failed_jobsFindUniqueOrThrowArgs>(args: SelectSubset<T, failed_jobsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__failed_jobsClient<$Result.GetResult<Prisma.$failed_jobsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Failed_jobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {failed_jobsFindFirstArgs} args - Arguments to find a Failed_jobs
     * @example
     * // Get one Failed_jobs
     * const failed_jobs = await prisma.failed_jobs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends failed_jobsFindFirstArgs>(args?: SelectSubset<T, failed_jobsFindFirstArgs<ExtArgs>>): Prisma__failed_jobsClient<$Result.GetResult<Prisma.$failed_jobsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Failed_jobs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {failed_jobsFindFirstOrThrowArgs} args - Arguments to find a Failed_jobs
     * @example
     * // Get one Failed_jobs
     * const failed_jobs = await prisma.failed_jobs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends failed_jobsFindFirstOrThrowArgs>(args?: SelectSubset<T, failed_jobsFindFirstOrThrowArgs<ExtArgs>>): Prisma__failed_jobsClient<$Result.GetResult<Prisma.$failed_jobsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Failed_jobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {failed_jobsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Failed_jobs
     * const failed_jobs = await prisma.failed_jobs.findMany()
     * 
     * // Get first 10 Failed_jobs
     * const failed_jobs = await prisma.failed_jobs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const failed_jobsWithIdOnly = await prisma.failed_jobs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends failed_jobsFindManyArgs>(args?: SelectSubset<T, failed_jobsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$failed_jobsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Failed_jobs.
     * @param {failed_jobsCreateArgs} args - Arguments to create a Failed_jobs.
     * @example
     * // Create one Failed_jobs
     * const Failed_jobs = await prisma.failed_jobs.create({
     *   data: {
     *     // ... data to create a Failed_jobs
     *   }
     * })
     * 
     */
    create<T extends failed_jobsCreateArgs>(args: SelectSubset<T, failed_jobsCreateArgs<ExtArgs>>): Prisma__failed_jobsClient<$Result.GetResult<Prisma.$failed_jobsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Failed_jobs.
     * @param {failed_jobsCreateManyArgs} args - Arguments to create many Failed_jobs.
     * @example
     * // Create many Failed_jobs
     * const failed_jobs = await prisma.failed_jobs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends failed_jobsCreateManyArgs>(args?: SelectSubset<T, failed_jobsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Failed_jobs.
     * @param {failed_jobsDeleteArgs} args - Arguments to delete one Failed_jobs.
     * @example
     * // Delete one Failed_jobs
     * const Failed_jobs = await prisma.failed_jobs.delete({
     *   where: {
     *     // ... filter to delete one Failed_jobs
     *   }
     * })
     * 
     */
    delete<T extends failed_jobsDeleteArgs>(args: SelectSubset<T, failed_jobsDeleteArgs<ExtArgs>>): Prisma__failed_jobsClient<$Result.GetResult<Prisma.$failed_jobsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Failed_jobs.
     * @param {failed_jobsUpdateArgs} args - Arguments to update one Failed_jobs.
     * @example
     * // Update one Failed_jobs
     * const failed_jobs = await prisma.failed_jobs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends failed_jobsUpdateArgs>(args: SelectSubset<T, failed_jobsUpdateArgs<ExtArgs>>): Prisma__failed_jobsClient<$Result.GetResult<Prisma.$failed_jobsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Failed_jobs.
     * @param {failed_jobsDeleteManyArgs} args - Arguments to filter Failed_jobs to delete.
     * @example
     * // Delete a few Failed_jobs
     * const { count } = await prisma.failed_jobs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends failed_jobsDeleteManyArgs>(args?: SelectSubset<T, failed_jobsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Failed_jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {failed_jobsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Failed_jobs
     * const failed_jobs = await prisma.failed_jobs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends failed_jobsUpdateManyArgs>(args: SelectSubset<T, failed_jobsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Failed_jobs.
     * @param {failed_jobsUpsertArgs} args - Arguments to update or create a Failed_jobs.
     * @example
     * // Update or create a Failed_jobs
     * const failed_jobs = await prisma.failed_jobs.upsert({
     *   create: {
     *     // ... data to create a Failed_jobs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Failed_jobs we want to update
     *   }
     * })
     */
    upsert<T extends failed_jobsUpsertArgs>(args: SelectSubset<T, failed_jobsUpsertArgs<ExtArgs>>): Prisma__failed_jobsClient<$Result.GetResult<Prisma.$failed_jobsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Failed_jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {failed_jobsCountArgs} args - Arguments to filter Failed_jobs to count.
     * @example
     * // Count the number of Failed_jobs
     * const count = await prisma.failed_jobs.count({
     *   where: {
     *     // ... the filter for the Failed_jobs we want to count
     *   }
     * })
    **/
    count<T extends failed_jobsCountArgs>(
      args?: Subset<T, failed_jobsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Failed_jobsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Failed_jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Failed_jobsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Failed_jobsAggregateArgs>(args: Subset<T, Failed_jobsAggregateArgs>): Prisma.PrismaPromise<GetFailed_jobsAggregateType<T>>

    /**
     * Group by Failed_jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {failed_jobsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends failed_jobsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: failed_jobsGroupByArgs['orderBy'] }
        : { orderBy?: failed_jobsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, failed_jobsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFailed_jobsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the failed_jobs model
   */
  readonly fields: failed_jobsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for failed_jobs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__failed_jobsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the failed_jobs model
   */
  interface failed_jobsFieldRefs {
    readonly id: FieldRef<"failed_jobs", 'BigInt'>
    readonly uuid: FieldRef<"failed_jobs", 'String'>
    readonly connection: FieldRef<"failed_jobs", 'String'>
    readonly queue: FieldRef<"failed_jobs", 'String'>
    readonly payload: FieldRef<"failed_jobs", 'String'>
    readonly exception: FieldRef<"failed_jobs", 'String'>
    readonly failed_at: FieldRef<"failed_jobs", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * failed_jobs findUnique
   */
  export type failed_jobsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the failed_jobs
     */
    select?: failed_jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the failed_jobs
     */
    omit?: failed_jobsOmit<ExtArgs> | null
    /**
     * Filter, which failed_jobs to fetch.
     */
    where: failed_jobsWhereUniqueInput
  }

  /**
   * failed_jobs findUniqueOrThrow
   */
  export type failed_jobsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the failed_jobs
     */
    select?: failed_jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the failed_jobs
     */
    omit?: failed_jobsOmit<ExtArgs> | null
    /**
     * Filter, which failed_jobs to fetch.
     */
    where: failed_jobsWhereUniqueInput
  }

  /**
   * failed_jobs findFirst
   */
  export type failed_jobsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the failed_jobs
     */
    select?: failed_jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the failed_jobs
     */
    omit?: failed_jobsOmit<ExtArgs> | null
    /**
     * Filter, which failed_jobs to fetch.
     */
    where?: failed_jobsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of failed_jobs to fetch.
     */
    orderBy?: failed_jobsOrderByWithRelationInput | failed_jobsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for failed_jobs.
     */
    cursor?: failed_jobsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` failed_jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` failed_jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of failed_jobs.
     */
    distinct?: Failed_jobsScalarFieldEnum | Failed_jobsScalarFieldEnum[]
  }

  /**
   * failed_jobs findFirstOrThrow
   */
  export type failed_jobsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the failed_jobs
     */
    select?: failed_jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the failed_jobs
     */
    omit?: failed_jobsOmit<ExtArgs> | null
    /**
     * Filter, which failed_jobs to fetch.
     */
    where?: failed_jobsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of failed_jobs to fetch.
     */
    orderBy?: failed_jobsOrderByWithRelationInput | failed_jobsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for failed_jobs.
     */
    cursor?: failed_jobsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` failed_jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` failed_jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of failed_jobs.
     */
    distinct?: Failed_jobsScalarFieldEnum | Failed_jobsScalarFieldEnum[]
  }

  /**
   * failed_jobs findMany
   */
  export type failed_jobsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the failed_jobs
     */
    select?: failed_jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the failed_jobs
     */
    omit?: failed_jobsOmit<ExtArgs> | null
    /**
     * Filter, which failed_jobs to fetch.
     */
    where?: failed_jobsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of failed_jobs to fetch.
     */
    orderBy?: failed_jobsOrderByWithRelationInput | failed_jobsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing failed_jobs.
     */
    cursor?: failed_jobsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` failed_jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` failed_jobs.
     */
    skip?: number
    distinct?: Failed_jobsScalarFieldEnum | Failed_jobsScalarFieldEnum[]
  }

  /**
   * failed_jobs create
   */
  export type failed_jobsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the failed_jobs
     */
    select?: failed_jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the failed_jobs
     */
    omit?: failed_jobsOmit<ExtArgs> | null
    /**
     * The data needed to create a failed_jobs.
     */
    data: XOR<failed_jobsCreateInput, failed_jobsUncheckedCreateInput>
  }

  /**
   * failed_jobs createMany
   */
  export type failed_jobsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many failed_jobs.
     */
    data: failed_jobsCreateManyInput | failed_jobsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * failed_jobs update
   */
  export type failed_jobsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the failed_jobs
     */
    select?: failed_jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the failed_jobs
     */
    omit?: failed_jobsOmit<ExtArgs> | null
    /**
     * The data needed to update a failed_jobs.
     */
    data: XOR<failed_jobsUpdateInput, failed_jobsUncheckedUpdateInput>
    /**
     * Choose, which failed_jobs to update.
     */
    where: failed_jobsWhereUniqueInput
  }

  /**
   * failed_jobs updateMany
   */
  export type failed_jobsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update failed_jobs.
     */
    data: XOR<failed_jobsUpdateManyMutationInput, failed_jobsUncheckedUpdateManyInput>
    /**
     * Filter which failed_jobs to update
     */
    where?: failed_jobsWhereInput
    /**
     * Limit how many failed_jobs to update.
     */
    limit?: number
  }

  /**
   * failed_jobs upsert
   */
  export type failed_jobsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the failed_jobs
     */
    select?: failed_jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the failed_jobs
     */
    omit?: failed_jobsOmit<ExtArgs> | null
    /**
     * The filter to search for the failed_jobs to update in case it exists.
     */
    where: failed_jobsWhereUniqueInput
    /**
     * In case the failed_jobs found by the `where` argument doesn't exist, create a new failed_jobs with this data.
     */
    create: XOR<failed_jobsCreateInput, failed_jobsUncheckedCreateInput>
    /**
     * In case the failed_jobs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<failed_jobsUpdateInput, failed_jobsUncheckedUpdateInput>
  }

  /**
   * failed_jobs delete
   */
  export type failed_jobsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the failed_jobs
     */
    select?: failed_jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the failed_jobs
     */
    omit?: failed_jobsOmit<ExtArgs> | null
    /**
     * Filter which failed_jobs to delete.
     */
    where: failed_jobsWhereUniqueInput
  }

  /**
   * failed_jobs deleteMany
   */
  export type failed_jobsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which failed_jobs to delete
     */
    where?: failed_jobsWhereInput
    /**
     * Limit how many failed_jobs to delete.
     */
    limit?: number
  }

  /**
   * failed_jobs without action
   */
  export type failed_jobsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the failed_jobs
     */
    select?: failed_jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the failed_jobs
     */
    omit?: failed_jobsOmit<ExtArgs> | null
  }


  /**
   * Model job_batches
   */

  export type AggregateJob_batches = {
    _count: Job_batchesCountAggregateOutputType | null
    _avg: Job_batchesAvgAggregateOutputType | null
    _sum: Job_batchesSumAggregateOutputType | null
    _min: Job_batchesMinAggregateOutputType | null
    _max: Job_batchesMaxAggregateOutputType | null
  }

  export type Job_batchesAvgAggregateOutputType = {
    total_jobs: number | null
    pending_jobs: number | null
    failed_jobs: number | null
    cancelled_at: number | null
    created_at: number | null
    finished_at: number | null
  }

  export type Job_batchesSumAggregateOutputType = {
    total_jobs: number | null
    pending_jobs: number | null
    failed_jobs: number | null
    cancelled_at: number | null
    created_at: number | null
    finished_at: number | null
  }

  export type Job_batchesMinAggregateOutputType = {
    id: string | null
    name: string | null
    total_jobs: number | null
    pending_jobs: number | null
    failed_jobs: number | null
    failed_job_ids: string | null
    options: string | null
    cancelled_at: number | null
    created_at: number | null
    finished_at: number | null
  }

  export type Job_batchesMaxAggregateOutputType = {
    id: string | null
    name: string | null
    total_jobs: number | null
    pending_jobs: number | null
    failed_jobs: number | null
    failed_job_ids: string | null
    options: string | null
    cancelled_at: number | null
    created_at: number | null
    finished_at: number | null
  }

  export type Job_batchesCountAggregateOutputType = {
    id: number
    name: number
    total_jobs: number
    pending_jobs: number
    failed_jobs: number
    failed_job_ids: number
    options: number
    cancelled_at: number
    created_at: number
    finished_at: number
    _all: number
  }


  export type Job_batchesAvgAggregateInputType = {
    total_jobs?: true
    pending_jobs?: true
    failed_jobs?: true
    cancelled_at?: true
    created_at?: true
    finished_at?: true
  }

  export type Job_batchesSumAggregateInputType = {
    total_jobs?: true
    pending_jobs?: true
    failed_jobs?: true
    cancelled_at?: true
    created_at?: true
    finished_at?: true
  }

  export type Job_batchesMinAggregateInputType = {
    id?: true
    name?: true
    total_jobs?: true
    pending_jobs?: true
    failed_jobs?: true
    failed_job_ids?: true
    options?: true
    cancelled_at?: true
    created_at?: true
    finished_at?: true
  }

  export type Job_batchesMaxAggregateInputType = {
    id?: true
    name?: true
    total_jobs?: true
    pending_jobs?: true
    failed_jobs?: true
    failed_job_ids?: true
    options?: true
    cancelled_at?: true
    created_at?: true
    finished_at?: true
  }

  export type Job_batchesCountAggregateInputType = {
    id?: true
    name?: true
    total_jobs?: true
    pending_jobs?: true
    failed_jobs?: true
    failed_job_ids?: true
    options?: true
    cancelled_at?: true
    created_at?: true
    finished_at?: true
    _all?: true
  }

  export type Job_batchesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which job_batches to aggregate.
     */
    where?: job_batchesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of job_batches to fetch.
     */
    orderBy?: job_batchesOrderByWithRelationInput | job_batchesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: job_batchesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` job_batches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` job_batches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned job_batches
    **/
    _count?: true | Job_batchesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Job_batchesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Job_batchesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Job_batchesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Job_batchesMaxAggregateInputType
  }

  export type GetJob_batchesAggregateType<T extends Job_batchesAggregateArgs> = {
        [P in keyof T & keyof AggregateJob_batches]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJob_batches[P]>
      : GetScalarType<T[P], AggregateJob_batches[P]>
  }




  export type job_batchesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: job_batchesWhereInput
    orderBy?: job_batchesOrderByWithAggregationInput | job_batchesOrderByWithAggregationInput[]
    by: Job_batchesScalarFieldEnum[] | Job_batchesScalarFieldEnum
    having?: job_batchesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Job_batchesCountAggregateInputType | true
    _avg?: Job_batchesAvgAggregateInputType
    _sum?: Job_batchesSumAggregateInputType
    _min?: Job_batchesMinAggregateInputType
    _max?: Job_batchesMaxAggregateInputType
  }

  export type Job_batchesGroupByOutputType = {
    id: string
    name: string
    total_jobs: number
    pending_jobs: number
    failed_jobs: number
    failed_job_ids: string
    options: string | null
    cancelled_at: number | null
    created_at: number
    finished_at: number | null
    _count: Job_batchesCountAggregateOutputType | null
    _avg: Job_batchesAvgAggregateOutputType | null
    _sum: Job_batchesSumAggregateOutputType | null
    _min: Job_batchesMinAggregateOutputType | null
    _max: Job_batchesMaxAggregateOutputType | null
  }

  type GetJob_batchesGroupByPayload<T extends job_batchesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Job_batchesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Job_batchesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Job_batchesGroupByOutputType[P]>
            : GetScalarType<T[P], Job_batchesGroupByOutputType[P]>
        }
      >
    >


  export type job_batchesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    total_jobs?: boolean
    pending_jobs?: boolean
    failed_jobs?: boolean
    failed_job_ids?: boolean
    options?: boolean
    cancelled_at?: boolean
    created_at?: boolean
    finished_at?: boolean
  }, ExtArgs["result"]["job_batches"]>



  export type job_batchesSelectScalar = {
    id?: boolean
    name?: boolean
    total_jobs?: boolean
    pending_jobs?: boolean
    failed_jobs?: boolean
    failed_job_ids?: boolean
    options?: boolean
    cancelled_at?: boolean
    created_at?: boolean
    finished_at?: boolean
  }

  export type job_batchesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "total_jobs" | "pending_jobs" | "failed_jobs" | "failed_job_ids" | "options" | "cancelled_at" | "created_at" | "finished_at", ExtArgs["result"]["job_batches"]>

  export type $job_batchesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "job_batches"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      total_jobs: number
      pending_jobs: number
      failed_jobs: number
      failed_job_ids: string
      options: string | null
      cancelled_at: number | null
      created_at: number
      finished_at: number | null
    }, ExtArgs["result"]["job_batches"]>
    composites: {}
  }

  type job_batchesGetPayload<S extends boolean | null | undefined | job_batchesDefaultArgs> = $Result.GetResult<Prisma.$job_batchesPayload, S>

  type job_batchesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<job_batchesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Job_batchesCountAggregateInputType | true
    }

  export interface job_batchesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['job_batches'], meta: { name: 'job_batches' } }
    /**
     * Find zero or one Job_batches that matches the filter.
     * @param {job_batchesFindUniqueArgs} args - Arguments to find a Job_batches
     * @example
     * // Get one Job_batches
     * const job_batches = await prisma.job_batches.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends job_batchesFindUniqueArgs>(args: SelectSubset<T, job_batchesFindUniqueArgs<ExtArgs>>): Prisma__job_batchesClient<$Result.GetResult<Prisma.$job_batchesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Job_batches that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {job_batchesFindUniqueOrThrowArgs} args - Arguments to find a Job_batches
     * @example
     * // Get one Job_batches
     * const job_batches = await prisma.job_batches.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends job_batchesFindUniqueOrThrowArgs>(args: SelectSubset<T, job_batchesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__job_batchesClient<$Result.GetResult<Prisma.$job_batchesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Job_batches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {job_batchesFindFirstArgs} args - Arguments to find a Job_batches
     * @example
     * // Get one Job_batches
     * const job_batches = await prisma.job_batches.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends job_batchesFindFirstArgs>(args?: SelectSubset<T, job_batchesFindFirstArgs<ExtArgs>>): Prisma__job_batchesClient<$Result.GetResult<Prisma.$job_batchesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Job_batches that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {job_batchesFindFirstOrThrowArgs} args - Arguments to find a Job_batches
     * @example
     * // Get one Job_batches
     * const job_batches = await prisma.job_batches.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends job_batchesFindFirstOrThrowArgs>(args?: SelectSubset<T, job_batchesFindFirstOrThrowArgs<ExtArgs>>): Prisma__job_batchesClient<$Result.GetResult<Prisma.$job_batchesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Job_batches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {job_batchesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Job_batches
     * const job_batches = await prisma.job_batches.findMany()
     * 
     * // Get first 10 Job_batches
     * const job_batches = await prisma.job_batches.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const job_batchesWithIdOnly = await prisma.job_batches.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends job_batchesFindManyArgs>(args?: SelectSubset<T, job_batchesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$job_batchesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Job_batches.
     * @param {job_batchesCreateArgs} args - Arguments to create a Job_batches.
     * @example
     * // Create one Job_batches
     * const Job_batches = await prisma.job_batches.create({
     *   data: {
     *     // ... data to create a Job_batches
     *   }
     * })
     * 
     */
    create<T extends job_batchesCreateArgs>(args: SelectSubset<T, job_batchesCreateArgs<ExtArgs>>): Prisma__job_batchesClient<$Result.GetResult<Prisma.$job_batchesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Job_batches.
     * @param {job_batchesCreateManyArgs} args - Arguments to create many Job_batches.
     * @example
     * // Create many Job_batches
     * const job_batches = await prisma.job_batches.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends job_batchesCreateManyArgs>(args?: SelectSubset<T, job_batchesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Job_batches.
     * @param {job_batchesDeleteArgs} args - Arguments to delete one Job_batches.
     * @example
     * // Delete one Job_batches
     * const Job_batches = await prisma.job_batches.delete({
     *   where: {
     *     // ... filter to delete one Job_batches
     *   }
     * })
     * 
     */
    delete<T extends job_batchesDeleteArgs>(args: SelectSubset<T, job_batchesDeleteArgs<ExtArgs>>): Prisma__job_batchesClient<$Result.GetResult<Prisma.$job_batchesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Job_batches.
     * @param {job_batchesUpdateArgs} args - Arguments to update one Job_batches.
     * @example
     * // Update one Job_batches
     * const job_batches = await prisma.job_batches.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends job_batchesUpdateArgs>(args: SelectSubset<T, job_batchesUpdateArgs<ExtArgs>>): Prisma__job_batchesClient<$Result.GetResult<Prisma.$job_batchesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Job_batches.
     * @param {job_batchesDeleteManyArgs} args - Arguments to filter Job_batches to delete.
     * @example
     * // Delete a few Job_batches
     * const { count } = await prisma.job_batches.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends job_batchesDeleteManyArgs>(args?: SelectSubset<T, job_batchesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Job_batches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {job_batchesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Job_batches
     * const job_batches = await prisma.job_batches.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends job_batchesUpdateManyArgs>(args: SelectSubset<T, job_batchesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Job_batches.
     * @param {job_batchesUpsertArgs} args - Arguments to update or create a Job_batches.
     * @example
     * // Update or create a Job_batches
     * const job_batches = await prisma.job_batches.upsert({
     *   create: {
     *     // ... data to create a Job_batches
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Job_batches we want to update
     *   }
     * })
     */
    upsert<T extends job_batchesUpsertArgs>(args: SelectSubset<T, job_batchesUpsertArgs<ExtArgs>>): Prisma__job_batchesClient<$Result.GetResult<Prisma.$job_batchesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Job_batches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {job_batchesCountArgs} args - Arguments to filter Job_batches to count.
     * @example
     * // Count the number of Job_batches
     * const count = await prisma.job_batches.count({
     *   where: {
     *     // ... the filter for the Job_batches we want to count
     *   }
     * })
    **/
    count<T extends job_batchesCountArgs>(
      args?: Subset<T, job_batchesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Job_batchesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Job_batches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Job_batchesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Job_batchesAggregateArgs>(args: Subset<T, Job_batchesAggregateArgs>): Prisma.PrismaPromise<GetJob_batchesAggregateType<T>>

    /**
     * Group by Job_batches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {job_batchesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends job_batchesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: job_batchesGroupByArgs['orderBy'] }
        : { orderBy?: job_batchesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, job_batchesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJob_batchesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the job_batches model
   */
  readonly fields: job_batchesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for job_batches.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__job_batchesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the job_batches model
   */
  interface job_batchesFieldRefs {
    readonly id: FieldRef<"job_batches", 'String'>
    readonly name: FieldRef<"job_batches", 'String'>
    readonly total_jobs: FieldRef<"job_batches", 'Int'>
    readonly pending_jobs: FieldRef<"job_batches", 'Int'>
    readonly failed_jobs: FieldRef<"job_batches", 'Int'>
    readonly failed_job_ids: FieldRef<"job_batches", 'String'>
    readonly options: FieldRef<"job_batches", 'String'>
    readonly cancelled_at: FieldRef<"job_batches", 'Int'>
    readonly created_at: FieldRef<"job_batches", 'Int'>
    readonly finished_at: FieldRef<"job_batches", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * job_batches findUnique
   */
  export type job_batchesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_batches
     */
    select?: job_batchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the job_batches
     */
    omit?: job_batchesOmit<ExtArgs> | null
    /**
     * Filter, which job_batches to fetch.
     */
    where: job_batchesWhereUniqueInput
  }

  /**
   * job_batches findUniqueOrThrow
   */
  export type job_batchesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_batches
     */
    select?: job_batchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the job_batches
     */
    omit?: job_batchesOmit<ExtArgs> | null
    /**
     * Filter, which job_batches to fetch.
     */
    where: job_batchesWhereUniqueInput
  }

  /**
   * job_batches findFirst
   */
  export type job_batchesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_batches
     */
    select?: job_batchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the job_batches
     */
    omit?: job_batchesOmit<ExtArgs> | null
    /**
     * Filter, which job_batches to fetch.
     */
    where?: job_batchesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of job_batches to fetch.
     */
    orderBy?: job_batchesOrderByWithRelationInput | job_batchesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for job_batches.
     */
    cursor?: job_batchesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` job_batches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` job_batches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of job_batches.
     */
    distinct?: Job_batchesScalarFieldEnum | Job_batchesScalarFieldEnum[]
  }

  /**
   * job_batches findFirstOrThrow
   */
  export type job_batchesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_batches
     */
    select?: job_batchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the job_batches
     */
    omit?: job_batchesOmit<ExtArgs> | null
    /**
     * Filter, which job_batches to fetch.
     */
    where?: job_batchesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of job_batches to fetch.
     */
    orderBy?: job_batchesOrderByWithRelationInput | job_batchesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for job_batches.
     */
    cursor?: job_batchesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` job_batches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` job_batches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of job_batches.
     */
    distinct?: Job_batchesScalarFieldEnum | Job_batchesScalarFieldEnum[]
  }

  /**
   * job_batches findMany
   */
  export type job_batchesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_batches
     */
    select?: job_batchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the job_batches
     */
    omit?: job_batchesOmit<ExtArgs> | null
    /**
     * Filter, which job_batches to fetch.
     */
    where?: job_batchesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of job_batches to fetch.
     */
    orderBy?: job_batchesOrderByWithRelationInput | job_batchesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing job_batches.
     */
    cursor?: job_batchesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` job_batches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` job_batches.
     */
    skip?: number
    distinct?: Job_batchesScalarFieldEnum | Job_batchesScalarFieldEnum[]
  }

  /**
   * job_batches create
   */
  export type job_batchesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_batches
     */
    select?: job_batchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the job_batches
     */
    omit?: job_batchesOmit<ExtArgs> | null
    /**
     * The data needed to create a job_batches.
     */
    data: XOR<job_batchesCreateInput, job_batchesUncheckedCreateInput>
  }

  /**
   * job_batches createMany
   */
  export type job_batchesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many job_batches.
     */
    data: job_batchesCreateManyInput | job_batchesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * job_batches update
   */
  export type job_batchesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_batches
     */
    select?: job_batchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the job_batches
     */
    omit?: job_batchesOmit<ExtArgs> | null
    /**
     * The data needed to update a job_batches.
     */
    data: XOR<job_batchesUpdateInput, job_batchesUncheckedUpdateInput>
    /**
     * Choose, which job_batches to update.
     */
    where: job_batchesWhereUniqueInput
  }

  /**
   * job_batches updateMany
   */
  export type job_batchesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update job_batches.
     */
    data: XOR<job_batchesUpdateManyMutationInput, job_batchesUncheckedUpdateManyInput>
    /**
     * Filter which job_batches to update
     */
    where?: job_batchesWhereInput
    /**
     * Limit how many job_batches to update.
     */
    limit?: number
  }

  /**
   * job_batches upsert
   */
  export type job_batchesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_batches
     */
    select?: job_batchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the job_batches
     */
    omit?: job_batchesOmit<ExtArgs> | null
    /**
     * The filter to search for the job_batches to update in case it exists.
     */
    where: job_batchesWhereUniqueInput
    /**
     * In case the job_batches found by the `where` argument doesn't exist, create a new job_batches with this data.
     */
    create: XOR<job_batchesCreateInput, job_batchesUncheckedCreateInput>
    /**
     * In case the job_batches was found with the provided `where` argument, update it with this data.
     */
    update: XOR<job_batchesUpdateInput, job_batchesUncheckedUpdateInput>
  }

  /**
   * job_batches delete
   */
  export type job_batchesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_batches
     */
    select?: job_batchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the job_batches
     */
    omit?: job_batchesOmit<ExtArgs> | null
    /**
     * Filter which job_batches to delete.
     */
    where: job_batchesWhereUniqueInput
  }

  /**
   * job_batches deleteMany
   */
  export type job_batchesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which job_batches to delete
     */
    where?: job_batchesWhereInput
    /**
     * Limit how many job_batches to delete.
     */
    limit?: number
  }

  /**
   * job_batches without action
   */
  export type job_batchesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_batches
     */
    select?: job_batchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the job_batches
     */
    omit?: job_batchesOmit<ExtArgs> | null
  }


  /**
   * Model job_categories
   */

  export type AggregateJob_categories = {
    _count: Job_categoriesCountAggregateOutputType | null
    _min: Job_categoriesMinAggregateOutputType | null
    _max: Job_categoriesMaxAggregateOutputType | null
  }

  export type Job_categoriesMinAggregateOutputType = {
    id: string | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type Job_categoriesMaxAggregateOutputType = {
    id: string | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type Job_categoriesCountAggregateOutputType = {
    id: number
    name: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type Job_categoriesMinAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type Job_categoriesMaxAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type Job_categoriesCountAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type Job_categoriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which job_categories to aggregate.
     */
    where?: job_categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of job_categories to fetch.
     */
    orderBy?: job_categoriesOrderByWithRelationInput | job_categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: job_categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` job_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` job_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned job_categories
    **/
    _count?: true | Job_categoriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Job_categoriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Job_categoriesMaxAggregateInputType
  }

  export type GetJob_categoriesAggregateType<T extends Job_categoriesAggregateArgs> = {
        [P in keyof T & keyof AggregateJob_categories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJob_categories[P]>
      : GetScalarType<T[P], AggregateJob_categories[P]>
  }




  export type job_categoriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: job_categoriesWhereInput
    orderBy?: job_categoriesOrderByWithAggregationInput | job_categoriesOrderByWithAggregationInput[]
    by: Job_categoriesScalarFieldEnum[] | Job_categoriesScalarFieldEnum
    having?: job_categoriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Job_categoriesCountAggregateInputType | true
    _min?: Job_categoriesMinAggregateInputType
    _max?: Job_categoriesMaxAggregateInputType
  }

  export type Job_categoriesGroupByOutputType = {
    id: string
    name: string
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    _count: Job_categoriesCountAggregateOutputType | null
    _min: Job_categoriesMinAggregateOutputType | null
    _max: Job_categoriesMaxAggregateOutputType | null
  }

  type GetJob_categoriesGroupByPayload<T extends job_categoriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Job_categoriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Job_categoriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Job_categoriesGroupByOutputType[P]>
            : GetScalarType<T[P], Job_categoriesGroupByOutputType[P]>
        }
      >
    >


  export type job_categoriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    job_post_categories?: boolean | job_categories$job_post_categoriesArgs<ExtArgs>
    _count?: boolean | Job_categoriesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["job_categories"]>



  export type job_categoriesSelectScalar = {
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type job_categoriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "created_at" | "updated_at" | "deleted_at", ExtArgs["result"]["job_categories"]>
  export type job_categoriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job_post_categories?: boolean | job_categories$job_post_categoriesArgs<ExtArgs>
    _count?: boolean | Job_categoriesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $job_categoriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "job_categories"
    objects: {
      job_post_categories: Prisma.$job_post_categoriesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      created_at: Date | null
      updated_at: Date | null
      deleted_at: Date | null
    }, ExtArgs["result"]["job_categories"]>
    composites: {}
  }

  type job_categoriesGetPayload<S extends boolean | null | undefined | job_categoriesDefaultArgs> = $Result.GetResult<Prisma.$job_categoriesPayload, S>

  type job_categoriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<job_categoriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Job_categoriesCountAggregateInputType | true
    }

  export interface job_categoriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['job_categories'], meta: { name: 'job_categories' } }
    /**
     * Find zero or one Job_categories that matches the filter.
     * @param {job_categoriesFindUniqueArgs} args - Arguments to find a Job_categories
     * @example
     * // Get one Job_categories
     * const job_categories = await prisma.job_categories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends job_categoriesFindUniqueArgs>(args: SelectSubset<T, job_categoriesFindUniqueArgs<ExtArgs>>): Prisma__job_categoriesClient<$Result.GetResult<Prisma.$job_categoriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Job_categories that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {job_categoriesFindUniqueOrThrowArgs} args - Arguments to find a Job_categories
     * @example
     * // Get one Job_categories
     * const job_categories = await prisma.job_categories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends job_categoriesFindUniqueOrThrowArgs>(args: SelectSubset<T, job_categoriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__job_categoriesClient<$Result.GetResult<Prisma.$job_categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Job_categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {job_categoriesFindFirstArgs} args - Arguments to find a Job_categories
     * @example
     * // Get one Job_categories
     * const job_categories = await prisma.job_categories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends job_categoriesFindFirstArgs>(args?: SelectSubset<T, job_categoriesFindFirstArgs<ExtArgs>>): Prisma__job_categoriesClient<$Result.GetResult<Prisma.$job_categoriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Job_categories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {job_categoriesFindFirstOrThrowArgs} args - Arguments to find a Job_categories
     * @example
     * // Get one Job_categories
     * const job_categories = await prisma.job_categories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends job_categoriesFindFirstOrThrowArgs>(args?: SelectSubset<T, job_categoriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__job_categoriesClient<$Result.GetResult<Prisma.$job_categoriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Job_categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {job_categoriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Job_categories
     * const job_categories = await prisma.job_categories.findMany()
     * 
     * // Get first 10 Job_categories
     * const job_categories = await prisma.job_categories.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const job_categoriesWithIdOnly = await prisma.job_categories.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends job_categoriesFindManyArgs>(args?: SelectSubset<T, job_categoriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$job_categoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Job_categories.
     * @param {job_categoriesCreateArgs} args - Arguments to create a Job_categories.
     * @example
     * // Create one Job_categories
     * const Job_categories = await prisma.job_categories.create({
     *   data: {
     *     // ... data to create a Job_categories
     *   }
     * })
     * 
     */
    create<T extends job_categoriesCreateArgs>(args: SelectSubset<T, job_categoriesCreateArgs<ExtArgs>>): Prisma__job_categoriesClient<$Result.GetResult<Prisma.$job_categoriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Job_categories.
     * @param {job_categoriesCreateManyArgs} args - Arguments to create many Job_categories.
     * @example
     * // Create many Job_categories
     * const job_categories = await prisma.job_categories.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends job_categoriesCreateManyArgs>(args?: SelectSubset<T, job_categoriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Job_categories.
     * @param {job_categoriesDeleteArgs} args - Arguments to delete one Job_categories.
     * @example
     * // Delete one Job_categories
     * const Job_categories = await prisma.job_categories.delete({
     *   where: {
     *     // ... filter to delete one Job_categories
     *   }
     * })
     * 
     */
    delete<T extends job_categoriesDeleteArgs>(args: SelectSubset<T, job_categoriesDeleteArgs<ExtArgs>>): Prisma__job_categoriesClient<$Result.GetResult<Prisma.$job_categoriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Job_categories.
     * @param {job_categoriesUpdateArgs} args - Arguments to update one Job_categories.
     * @example
     * // Update one Job_categories
     * const job_categories = await prisma.job_categories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends job_categoriesUpdateArgs>(args: SelectSubset<T, job_categoriesUpdateArgs<ExtArgs>>): Prisma__job_categoriesClient<$Result.GetResult<Prisma.$job_categoriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Job_categories.
     * @param {job_categoriesDeleteManyArgs} args - Arguments to filter Job_categories to delete.
     * @example
     * // Delete a few Job_categories
     * const { count } = await prisma.job_categories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends job_categoriesDeleteManyArgs>(args?: SelectSubset<T, job_categoriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Job_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {job_categoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Job_categories
     * const job_categories = await prisma.job_categories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends job_categoriesUpdateManyArgs>(args: SelectSubset<T, job_categoriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Job_categories.
     * @param {job_categoriesUpsertArgs} args - Arguments to update or create a Job_categories.
     * @example
     * // Update or create a Job_categories
     * const job_categories = await prisma.job_categories.upsert({
     *   create: {
     *     // ... data to create a Job_categories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Job_categories we want to update
     *   }
     * })
     */
    upsert<T extends job_categoriesUpsertArgs>(args: SelectSubset<T, job_categoriesUpsertArgs<ExtArgs>>): Prisma__job_categoriesClient<$Result.GetResult<Prisma.$job_categoriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Job_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {job_categoriesCountArgs} args - Arguments to filter Job_categories to count.
     * @example
     * // Count the number of Job_categories
     * const count = await prisma.job_categories.count({
     *   where: {
     *     // ... the filter for the Job_categories we want to count
     *   }
     * })
    **/
    count<T extends job_categoriesCountArgs>(
      args?: Subset<T, job_categoriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Job_categoriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Job_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Job_categoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Job_categoriesAggregateArgs>(args: Subset<T, Job_categoriesAggregateArgs>): Prisma.PrismaPromise<GetJob_categoriesAggregateType<T>>

    /**
     * Group by Job_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {job_categoriesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends job_categoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: job_categoriesGroupByArgs['orderBy'] }
        : { orderBy?: job_categoriesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, job_categoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJob_categoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the job_categories model
   */
  readonly fields: job_categoriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for job_categories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__job_categoriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    job_post_categories<T extends job_categories$job_post_categoriesArgs<ExtArgs> = {}>(args?: Subset<T, job_categories$job_post_categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$job_post_categoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the job_categories model
   */
  interface job_categoriesFieldRefs {
    readonly id: FieldRef<"job_categories", 'String'>
    readonly name: FieldRef<"job_categories", 'String'>
    readonly created_at: FieldRef<"job_categories", 'DateTime'>
    readonly updated_at: FieldRef<"job_categories", 'DateTime'>
    readonly deleted_at: FieldRef<"job_categories", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * job_categories findUnique
   */
  export type job_categoriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_categories
     */
    select?: job_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the job_categories
     */
    omit?: job_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: job_categoriesInclude<ExtArgs> | null
    /**
     * Filter, which job_categories to fetch.
     */
    where: job_categoriesWhereUniqueInput
  }

  /**
   * job_categories findUniqueOrThrow
   */
  export type job_categoriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_categories
     */
    select?: job_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the job_categories
     */
    omit?: job_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: job_categoriesInclude<ExtArgs> | null
    /**
     * Filter, which job_categories to fetch.
     */
    where: job_categoriesWhereUniqueInput
  }

  /**
   * job_categories findFirst
   */
  export type job_categoriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_categories
     */
    select?: job_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the job_categories
     */
    omit?: job_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: job_categoriesInclude<ExtArgs> | null
    /**
     * Filter, which job_categories to fetch.
     */
    where?: job_categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of job_categories to fetch.
     */
    orderBy?: job_categoriesOrderByWithRelationInput | job_categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for job_categories.
     */
    cursor?: job_categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` job_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` job_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of job_categories.
     */
    distinct?: Job_categoriesScalarFieldEnum | Job_categoriesScalarFieldEnum[]
  }

  /**
   * job_categories findFirstOrThrow
   */
  export type job_categoriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_categories
     */
    select?: job_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the job_categories
     */
    omit?: job_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: job_categoriesInclude<ExtArgs> | null
    /**
     * Filter, which job_categories to fetch.
     */
    where?: job_categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of job_categories to fetch.
     */
    orderBy?: job_categoriesOrderByWithRelationInput | job_categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for job_categories.
     */
    cursor?: job_categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` job_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` job_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of job_categories.
     */
    distinct?: Job_categoriesScalarFieldEnum | Job_categoriesScalarFieldEnum[]
  }

  /**
   * job_categories findMany
   */
  export type job_categoriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_categories
     */
    select?: job_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the job_categories
     */
    omit?: job_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: job_categoriesInclude<ExtArgs> | null
    /**
     * Filter, which job_categories to fetch.
     */
    where?: job_categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of job_categories to fetch.
     */
    orderBy?: job_categoriesOrderByWithRelationInput | job_categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing job_categories.
     */
    cursor?: job_categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` job_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` job_categories.
     */
    skip?: number
    distinct?: Job_categoriesScalarFieldEnum | Job_categoriesScalarFieldEnum[]
  }

  /**
   * job_categories create
   */
  export type job_categoriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_categories
     */
    select?: job_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the job_categories
     */
    omit?: job_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: job_categoriesInclude<ExtArgs> | null
    /**
     * The data needed to create a job_categories.
     */
    data: XOR<job_categoriesCreateInput, job_categoriesUncheckedCreateInput>
  }

  /**
   * job_categories createMany
   */
  export type job_categoriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many job_categories.
     */
    data: job_categoriesCreateManyInput | job_categoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * job_categories update
   */
  export type job_categoriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_categories
     */
    select?: job_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the job_categories
     */
    omit?: job_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: job_categoriesInclude<ExtArgs> | null
    /**
     * The data needed to update a job_categories.
     */
    data: XOR<job_categoriesUpdateInput, job_categoriesUncheckedUpdateInput>
    /**
     * Choose, which job_categories to update.
     */
    where: job_categoriesWhereUniqueInput
  }

  /**
   * job_categories updateMany
   */
  export type job_categoriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update job_categories.
     */
    data: XOR<job_categoriesUpdateManyMutationInput, job_categoriesUncheckedUpdateManyInput>
    /**
     * Filter which job_categories to update
     */
    where?: job_categoriesWhereInput
    /**
     * Limit how many job_categories to update.
     */
    limit?: number
  }

  /**
   * job_categories upsert
   */
  export type job_categoriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_categories
     */
    select?: job_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the job_categories
     */
    omit?: job_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: job_categoriesInclude<ExtArgs> | null
    /**
     * The filter to search for the job_categories to update in case it exists.
     */
    where: job_categoriesWhereUniqueInput
    /**
     * In case the job_categories found by the `where` argument doesn't exist, create a new job_categories with this data.
     */
    create: XOR<job_categoriesCreateInput, job_categoriesUncheckedCreateInput>
    /**
     * In case the job_categories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<job_categoriesUpdateInput, job_categoriesUncheckedUpdateInput>
  }

  /**
   * job_categories delete
   */
  export type job_categoriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_categories
     */
    select?: job_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the job_categories
     */
    omit?: job_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: job_categoriesInclude<ExtArgs> | null
    /**
     * Filter which job_categories to delete.
     */
    where: job_categoriesWhereUniqueInput
  }

  /**
   * job_categories deleteMany
   */
  export type job_categoriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which job_categories to delete
     */
    where?: job_categoriesWhereInput
    /**
     * Limit how many job_categories to delete.
     */
    limit?: number
  }

  /**
   * job_categories.job_post_categories
   */
  export type job_categories$job_post_categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_post_categories
     */
    select?: job_post_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the job_post_categories
     */
    omit?: job_post_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: job_post_categoriesInclude<ExtArgs> | null
    where?: job_post_categoriesWhereInput
    orderBy?: job_post_categoriesOrderByWithRelationInput | job_post_categoriesOrderByWithRelationInput[]
    cursor?: job_post_categoriesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Job_post_categoriesScalarFieldEnum | Job_post_categoriesScalarFieldEnum[]
  }

  /**
   * job_categories without action
   */
  export type job_categoriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_categories
     */
    select?: job_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the job_categories
     */
    omit?: job_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: job_categoriesInclude<ExtArgs> | null
  }


  /**
   * Model job_posts
   */

  export type AggregateJob_posts = {
    _count: Job_postsCountAggregateOutputType | null
    _min: Job_postsMinAggregateOutputType | null
    _max: Job_postsMaxAggregateOutputType | null
  }

  export type Job_postsMinAggregateOutputType = {
    id: string | null
    company_id: string | null
    title: string | null
    thumbnail: string | null
    status: $Enums.job_posts_status | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type Job_postsMaxAggregateOutputType = {
    id: string | null
    company_id: string | null
    title: string | null
    thumbnail: string | null
    status: $Enums.job_posts_status | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type Job_postsCountAggregateOutputType = {
    id: number
    company_id: number
    title: number
    thumbnail: number
    status: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type Job_postsMinAggregateInputType = {
    id?: true
    company_id?: true
    title?: true
    thumbnail?: true
    status?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type Job_postsMaxAggregateInputType = {
    id?: true
    company_id?: true
    title?: true
    thumbnail?: true
    status?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type Job_postsCountAggregateInputType = {
    id?: true
    company_id?: true
    title?: true
    thumbnail?: true
    status?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type Job_postsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which job_posts to aggregate.
     */
    where?: job_postsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of job_posts to fetch.
     */
    orderBy?: job_postsOrderByWithRelationInput | job_postsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: job_postsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` job_posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` job_posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned job_posts
    **/
    _count?: true | Job_postsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Job_postsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Job_postsMaxAggregateInputType
  }

  export type GetJob_postsAggregateType<T extends Job_postsAggregateArgs> = {
        [P in keyof T & keyof AggregateJob_posts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJob_posts[P]>
      : GetScalarType<T[P], AggregateJob_posts[P]>
  }




  export type job_postsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: job_postsWhereInput
    orderBy?: job_postsOrderByWithAggregationInput | job_postsOrderByWithAggregationInput[]
    by: Job_postsScalarFieldEnum[] | Job_postsScalarFieldEnum
    having?: job_postsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Job_postsCountAggregateInputType | true
    _min?: Job_postsMinAggregateInputType
    _max?: Job_postsMaxAggregateInputType
  }

  export type Job_postsGroupByOutputType = {
    id: string
    company_id: string
    title: string
    thumbnail: string
    status: $Enums.job_posts_status
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    _count: Job_postsCountAggregateOutputType | null
    _min: Job_postsMinAggregateOutputType | null
    _max: Job_postsMaxAggregateOutputType | null
  }

  type GetJob_postsGroupByPayload<T extends job_postsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Job_postsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Job_postsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Job_postsGroupByOutputType[P]>
            : GetScalarType<T[P], Job_postsGroupByOutputType[P]>
        }
      >
    >


  export type job_postsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    company_id?: boolean
    title?: boolean
    thumbnail?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    job_post_categories?: boolean | job_posts$job_post_categoriesArgs<ExtArgs>
    companies?: boolean | companiesDefaultArgs<ExtArgs>
    _count?: boolean | Job_postsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["job_posts"]>



  export type job_postsSelectScalar = {
    id?: boolean
    company_id?: boolean
    title?: boolean
    thumbnail?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type job_postsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "company_id" | "title" | "thumbnail" | "status" | "created_at" | "updated_at" | "deleted_at", ExtArgs["result"]["job_posts"]>
  export type job_postsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job_post_categories?: boolean | job_posts$job_post_categoriesArgs<ExtArgs>
    companies?: boolean | companiesDefaultArgs<ExtArgs>
    _count?: boolean | Job_postsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $job_postsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "job_posts"
    objects: {
      job_post_categories: Prisma.$job_post_categoriesPayload<ExtArgs>[]
      companies: Prisma.$companiesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      company_id: string
      title: string
      thumbnail: string
      status: $Enums.job_posts_status
      created_at: Date | null
      updated_at: Date | null
      deleted_at: Date | null
    }, ExtArgs["result"]["job_posts"]>
    composites: {}
  }

  type job_postsGetPayload<S extends boolean | null | undefined | job_postsDefaultArgs> = $Result.GetResult<Prisma.$job_postsPayload, S>

  type job_postsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<job_postsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Job_postsCountAggregateInputType | true
    }

  export interface job_postsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['job_posts'], meta: { name: 'job_posts' } }
    /**
     * Find zero or one Job_posts that matches the filter.
     * @param {job_postsFindUniqueArgs} args - Arguments to find a Job_posts
     * @example
     * // Get one Job_posts
     * const job_posts = await prisma.job_posts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends job_postsFindUniqueArgs>(args: SelectSubset<T, job_postsFindUniqueArgs<ExtArgs>>): Prisma__job_postsClient<$Result.GetResult<Prisma.$job_postsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Job_posts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {job_postsFindUniqueOrThrowArgs} args - Arguments to find a Job_posts
     * @example
     * // Get one Job_posts
     * const job_posts = await prisma.job_posts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends job_postsFindUniqueOrThrowArgs>(args: SelectSubset<T, job_postsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__job_postsClient<$Result.GetResult<Prisma.$job_postsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Job_posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {job_postsFindFirstArgs} args - Arguments to find a Job_posts
     * @example
     * // Get one Job_posts
     * const job_posts = await prisma.job_posts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends job_postsFindFirstArgs>(args?: SelectSubset<T, job_postsFindFirstArgs<ExtArgs>>): Prisma__job_postsClient<$Result.GetResult<Prisma.$job_postsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Job_posts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {job_postsFindFirstOrThrowArgs} args - Arguments to find a Job_posts
     * @example
     * // Get one Job_posts
     * const job_posts = await prisma.job_posts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends job_postsFindFirstOrThrowArgs>(args?: SelectSubset<T, job_postsFindFirstOrThrowArgs<ExtArgs>>): Prisma__job_postsClient<$Result.GetResult<Prisma.$job_postsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Job_posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {job_postsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Job_posts
     * const job_posts = await prisma.job_posts.findMany()
     * 
     * // Get first 10 Job_posts
     * const job_posts = await prisma.job_posts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const job_postsWithIdOnly = await prisma.job_posts.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends job_postsFindManyArgs>(args?: SelectSubset<T, job_postsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$job_postsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Job_posts.
     * @param {job_postsCreateArgs} args - Arguments to create a Job_posts.
     * @example
     * // Create one Job_posts
     * const Job_posts = await prisma.job_posts.create({
     *   data: {
     *     // ... data to create a Job_posts
     *   }
     * })
     * 
     */
    create<T extends job_postsCreateArgs>(args: SelectSubset<T, job_postsCreateArgs<ExtArgs>>): Prisma__job_postsClient<$Result.GetResult<Prisma.$job_postsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Job_posts.
     * @param {job_postsCreateManyArgs} args - Arguments to create many Job_posts.
     * @example
     * // Create many Job_posts
     * const job_posts = await prisma.job_posts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends job_postsCreateManyArgs>(args?: SelectSubset<T, job_postsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Job_posts.
     * @param {job_postsDeleteArgs} args - Arguments to delete one Job_posts.
     * @example
     * // Delete one Job_posts
     * const Job_posts = await prisma.job_posts.delete({
     *   where: {
     *     // ... filter to delete one Job_posts
     *   }
     * })
     * 
     */
    delete<T extends job_postsDeleteArgs>(args: SelectSubset<T, job_postsDeleteArgs<ExtArgs>>): Prisma__job_postsClient<$Result.GetResult<Prisma.$job_postsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Job_posts.
     * @param {job_postsUpdateArgs} args - Arguments to update one Job_posts.
     * @example
     * // Update one Job_posts
     * const job_posts = await prisma.job_posts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends job_postsUpdateArgs>(args: SelectSubset<T, job_postsUpdateArgs<ExtArgs>>): Prisma__job_postsClient<$Result.GetResult<Prisma.$job_postsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Job_posts.
     * @param {job_postsDeleteManyArgs} args - Arguments to filter Job_posts to delete.
     * @example
     * // Delete a few Job_posts
     * const { count } = await prisma.job_posts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends job_postsDeleteManyArgs>(args?: SelectSubset<T, job_postsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Job_posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {job_postsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Job_posts
     * const job_posts = await prisma.job_posts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends job_postsUpdateManyArgs>(args: SelectSubset<T, job_postsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Job_posts.
     * @param {job_postsUpsertArgs} args - Arguments to update or create a Job_posts.
     * @example
     * // Update or create a Job_posts
     * const job_posts = await prisma.job_posts.upsert({
     *   create: {
     *     // ... data to create a Job_posts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Job_posts we want to update
     *   }
     * })
     */
    upsert<T extends job_postsUpsertArgs>(args: SelectSubset<T, job_postsUpsertArgs<ExtArgs>>): Prisma__job_postsClient<$Result.GetResult<Prisma.$job_postsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Job_posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {job_postsCountArgs} args - Arguments to filter Job_posts to count.
     * @example
     * // Count the number of Job_posts
     * const count = await prisma.job_posts.count({
     *   where: {
     *     // ... the filter for the Job_posts we want to count
     *   }
     * })
    **/
    count<T extends job_postsCountArgs>(
      args?: Subset<T, job_postsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Job_postsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Job_posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Job_postsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Job_postsAggregateArgs>(args: Subset<T, Job_postsAggregateArgs>): Prisma.PrismaPromise<GetJob_postsAggregateType<T>>

    /**
     * Group by Job_posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {job_postsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends job_postsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: job_postsGroupByArgs['orderBy'] }
        : { orderBy?: job_postsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, job_postsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJob_postsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the job_posts model
   */
  readonly fields: job_postsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for job_posts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__job_postsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    job_post_categories<T extends job_posts$job_post_categoriesArgs<ExtArgs> = {}>(args?: Subset<T, job_posts$job_post_categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$job_post_categoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    companies<T extends companiesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, companiesDefaultArgs<ExtArgs>>): Prisma__companiesClient<$Result.GetResult<Prisma.$companiesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the job_posts model
   */
  interface job_postsFieldRefs {
    readonly id: FieldRef<"job_posts", 'String'>
    readonly company_id: FieldRef<"job_posts", 'String'>
    readonly title: FieldRef<"job_posts", 'String'>
    readonly thumbnail: FieldRef<"job_posts", 'String'>
    readonly status: FieldRef<"job_posts", 'job_posts_status'>
    readonly created_at: FieldRef<"job_posts", 'DateTime'>
    readonly updated_at: FieldRef<"job_posts", 'DateTime'>
    readonly deleted_at: FieldRef<"job_posts", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * job_posts findUnique
   */
  export type job_postsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_posts
     */
    select?: job_postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the job_posts
     */
    omit?: job_postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: job_postsInclude<ExtArgs> | null
    /**
     * Filter, which job_posts to fetch.
     */
    where: job_postsWhereUniqueInput
  }

  /**
   * job_posts findUniqueOrThrow
   */
  export type job_postsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_posts
     */
    select?: job_postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the job_posts
     */
    omit?: job_postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: job_postsInclude<ExtArgs> | null
    /**
     * Filter, which job_posts to fetch.
     */
    where: job_postsWhereUniqueInput
  }

  /**
   * job_posts findFirst
   */
  export type job_postsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_posts
     */
    select?: job_postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the job_posts
     */
    omit?: job_postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: job_postsInclude<ExtArgs> | null
    /**
     * Filter, which job_posts to fetch.
     */
    where?: job_postsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of job_posts to fetch.
     */
    orderBy?: job_postsOrderByWithRelationInput | job_postsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for job_posts.
     */
    cursor?: job_postsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` job_posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` job_posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of job_posts.
     */
    distinct?: Job_postsScalarFieldEnum | Job_postsScalarFieldEnum[]
  }

  /**
   * job_posts findFirstOrThrow
   */
  export type job_postsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_posts
     */
    select?: job_postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the job_posts
     */
    omit?: job_postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: job_postsInclude<ExtArgs> | null
    /**
     * Filter, which job_posts to fetch.
     */
    where?: job_postsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of job_posts to fetch.
     */
    orderBy?: job_postsOrderByWithRelationInput | job_postsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for job_posts.
     */
    cursor?: job_postsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` job_posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` job_posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of job_posts.
     */
    distinct?: Job_postsScalarFieldEnum | Job_postsScalarFieldEnum[]
  }

  /**
   * job_posts findMany
   */
  export type job_postsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_posts
     */
    select?: job_postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the job_posts
     */
    omit?: job_postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: job_postsInclude<ExtArgs> | null
    /**
     * Filter, which job_posts to fetch.
     */
    where?: job_postsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of job_posts to fetch.
     */
    orderBy?: job_postsOrderByWithRelationInput | job_postsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing job_posts.
     */
    cursor?: job_postsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` job_posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` job_posts.
     */
    skip?: number
    distinct?: Job_postsScalarFieldEnum | Job_postsScalarFieldEnum[]
  }

  /**
   * job_posts create
   */
  export type job_postsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_posts
     */
    select?: job_postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the job_posts
     */
    omit?: job_postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: job_postsInclude<ExtArgs> | null
    /**
     * The data needed to create a job_posts.
     */
    data: XOR<job_postsCreateInput, job_postsUncheckedCreateInput>
  }

  /**
   * job_posts createMany
   */
  export type job_postsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many job_posts.
     */
    data: job_postsCreateManyInput | job_postsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * job_posts update
   */
  export type job_postsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_posts
     */
    select?: job_postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the job_posts
     */
    omit?: job_postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: job_postsInclude<ExtArgs> | null
    /**
     * The data needed to update a job_posts.
     */
    data: XOR<job_postsUpdateInput, job_postsUncheckedUpdateInput>
    /**
     * Choose, which job_posts to update.
     */
    where: job_postsWhereUniqueInput
  }

  /**
   * job_posts updateMany
   */
  export type job_postsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update job_posts.
     */
    data: XOR<job_postsUpdateManyMutationInput, job_postsUncheckedUpdateManyInput>
    /**
     * Filter which job_posts to update
     */
    where?: job_postsWhereInput
    /**
     * Limit how many job_posts to update.
     */
    limit?: number
  }

  /**
   * job_posts upsert
   */
  export type job_postsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_posts
     */
    select?: job_postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the job_posts
     */
    omit?: job_postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: job_postsInclude<ExtArgs> | null
    /**
     * The filter to search for the job_posts to update in case it exists.
     */
    where: job_postsWhereUniqueInput
    /**
     * In case the job_posts found by the `where` argument doesn't exist, create a new job_posts with this data.
     */
    create: XOR<job_postsCreateInput, job_postsUncheckedCreateInput>
    /**
     * In case the job_posts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<job_postsUpdateInput, job_postsUncheckedUpdateInput>
  }

  /**
   * job_posts delete
   */
  export type job_postsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_posts
     */
    select?: job_postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the job_posts
     */
    omit?: job_postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: job_postsInclude<ExtArgs> | null
    /**
     * Filter which job_posts to delete.
     */
    where: job_postsWhereUniqueInput
  }

  /**
   * job_posts deleteMany
   */
  export type job_postsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which job_posts to delete
     */
    where?: job_postsWhereInput
    /**
     * Limit how many job_posts to delete.
     */
    limit?: number
  }

  /**
   * job_posts.job_post_categories
   */
  export type job_posts$job_post_categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_post_categories
     */
    select?: job_post_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the job_post_categories
     */
    omit?: job_post_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: job_post_categoriesInclude<ExtArgs> | null
    where?: job_post_categoriesWhereInput
    orderBy?: job_post_categoriesOrderByWithRelationInput | job_post_categoriesOrderByWithRelationInput[]
    cursor?: job_post_categoriesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Job_post_categoriesScalarFieldEnum | Job_post_categoriesScalarFieldEnum[]
  }

  /**
   * job_posts without action
   */
  export type job_postsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_posts
     */
    select?: job_postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the job_posts
     */
    omit?: job_postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: job_postsInclude<ExtArgs> | null
  }


  /**
   * Model jobs
   */

  export type AggregateJobs = {
    _count: JobsCountAggregateOutputType | null
    _avg: JobsAvgAggregateOutputType | null
    _sum: JobsSumAggregateOutputType | null
    _min: JobsMinAggregateOutputType | null
    _max: JobsMaxAggregateOutputType | null
  }

  export type JobsAvgAggregateOutputType = {
    id: number | null
    attempts: number | null
    reserved_at: number | null
    available_at: number | null
    created_at: number | null
  }

  export type JobsSumAggregateOutputType = {
    id: bigint | null
    attempts: number | null
    reserved_at: number | null
    available_at: number | null
    created_at: number | null
  }

  export type JobsMinAggregateOutputType = {
    id: bigint | null
    queue: string | null
    payload: string | null
    attempts: number | null
    reserved_at: number | null
    available_at: number | null
    created_at: number | null
  }

  export type JobsMaxAggregateOutputType = {
    id: bigint | null
    queue: string | null
    payload: string | null
    attempts: number | null
    reserved_at: number | null
    available_at: number | null
    created_at: number | null
  }

  export type JobsCountAggregateOutputType = {
    id: number
    queue: number
    payload: number
    attempts: number
    reserved_at: number
    available_at: number
    created_at: number
    _all: number
  }


  export type JobsAvgAggregateInputType = {
    id?: true
    attempts?: true
    reserved_at?: true
    available_at?: true
    created_at?: true
  }

  export type JobsSumAggregateInputType = {
    id?: true
    attempts?: true
    reserved_at?: true
    available_at?: true
    created_at?: true
  }

  export type JobsMinAggregateInputType = {
    id?: true
    queue?: true
    payload?: true
    attempts?: true
    reserved_at?: true
    available_at?: true
    created_at?: true
  }

  export type JobsMaxAggregateInputType = {
    id?: true
    queue?: true
    payload?: true
    attempts?: true
    reserved_at?: true
    available_at?: true
    created_at?: true
  }

  export type JobsCountAggregateInputType = {
    id?: true
    queue?: true
    payload?: true
    attempts?: true
    reserved_at?: true
    available_at?: true
    created_at?: true
    _all?: true
  }

  export type JobsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which jobs to aggregate.
     */
    where?: jobsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jobs to fetch.
     */
    orderBy?: jobsOrderByWithRelationInput | jobsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: jobsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned jobs
    **/
    _count?: true | JobsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JobsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JobsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JobsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JobsMaxAggregateInputType
  }

  export type GetJobsAggregateType<T extends JobsAggregateArgs> = {
        [P in keyof T & keyof AggregateJobs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJobs[P]>
      : GetScalarType<T[P], AggregateJobs[P]>
  }




  export type jobsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: jobsWhereInput
    orderBy?: jobsOrderByWithAggregationInput | jobsOrderByWithAggregationInput[]
    by: JobsScalarFieldEnum[] | JobsScalarFieldEnum
    having?: jobsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JobsCountAggregateInputType | true
    _avg?: JobsAvgAggregateInputType
    _sum?: JobsSumAggregateInputType
    _min?: JobsMinAggregateInputType
    _max?: JobsMaxAggregateInputType
  }

  export type JobsGroupByOutputType = {
    id: bigint
    queue: string
    payload: string
    attempts: number
    reserved_at: number | null
    available_at: number
    created_at: number
    _count: JobsCountAggregateOutputType | null
    _avg: JobsAvgAggregateOutputType | null
    _sum: JobsSumAggregateOutputType | null
    _min: JobsMinAggregateOutputType | null
    _max: JobsMaxAggregateOutputType | null
  }

  type GetJobsGroupByPayload<T extends jobsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JobsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobsGroupByOutputType[P]>
            : GetScalarType<T[P], JobsGroupByOutputType[P]>
        }
      >
    >


  export type jobsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    queue?: boolean
    payload?: boolean
    attempts?: boolean
    reserved_at?: boolean
    available_at?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["jobs"]>



  export type jobsSelectScalar = {
    id?: boolean
    queue?: boolean
    payload?: boolean
    attempts?: boolean
    reserved_at?: boolean
    available_at?: boolean
    created_at?: boolean
  }

  export type jobsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "queue" | "payload" | "attempts" | "reserved_at" | "available_at" | "created_at", ExtArgs["result"]["jobs"]>

  export type $jobsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "jobs"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      queue: string
      payload: string
      attempts: number
      reserved_at: number | null
      available_at: number
      created_at: number
    }, ExtArgs["result"]["jobs"]>
    composites: {}
  }

  type jobsGetPayload<S extends boolean | null | undefined | jobsDefaultArgs> = $Result.GetResult<Prisma.$jobsPayload, S>

  type jobsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<jobsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JobsCountAggregateInputType | true
    }

  export interface jobsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['jobs'], meta: { name: 'jobs' } }
    /**
     * Find zero or one Jobs that matches the filter.
     * @param {jobsFindUniqueArgs} args - Arguments to find a Jobs
     * @example
     * // Get one Jobs
     * const jobs = await prisma.jobs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends jobsFindUniqueArgs>(args: SelectSubset<T, jobsFindUniqueArgs<ExtArgs>>): Prisma__jobsClient<$Result.GetResult<Prisma.$jobsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Jobs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {jobsFindUniqueOrThrowArgs} args - Arguments to find a Jobs
     * @example
     * // Get one Jobs
     * const jobs = await prisma.jobs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends jobsFindUniqueOrThrowArgs>(args: SelectSubset<T, jobsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__jobsClient<$Result.GetResult<Prisma.$jobsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Jobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobsFindFirstArgs} args - Arguments to find a Jobs
     * @example
     * // Get one Jobs
     * const jobs = await prisma.jobs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends jobsFindFirstArgs>(args?: SelectSubset<T, jobsFindFirstArgs<ExtArgs>>): Prisma__jobsClient<$Result.GetResult<Prisma.$jobsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Jobs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobsFindFirstOrThrowArgs} args - Arguments to find a Jobs
     * @example
     * // Get one Jobs
     * const jobs = await prisma.jobs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends jobsFindFirstOrThrowArgs>(args?: SelectSubset<T, jobsFindFirstOrThrowArgs<ExtArgs>>): Prisma__jobsClient<$Result.GetResult<Prisma.$jobsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Jobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Jobs
     * const jobs = await prisma.jobs.findMany()
     * 
     * // Get first 10 Jobs
     * const jobs = await prisma.jobs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jobsWithIdOnly = await prisma.jobs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends jobsFindManyArgs>(args?: SelectSubset<T, jobsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$jobsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Jobs.
     * @param {jobsCreateArgs} args - Arguments to create a Jobs.
     * @example
     * // Create one Jobs
     * const Jobs = await prisma.jobs.create({
     *   data: {
     *     // ... data to create a Jobs
     *   }
     * })
     * 
     */
    create<T extends jobsCreateArgs>(args: SelectSubset<T, jobsCreateArgs<ExtArgs>>): Prisma__jobsClient<$Result.GetResult<Prisma.$jobsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Jobs.
     * @param {jobsCreateManyArgs} args - Arguments to create many Jobs.
     * @example
     * // Create many Jobs
     * const jobs = await prisma.jobs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends jobsCreateManyArgs>(args?: SelectSubset<T, jobsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Jobs.
     * @param {jobsDeleteArgs} args - Arguments to delete one Jobs.
     * @example
     * // Delete one Jobs
     * const Jobs = await prisma.jobs.delete({
     *   where: {
     *     // ... filter to delete one Jobs
     *   }
     * })
     * 
     */
    delete<T extends jobsDeleteArgs>(args: SelectSubset<T, jobsDeleteArgs<ExtArgs>>): Prisma__jobsClient<$Result.GetResult<Prisma.$jobsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Jobs.
     * @param {jobsUpdateArgs} args - Arguments to update one Jobs.
     * @example
     * // Update one Jobs
     * const jobs = await prisma.jobs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends jobsUpdateArgs>(args: SelectSubset<T, jobsUpdateArgs<ExtArgs>>): Prisma__jobsClient<$Result.GetResult<Prisma.$jobsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Jobs.
     * @param {jobsDeleteManyArgs} args - Arguments to filter Jobs to delete.
     * @example
     * // Delete a few Jobs
     * const { count } = await prisma.jobs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends jobsDeleteManyArgs>(args?: SelectSubset<T, jobsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Jobs
     * const jobs = await prisma.jobs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends jobsUpdateManyArgs>(args: SelectSubset<T, jobsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Jobs.
     * @param {jobsUpsertArgs} args - Arguments to update or create a Jobs.
     * @example
     * // Update or create a Jobs
     * const jobs = await prisma.jobs.upsert({
     *   create: {
     *     // ... data to create a Jobs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Jobs we want to update
     *   }
     * })
     */
    upsert<T extends jobsUpsertArgs>(args: SelectSubset<T, jobsUpsertArgs<ExtArgs>>): Prisma__jobsClient<$Result.GetResult<Prisma.$jobsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobsCountArgs} args - Arguments to filter Jobs to count.
     * @example
     * // Count the number of Jobs
     * const count = await prisma.jobs.count({
     *   where: {
     *     // ... the filter for the Jobs we want to count
     *   }
     * })
    **/
    count<T extends jobsCountArgs>(
      args?: Subset<T, jobsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JobsAggregateArgs>(args: Subset<T, JobsAggregateArgs>): Prisma.PrismaPromise<GetJobsAggregateType<T>>

    /**
     * Group by Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends jobsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: jobsGroupByArgs['orderBy'] }
        : { orderBy?: jobsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, jobsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the jobs model
   */
  readonly fields: jobsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for jobs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__jobsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the jobs model
   */
  interface jobsFieldRefs {
    readonly id: FieldRef<"jobs", 'BigInt'>
    readonly queue: FieldRef<"jobs", 'String'>
    readonly payload: FieldRef<"jobs", 'String'>
    readonly attempts: FieldRef<"jobs", 'Int'>
    readonly reserved_at: FieldRef<"jobs", 'Int'>
    readonly available_at: FieldRef<"jobs", 'Int'>
    readonly created_at: FieldRef<"jobs", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * jobs findUnique
   */
  export type jobsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobs
     */
    select?: jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jobs
     */
    omit?: jobsOmit<ExtArgs> | null
    /**
     * Filter, which jobs to fetch.
     */
    where: jobsWhereUniqueInput
  }

  /**
   * jobs findUniqueOrThrow
   */
  export type jobsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobs
     */
    select?: jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jobs
     */
    omit?: jobsOmit<ExtArgs> | null
    /**
     * Filter, which jobs to fetch.
     */
    where: jobsWhereUniqueInput
  }

  /**
   * jobs findFirst
   */
  export type jobsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobs
     */
    select?: jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jobs
     */
    omit?: jobsOmit<ExtArgs> | null
    /**
     * Filter, which jobs to fetch.
     */
    where?: jobsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jobs to fetch.
     */
    orderBy?: jobsOrderByWithRelationInput | jobsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for jobs.
     */
    cursor?: jobsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of jobs.
     */
    distinct?: JobsScalarFieldEnum | JobsScalarFieldEnum[]
  }

  /**
   * jobs findFirstOrThrow
   */
  export type jobsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobs
     */
    select?: jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jobs
     */
    omit?: jobsOmit<ExtArgs> | null
    /**
     * Filter, which jobs to fetch.
     */
    where?: jobsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jobs to fetch.
     */
    orderBy?: jobsOrderByWithRelationInput | jobsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for jobs.
     */
    cursor?: jobsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of jobs.
     */
    distinct?: JobsScalarFieldEnum | JobsScalarFieldEnum[]
  }

  /**
   * jobs findMany
   */
  export type jobsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobs
     */
    select?: jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jobs
     */
    omit?: jobsOmit<ExtArgs> | null
    /**
     * Filter, which jobs to fetch.
     */
    where?: jobsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jobs to fetch.
     */
    orderBy?: jobsOrderByWithRelationInput | jobsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing jobs.
     */
    cursor?: jobsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jobs.
     */
    skip?: number
    distinct?: JobsScalarFieldEnum | JobsScalarFieldEnum[]
  }

  /**
   * jobs create
   */
  export type jobsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobs
     */
    select?: jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jobs
     */
    omit?: jobsOmit<ExtArgs> | null
    /**
     * The data needed to create a jobs.
     */
    data: XOR<jobsCreateInput, jobsUncheckedCreateInput>
  }

  /**
   * jobs createMany
   */
  export type jobsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many jobs.
     */
    data: jobsCreateManyInput | jobsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * jobs update
   */
  export type jobsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobs
     */
    select?: jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jobs
     */
    omit?: jobsOmit<ExtArgs> | null
    /**
     * The data needed to update a jobs.
     */
    data: XOR<jobsUpdateInput, jobsUncheckedUpdateInput>
    /**
     * Choose, which jobs to update.
     */
    where: jobsWhereUniqueInput
  }

  /**
   * jobs updateMany
   */
  export type jobsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update jobs.
     */
    data: XOR<jobsUpdateManyMutationInput, jobsUncheckedUpdateManyInput>
    /**
     * Filter which jobs to update
     */
    where?: jobsWhereInput
    /**
     * Limit how many jobs to update.
     */
    limit?: number
  }

  /**
   * jobs upsert
   */
  export type jobsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobs
     */
    select?: jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jobs
     */
    omit?: jobsOmit<ExtArgs> | null
    /**
     * The filter to search for the jobs to update in case it exists.
     */
    where: jobsWhereUniqueInput
    /**
     * In case the jobs found by the `where` argument doesn't exist, create a new jobs with this data.
     */
    create: XOR<jobsCreateInput, jobsUncheckedCreateInput>
    /**
     * In case the jobs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<jobsUpdateInput, jobsUncheckedUpdateInput>
  }

  /**
   * jobs delete
   */
  export type jobsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobs
     */
    select?: jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jobs
     */
    omit?: jobsOmit<ExtArgs> | null
    /**
     * Filter which jobs to delete.
     */
    where: jobsWhereUniqueInput
  }

  /**
   * jobs deleteMany
   */
  export type jobsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which jobs to delete
     */
    where?: jobsWhereInput
    /**
     * Limit how many jobs to delete.
     */
    limit?: number
  }

  /**
   * jobs without action
   */
  export type jobsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobs
     */
    select?: jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jobs
     */
    omit?: jobsOmit<ExtArgs> | null
  }


  /**
   * Model migrations
   */

  export type AggregateMigrations = {
    _count: MigrationsCountAggregateOutputType | null
    _avg: MigrationsAvgAggregateOutputType | null
    _sum: MigrationsSumAggregateOutputType | null
    _min: MigrationsMinAggregateOutputType | null
    _max: MigrationsMaxAggregateOutputType | null
  }

  export type MigrationsAvgAggregateOutputType = {
    id: number | null
    batch: number | null
  }

  export type MigrationsSumAggregateOutputType = {
    id: number | null
    batch: number | null
  }

  export type MigrationsMinAggregateOutputType = {
    id: number | null
    migration: string | null
    batch: number | null
  }

  export type MigrationsMaxAggregateOutputType = {
    id: number | null
    migration: string | null
    batch: number | null
  }

  export type MigrationsCountAggregateOutputType = {
    id: number
    migration: number
    batch: number
    _all: number
  }


  export type MigrationsAvgAggregateInputType = {
    id?: true
    batch?: true
  }

  export type MigrationsSumAggregateInputType = {
    id?: true
    batch?: true
  }

  export type MigrationsMinAggregateInputType = {
    id?: true
    migration?: true
    batch?: true
  }

  export type MigrationsMaxAggregateInputType = {
    id?: true
    migration?: true
    batch?: true
  }

  export type MigrationsCountAggregateInputType = {
    id?: true
    migration?: true
    batch?: true
    _all?: true
  }

  export type MigrationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which migrations to aggregate.
     */
    where?: migrationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of migrations to fetch.
     */
    orderBy?: migrationsOrderByWithRelationInput | migrationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: migrationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` migrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` migrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned migrations
    **/
    _count?: true | MigrationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MigrationsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MigrationsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MigrationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MigrationsMaxAggregateInputType
  }

  export type GetMigrationsAggregateType<T extends MigrationsAggregateArgs> = {
        [P in keyof T & keyof AggregateMigrations]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMigrations[P]>
      : GetScalarType<T[P], AggregateMigrations[P]>
  }




  export type migrationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: migrationsWhereInput
    orderBy?: migrationsOrderByWithAggregationInput | migrationsOrderByWithAggregationInput[]
    by: MigrationsScalarFieldEnum[] | MigrationsScalarFieldEnum
    having?: migrationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MigrationsCountAggregateInputType | true
    _avg?: MigrationsAvgAggregateInputType
    _sum?: MigrationsSumAggregateInputType
    _min?: MigrationsMinAggregateInputType
    _max?: MigrationsMaxAggregateInputType
  }

  export type MigrationsGroupByOutputType = {
    id: number
    migration: string
    batch: number
    _count: MigrationsCountAggregateOutputType | null
    _avg: MigrationsAvgAggregateOutputType | null
    _sum: MigrationsSumAggregateOutputType | null
    _min: MigrationsMinAggregateOutputType | null
    _max: MigrationsMaxAggregateOutputType | null
  }

  type GetMigrationsGroupByPayload<T extends migrationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MigrationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MigrationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MigrationsGroupByOutputType[P]>
            : GetScalarType<T[P], MigrationsGroupByOutputType[P]>
        }
      >
    >


  export type migrationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    migration?: boolean
    batch?: boolean
  }, ExtArgs["result"]["migrations"]>



  export type migrationsSelectScalar = {
    id?: boolean
    migration?: boolean
    batch?: boolean
  }

  export type migrationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "migration" | "batch", ExtArgs["result"]["migrations"]>

  export type $migrationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "migrations"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      migration: string
      batch: number
    }, ExtArgs["result"]["migrations"]>
    composites: {}
  }

  type migrationsGetPayload<S extends boolean | null | undefined | migrationsDefaultArgs> = $Result.GetResult<Prisma.$migrationsPayload, S>

  type migrationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<migrationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MigrationsCountAggregateInputType | true
    }

  export interface migrationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['migrations'], meta: { name: 'migrations' } }
    /**
     * Find zero or one Migrations that matches the filter.
     * @param {migrationsFindUniqueArgs} args - Arguments to find a Migrations
     * @example
     * // Get one Migrations
     * const migrations = await prisma.migrations.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends migrationsFindUniqueArgs>(args: SelectSubset<T, migrationsFindUniqueArgs<ExtArgs>>): Prisma__migrationsClient<$Result.GetResult<Prisma.$migrationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Migrations that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {migrationsFindUniqueOrThrowArgs} args - Arguments to find a Migrations
     * @example
     * // Get one Migrations
     * const migrations = await prisma.migrations.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends migrationsFindUniqueOrThrowArgs>(args: SelectSubset<T, migrationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__migrationsClient<$Result.GetResult<Prisma.$migrationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Migrations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {migrationsFindFirstArgs} args - Arguments to find a Migrations
     * @example
     * // Get one Migrations
     * const migrations = await prisma.migrations.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends migrationsFindFirstArgs>(args?: SelectSubset<T, migrationsFindFirstArgs<ExtArgs>>): Prisma__migrationsClient<$Result.GetResult<Prisma.$migrationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Migrations that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {migrationsFindFirstOrThrowArgs} args - Arguments to find a Migrations
     * @example
     * // Get one Migrations
     * const migrations = await prisma.migrations.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends migrationsFindFirstOrThrowArgs>(args?: SelectSubset<T, migrationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__migrationsClient<$Result.GetResult<Prisma.$migrationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Migrations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {migrationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Migrations
     * const migrations = await prisma.migrations.findMany()
     * 
     * // Get first 10 Migrations
     * const migrations = await prisma.migrations.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const migrationsWithIdOnly = await prisma.migrations.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends migrationsFindManyArgs>(args?: SelectSubset<T, migrationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$migrationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Migrations.
     * @param {migrationsCreateArgs} args - Arguments to create a Migrations.
     * @example
     * // Create one Migrations
     * const Migrations = await prisma.migrations.create({
     *   data: {
     *     // ... data to create a Migrations
     *   }
     * })
     * 
     */
    create<T extends migrationsCreateArgs>(args: SelectSubset<T, migrationsCreateArgs<ExtArgs>>): Prisma__migrationsClient<$Result.GetResult<Prisma.$migrationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Migrations.
     * @param {migrationsCreateManyArgs} args - Arguments to create many Migrations.
     * @example
     * // Create many Migrations
     * const migrations = await prisma.migrations.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends migrationsCreateManyArgs>(args?: SelectSubset<T, migrationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Migrations.
     * @param {migrationsDeleteArgs} args - Arguments to delete one Migrations.
     * @example
     * // Delete one Migrations
     * const Migrations = await prisma.migrations.delete({
     *   where: {
     *     // ... filter to delete one Migrations
     *   }
     * })
     * 
     */
    delete<T extends migrationsDeleteArgs>(args: SelectSubset<T, migrationsDeleteArgs<ExtArgs>>): Prisma__migrationsClient<$Result.GetResult<Prisma.$migrationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Migrations.
     * @param {migrationsUpdateArgs} args - Arguments to update one Migrations.
     * @example
     * // Update one Migrations
     * const migrations = await prisma.migrations.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends migrationsUpdateArgs>(args: SelectSubset<T, migrationsUpdateArgs<ExtArgs>>): Prisma__migrationsClient<$Result.GetResult<Prisma.$migrationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Migrations.
     * @param {migrationsDeleteManyArgs} args - Arguments to filter Migrations to delete.
     * @example
     * // Delete a few Migrations
     * const { count } = await prisma.migrations.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends migrationsDeleteManyArgs>(args?: SelectSubset<T, migrationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Migrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {migrationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Migrations
     * const migrations = await prisma.migrations.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends migrationsUpdateManyArgs>(args: SelectSubset<T, migrationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Migrations.
     * @param {migrationsUpsertArgs} args - Arguments to update or create a Migrations.
     * @example
     * // Update or create a Migrations
     * const migrations = await prisma.migrations.upsert({
     *   create: {
     *     // ... data to create a Migrations
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Migrations we want to update
     *   }
     * })
     */
    upsert<T extends migrationsUpsertArgs>(args: SelectSubset<T, migrationsUpsertArgs<ExtArgs>>): Prisma__migrationsClient<$Result.GetResult<Prisma.$migrationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Migrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {migrationsCountArgs} args - Arguments to filter Migrations to count.
     * @example
     * // Count the number of Migrations
     * const count = await prisma.migrations.count({
     *   where: {
     *     // ... the filter for the Migrations we want to count
     *   }
     * })
    **/
    count<T extends migrationsCountArgs>(
      args?: Subset<T, migrationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MigrationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Migrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MigrationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MigrationsAggregateArgs>(args: Subset<T, MigrationsAggregateArgs>): Prisma.PrismaPromise<GetMigrationsAggregateType<T>>

    /**
     * Group by Migrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {migrationsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends migrationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: migrationsGroupByArgs['orderBy'] }
        : { orderBy?: migrationsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, migrationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMigrationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the migrations model
   */
  readonly fields: migrationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for migrations.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__migrationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the migrations model
   */
  interface migrationsFieldRefs {
    readonly id: FieldRef<"migrations", 'Int'>
    readonly migration: FieldRef<"migrations", 'String'>
    readonly batch: FieldRef<"migrations", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * migrations findUnique
   */
  export type migrationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the migrations
     */
    select?: migrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the migrations
     */
    omit?: migrationsOmit<ExtArgs> | null
    /**
     * Filter, which migrations to fetch.
     */
    where: migrationsWhereUniqueInput
  }

  /**
   * migrations findUniqueOrThrow
   */
  export type migrationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the migrations
     */
    select?: migrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the migrations
     */
    omit?: migrationsOmit<ExtArgs> | null
    /**
     * Filter, which migrations to fetch.
     */
    where: migrationsWhereUniqueInput
  }

  /**
   * migrations findFirst
   */
  export type migrationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the migrations
     */
    select?: migrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the migrations
     */
    omit?: migrationsOmit<ExtArgs> | null
    /**
     * Filter, which migrations to fetch.
     */
    where?: migrationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of migrations to fetch.
     */
    orderBy?: migrationsOrderByWithRelationInput | migrationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for migrations.
     */
    cursor?: migrationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` migrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` migrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of migrations.
     */
    distinct?: MigrationsScalarFieldEnum | MigrationsScalarFieldEnum[]
  }

  /**
   * migrations findFirstOrThrow
   */
  export type migrationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the migrations
     */
    select?: migrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the migrations
     */
    omit?: migrationsOmit<ExtArgs> | null
    /**
     * Filter, which migrations to fetch.
     */
    where?: migrationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of migrations to fetch.
     */
    orderBy?: migrationsOrderByWithRelationInput | migrationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for migrations.
     */
    cursor?: migrationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` migrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` migrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of migrations.
     */
    distinct?: MigrationsScalarFieldEnum | MigrationsScalarFieldEnum[]
  }

  /**
   * migrations findMany
   */
  export type migrationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the migrations
     */
    select?: migrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the migrations
     */
    omit?: migrationsOmit<ExtArgs> | null
    /**
     * Filter, which migrations to fetch.
     */
    where?: migrationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of migrations to fetch.
     */
    orderBy?: migrationsOrderByWithRelationInput | migrationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing migrations.
     */
    cursor?: migrationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` migrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` migrations.
     */
    skip?: number
    distinct?: MigrationsScalarFieldEnum | MigrationsScalarFieldEnum[]
  }

  /**
   * migrations create
   */
  export type migrationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the migrations
     */
    select?: migrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the migrations
     */
    omit?: migrationsOmit<ExtArgs> | null
    /**
     * The data needed to create a migrations.
     */
    data: XOR<migrationsCreateInput, migrationsUncheckedCreateInput>
  }

  /**
   * migrations createMany
   */
  export type migrationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many migrations.
     */
    data: migrationsCreateManyInput | migrationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * migrations update
   */
  export type migrationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the migrations
     */
    select?: migrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the migrations
     */
    omit?: migrationsOmit<ExtArgs> | null
    /**
     * The data needed to update a migrations.
     */
    data: XOR<migrationsUpdateInput, migrationsUncheckedUpdateInput>
    /**
     * Choose, which migrations to update.
     */
    where: migrationsWhereUniqueInput
  }

  /**
   * migrations updateMany
   */
  export type migrationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update migrations.
     */
    data: XOR<migrationsUpdateManyMutationInput, migrationsUncheckedUpdateManyInput>
    /**
     * Filter which migrations to update
     */
    where?: migrationsWhereInput
    /**
     * Limit how many migrations to update.
     */
    limit?: number
  }

  /**
   * migrations upsert
   */
  export type migrationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the migrations
     */
    select?: migrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the migrations
     */
    omit?: migrationsOmit<ExtArgs> | null
    /**
     * The filter to search for the migrations to update in case it exists.
     */
    where: migrationsWhereUniqueInput
    /**
     * In case the migrations found by the `where` argument doesn't exist, create a new migrations with this data.
     */
    create: XOR<migrationsCreateInput, migrationsUncheckedCreateInput>
    /**
     * In case the migrations was found with the provided `where` argument, update it with this data.
     */
    update: XOR<migrationsUpdateInput, migrationsUncheckedUpdateInput>
  }

  /**
   * migrations delete
   */
  export type migrationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the migrations
     */
    select?: migrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the migrations
     */
    omit?: migrationsOmit<ExtArgs> | null
    /**
     * Filter which migrations to delete.
     */
    where: migrationsWhereUniqueInput
  }

  /**
   * migrations deleteMany
   */
  export type migrationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which migrations to delete
     */
    where?: migrationsWhereInput
    /**
     * Limit how many migrations to delete.
     */
    limit?: number
  }

  /**
   * migrations without action
   */
  export type migrationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the migrations
     */
    select?: migrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the migrations
     */
    omit?: migrationsOmit<ExtArgs> | null
  }


  /**
   * Model selections
   */

  export type AggregateSelections = {
    _count: SelectionsCountAggregateOutputType | null
    _min: SelectionsMinAggregateOutputType | null
    _max: SelectionsMaxAggregateOutputType | null
  }

  export type SelectionsMinAggregateOutputType = {
    id: string | null
    applicant_id: string | null
    job_post_category_id: string | null
    stage: $Enums.selections_stage | null
    status: $Enums.selections_status | null
    attachment: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type SelectionsMaxAggregateOutputType = {
    id: string | null
    applicant_id: string | null
    job_post_category_id: string | null
    stage: $Enums.selections_stage | null
    status: $Enums.selections_status | null
    attachment: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type SelectionsCountAggregateOutputType = {
    id: number
    applicant_id: number
    job_post_category_id: number
    stage: number
    status: number
    attachment: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type SelectionsMinAggregateInputType = {
    id?: true
    applicant_id?: true
    job_post_category_id?: true
    stage?: true
    status?: true
    attachment?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type SelectionsMaxAggregateInputType = {
    id?: true
    applicant_id?: true
    job_post_category_id?: true
    stage?: true
    status?: true
    attachment?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type SelectionsCountAggregateInputType = {
    id?: true
    applicant_id?: true
    job_post_category_id?: true
    stage?: true
    status?: true
    attachment?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type SelectionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which selections to aggregate.
     */
    where?: selectionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of selections to fetch.
     */
    orderBy?: selectionsOrderByWithRelationInput | selectionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: selectionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` selections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` selections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned selections
    **/
    _count?: true | SelectionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SelectionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SelectionsMaxAggregateInputType
  }

  export type GetSelectionsAggregateType<T extends SelectionsAggregateArgs> = {
        [P in keyof T & keyof AggregateSelections]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSelections[P]>
      : GetScalarType<T[P], AggregateSelections[P]>
  }




  export type selectionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: selectionsWhereInput
    orderBy?: selectionsOrderByWithAggregationInput | selectionsOrderByWithAggregationInput[]
    by: SelectionsScalarFieldEnum[] | SelectionsScalarFieldEnum
    having?: selectionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SelectionsCountAggregateInputType | true
    _min?: SelectionsMinAggregateInputType
    _max?: SelectionsMaxAggregateInputType
  }

  export type SelectionsGroupByOutputType = {
    id: string
    applicant_id: string
    job_post_category_id: string
    stage: $Enums.selections_stage
    status: $Enums.selections_status
    attachment: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    _count: SelectionsCountAggregateOutputType | null
    _min: SelectionsMinAggregateOutputType | null
    _max: SelectionsMaxAggregateOutputType | null
  }

  type GetSelectionsGroupByPayload<T extends selectionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SelectionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SelectionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SelectionsGroupByOutputType[P]>
            : GetScalarType<T[P], SelectionsGroupByOutputType[P]>
        }
      >
    >


  export type selectionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicant_id?: boolean
    job_post_category_id?: boolean
    stage?: boolean
    status?: boolean
    attachment?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    applicants?: boolean | applicantsDefaultArgs<ExtArgs>
    job_post_categories?: boolean | job_post_categoriesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["selections"]>



  export type selectionsSelectScalar = {
    id?: boolean
    applicant_id?: boolean
    job_post_category_id?: boolean
    stage?: boolean
    status?: boolean
    attachment?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type selectionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "applicant_id" | "job_post_category_id" | "stage" | "status" | "attachment" | "created_at" | "updated_at" | "deleted_at", ExtArgs["result"]["selections"]>
  export type selectionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applicants?: boolean | applicantsDefaultArgs<ExtArgs>
    job_post_categories?: boolean | job_post_categoriesDefaultArgs<ExtArgs>
  }

  export type $selectionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "selections"
    objects: {
      applicants: Prisma.$applicantsPayload<ExtArgs>
      job_post_categories: Prisma.$job_post_categoriesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      applicant_id: string
      job_post_category_id: string
      stage: $Enums.selections_stage
      status: $Enums.selections_status
      attachment: string | null
      created_at: Date | null
      updated_at: Date | null
      deleted_at: Date | null
    }, ExtArgs["result"]["selections"]>
    composites: {}
  }

  type selectionsGetPayload<S extends boolean | null | undefined | selectionsDefaultArgs> = $Result.GetResult<Prisma.$selectionsPayload, S>

  type selectionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<selectionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SelectionsCountAggregateInputType | true
    }

  export interface selectionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['selections'], meta: { name: 'selections' } }
    /**
     * Find zero or one Selections that matches the filter.
     * @param {selectionsFindUniqueArgs} args - Arguments to find a Selections
     * @example
     * // Get one Selections
     * const selections = await prisma.selections.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends selectionsFindUniqueArgs>(args: SelectSubset<T, selectionsFindUniqueArgs<ExtArgs>>): Prisma__selectionsClient<$Result.GetResult<Prisma.$selectionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Selections that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {selectionsFindUniqueOrThrowArgs} args - Arguments to find a Selections
     * @example
     * // Get one Selections
     * const selections = await prisma.selections.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends selectionsFindUniqueOrThrowArgs>(args: SelectSubset<T, selectionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__selectionsClient<$Result.GetResult<Prisma.$selectionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Selections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {selectionsFindFirstArgs} args - Arguments to find a Selections
     * @example
     * // Get one Selections
     * const selections = await prisma.selections.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends selectionsFindFirstArgs>(args?: SelectSubset<T, selectionsFindFirstArgs<ExtArgs>>): Prisma__selectionsClient<$Result.GetResult<Prisma.$selectionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Selections that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {selectionsFindFirstOrThrowArgs} args - Arguments to find a Selections
     * @example
     * // Get one Selections
     * const selections = await prisma.selections.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends selectionsFindFirstOrThrowArgs>(args?: SelectSubset<T, selectionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__selectionsClient<$Result.GetResult<Prisma.$selectionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Selections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {selectionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Selections
     * const selections = await prisma.selections.findMany()
     * 
     * // Get first 10 Selections
     * const selections = await prisma.selections.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const selectionsWithIdOnly = await prisma.selections.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends selectionsFindManyArgs>(args?: SelectSubset<T, selectionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$selectionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Selections.
     * @param {selectionsCreateArgs} args - Arguments to create a Selections.
     * @example
     * // Create one Selections
     * const Selections = await prisma.selections.create({
     *   data: {
     *     // ... data to create a Selections
     *   }
     * })
     * 
     */
    create<T extends selectionsCreateArgs>(args: SelectSubset<T, selectionsCreateArgs<ExtArgs>>): Prisma__selectionsClient<$Result.GetResult<Prisma.$selectionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Selections.
     * @param {selectionsCreateManyArgs} args - Arguments to create many Selections.
     * @example
     * // Create many Selections
     * const selections = await prisma.selections.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends selectionsCreateManyArgs>(args?: SelectSubset<T, selectionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Selections.
     * @param {selectionsDeleteArgs} args - Arguments to delete one Selections.
     * @example
     * // Delete one Selections
     * const Selections = await prisma.selections.delete({
     *   where: {
     *     // ... filter to delete one Selections
     *   }
     * })
     * 
     */
    delete<T extends selectionsDeleteArgs>(args: SelectSubset<T, selectionsDeleteArgs<ExtArgs>>): Prisma__selectionsClient<$Result.GetResult<Prisma.$selectionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Selections.
     * @param {selectionsUpdateArgs} args - Arguments to update one Selections.
     * @example
     * // Update one Selections
     * const selections = await prisma.selections.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends selectionsUpdateArgs>(args: SelectSubset<T, selectionsUpdateArgs<ExtArgs>>): Prisma__selectionsClient<$Result.GetResult<Prisma.$selectionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Selections.
     * @param {selectionsDeleteManyArgs} args - Arguments to filter Selections to delete.
     * @example
     * // Delete a few Selections
     * const { count } = await prisma.selections.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends selectionsDeleteManyArgs>(args?: SelectSubset<T, selectionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Selections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {selectionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Selections
     * const selections = await prisma.selections.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends selectionsUpdateManyArgs>(args: SelectSubset<T, selectionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Selections.
     * @param {selectionsUpsertArgs} args - Arguments to update or create a Selections.
     * @example
     * // Update or create a Selections
     * const selections = await prisma.selections.upsert({
     *   create: {
     *     // ... data to create a Selections
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Selections we want to update
     *   }
     * })
     */
    upsert<T extends selectionsUpsertArgs>(args: SelectSubset<T, selectionsUpsertArgs<ExtArgs>>): Prisma__selectionsClient<$Result.GetResult<Prisma.$selectionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Selections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {selectionsCountArgs} args - Arguments to filter Selections to count.
     * @example
     * // Count the number of Selections
     * const count = await prisma.selections.count({
     *   where: {
     *     // ... the filter for the Selections we want to count
     *   }
     * })
    **/
    count<T extends selectionsCountArgs>(
      args?: Subset<T, selectionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SelectionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Selections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SelectionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SelectionsAggregateArgs>(args: Subset<T, SelectionsAggregateArgs>): Prisma.PrismaPromise<GetSelectionsAggregateType<T>>

    /**
     * Group by Selections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {selectionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends selectionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: selectionsGroupByArgs['orderBy'] }
        : { orderBy?: selectionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, selectionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSelectionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the selections model
   */
  readonly fields: selectionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for selections.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__selectionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    applicants<T extends applicantsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, applicantsDefaultArgs<ExtArgs>>): Prisma__applicantsClient<$Result.GetResult<Prisma.$applicantsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    job_post_categories<T extends job_post_categoriesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, job_post_categoriesDefaultArgs<ExtArgs>>): Prisma__job_post_categoriesClient<$Result.GetResult<Prisma.$job_post_categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the selections model
   */
  interface selectionsFieldRefs {
    readonly id: FieldRef<"selections", 'String'>
    readonly applicant_id: FieldRef<"selections", 'String'>
    readonly job_post_category_id: FieldRef<"selections", 'String'>
    readonly stage: FieldRef<"selections", 'selections_stage'>
    readonly status: FieldRef<"selections", 'selections_status'>
    readonly attachment: FieldRef<"selections", 'String'>
    readonly created_at: FieldRef<"selections", 'DateTime'>
    readonly updated_at: FieldRef<"selections", 'DateTime'>
    readonly deleted_at: FieldRef<"selections", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * selections findUnique
   */
  export type selectionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the selections
     */
    select?: selectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the selections
     */
    omit?: selectionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: selectionsInclude<ExtArgs> | null
    /**
     * Filter, which selections to fetch.
     */
    where: selectionsWhereUniqueInput
  }

  /**
   * selections findUniqueOrThrow
   */
  export type selectionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the selections
     */
    select?: selectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the selections
     */
    omit?: selectionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: selectionsInclude<ExtArgs> | null
    /**
     * Filter, which selections to fetch.
     */
    where: selectionsWhereUniqueInput
  }

  /**
   * selections findFirst
   */
  export type selectionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the selections
     */
    select?: selectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the selections
     */
    omit?: selectionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: selectionsInclude<ExtArgs> | null
    /**
     * Filter, which selections to fetch.
     */
    where?: selectionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of selections to fetch.
     */
    orderBy?: selectionsOrderByWithRelationInput | selectionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for selections.
     */
    cursor?: selectionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` selections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` selections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of selections.
     */
    distinct?: SelectionsScalarFieldEnum | SelectionsScalarFieldEnum[]
  }

  /**
   * selections findFirstOrThrow
   */
  export type selectionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the selections
     */
    select?: selectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the selections
     */
    omit?: selectionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: selectionsInclude<ExtArgs> | null
    /**
     * Filter, which selections to fetch.
     */
    where?: selectionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of selections to fetch.
     */
    orderBy?: selectionsOrderByWithRelationInput | selectionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for selections.
     */
    cursor?: selectionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` selections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` selections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of selections.
     */
    distinct?: SelectionsScalarFieldEnum | SelectionsScalarFieldEnum[]
  }

  /**
   * selections findMany
   */
  export type selectionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the selections
     */
    select?: selectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the selections
     */
    omit?: selectionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: selectionsInclude<ExtArgs> | null
    /**
     * Filter, which selections to fetch.
     */
    where?: selectionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of selections to fetch.
     */
    orderBy?: selectionsOrderByWithRelationInput | selectionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing selections.
     */
    cursor?: selectionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` selections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` selections.
     */
    skip?: number
    distinct?: SelectionsScalarFieldEnum | SelectionsScalarFieldEnum[]
  }

  /**
   * selections create
   */
  export type selectionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the selections
     */
    select?: selectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the selections
     */
    omit?: selectionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: selectionsInclude<ExtArgs> | null
    /**
     * The data needed to create a selections.
     */
    data: XOR<selectionsCreateInput, selectionsUncheckedCreateInput>
  }

  /**
   * selections createMany
   */
  export type selectionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many selections.
     */
    data: selectionsCreateManyInput | selectionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * selections update
   */
  export type selectionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the selections
     */
    select?: selectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the selections
     */
    omit?: selectionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: selectionsInclude<ExtArgs> | null
    /**
     * The data needed to update a selections.
     */
    data: XOR<selectionsUpdateInput, selectionsUncheckedUpdateInput>
    /**
     * Choose, which selections to update.
     */
    where: selectionsWhereUniqueInput
  }

  /**
   * selections updateMany
   */
  export type selectionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update selections.
     */
    data: XOR<selectionsUpdateManyMutationInput, selectionsUncheckedUpdateManyInput>
    /**
     * Filter which selections to update
     */
    where?: selectionsWhereInput
    /**
     * Limit how many selections to update.
     */
    limit?: number
  }

  /**
   * selections upsert
   */
  export type selectionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the selections
     */
    select?: selectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the selections
     */
    omit?: selectionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: selectionsInclude<ExtArgs> | null
    /**
     * The filter to search for the selections to update in case it exists.
     */
    where: selectionsWhereUniqueInput
    /**
     * In case the selections found by the `where` argument doesn't exist, create a new selections with this data.
     */
    create: XOR<selectionsCreateInput, selectionsUncheckedCreateInput>
    /**
     * In case the selections was found with the provided `where` argument, update it with this data.
     */
    update: XOR<selectionsUpdateInput, selectionsUncheckedUpdateInput>
  }

  /**
   * selections delete
   */
  export type selectionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the selections
     */
    select?: selectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the selections
     */
    omit?: selectionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: selectionsInclude<ExtArgs> | null
    /**
     * Filter which selections to delete.
     */
    where: selectionsWhereUniqueInput
  }

  /**
   * selections deleteMany
   */
  export type selectionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which selections to delete
     */
    where?: selectionsWhereInput
    /**
     * Limit how many selections to delete.
     */
    limit?: number
  }

  /**
   * selections without action
   */
  export type selectionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the selections
     */
    select?: selectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the selections
     */
    omit?: selectionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: selectionsInclude<ExtArgs> | null
  }


  /**
   * Model sessions
   */

  export type AggregateSessions = {
    _count: SessionsCountAggregateOutputType | null
    _avg: SessionsAvgAggregateOutputType | null
    _sum: SessionsSumAggregateOutputType | null
    _min: SessionsMinAggregateOutputType | null
    _max: SessionsMaxAggregateOutputType | null
  }

  export type SessionsAvgAggregateOutputType = {
    last_activity: number | null
  }

  export type SessionsSumAggregateOutputType = {
    last_activity: number | null
  }

  export type SessionsMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    ip_address: string | null
    user_agent: string | null
    payload: string | null
    last_activity: number | null
  }

  export type SessionsMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    ip_address: string | null
    user_agent: string | null
    payload: string | null
    last_activity: number | null
  }

  export type SessionsCountAggregateOutputType = {
    id: number
    user_id: number
    ip_address: number
    user_agent: number
    payload: number
    last_activity: number
    _all: number
  }


  export type SessionsAvgAggregateInputType = {
    last_activity?: true
  }

  export type SessionsSumAggregateInputType = {
    last_activity?: true
  }

  export type SessionsMinAggregateInputType = {
    id?: true
    user_id?: true
    ip_address?: true
    user_agent?: true
    payload?: true
    last_activity?: true
  }

  export type SessionsMaxAggregateInputType = {
    id?: true
    user_id?: true
    ip_address?: true
    user_agent?: true
    payload?: true
    last_activity?: true
  }

  export type SessionsCountAggregateInputType = {
    id?: true
    user_id?: true
    ip_address?: true
    user_agent?: true
    payload?: true
    last_activity?: true
    _all?: true
  }

  export type SessionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sessions to aggregate.
     */
    where?: sessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sessions to fetch.
     */
    orderBy?: sessionsOrderByWithRelationInput | sessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: sessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sessions
    **/
    _count?: true | SessionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SessionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SessionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionsMaxAggregateInputType
  }

  export type GetSessionsAggregateType<T extends SessionsAggregateArgs> = {
        [P in keyof T & keyof AggregateSessions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSessions[P]>
      : GetScalarType<T[P], AggregateSessions[P]>
  }




  export type sessionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sessionsWhereInput
    orderBy?: sessionsOrderByWithAggregationInput | sessionsOrderByWithAggregationInput[]
    by: SessionsScalarFieldEnum[] | SessionsScalarFieldEnum
    having?: sessionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionsCountAggregateInputType | true
    _avg?: SessionsAvgAggregateInputType
    _sum?: SessionsSumAggregateInputType
    _min?: SessionsMinAggregateInputType
    _max?: SessionsMaxAggregateInputType
  }

  export type SessionsGroupByOutputType = {
    id: string
    user_id: string | null
    ip_address: string | null
    user_agent: string | null
    payload: string
    last_activity: number
    _count: SessionsCountAggregateOutputType | null
    _avg: SessionsAvgAggregateOutputType | null
    _sum: SessionsSumAggregateOutputType | null
    _min: SessionsMinAggregateOutputType | null
    _max: SessionsMaxAggregateOutputType | null
  }

  type GetSessionsGroupByPayload<T extends sessionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionsGroupByOutputType[P]>
            : GetScalarType<T[P], SessionsGroupByOutputType[P]>
        }
      >
    >


  export type sessionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    ip_address?: boolean
    user_agent?: boolean
    payload?: boolean
    last_activity?: boolean
  }, ExtArgs["result"]["sessions"]>



  export type sessionsSelectScalar = {
    id?: boolean
    user_id?: boolean
    ip_address?: boolean
    user_agent?: boolean
    payload?: boolean
    last_activity?: boolean
  }

  export type sessionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "ip_address" | "user_agent" | "payload" | "last_activity", ExtArgs["result"]["sessions"]>

  export type $sessionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "sessions"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string | null
      ip_address: string | null
      user_agent: string | null
      payload: string
      last_activity: number
    }, ExtArgs["result"]["sessions"]>
    composites: {}
  }

  type sessionsGetPayload<S extends boolean | null | undefined | sessionsDefaultArgs> = $Result.GetResult<Prisma.$sessionsPayload, S>

  type sessionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<sessionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionsCountAggregateInputType | true
    }

  export interface sessionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['sessions'], meta: { name: 'sessions' } }
    /**
     * Find zero or one Sessions that matches the filter.
     * @param {sessionsFindUniqueArgs} args - Arguments to find a Sessions
     * @example
     * // Get one Sessions
     * const sessions = await prisma.sessions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends sessionsFindUniqueArgs>(args: SelectSubset<T, sessionsFindUniqueArgs<ExtArgs>>): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sessions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {sessionsFindUniqueOrThrowArgs} args - Arguments to find a Sessions
     * @example
     * // Get one Sessions
     * const sessions = await prisma.sessions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends sessionsFindUniqueOrThrowArgs>(args: SelectSubset<T, sessionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionsFindFirstArgs} args - Arguments to find a Sessions
     * @example
     * // Get one Sessions
     * const sessions = await prisma.sessions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends sessionsFindFirstArgs>(args?: SelectSubset<T, sessionsFindFirstArgs<ExtArgs>>): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sessions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionsFindFirstOrThrowArgs} args - Arguments to find a Sessions
     * @example
     * // Get one Sessions
     * const sessions = await prisma.sessions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends sessionsFindFirstOrThrowArgs>(args?: SelectSubset<T, sessionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.sessions.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.sessions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionsWithIdOnly = await prisma.sessions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends sessionsFindManyArgs>(args?: SelectSubset<T, sessionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sessions.
     * @param {sessionsCreateArgs} args - Arguments to create a Sessions.
     * @example
     * // Create one Sessions
     * const Sessions = await prisma.sessions.create({
     *   data: {
     *     // ... data to create a Sessions
     *   }
     * })
     * 
     */
    create<T extends sessionsCreateArgs>(args: SelectSubset<T, sessionsCreateArgs<ExtArgs>>): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {sessionsCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const sessions = await prisma.sessions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends sessionsCreateManyArgs>(args?: SelectSubset<T, sessionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Sessions.
     * @param {sessionsDeleteArgs} args - Arguments to delete one Sessions.
     * @example
     * // Delete one Sessions
     * const Sessions = await prisma.sessions.delete({
     *   where: {
     *     // ... filter to delete one Sessions
     *   }
     * })
     * 
     */
    delete<T extends sessionsDeleteArgs>(args: SelectSubset<T, sessionsDeleteArgs<ExtArgs>>): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sessions.
     * @param {sessionsUpdateArgs} args - Arguments to update one Sessions.
     * @example
     * // Update one Sessions
     * const sessions = await prisma.sessions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends sessionsUpdateArgs>(args: SelectSubset<T, sessionsUpdateArgs<ExtArgs>>): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {sessionsDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.sessions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends sessionsDeleteManyArgs>(args?: SelectSubset<T, sessionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const sessions = await prisma.sessions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends sessionsUpdateManyArgs>(args: SelectSubset<T, sessionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Sessions.
     * @param {sessionsUpsertArgs} args - Arguments to update or create a Sessions.
     * @example
     * // Update or create a Sessions
     * const sessions = await prisma.sessions.upsert({
     *   create: {
     *     // ... data to create a Sessions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sessions we want to update
     *   }
     * })
     */
    upsert<T extends sessionsUpsertArgs>(args: SelectSubset<T, sessionsUpsertArgs<ExtArgs>>): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionsCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.sessions.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends sessionsCountArgs>(
      args?: Subset<T, sessionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionsAggregateArgs>(args: Subset<T, SessionsAggregateArgs>): Prisma.PrismaPromise<GetSessionsAggregateType<T>>

    /**
     * Group by Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends sessionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sessionsGroupByArgs['orderBy'] }
        : { orderBy?: sessionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, sessionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the sessions model
   */
  readonly fields: sessionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sessions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sessionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the sessions model
   */
  interface sessionsFieldRefs {
    readonly id: FieldRef<"sessions", 'String'>
    readonly user_id: FieldRef<"sessions", 'String'>
    readonly ip_address: FieldRef<"sessions", 'String'>
    readonly user_agent: FieldRef<"sessions", 'String'>
    readonly payload: FieldRef<"sessions", 'String'>
    readonly last_activity: FieldRef<"sessions", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * sessions findUnique
   */
  export type sessionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * Filter, which sessions to fetch.
     */
    where: sessionsWhereUniqueInput
  }

  /**
   * sessions findUniqueOrThrow
   */
  export type sessionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * Filter, which sessions to fetch.
     */
    where: sessionsWhereUniqueInput
  }

  /**
   * sessions findFirst
   */
  export type sessionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * Filter, which sessions to fetch.
     */
    where?: sessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sessions to fetch.
     */
    orderBy?: sessionsOrderByWithRelationInput | sessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sessions.
     */
    cursor?: sessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sessions.
     */
    distinct?: SessionsScalarFieldEnum | SessionsScalarFieldEnum[]
  }

  /**
   * sessions findFirstOrThrow
   */
  export type sessionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * Filter, which sessions to fetch.
     */
    where?: sessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sessions to fetch.
     */
    orderBy?: sessionsOrderByWithRelationInput | sessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sessions.
     */
    cursor?: sessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sessions.
     */
    distinct?: SessionsScalarFieldEnum | SessionsScalarFieldEnum[]
  }

  /**
   * sessions findMany
   */
  export type sessionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * Filter, which sessions to fetch.
     */
    where?: sessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sessions to fetch.
     */
    orderBy?: sessionsOrderByWithRelationInput | sessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sessions.
     */
    cursor?: sessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sessions.
     */
    skip?: number
    distinct?: SessionsScalarFieldEnum | SessionsScalarFieldEnum[]
  }

  /**
   * sessions create
   */
  export type sessionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * The data needed to create a sessions.
     */
    data: XOR<sessionsCreateInput, sessionsUncheckedCreateInput>
  }

  /**
   * sessions createMany
   */
  export type sessionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sessions.
     */
    data: sessionsCreateManyInput | sessionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * sessions update
   */
  export type sessionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * The data needed to update a sessions.
     */
    data: XOR<sessionsUpdateInput, sessionsUncheckedUpdateInput>
    /**
     * Choose, which sessions to update.
     */
    where: sessionsWhereUniqueInput
  }

  /**
   * sessions updateMany
   */
  export type sessionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sessions.
     */
    data: XOR<sessionsUpdateManyMutationInput, sessionsUncheckedUpdateManyInput>
    /**
     * Filter which sessions to update
     */
    where?: sessionsWhereInput
    /**
     * Limit how many sessions to update.
     */
    limit?: number
  }

  /**
   * sessions upsert
   */
  export type sessionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * The filter to search for the sessions to update in case it exists.
     */
    where: sessionsWhereUniqueInput
    /**
     * In case the sessions found by the `where` argument doesn't exist, create a new sessions with this data.
     */
    create: XOR<sessionsCreateInput, sessionsUncheckedCreateInput>
    /**
     * In case the sessions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sessionsUpdateInput, sessionsUncheckedUpdateInput>
  }

  /**
   * sessions delete
   */
  export type sessionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * Filter which sessions to delete.
     */
    where: sessionsWhereUniqueInput
  }

  /**
   * sessions deleteMany
   */
  export type sessionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sessions to delete
     */
    where?: sessionsWhereInput
    /**
     * Limit how many sessions to delete.
     */
    limit?: number
  }

  /**
   * sessions without action
   */
  export type sessionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    photo: string | null
    name: string | null
    phone: string | null
    email: string | null
    address: string | null
    description: string | null
    password: string | null
    role: $Enums.users_role | null
    verified_at: Date | null
    remember_token: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    photo: string | null
    name: string | null
    phone: string | null
    email: string | null
    address: string | null
    description: string | null
    password: string | null
    role: $Enums.users_role | null
    verified_at: Date | null
    remember_token: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    photo: number
    name: number
    phone: number
    email: number
    address: number
    description: number
    password: number
    role: number
    verified_at: number
    remember_token: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    id?: true
    photo?: true
    name?: true
    phone?: true
    email?: true
    address?: true
    description?: true
    password?: true
    role?: true
    verified_at?: true
    remember_token?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    photo?: true
    name?: true
    phone?: true
    email?: true
    address?: true
    description?: true
    password?: true
    role?: true
    verified_at?: true
    remember_token?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    photo?: true
    name?: true
    phone?: true
    email?: true
    address?: true
    description?: true
    password?: true
    role?: true
    verified_at?: true
    remember_token?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: string
    photo: string | null
    name: string
    phone: string
    email: string
    address: string | null
    description: string | null
    password: string
    role: $Enums.users_role
    verified_at: Date | null
    remember_token: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    photo?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    address?: boolean
    description?: boolean
    password?: boolean
    role?: boolean
    verified_at?: boolean
    remember_token?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    applicants?: boolean | users$applicantsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>



  export type usersSelectScalar = {
    id?: boolean
    photo?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    address?: boolean
    description?: boolean
    password?: boolean
    role?: boolean
    verified_at?: boolean
    remember_token?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "photo" | "name" | "phone" | "email" | "address" | "description" | "password" | "role" | "verified_at" | "remember_token" | "created_at" | "updated_at" | "deleted_at", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applicants?: boolean | users$applicantsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      applicants: Prisma.$applicantsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      photo: string | null
      name: string
      phone: string
      email: string
      address: string | null
      description: string | null
      password: string
      role: $Enums.users_role
      verified_at: Date | null
      remember_token: string | null
      created_at: Date | null
      updated_at: Date | null
      deleted_at: Date | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    applicants<T extends users$applicantsArgs<ExtArgs> = {}>(args?: Subset<T, users$applicantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$applicantsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'String'>
    readonly photo: FieldRef<"users", 'String'>
    readonly name: FieldRef<"users", 'String'>
    readonly phone: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly address: FieldRef<"users", 'String'>
    readonly description: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly role: FieldRef<"users", 'users_role'>
    readonly verified_at: FieldRef<"users", 'DateTime'>
    readonly remember_token: FieldRef<"users", 'String'>
    readonly created_at: FieldRef<"users", 'DateTime'>
    readonly updated_at: FieldRef<"users", 'DateTime'>
    readonly deleted_at: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.applicants
   */
  export type users$applicantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the applicants
     */
    select?: applicantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the applicants
     */
    omit?: applicantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: applicantsInclude<ExtArgs> | null
    where?: applicantsWhereInput
    orderBy?: applicantsOrderByWithRelationInput | applicantsOrderByWithRelationInput[]
    cursor?: applicantsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApplicantsScalarFieldEnum | ApplicantsScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Model job_post_categories
   */

  export type AggregateJob_post_categories = {
    _count: Job_post_categoriesCountAggregateOutputType | null
    _avg: Job_post_categoriesAvgAggregateOutputType | null
    _sum: Job_post_categoriesSumAggregateOutputType | null
    _min: Job_post_categoriesMinAggregateOutputType | null
    _max: Job_post_categoriesMaxAggregateOutputType | null
  }

  export type Job_post_categoriesAvgAggregateOutputType = {
    required_count: number | null
  }

  export type Job_post_categoriesSumAggregateOutputType = {
    required_count: number | null
  }

  export type Job_post_categoriesMinAggregateOutputType = {
    id: string | null
    job_category_id: string | null
    job_post_id: string | null
    type: $Enums.job_post_categories_type | null
    required_count: number | null
    description: string | null
    requirements: string | null
    benefits: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type Job_post_categoriesMaxAggregateOutputType = {
    id: string | null
    job_category_id: string | null
    job_post_id: string | null
    type: $Enums.job_post_categories_type | null
    required_count: number | null
    description: string | null
    requirements: string | null
    benefits: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type Job_post_categoriesCountAggregateOutputType = {
    id: number
    job_category_id: number
    job_post_id: number
    type: number
    required_count: number
    description: number
    requirements: number
    benefits: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type Job_post_categoriesAvgAggregateInputType = {
    required_count?: true
  }

  export type Job_post_categoriesSumAggregateInputType = {
    required_count?: true
  }

  export type Job_post_categoriesMinAggregateInputType = {
    id?: true
    job_category_id?: true
    job_post_id?: true
    type?: true
    required_count?: true
    description?: true
    requirements?: true
    benefits?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type Job_post_categoriesMaxAggregateInputType = {
    id?: true
    job_category_id?: true
    job_post_id?: true
    type?: true
    required_count?: true
    description?: true
    requirements?: true
    benefits?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type Job_post_categoriesCountAggregateInputType = {
    id?: true
    job_category_id?: true
    job_post_id?: true
    type?: true
    required_count?: true
    description?: true
    requirements?: true
    benefits?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type Job_post_categoriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which job_post_categories to aggregate.
     */
    where?: job_post_categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of job_post_categories to fetch.
     */
    orderBy?: job_post_categoriesOrderByWithRelationInput | job_post_categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: job_post_categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` job_post_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` job_post_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned job_post_categories
    **/
    _count?: true | Job_post_categoriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Job_post_categoriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Job_post_categoriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Job_post_categoriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Job_post_categoriesMaxAggregateInputType
  }

  export type GetJob_post_categoriesAggregateType<T extends Job_post_categoriesAggregateArgs> = {
        [P in keyof T & keyof AggregateJob_post_categories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJob_post_categories[P]>
      : GetScalarType<T[P], AggregateJob_post_categories[P]>
  }




  export type job_post_categoriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: job_post_categoriesWhereInput
    orderBy?: job_post_categoriesOrderByWithAggregationInput | job_post_categoriesOrderByWithAggregationInput[]
    by: Job_post_categoriesScalarFieldEnum[] | Job_post_categoriesScalarFieldEnum
    having?: job_post_categoriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Job_post_categoriesCountAggregateInputType | true
    _avg?: Job_post_categoriesAvgAggregateInputType
    _sum?: Job_post_categoriesSumAggregateInputType
    _min?: Job_post_categoriesMinAggregateInputType
    _max?: Job_post_categoriesMaxAggregateInputType
  }

  export type Job_post_categoriesGroupByOutputType = {
    id: string
    job_category_id: string
    job_post_id: string
    type: $Enums.job_post_categories_type
    required_count: number
    description: string | null
    requirements: string | null
    benefits: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    _count: Job_post_categoriesCountAggregateOutputType | null
    _avg: Job_post_categoriesAvgAggregateOutputType | null
    _sum: Job_post_categoriesSumAggregateOutputType | null
    _min: Job_post_categoriesMinAggregateOutputType | null
    _max: Job_post_categoriesMaxAggregateOutputType | null
  }

  type GetJob_post_categoriesGroupByPayload<T extends job_post_categoriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Job_post_categoriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Job_post_categoriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Job_post_categoriesGroupByOutputType[P]>
            : GetScalarType<T[P], Job_post_categoriesGroupByOutputType[P]>
        }
      >
    >


  export type job_post_categoriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    job_category_id?: boolean
    job_post_id?: boolean
    type?: boolean
    required_count?: boolean
    description?: boolean
    requirements?: boolean
    benefits?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    applicants?: boolean | job_post_categories$applicantsArgs<ExtArgs>
    job_categories?: boolean | job_categoriesDefaultArgs<ExtArgs>
    job_posts?: boolean | job_postsDefaultArgs<ExtArgs>
    selections?: boolean | job_post_categories$selectionsArgs<ExtArgs>
    _count?: boolean | Job_post_categoriesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["job_post_categories"]>



  export type job_post_categoriesSelectScalar = {
    id?: boolean
    job_category_id?: boolean
    job_post_id?: boolean
    type?: boolean
    required_count?: boolean
    description?: boolean
    requirements?: boolean
    benefits?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type job_post_categoriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "job_category_id" | "job_post_id" | "type" | "required_count" | "description" | "requirements" | "benefits" | "created_at" | "updated_at" | "deleted_at", ExtArgs["result"]["job_post_categories"]>
  export type job_post_categoriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applicants?: boolean | job_post_categories$applicantsArgs<ExtArgs>
    job_categories?: boolean | job_categoriesDefaultArgs<ExtArgs>
    job_posts?: boolean | job_postsDefaultArgs<ExtArgs>
    selections?: boolean | job_post_categories$selectionsArgs<ExtArgs>
    _count?: boolean | Job_post_categoriesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $job_post_categoriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "job_post_categories"
    objects: {
      applicants: Prisma.$applicantsPayload<ExtArgs>[]
      job_categories: Prisma.$job_categoriesPayload<ExtArgs>
      job_posts: Prisma.$job_postsPayload<ExtArgs>
      selections: Prisma.$selectionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      job_category_id: string
      job_post_id: string
      type: $Enums.job_post_categories_type
      required_count: number
      description: string | null
      requirements: string | null
      benefits: string | null
      created_at: Date | null
      updated_at: Date | null
      deleted_at: Date | null
    }, ExtArgs["result"]["job_post_categories"]>
    composites: {}
  }

  type job_post_categoriesGetPayload<S extends boolean | null | undefined | job_post_categoriesDefaultArgs> = $Result.GetResult<Prisma.$job_post_categoriesPayload, S>

  type job_post_categoriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<job_post_categoriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Job_post_categoriesCountAggregateInputType | true
    }

  export interface job_post_categoriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['job_post_categories'], meta: { name: 'job_post_categories' } }
    /**
     * Find zero or one Job_post_categories that matches the filter.
     * @param {job_post_categoriesFindUniqueArgs} args - Arguments to find a Job_post_categories
     * @example
     * // Get one Job_post_categories
     * const job_post_categories = await prisma.job_post_categories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends job_post_categoriesFindUniqueArgs>(args: SelectSubset<T, job_post_categoriesFindUniqueArgs<ExtArgs>>): Prisma__job_post_categoriesClient<$Result.GetResult<Prisma.$job_post_categoriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Job_post_categories that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {job_post_categoriesFindUniqueOrThrowArgs} args - Arguments to find a Job_post_categories
     * @example
     * // Get one Job_post_categories
     * const job_post_categories = await prisma.job_post_categories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends job_post_categoriesFindUniqueOrThrowArgs>(args: SelectSubset<T, job_post_categoriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__job_post_categoriesClient<$Result.GetResult<Prisma.$job_post_categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Job_post_categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {job_post_categoriesFindFirstArgs} args - Arguments to find a Job_post_categories
     * @example
     * // Get one Job_post_categories
     * const job_post_categories = await prisma.job_post_categories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends job_post_categoriesFindFirstArgs>(args?: SelectSubset<T, job_post_categoriesFindFirstArgs<ExtArgs>>): Prisma__job_post_categoriesClient<$Result.GetResult<Prisma.$job_post_categoriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Job_post_categories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {job_post_categoriesFindFirstOrThrowArgs} args - Arguments to find a Job_post_categories
     * @example
     * // Get one Job_post_categories
     * const job_post_categories = await prisma.job_post_categories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends job_post_categoriesFindFirstOrThrowArgs>(args?: SelectSubset<T, job_post_categoriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__job_post_categoriesClient<$Result.GetResult<Prisma.$job_post_categoriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Job_post_categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {job_post_categoriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Job_post_categories
     * const job_post_categories = await prisma.job_post_categories.findMany()
     * 
     * // Get first 10 Job_post_categories
     * const job_post_categories = await prisma.job_post_categories.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const job_post_categoriesWithIdOnly = await prisma.job_post_categories.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends job_post_categoriesFindManyArgs>(args?: SelectSubset<T, job_post_categoriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$job_post_categoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Job_post_categories.
     * @param {job_post_categoriesCreateArgs} args - Arguments to create a Job_post_categories.
     * @example
     * // Create one Job_post_categories
     * const Job_post_categories = await prisma.job_post_categories.create({
     *   data: {
     *     // ... data to create a Job_post_categories
     *   }
     * })
     * 
     */
    create<T extends job_post_categoriesCreateArgs>(args: SelectSubset<T, job_post_categoriesCreateArgs<ExtArgs>>): Prisma__job_post_categoriesClient<$Result.GetResult<Prisma.$job_post_categoriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Job_post_categories.
     * @param {job_post_categoriesCreateManyArgs} args - Arguments to create many Job_post_categories.
     * @example
     * // Create many Job_post_categories
     * const job_post_categories = await prisma.job_post_categories.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends job_post_categoriesCreateManyArgs>(args?: SelectSubset<T, job_post_categoriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Job_post_categories.
     * @param {job_post_categoriesDeleteArgs} args - Arguments to delete one Job_post_categories.
     * @example
     * // Delete one Job_post_categories
     * const Job_post_categories = await prisma.job_post_categories.delete({
     *   where: {
     *     // ... filter to delete one Job_post_categories
     *   }
     * })
     * 
     */
    delete<T extends job_post_categoriesDeleteArgs>(args: SelectSubset<T, job_post_categoriesDeleteArgs<ExtArgs>>): Prisma__job_post_categoriesClient<$Result.GetResult<Prisma.$job_post_categoriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Job_post_categories.
     * @param {job_post_categoriesUpdateArgs} args - Arguments to update one Job_post_categories.
     * @example
     * // Update one Job_post_categories
     * const job_post_categories = await prisma.job_post_categories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends job_post_categoriesUpdateArgs>(args: SelectSubset<T, job_post_categoriesUpdateArgs<ExtArgs>>): Prisma__job_post_categoriesClient<$Result.GetResult<Prisma.$job_post_categoriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Job_post_categories.
     * @param {job_post_categoriesDeleteManyArgs} args - Arguments to filter Job_post_categories to delete.
     * @example
     * // Delete a few Job_post_categories
     * const { count } = await prisma.job_post_categories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends job_post_categoriesDeleteManyArgs>(args?: SelectSubset<T, job_post_categoriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Job_post_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {job_post_categoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Job_post_categories
     * const job_post_categories = await prisma.job_post_categories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends job_post_categoriesUpdateManyArgs>(args: SelectSubset<T, job_post_categoriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Job_post_categories.
     * @param {job_post_categoriesUpsertArgs} args - Arguments to update or create a Job_post_categories.
     * @example
     * // Update or create a Job_post_categories
     * const job_post_categories = await prisma.job_post_categories.upsert({
     *   create: {
     *     // ... data to create a Job_post_categories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Job_post_categories we want to update
     *   }
     * })
     */
    upsert<T extends job_post_categoriesUpsertArgs>(args: SelectSubset<T, job_post_categoriesUpsertArgs<ExtArgs>>): Prisma__job_post_categoriesClient<$Result.GetResult<Prisma.$job_post_categoriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Job_post_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {job_post_categoriesCountArgs} args - Arguments to filter Job_post_categories to count.
     * @example
     * // Count the number of Job_post_categories
     * const count = await prisma.job_post_categories.count({
     *   where: {
     *     // ... the filter for the Job_post_categories we want to count
     *   }
     * })
    **/
    count<T extends job_post_categoriesCountArgs>(
      args?: Subset<T, job_post_categoriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Job_post_categoriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Job_post_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Job_post_categoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Job_post_categoriesAggregateArgs>(args: Subset<T, Job_post_categoriesAggregateArgs>): Prisma.PrismaPromise<GetJob_post_categoriesAggregateType<T>>

    /**
     * Group by Job_post_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {job_post_categoriesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends job_post_categoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: job_post_categoriesGroupByArgs['orderBy'] }
        : { orderBy?: job_post_categoriesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, job_post_categoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJob_post_categoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the job_post_categories model
   */
  readonly fields: job_post_categoriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for job_post_categories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__job_post_categoriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    applicants<T extends job_post_categories$applicantsArgs<ExtArgs> = {}>(args?: Subset<T, job_post_categories$applicantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$applicantsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    job_categories<T extends job_categoriesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, job_categoriesDefaultArgs<ExtArgs>>): Prisma__job_categoriesClient<$Result.GetResult<Prisma.$job_categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    job_posts<T extends job_postsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, job_postsDefaultArgs<ExtArgs>>): Prisma__job_postsClient<$Result.GetResult<Prisma.$job_postsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    selections<T extends job_post_categories$selectionsArgs<ExtArgs> = {}>(args?: Subset<T, job_post_categories$selectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$selectionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the job_post_categories model
   */
  interface job_post_categoriesFieldRefs {
    readonly id: FieldRef<"job_post_categories", 'String'>
    readonly job_category_id: FieldRef<"job_post_categories", 'String'>
    readonly job_post_id: FieldRef<"job_post_categories", 'String'>
    readonly type: FieldRef<"job_post_categories", 'job_post_categories_type'>
    readonly required_count: FieldRef<"job_post_categories", 'Int'>
    readonly description: FieldRef<"job_post_categories", 'String'>
    readonly requirements: FieldRef<"job_post_categories", 'String'>
    readonly benefits: FieldRef<"job_post_categories", 'String'>
    readonly created_at: FieldRef<"job_post_categories", 'DateTime'>
    readonly updated_at: FieldRef<"job_post_categories", 'DateTime'>
    readonly deleted_at: FieldRef<"job_post_categories", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * job_post_categories findUnique
   */
  export type job_post_categoriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_post_categories
     */
    select?: job_post_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the job_post_categories
     */
    omit?: job_post_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: job_post_categoriesInclude<ExtArgs> | null
    /**
     * Filter, which job_post_categories to fetch.
     */
    where: job_post_categoriesWhereUniqueInput
  }

  /**
   * job_post_categories findUniqueOrThrow
   */
  export type job_post_categoriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_post_categories
     */
    select?: job_post_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the job_post_categories
     */
    omit?: job_post_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: job_post_categoriesInclude<ExtArgs> | null
    /**
     * Filter, which job_post_categories to fetch.
     */
    where: job_post_categoriesWhereUniqueInput
  }

  /**
   * job_post_categories findFirst
   */
  export type job_post_categoriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_post_categories
     */
    select?: job_post_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the job_post_categories
     */
    omit?: job_post_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: job_post_categoriesInclude<ExtArgs> | null
    /**
     * Filter, which job_post_categories to fetch.
     */
    where?: job_post_categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of job_post_categories to fetch.
     */
    orderBy?: job_post_categoriesOrderByWithRelationInput | job_post_categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for job_post_categories.
     */
    cursor?: job_post_categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` job_post_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` job_post_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of job_post_categories.
     */
    distinct?: Job_post_categoriesScalarFieldEnum | Job_post_categoriesScalarFieldEnum[]
  }

  /**
   * job_post_categories findFirstOrThrow
   */
  export type job_post_categoriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_post_categories
     */
    select?: job_post_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the job_post_categories
     */
    omit?: job_post_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: job_post_categoriesInclude<ExtArgs> | null
    /**
     * Filter, which job_post_categories to fetch.
     */
    where?: job_post_categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of job_post_categories to fetch.
     */
    orderBy?: job_post_categoriesOrderByWithRelationInput | job_post_categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for job_post_categories.
     */
    cursor?: job_post_categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` job_post_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` job_post_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of job_post_categories.
     */
    distinct?: Job_post_categoriesScalarFieldEnum | Job_post_categoriesScalarFieldEnum[]
  }

  /**
   * job_post_categories findMany
   */
  export type job_post_categoriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_post_categories
     */
    select?: job_post_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the job_post_categories
     */
    omit?: job_post_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: job_post_categoriesInclude<ExtArgs> | null
    /**
     * Filter, which job_post_categories to fetch.
     */
    where?: job_post_categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of job_post_categories to fetch.
     */
    orderBy?: job_post_categoriesOrderByWithRelationInput | job_post_categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing job_post_categories.
     */
    cursor?: job_post_categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` job_post_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` job_post_categories.
     */
    skip?: number
    distinct?: Job_post_categoriesScalarFieldEnum | Job_post_categoriesScalarFieldEnum[]
  }

  /**
   * job_post_categories create
   */
  export type job_post_categoriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_post_categories
     */
    select?: job_post_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the job_post_categories
     */
    omit?: job_post_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: job_post_categoriesInclude<ExtArgs> | null
    /**
     * The data needed to create a job_post_categories.
     */
    data: XOR<job_post_categoriesCreateInput, job_post_categoriesUncheckedCreateInput>
  }

  /**
   * job_post_categories createMany
   */
  export type job_post_categoriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many job_post_categories.
     */
    data: job_post_categoriesCreateManyInput | job_post_categoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * job_post_categories update
   */
  export type job_post_categoriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_post_categories
     */
    select?: job_post_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the job_post_categories
     */
    omit?: job_post_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: job_post_categoriesInclude<ExtArgs> | null
    /**
     * The data needed to update a job_post_categories.
     */
    data: XOR<job_post_categoriesUpdateInput, job_post_categoriesUncheckedUpdateInput>
    /**
     * Choose, which job_post_categories to update.
     */
    where: job_post_categoriesWhereUniqueInput
  }

  /**
   * job_post_categories updateMany
   */
  export type job_post_categoriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update job_post_categories.
     */
    data: XOR<job_post_categoriesUpdateManyMutationInput, job_post_categoriesUncheckedUpdateManyInput>
    /**
     * Filter which job_post_categories to update
     */
    where?: job_post_categoriesWhereInput
    /**
     * Limit how many job_post_categories to update.
     */
    limit?: number
  }

  /**
   * job_post_categories upsert
   */
  export type job_post_categoriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_post_categories
     */
    select?: job_post_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the job_post_categories
     */
    omit?: job_post_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: job_post_categoriesInclude<ExtArgs> | null
    /**
     * The filter to search for the job_post_categories to update in case it exists.
     */
    where: job_post_categoriesWhereUniqueInput
    /**
     * In case the job_post_categories found by the `where` argument doesn't exist, create a new job_post_categories with this data.
     */
    create: XOR<job_post_categoriesCreateInput, job_post_categoriesUncheckedCreateInput>
    /**
     * In case the job_post_categories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<job_post_categoriesUpdateInput, job_post_categoriesUncheckedUpdateInput>
  }

  /**
   * job_post_categories delete
   */
  export type job_post_categoriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_post_categories
     */
    select?: job_post_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the job_post_categories
     */
    omit?: job_post_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: job_post_categoriesInclude<ExtArgs> | null
    /**
     * Filter which job_post_categories to delete.
     */
    where: job_post_categoriesWhereUniqueInput
  }

  /**
   * job_post_categories deleteMany
   */
  export type job_post_categoriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which job_post_categories to delete
     */
    where?: job_post_categoriesWhereInput
    /**
     * Limit how many job_post_categories to delete.
     */
    limit?: number
  }

  /**
   * job_post_categories.applicants
   */
  export type job_post_categories$applicantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the applicants
     */
    select?: applicantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the applicants
     */
    omit?: applicantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: applicantsInclude<ExtArgs> | null
    where?: applicantsWhereInput
    orderBy?: applicantsOrderByWithRelationInput | applicantsOrderByWithRelationInput[]
    cursor?: applicantsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApplicantsScalarFieldEnum | ApplicantsScalarFieldEnum[]
  }

  /**
   * job_post_categories.selections
   */
  export type job_post_categories$selectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the selections
     */
    select?: selectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the selections
     */
    omit?: selectionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: selectionsInclude<ExtArgs> | null
    where?: selectionsWhereInput
    orderBy?: selectionsOrderByWithRelationInput | selectionsOrderByWithRelationInput[]
    cursor?: selectionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SelectionsScalarFieldEnum | SelectionsScalarFieldEnum[]
  }

  /**
   * job_post_categories without action
   */
  export type job_post_categoriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_post_categories
     */
    select?: job_post_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the job_post_categories
     */
    omit?: job_post_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: job_post_categoriesInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ApplicantsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    job_post_category_id: 'job_post_category_id',
    status: 'status',
    cv: 'cv',
    national_identity_card: 'national_identity_card',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type ApplicantsScalarFieldEnum = (typeof ApplicantsScalarFieldEnum)[keyof typeof ApplicantsScalarFieldEnum]


  export const CacheScalarFieldEnum: {
    key: 'key',
    value: 'value',
    expiration: 'expiration'
  };

  export type CacheScalarFieldEnum = (typeof CacheScalarFieldEnum)[keyof typeof CacheScalarFieldEnum]


  export const Cache_locksScalarFieldEnum: {
    key: 'key',
    owner: 'owner',
    expiration: 'expiration'
  };

  export type Cache_locksScalarFieldEnum = (typeof Cache_locksScalarFieldEnum)[keyof typeof Cache_locksScalarFieldEnum]


  export const CompaniesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    website: 'website',
    logo: 'logo',
    location: 'location',
    description: 'description',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type CompaniesScalarFieldEnum = (typeof CompaniesScalarFieldEnum)[keyof typeof CompaniesScalarFieldEnum]


  export const Failed_jobsScalarFieldEnum: {
    id: 'id',
    uuid: 'uuid',
    connection: 'connection',
    queue: 'queue',
    payload: 'payload',
    exception: 'exception',
    failed_at: 'failed_at'
  };

  export type Failed_jobsScalarFieldEnum = (typeof Failed_jobsScalarFieldEnum)[keyof typeof Failed_jobsScalarFieldEnum]


  export const Job_batchesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    total_jobs: 'total_jobs',
    pending_jobs: 'pending_jobs',
    failed_jobs: 'failed_jobs',
    failed_job_ids: 'failed_job_ids',
    options: 'options',
    cancelled_at: 'cancelled_at',
    created_at: 'created_at',
    finished_at: 'finished_at'
  };

  export type Job_batchesScalarFieldEnum = (typeof Job_batchesScalarFieldEnum)[keyof typeof Job_batchesScalarFieldEnum]


  export const Job_categoriesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type Job_categoriesScalarFieldEnum = (typeof Job_categoriesScalarFieldEnum)[keyof typeof Job_categoriesScalarFieldEnum]


  export const Job_postsScalarFieldEnum: {
    id: 'id',
    company_id: 'company_id',
    title: 'title',
    thumbnail: 'thumbnail',
    status: 'status',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type Job_postsScalarFieldEnum = (typeof Job_postsScalarFieldEnum)[keyof typeof Job_postsScalarFieldEnum]


  export const JobsScalarFieldEnum: {
    id: 'id',
    queue: 'queue',
    payload: 'payload',
    attempts: 'attempts',
    reserved_at: 'reserved_at',
    available_at: 'available_at',
    created_at: 'created_at'
  };

  export type JobsScalarFieldEnum = (typeof JobsScalarFieldEnum)[keyof typeof JobsScalarFieldEnum]


  export const MigrationsScalarFieldEnum: {
    id: 'id',
    migration: 'migration',
    batch: 'batch'
  };

  export type MigrationsScalarFieldEnum = (typeof MigrationsScalarFieldEnum)[keyof typeof MigrationsScalarFieldEnum]


  export const SelectionsScalarFieldEnum: {
    id: 'id',
    applicant_id: 'applicant_id',
    job_post_category_id: 'job_post_category_id',
    stage: 'stage',
    status: 'status',
    attachment: 'attachment',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type SelectionsScalarFieldEnum = (typeof SelectionsScalarFieldEnum)[keyof typeof SelectionsScalarFieldEnum]


  export const SessionsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    ip_address: 'ip_address',
    user_agent: 'user_agent',
    payload: 'payload',
    last_activity: 'last_activity'
  };

  export type SessionsScalarFieldEnum = (typeof SessionsScalarFieldEnum)[keyof typeof SessionsScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    photo: 'photo',
    name: 'name',
    phone: 'phone',
    email: 'email',
    address: 'address',
    description: 'description',
    password: 'password',
    role: 'role',
    verified_at: 'verified_at',
    remember_token: 'remember_token',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const Job_post_categoriesScalarFieldEnum: {
    id: 'id',
    job_category_id: 'job_category_id',
    job_post_id: 'job_post_id',
    type: 'type',
    required_count: 'required_count',
    description: 'description',
    requirements: 'requirements',
    benefits: 'benefits',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type Job_post_categoriesScalarFieldEnum = (typeof Job_post_categoriesScalarFieldEnum)[keyof typeof Job_post_categoriesScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const applicantsOrderByRelevanceFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    job_post_category_id: 'job_post_category_id',
    cv: 'cv',
    national_identity_card: 'national_identity_card'
  };

  export type applicantsOrderByRelevanceFieldEnum = (typeof applicantsOrderByRelevanceFieldEnum)[keyof typeof applicantsOrderByRelevanceFieldEnum]


  export const cacheOrderByRelevanceFieldEnum: {
    key: 'key',
    value: 'value'
  };

  export type cacheOrderByRelevanceFieldEnum = (typeof cacheOrderByRelevanceFieldEnum)[keyof typeof cacheOrderByRelevanceFieldEnum]


  export const cache_locksOrderByRelevanceFieldEnum: {
    key: 'key',
    owner: 'owner'
  };

  export type cache_locksOrderByRelevanceFieldEnum = (typeof cache_locksOrderByRelevanceFieldEnum)[keyof typeof cache_locksOrderByRelevanceFieldEnum]


  export const companiesOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    website: 'website',
    logo: 'logo',
    location: 'location',
    description: 'description'
  };

  export type companiesOrderByRelevanceFieldEnum = (typeof companiesOrderByRelevanceFieldEnum)[keyof typeof companiesOrderByRelevanceFieldEnum]


  export const failed_jobsOrderByRelevanceFieldEnum: {
    uuid: 'uuid',
    connection: 'connection',
    queue: 'queue',
    payload: 'payload',
    exception: 'exception'
  };

  export type failed_jobsOrderByRelevanceFieldEnum = (typeof failed_jobsOrderByRelevanceFieldEnum)[keyof typeof failed_jobsOrderByRelevanceFieldEnum]


  export const job_batchesOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    failed_job_ids: 'failed_job_ids',
    options: 'options'
  };

  export type job_batchesOrderByRelevanceFieldEnum = (typeof job_batchesOrderByRelevanceFieldEnum)[keyof typeof job_batchesOrderByRelevanceFieldEnum]


  export const job_categoriesOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type job_categoriesOrderByRelevanceFieldEnum = (typeof job_categoriesOrderByRelevanceFieldEnum)[keyof typeof job_categoriesOrderByRelevanceFieldEnum]


  export const job_postsOrderByRelevanceFieldEnum: {
    id: 'id',
    company_id: 'company_id',
    title: 'title',
    thumbnail: 'thumbnail'
  };

  export type job_postsOrderByRelevanceFieldEnum = (typeof job_postsOrderByRelevanceFieldEnum)[keyof typeof job_postsOrderByRelevanceFieldEnum]


  export const jobsOrderByRelevanceFieldEnum: {
    queue: 'queue',
    payload: 'payload'
  };

  export type jobsOrderByRelevanceFieldEnum = (typeof jobsOrderByRelevanceFieldEnum)[keyof typeof jobsOrderByRelevanceFieldEnum]


  export const migrationsOrderByRelevanceFieldEnum: {
    migration: 'migration'
  };

  export type migrationsOrderByRelevanceFieldEnum = (typeof migrationsOrderByRelevanceFieldEnum)[keyof typeof migrationsOrderByRelevanceFieldEnum]


  export const selectionsOrderByRelevanceFieldEnum: {
    id: 'id',
    applicant_id: 'applicant_id',
    job_post_category_id: 'job_post_category_id',
    attachment: 'attachment'
  };

  export type selectionsOrderByRelevanceFieldEnum = (typeof selectionsOrderByRelevanceFieldEnum)[keyof typeof selectionsOrderByRelevanceFieldEnum]


  export const sessionsOrderByRelevanceFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    ip_address: 'ip_address',
    user_agent: 'user_agent',
    payload: 'payload'
  };

  export type sessionsOrderByRelevanceFieldEnum = (typeof sessionsOrderByRelevanceFieldEnum)[keyof typeof sessionsOrderByRelevanceFieldEnum]


  export const usersOrderByRelevanceFieldEnum: {
    id: 'id',
    photo: 'photo',
    name: 'name',
    phone: 'phone',
    email: 'email',
    address: 'address',
    description: 'description',
    password: 'password',
    remember_token: 'remember_token'
  };

  export type usersOrderByRelevanceFieldEnum = (typeof usersOrderByRelevanceFieldEnum)[keyof typeof usersOrderByRelevanceFieldEnum]


  export const job_post_categoriesOrderByRelevanceFieldEnum: {
    id: 'id',
    job_category_id: 'job_category_id',
    job_post_id: 'job_post_id',
    description: 'description',
    requirements: 'requirements',
    benefits: 'benefits'
  };

  export type job_post_categoriesOrderByRelevanceFieldEnum = (typeof job_post_categoriesOrderByRelevanceFieldEnum)[keyof typeof job_post_categoriesOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'applicants_status'
   */
  export type Enumapplicants_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'applicants_status'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'job_posts_status'
   */
  export type Enumjob_posts_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'job_posts_status'>
    


  /**
   * Reference to a field of type 'selections_stage'
   */
  export type Enumselections_stageFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'selections_stage'>
    


  /**
   * Reference to a field of type 'selections_status'
   */
  export type Enumselections_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'selections_status'>
    


  /**
   * Reference to a field of type 'users_role'
   */
  export type Enumusers_roleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'users_role'>
    


  /**
   * Reference to a field of type 'job_post_categories_type'
   */
  export type Enumjob_post_categories_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'job_post_categories_type'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type applicantsWhereInput = {
    AND?: applicantsWhereInput | applicantsWhereInput[]
    OR?: applicantsWhereInput[]
    NOT?: applicantsWhereInput | applicantsWhereInput[]
    id?: StringFilter<"applicants"> | string
    user_id?: StringFilter<"applicants"> | string
    job_post_category_id?: StringFilter<"applicants"> | string
    status?: Enumapplicants_statusFilter<"applicants"> | $Enums.applicants_status
    cv?: StringFilter<"applicants"> | string
    national_identity_card?: StringFilter<"applicants"> | string
    created_at?: DateTimeNullableFilter<"applicants"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"applicants"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"applicants"> | Date | string | null
    job_post_categories?: XOR<Job_post_categoriesScalarRelationFilter, job_post_categoriesWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    selections?: SelectionsListRelationFilter
  }

  export type applicantsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    job_post_category_id?: SortOrder
    status?: SortOrder
    cv?: SortOrder
    national_identity_card?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    job_post_categories?: job_post_categoriesOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
    selections?: selectionsOrderByRelationAggregateInput
    _relevance?: applicantsOrderByRelevanceInput
  }

  export type applicantsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: applicantsWhereInput | applicantsWhereInput[]
    OR?: applicantsWhereInput[]
    NOT?: applicantsWhereInput | applicantsWhereInput[]
    user_id?: StringFilter<"applicants"> | string
    job_post_category_id?: StringFilter<"applicants"> | string
    status?: Enumapplicants_statusFilter<"applicants"> | $Enums.applicants_status
    cv?: StringFilter<"applicants"> | string
    national_identity_card?: StringFilter<"applicants"> | string
    created_at?: DateTimeNullableFilter<"applicants"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"applicants"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"applicants"> | Date | string | null
    job_post_categories?: XOR<Job_post_categoriesScalarRelationFilter, job_post_categoriesWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    selections?: SelectionsListRelationFilter
  }, "id">

  export type applicantsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    job_post_category_id?: SortOrder
    status?: SortOrder
    cv?: SortOrder
    national_identity_card?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: applicantsCountOrderByAggregateInput
    _max?: applicantsMaxOrderByAggregateInput
    _min?: applicantsMinOrderByAggregateInput
  }

  export type applicantsScalarWhereWithAggregatesInput = {
    AND?: applicantsScalarWhereWithAggregatesInput | applicantsScalarWhereWithAggregatesInput[]
    OR?: applicantsScalarWhereWithAggregatesInput[]
    NOT?: applicantsScalarWhereWithAggregatesInput | applicantsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"applicants"> | string
    user_id?: StringWithAggregatesFilter<"applicants"> | string
    job_post_category_id?: StringWithAggregatesFilter<"applicants"> | string
    status?: Enumapplicants_statusWithAggregatesFilter<"applicants"> | $Enums.applicants_status
    cv?: StringWithAggregatesFilter<"applicants"> | string
    national_identity_card?: StringWithAggregatesFilter<"applicants"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"applicants"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"applicants"> | Date | string | null
    deleted_at?: DateTimeNullableWithAggregatesFilter<"applicants"> | Date | string | null
  }

  export type cacheWhereInput = {
    AND?: cacheWhereInput | cacheWhereInput[]
    OR?: cacheWhereInput[]
    NOT?: cacheWhereInput | cacheWhereInput[]
    key?: StringFilter<"cache"> | string
    value?: StringFilter<"cache"> | string
    expiration?: IntFilter<"cache"> | number
  }

  export type cacheOrderByWithRelationInput = {
    key?: SortOrder
    value?: SortOrder
    expiration?: SortOrder
    _relevance?: cacheOrderByRelevanceInput
  }

  export type cacheWhereUniqueInput = Prisma.AtLeast<{
    key?: string
    AND?: cacheWhereInput | cacheWhereInput[]
    OR?: cacheWhereInput[]
    NOT?: cacheWhereInput | cacheWhereInput[]
    value?: StringFilter<"cache"> | string
    expiration?: IntFilter<"cache"> | number
  }, "key">

  export type cacheOrderByWithAggregationInput = {
    key?: SortOrder
    value?: SortOrder
    expiration?: SortOrder
    _count?: cacheCountOrderByAggregateInput
    _avg?: cacheAvgOrderByAggregateInput
    _max?: cacheMaxOrderByAggregateInput
    _min?: cacheMinOrderByAggregateInput
    _sum?: cacheSumOrderByAggregateInput
  }

  export type cacheScalarWhereWithAggregatesInput = {
    AND?: cacheScalarWhereWithAggregatesInput | cacheScalarWhereWithAggregatesInput[]
    OR?: cacheScalarWhereWithAggregatesInput[]
    NOT?: cacheScalarWhereWithAggregatesInput | cacheScalarWhereWithAggregatesInput[]
    key?: StringWithAggregatesFilter<"cache"> | string
    value?: StringWithAggregatesFilter<"cache"> | string
    expiration?: IntWithAggregatesFilter<"cache"> | number
  }

  export type cache_locksWhereInput = {
    AND?: cache_locksWhereInput | cache_locksWhereInput[]
    OR?: cache_locksWhereInput[]
    NOT?: cache_locksWhereInput | cache_locksWhereInput[]
    key?: StringFilter<"cache_locks"> | string
    owner?: StringFilter<"cache_locks"> | string
    expiration?: IntFilter<"cache_locks"> | number
  }

  export type cache_locksOrderByWithRelationInput = {
    key?: SortOrder
    owner?: SortOrder
    expiration?: SortOrder
    _relevance?: cache_locksOrderByRelevanceInput
  }

  export type cache_locksWhereUniqueInput = Prisma.AtLeast<{
    key?: string
    AND?: cache_locksWhereInput | cache_locksWhereInput[]
    OR?: cache_locksWhereInput[]
    NOT?: cache_locksWhereInput | cache_locksWhereInput[]
    owner?: StringFilter<"cache_locks"> | string
    expiration?: IntFilter<"cache_locks"> | number
  }, "key">

  export type cache_locksOrderByWithAggregationInput = {
    key?: SortOrder
    owner?: SortOrder
    expiration?: SortOrder
    _count?: cache_locksCountOrderByAggregateInput
    _avg?: cache_locksAvgOrderByAggregateInput
    _max?: cache_locksMaxOrderByAggregateInput
    _min?: cache_locksMinOrderByAggregateInput
    _sum?: cache_locksSumOrderByAggregateInput
  }

  export type cache_locksScalarWhereWithAggregatesInput = {
    AND?: cache_locksScalarWhereWithAggregatesInput | cache_locksScalarWhereWithAggregatesInput[]
    OR?: cache_locksScalarWhereWithAggregatesInput[]
    NOT?: cache_locksScalarWhereWithAggregatesInput | cache_locksScalarWhereWithAggregatesInput[]
    key?: StringWithAggregatesFilter<"cache_locks"> | string
    owner?: StringWithAggregatesFilter<"cache_locks"> | string
    expiration?: IntWithAggregatesFilter<"cache_locks"> | number
  }

  export type companiesWhereInput = {
    AND?: companiesWhereInput | companiesWhereInput[]
    OR?: companiesWhereInput[]
    NOT?: companiesWhereInput | companiesWhereInput[]
    id?: StringFilter<"companies"> | string
    name?: StringFilter<"companies"> | string
    email?: StringFilter<"companies"> | string
    phone?: StringFilter<"companies"> | string
    website?: StringNullableFilter<"companies"> | string | null
    logo?: StringNullableFilter<"companies"> | string | null
    location?: StringFilter<"companies"> | string
    description?: StringNullableFilter<"companies"> | string | null
    created_at?: DateTimeNullableFilter<"companies"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"companies"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"companies"> | Date | string | null
    job_posts?: Job_postsListRelationFilter
  }

  export type companiesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    website?: SortOrderInput | SortOrder
    logo?: SortOrderInput | SortOrder
    location?: SortOrder
    description?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    job_posts?: job_postsOrderByRelationAggregateInput
    _relevance?: companiesOrderByRelevanceInput
  }

  export type companiesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: companiesWhereInput | companiesWhereInput[]
    OR?: companiesWhereInput[]
    NOT?: companiesWhereInput | companiesWhereInput[]
    name?: StringFilter<"companies"> | string
    email?: StringFilter<"companies"> | string
    phone?: StringFilter<"companies"> | string
    website?: StringNullableFilter<"companies"> | string | null
    logo?: StringNullableFilter<"companies"> | string | null
    location?: StringFilter<"companies"> | string
    description?: StringNullableFilter<"companies"> | string | null
    created_at?: DateTimeNullableFilter<"companies"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"companies"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"companies"> | Date | string | null
    job_posts?: Job_postsListRelationFilter
  }, "id">

  export type companiesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    website?: SortOrderInput | SortOrder
    logo?: SortOrderInput | SortOrder
    location?: SortOrder
    description?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: companiesCountOrderByAggregateInput
    _max?: companiesMaxOrderByAggregateInput
    _min?: companiesMinOrderByAggregateInput
  }

  export type companiesScalarWhereWithAggregatesInput = {
    AND?: companiesScalarWhereWithAggregatesInput | companiesScalarWhereWithAggregatesInput[]
    OR?: companiesScalarWhereWithAggregatesInput[]
    NOT?: companiesScalarWhereWithAggregatesInput | companiesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"companies"> | string
    name?: StringWithAggregatesFilter<"companies"> | string
    email?: StringWithAggregatesFilter<"companies"> | string
    phone?: StringWithAggregatesFilter<"companies"> | string
    website?: StringNullableWithAggregatesFilter<"companies"> | string | null
    logo?: StringNullableWithAggregatesFilter<"companies"> | string | null
    location?: StringWithAggregatesFilter<"companies"> | string
    description?: StringNullableWithAggregatesFilter<"companies"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"companies"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"companies"> | Date | string | null
    deleted_at?: DateTimeNullableWithAggregatesFilter<"companies"> | Date | string | null
  }

  export type failed_jobsWhereInput = {
    AND?: failed_jobsWhereInput | failed_jobsWhereInput[]
    OR?: failed_jobsWhereInput[]
    NOT?: failed_jobsWhereInput | failed_jobsWhereInput[]
    id?: BigIntFilter<"failed_jobs"> | bigint | number
    uuid?: StringFilter<"failed_jobs"> | string
    connection?: StringFilter<"failed_jobs"> | string
    queue?: StringFilter<"failed_jobs"> | string
    payload?: StringFilter<"failed_jobs"> | string
    exception?: StringFilter<"failed_jobs"> | string
    failed_at?: DateTimeFilter<"failed_jobs"> | Date | string
  }

  export type failed_jobsOrderByWithRelationInput = {
    id?: SortOrder
    uuid?: SortOrder
    connection?: SortOrder
    queue?: SortOrder
    payload?: SortOrder
    exception?: SortOrder
    failed_at?: SortOrder
    _relevance?: failed_jobsOrderByRelevanceInput
  }

  export type failed_jobsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    uuid?: string
    AND?: failed_jobsWhereInput | failed_jobsWhereInput[]
    OR?: failed_jobsWhereInput[]
    NOT?: failed_jobsWhereInput | failed_jobsWhereInput[]
    connection?: StringFilter<"failed_jobs"> | string
    queue?: StringFilter<"failed_jobs"> | string
    payload?: StringFilter<"failed_jobs"> | string
    exception?: StringFilter<"failed_jobs"> | string
    failed_at?: DateTimeFilter<"failed_jobs"> | Date | string
  }, "id" | "uuid">

  export type failed_jobsOrderByWithAggregationInput = {
    id?: SortOrder
    uuid?: SortOrder
    connection?: SortOrder
    queue?: SortOrder
    payload?: SortOrder
    exception?: SortOrder
    failed_at?: SortOrder
    _count?: failed_jobsCountOrderByAggregateInput
    _avg?: failed_jobsAvgOrderByAggregateInput
    _max?: failed_jobsMaxOrderByAggregateInput
    _min?: failed_jobsMinOrderByAggregateInput
    _sum?: failed_jobsSumOrderByAggregateInput
  }

  export type failed_jobsScalarWhereWithAggregatesInput = {
    AND?: failed_jobsScalarWhereWithAggregatesInput | failed_jobsScalarWhereWithAggregatesInput[]
    OR?: failed_jobsScalarWhereWithAggregatesInput[]
    NOT?: failed_jobsScalarWhereWithAggregatesInput | failed_jobsScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"failed_jobs"> | bigint | number
    uuid?: StringWithAggregatesFilter<"failed_jobs"> | string
    connection?: StringWithAggregatesFilter<"failed_jobs"> | string
    queue?: StringWithAggregatesFilter<"failed_jobs"> | string
    payload?: StringWithAggregatesFilter<"failed_jobs"> | string
    exception?: StringWithAggregatesFilter<"failed_jobs"> | string
    failed_at?: DateTimeWithAggregatesFilter<"failed_jobs"> | Date | string
  }

  export type job_batchesWhereInput = {
    AND?: job_batchesWhereInput | job_batchesWhereInput[]
    OR?: job_batchesWhereInput[]
    NOT?: job_batchesWhereInput | job_batchesWhereInput[]
    id?: StringFilter<"job_batches"> | string
    name?: StringFilter<"job_batches"> | string
    total_jobs?: IntFilter<"job_batches"> | number
    pending_jobs?: IntFilter<"job_batches"> | number
    failed_jobs?: IntFilter<"job_batches"> | number
    failed_job_ids?: StringFilter<"job_batches"> | string
    options?: StringNullableFilter<"job_batches"> | string | null
    cancelled_at?: IntNullableFilter<"job_batches"> | number | null
    created_at?: IntFilter<"job_batches"> | number
    finished_at?: IntNullableFilter<"job_batches"> | number | null
  }

  export type job_batchesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    total_jobs?: SortOrder
    pending_jobs?: SortOrder
    failed_jobs?: SortOrder
    failed_job_ids?: SortOrder
    options?: SortOrderInput | SortOrder
    cancelled_at?: SortOrderInput | SortOrder
    created_at?: SortOrder
    finished_at?: SortOrderInput | SortOrder
    _relevance?: job_batchesOrderByRelevanceInput
  }

  export type job_batchesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: job_batchesWhereInput | job_batchesWhereInput[]
    OR?: job_batchesWhereInput[]
    NOT?: job_batchesWhereInput | job_batchesWhereInput[]
    name?: StringFilter<"job_batches"> | string
    total_jobs?: IntFilter<"job_batches"> | number
    pending_jobs?: IntFilter<"job_batches"> | number
    failed_jobs?: IntFilter<"job_batches"> | number
    failed_job_ids?: StringFilter<"job_batches"> | string
    options?: StringNullableFilter<"job_batches"> | string | null
    cancelled_at?: IntNullableFilter<"job_batches"> | number | null
    created_at?: IntFilter<"job_batches"> | number
    finished_at?: IntNullableFilter<"job_batches"> | number | null
  }, "id">

  export type job_batchesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    total_jobs?: SortOrder
    pending_jobs?: SortOrder
    failed_jobs?: SortOrder
    failed_job_ids?: SortOrder
    options?: SortOrderInput | SortOrder
    cancelled_at?: SortOrderInput | SortOrder
    created_at?: SortOrder
    finished_at?: SortOrderInput | SortOrder
    _count?: job_batchesCountOrderByAggregateInput
    _avg?: job_batchesAvgOrderByAggregateInput
    _max?: job_batchesMaxOrderByAggregateInput
    _min?: job_batchesMinOrderByAggregateInput
    _sum?: job_batchesSumOrderByAggregateInput
  }

  export type job_batchesScalarWhereWithAggregatesInput = {
    AND?: job_batchesScalarWhereWithAggregatesInput | job_batchesScalarWhereWithAggregatesInput[]
    OR?: job_batchesScalarWhereWithAggregatesInput[]
    NOT?: job_batchesScalarWhereWithAggregatesInput | job_batchesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"job_batches"> | string
    name?: StringWithAggregatesFilter<"job_batches"> | string
    total_jobs?: IntWithAggregatesFilter<"job_batches"> | number
    pending_jobs?: IntWithAggregatesFilter<"job_batches"> | number
    failed_jobs?: IntWithAggregatesFilter<"job_batches"> | number
    failed_job_ids?: StringWithAggregatesFilter<"job_batches"> | string
    options?: StringNullableWithAggregatesFilter<"job_batches"> | string | null
    cancelled_at?: IntNullableWithAggregatesFilter<"job_batches"> | number | null
    created_at?: IntWithAggregatesFilter<"job_batches"> | number
    finished_at?: IntNullableWithAggregatesFilter<"job_batches"> | number | null
  }

  export type job_categoriesWhereInput = {
    AND?: job_categoriesWhereInput | job_categoriesWhereInput[]
    OR?: job_categoriesWhereInput[]
    NOT?: job_categoriesWhereInput | job_categoriesWhereInput[]
    id?: StringFilter<"job_categories"> | string
    name?: StringFilter<"job_categories"> | string
    created_at?: DateTimeNullableFilter<"job_categories"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"job_categories"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"job_categories"> | Date | string | null
    job_post_categories?: Job_post_categoriesListRelationFilter
  }

  export type job_categoriesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    job_post_categories?: job_post_categoriesOrderByRelationAggregateInput
    _relevance?: job_categoriesOrderByRelevanceInput
  }

  export type job_categoriesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: job_categoriesWhereInput | job_categoriesWhereInput[]
    OR?: job_categoriesWhereInput[]
    NOT?: job_categoriesWhereInput | job_categoriesWhereInput[]
    name?: StringFilter<"job_categories"> | string
    created_at?: DateTimeNullableFilter<"job_categories"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"job_categories"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"job_categories"> | Date | string | null
    job_post_categories?: Job_post_categoriesListRelationFilter
  }, "id">

  export type job_categoriesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: job_categoriesCountOrderByAggregateInput
    _max?: job_categoriesMaxOrderByAggregateInput
    _min?: job_categoriesMinOrderByAggregateInput
  }

  export type job_categoriesScalarWhereWithAggregatesInput = {
    AND?: job_categoriesScalarWhereWithAggregatesInput | job_categoriesScalarWhereWithAggregatesInput[]
    OR?: job_categoriesScalarWhereWithAggregatesInput[]
    NOT?: job_categoriesScalarWhereWithAggregatesInput | job_categoriesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"job_categories"> | string
    name?: StringWithAggregatesFilter<"job_categories"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"job_categories"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"job_categories"> | Date | string | null
    deleted_at?: DateTimeNullableWithAggregatesFilter<"job_categories"> | Date | string | null
  }

  export type job_postsWhereInput = {
    AND?: job_postsWhereInput | job_postsWhereInput[]
    OR?: job_postsWhereInput[]
    NOT?: job_postsWhereInput | job_postsWhereInput[]
    id?: StringFilter<"job_posts"> | string
    company_id?: StringFilter<"job_posts"> | string
    title?: StringFilter<"job_posts"> | string
    thumbnail?: StringFilter<"job_posts"> | string
    status?: Enumjob_posts_statusFilter<"job_posts"> | $Enums.job_posts_status
    created_at?: DateTimeNullableFilter<"job_posts"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"job_posts"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"job_posts"> | Date | string | null
    job_post_categories?: Job_post_categoriesListRelationFilter
    companies?: XOR<CompaniesScalarRelationFilter, companiesWhereInput>
  }

  export type job_postsOrderByWithRelationInput = {
    id?: SortOrder
    company_id?: SortOrder
    title?: SortOrder
    thumbnail?: SortOrder
    status?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    job_post_categories?: job_post_categoriesOrderByRelationAggregateInput
    companies?: companiesOrderByWithRelationInput
    _relevance?: job_postsOrderByRelevanceInput
  }

  export type job_postsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: job_postsWhereInput | job_postsWhereInput[]
    OR?: job_postsWhereInput[]
    NOT?: job_postsWhereInput | job_postsWhereInput[]
    company_id?: StringFilter<"job_posts"> | string
    title?: StringFilter<"job_posts"> | string
    thumbnail?: StringFilter<"job_posts"> | string
    status?: Enumjob_posts_statusFilter<"job_posts"> | $Enums.job_posts_status
    created_at?: DateTimeNullableFilter<"job_posts"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"job_posts"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"job_posts"> | Date | string | null
    job_post_categories?: Job_post_categoriesListRelationFilter
    companies?: XOR<CompaniesScalarRelationFilter, companiesWhereInput>
  }, "id">

  export type job_postsOrderByWithAggregationInput = {
    id?: SortOrder
    company_id?: SortOrder
    title?: SortOrder
    thumbnail?: SortOrder
    status?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: job_postsCountOrderByAggregateInput
    _max?: job_postsMaxOrderByAggregateInput
    _min?: job_postsMinOrderByAggregateInput
  }

  export type job_postsScalarWhereWithAggregatesInput = {
    AND?: job_postsScalarWhereWithAggregatesInput | job_postsScalarWhereWithAggregatesInput[]
    OR?: job_postsScalarWhereWithAggregatesInput[]
    NOT?: job_postsScalarWhereWithAggregatesInput | job_postsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"job_posts"> | string
    company_id?: StringWithAggregatesFilter<"job_posts"> | string
    title?: StringWithAggregatesFilter<"job_posts"> | string
    thumbnail?: StringWithAggregatesFilter<"job_posts"> | string
    status?: Enumjob_posts_statusWithAggregatesFilter<"job_posts"> | $Enums.job_posts_status
    created_at?: DateTimeNullableWithAggregatesFilter<"job_posts"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"job_posts"> | Date | string | null
    deleted_at?: DateTimeNullableWithAggregatesFilter<"job_posts"> | Date | string | null
  }

  export type jobsWhereInput = {
    AND?: jobsWhereInput | jobsWhereInput[]
    OR?: jobsWhereInput[]
    NOT?: jobsWhereInput | jobsWhereInput[]
    id?: BigIntFilter<"jobs"> | bigint | number
    queue?: StringFilter<"jobs"> | string
    payload?: StringFilter<"jobs"> | string
    attempts?: IntFilter<"jobs"> | number
    reserved_at?: IntNullableFilter<"jobs"> | number | null
    available_at?: IntFilter<"jobs"> | number
    created_at?: IntFilter<"jobs"> | number
  }

  export type jobsOrderByWithRelationInput = {
    id?: SortOrder
    queue?: SortOrder
    payload?: SortOrder
    attempts?: SortOrder
    reserved_at?: SortOrderInput | SortOrder
    available_at?: SortOrder
    created_at?: SortOrder
    _relevance?: jobsOrderByRelevanceInput
  }

  export type jobsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: jobsWhereInput | jobsWhereInput[]
    OR?: jobsWhereInput[]
    NOT?: jobsWhereInput | jobsWhereInput[]
    queue?: StringFilter<"jobs"> | string
    payload?: StringFilter<"jobs"> | string
    attempts?: IntFilter<"jobs"> | number
    reserved_at?: IntNullableFilter<"jobs"> | number | null
    available_at?: IntFilter<"jobs"> | number
    created_at?: IntFilter<"jobs"> | number
  }, "id">

  export type jobsOrderByWithAggregationInput = {
    id?: SortOrder
    queue?: SortOrder
    payload?: SortOrder
    attempts?: SortOrder
    reserved_at?: SortOrderInput | SortOrder
    available_at?: SortOrder
    created_at?: SortOrder
    _count?: jobsCountOrderByAggregateInput
    _avg?: jobsAvgOrderByAggregateInput
    _max?: jobsMaxOrderByAggregateInput
    _min?: jobsMinOrderByAggregateInput
    _sum?: jobsSumOrderByAggregateInput
  }

  export type jobsScalarWhereWithAggregatesInput = {
    AND?: jobsScalarWhereWithAggregatesInput | jobsScalarWhereWithAggregatesInput[]
    OR?: jobsScalarWhereWithAggregatesInput[]
    NOT?: jobsScalarWhereWithAggregatesInput | jobsScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"jobs"> | bigint | number
    queue?: StringWithAggregatesFilter<"jobs"> | string
    payload?: StringWithAggregatesFilter<"jobs"> | string
    attempts?: IntWithAggregatesFilter<"jobs"> | number
    reserved_at?: IntNullableWithAggregatesFilter<"jobs"> | number | null
    available_at?: IntWithAggregatesFilter<"jobs"> | number
    created_at?: IntWithAggregatesFilter<"jobs"> | number
  }

  export type migrationsWhereInput = {
    AND?: migrationsWhereInput | migrationsWhereInput[]
    OR?: migrationsWhereInput[]
    NOT?: migrationsWhereInput | migrationsWhereInput[]
    id?: IntFilter<"migrations"> | number
    migration?: StringFilter<"migrations"> | string
    batch?: IntFilter<"migrations"> | number
  }

  export type migrationsOrderByWithRelationInput = {
    id?: SortOrder
    migration?: SortOrder
    batch?: SortOrder
    _relevance?: migrationsOrderByRelevanceInput
  }

  export type migrationsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: migrationsWhereInput | migrationsWhereInput[]
    OR?: migrationsWhereInput[]
    NOT?: migrationsWhereInput | migrationsWhereInput[]
    migration?: StringFilter<"migrations"> | string
    batch?: IntFilter<"migrations"> | number
  }, "id">

  export type migrationsOrderByWithAggregationInput = {
    id?: SortOrder
    migration?: SortOrder
    batch?: SortOrder
    _count?: migrationsCountOrderByAggregateInput
    _avg?: migrationsAvgOrderByAggregateInput
    _max?: migrationsMaxOrderByAggregateInput
    _min?: migrationsMinOrderByAggregateInput
    _sum?: migrationsSumOrderByAggregateInput
  }

  export type migrationsScalarWhereWithAggregatesInput = {
    AND?: migrationsScalarWhereWithAggregatesInput | migrationsScalarWhereWithAggregatesInput[]
    OR?: migrationsScalarWhereWithAggregatesInput[]
    NOT?: migrationsScalarWhereWithAggregatesInput | migrationsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"migrations"> | number
    migration?: StringWithAggregatesFilter<"migrations"> | string
    batch?: IntWithAggregatesFilter<"migrations"> | number
  }

  export type selectionsWhereInput = {
    AND?: selectionsWhereInput | selectionsWhereInput[]
    OR?: selectionsWhereInput[]
    NOT?: selectionsWhereInput | selectionsWhereInput[]
    id?: StringFilter<"selections"> | string
    applicant_id?: StringFilter<"selections"> | string
    job_post_category_id?: StringFilter<"selections"> | string
    stage?: Enumselections_stageFilter<"selections"> | $Enums.selections_stage
    status?: Enumselections_statusFilter<"selections"> | $Enums.selections_status
    attachment?: StringNullableFilter<"selections"> | string | null
    created_at?: DateTimeNullableFilter<"selections"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"selections"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"selections"> | Date | string | null
    applicants?: XOR<ApplicantsScalarRelationFilter, applicantsWhereInput>
    job_post_categories?: XOR<Job_post_categoriesScalarRelationFilter, job_post_categoriesWhereInput>
  }

  export type selectionsOrderByWithRelationInput = {
    id?: SortOrder
    applicant_id?: SortOrder
    job_post_category_id?: SortOrder
    stage?: SortOrder
    status?: SortOrder
    attachment?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    applicants?: applicantsOrderByWithRelationInput
    job_post_categories?: job_post_categoriesOrderByWithRelationInput
    _relevance?: selectionsOrderByRelevanceInput
  }

  export type selectionsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: selectionsWhereInput | selectionsWhereInput[]
    OR?: selectionsWhereInput[]
    NOT?: selectionsWhereInput | selectionsWhereInput[]
    applicant_id?: StringFilter<"selections"> | string
    job_post_category_id?: StringFilter<"selections"> | string
    stage?: Enumselections_stageFilter<"selections"> | $Enums.selections_stage
    status?: Enumselections_statusFilter<"selections"> | $Enums.selections_status
    attachment?: StringNullableFilter<"selections"> | string | null
    created_at?: DateTimeNullableFilter<"selections"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"selections"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"selections"> | Date | string | null
    applicants?: XOR<ApplicantsScalarRelationFilter, applicantsWhereInput>
    job_post_categories?: XOR<Job_post_categoriesScalarRelationFilter, job_post_categoriesWhereInput>
  }, "id">

  export type selectionsOrderByWithAggregationInput = {
    id?: SortOrder
    applicant_id?: SortOrder
    job_post_category_id?: SortOrder
    stage?: SortOrder
    status?: SortOrder
    attachment?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: selectionsCountOrderByAggregateInput
    _max?: selectionsMaxOrderByAggregateInput
    _min?: selectionsMinOrderByAggregateInput
  }

  export type selectionsScalarWhereWithAggregatesInput = {
    AND?: selectionsScalarWhereWithAggregatesInput | selectionsScalarWhereWithAggregatesInput[]
    OR?: selectionsScalarWhereWithAggregatesInput[]
    NOT?: selectionsScalarWhereWithAggregatesInput | selectionsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"selections"> | string
    applicant_id?: StringWithAggregatesFilter<"selections"> | string
    job_post_category_id?: StringWithAggregatesFilter<"selections"> | string
    stage?: Enumselections_stageWithAggregatesFilter<"selections"> | $Enums.selections_stage
    status?: Enumselections_statusWithAggregatesFilter<"selections"> | $Enums.selections_status
    attachment?: StringNullableWithAggregatesFilter<"selections"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"selections"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"selections"> | Date | string | null
    deleted_at?: DateTimeNullableWithAggregatesFilter<"selections"> | Date | string | null
  }

  export type sessionsWhereInput = {
    AND?: sessionsWhereInput | sessionsWhereInput[]
    OR?: sessionsWhereInput[]
    NOT?: sessionsWhereInput | sessionsWhereInput[]
    id?: StringFilter<"sessions"> | string
    user_id?: StringNullableFilter<"sessions"> | string | null
    ip_address?: StringNullableFilter<"sessions"> | string | null
    user_agent?: StringNullableFilter<"sessions"> | string | null
    payload?: StringFilter<"sessions"> | string
    last_activity?: IntFilter<"sessions"> | number
  }

  export type sessionsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    ip_address?: SortOrderInput | SortOrder
    user_agent?: SortOrderInput | SortOrder
    payload?: SortOrder
    last_activity?: SortOrder
    _relevance?: sessionsOrderByRelevanceInput
  }

  export type sessionsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: sessionsWhereInput | sessionsWhereInput[]
    OR?: sessionsWhereInput[]
    NOT?: sessionsWhereInput | sessionsWhereInput[]
    user_id?: StringNullableFilter<"sessions"> | string | null
    ip_address?: StringNullableFilter<"sessions"> | string | null
    user_agent?: StringNullableFilter<"sessions"> | string | null
    payload?: StringFilter<"sessions"> | string
    last_activity?: IntFilter<"sessions"> | number
  }, "id">

  export type sessionsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    ip_address?: SortOrderInput | SortOrder
    user_agent?: SortOrderInput | SortOrder
    payload?: SortOrder
    last_activity?: SortOrder
    _count?: sessionsCountOrderByAggregateInput
    _avg?: sessionsAvgOrderByAggregateInput
    _max?: sessionsMaxOrderByAggregateInput
    _min?: sessionsMinOrderByAggregateInput
    _sum?: sessionsSumOrderByAggregateInput
  }

  export type sessionsScalarWhereWithAggregatesInput = {
    AND?: sessionsScalarWhereWithAggregatesInput | sessionsScalarWhereWithAggregatesInput[]
    OR?: sessionsScalarWhereWithAggregatesInput[]
    NOT?: sessionsScalarWhereWithAggregatesInput | sessionsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"sessions"> | string
    user_id?: StringNullableWithAggregatesFilter<"sessions"> | string | null
    ip_address?: StringNullableWithAggregatesFilter<"sessions"> | string | null
    user_agent?: StringNullableWithAggregatesFilter<"sessions"> | string | null
    payload?: StringWithAggregatesFilter<"sessions"> | string
    last_activity?: IntWithAggregatesFilter<"sessions"> | number
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: StringFilter<"users"> | string
    photo?: StringNullableFilter<"users"> | string | null
    name?: StringFilter<"users"> | string
    phone?: StringFilter<"users"> | string
    email?: StringFilter<"users"> | string
    address?: StringNullableFilter<"users"> | string | null
    description?: StringNullableFilter<"users"> | string | null
    password?: StringFilter<"users"> | string
    role?: Enumusers_roleFilter<"users"> | $Enums.users_role
    verified_at?: DateTimeNullableFilter<"users"> | Date | string | null
    remember_token?: StringNullableFilter<"users"> | string | null
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"users"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"users"> | Date | string | null
    applicants?: ApplicantsListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    photo?: SortOrderInput | SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    address?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    password?: SortOrder
    role?: SortOrder
    verified_at?: SortOrderInput | SortOrder
    remember_token?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    applicants?: applicantsOrderByRelationAggregateInput
    _relevance?: usersOrderByRelevanceInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    phone?: string
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    photo?: StringNullableFilter<"users"> | string | null
    name?: StringFilter<"users"> | string
    address?: StringNullableFilter<"users"> | string | null
    description?: StringNullableFilter<"users"> | string | null
    password?: StringFilter<"users"> | string
    role?: Enumusers_roleFilter<"users"> | $Enums.users_role
    verified_at?: DateTimeNullableFilter<"users"> | Date | string | null
    remember_token?: StringNullableFilter<"users"> | string | null
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"users"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"users"> | Date | string | null
    applicants?: ApplicantsListRelationFilter
  }, "id" | "phone" | "email">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    photo?: SortOrderInput | SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    address?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    password?: SortOrder
    role?: SortOrder
    verified_at?: SortOrderInput | SortOrder
    remember_token?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"users"> | string
    photo?: StringNullableWithAggregatesFilter<"users"> | string | null
    name?: StringWithAggregatesFilter<"users"> | string
    phone?: StringWithAggregatesFilter<"users"> | string
    email?: StringWithAggregatesFilter<"users"> | string
    address?: StringNullableWithAggregatesFilter<"users"> | string | null
    description?: StringNullableWithAggregatesFilter<"users"> | string | null
    password?: StringWithAggregatesFilter<"users"> | string
    role?: Enumusers_roleWithAggregatesFilter<"users"> | $Enums.users_role
    verified_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    remember_token?: StringNullableWithAggregatesFilter<"users"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    deleted_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
  }

  export type job_post_categoriesWhereInput = {
    AND?: job_post_categoriesWhereInput | job_post_categoriesWhereInput[]
    OR?: job_post_categoriesWhereInput[]
    NOT?: job_post_categoriesWhereInput | job_post_categoriesWhereInput[]
    id?: StringFilter<"job_post_categories"> | string
    job_category_id?: StringFilter<"job_post_categories"> | string
    job_post_id?: StringFilter<"job_post_categories"> | string
    type?: Enumjob_post_categories_typeFilter<"job_post_categories"> | $Enums.job_post_categories_type
    required_count?: IntFilter<"job_post_categories"> | number
    description?: StringNullableFilter<"job_post_categories"> | string | null
    requirements?: StringNullableFilter<"job_post_categories"> | string | null
    benefits?: StringNullableFilter<"job_post_categories"> | string | null
    created_at?: DateTimeNullableFilter<"job_post_categories"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"job_post_categories"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"job_post_categories"> | Date | string | null
    applicants?: ApplicantsListRelationFilter
    job_categories?: XOR<Job_categoriesScalarRelationFilter, job_categoriesWhereInput>
    job_posts?: XOR<Job_postsScalarRelationFilter, job_postsWhereInput>
    selections?: SelectionsListRelationFilter
  }

  export type job_post_categoriesOrderByWithRelationInput = {
    id?: SortOrder
    job_category_id?: SortOrder
    job_post_id?: SortOrder
    type?: SortOrder
    required_count?: SortOrder
    description?: SortOrderInput | SortOrder
    requirements?: SortOrderInput | SortOrder
    benefits?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    applicants?: applicantsOrderByRelationAggregateInput
    job_categories?: job_categoriesOrderByWithRelationInput
    job_posts?: job_postsOrderByWithRelationInput
    selections?: selectionsOrderByRelationAggregateInput
    _relevance?: job_post_categoriesOrderByRelevanceInput
  }

  export type job_post_categoriesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    job_post_id_job_category_id?: job_post_categoriesJob_post_idJob_category_idCompoundUniqueInput
    AND?: job_post_categoriesWhereInput | job_post_categoriesWhereInput[]
    OR?: job_post_categoriesWhereInput[]
    NOT?: job_post_categoriesWhereInput | job_post_categoriesWhereInput[]
    job_category_id?: StringFilter<"job_post_categories"> | string
    job_post_id?: StringFilter<"job_post_categories"> | string
    type?: Enumjob_post_categories_typeFilter<"job_post_categories"> | $Enums.job_post_categories_type
    required_count?: IntFilter<"job_post_categories"> | number
    description?: StringNullableFilter<"job_post_categories"> | string | null
    requirements?: StringNullableFilter<"job_post_categories"> | string | null
    benefits?: StringNullableFilter<"job_post_categories"> | string | null
    created_at?: DateTimeNullableFilter<"job_post_categories"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"job_post_categories"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"job_post_categories"> | Date | string | null
    applicants?: ApplicantsListRelationFilter
    job_categories?: XOR<Job_categoriesScalarRelationFilter, job_categoriesWhereInput>
    job_posts?: XOR<Job_postsScalarRelationFilter, job_postsWhereInput>
    selections?: SelectionsListRelationFilter
  }, "id" | "job_post_id_job_category_id">

  export type job_post_categoriesOrderByWithAggregationInput = {
    id?: SortOrder
    job_category_id?: SortOrder
    job_post_id?: SortOrder
    type?: SortOrder
    required_count?: SortOrder
    description?: SortOrderInput | SortOrder
    requirements?: SortOrderInput | SortOrder
    benefits?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: job_post_categoriesCountOrderByAggregateInput
    _avg?: job_post_categoriesAvgOrderByAggregateInput
    _max?: job_post_categoriesMaxOrderByAggregateInput
    _min?: job_post_categoriesMinOrderByAggregateInput
    _sum?: job_post_categoriesSumOrderByAggregateInput
  }

  export type job_post_categoriesScalarWhereWithAggregatesInput = {
    AND?: job_post_categoriesScalarWhereWithAggregatesInput | job_post_categoriesScalarWhereWithAggregatesInput[]
    OR?: job_post_categoriesScalarWhereWithAggregatesInput[]
    NOT?: job_post_categoriesScalarWhereWithAggregatesInput | job_post_categoriesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"job_post_categories"> | string
    job_category_id?: StringWithAggregatesFilter<"job_post_categories"> | string
    job_post_id?: StringWithAggregatesFilter<"job_post_categories"> | string
    type?: Enumjob_post_categories_typeWithAggregatesFilter<"job_post_categories"> | $Enums.job_post_categories_type
    required_count?: IntWithAggregatesFilter<"job_post_categories"> | number
    description?: StringNullableWithAggregatesFilter<"job_post_categories"> | string | null
    requirements?: StringNullableWithAggregatesFilter<"job_post_categories"> | string | null
    benefits?: StringNullableWithAggregatesFilter<"job_post_categories"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"job_post_categories"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"job_post_categories"> | Date | string | null
    deleted_at?: DateTimeNullableWithAggregatesFilter<"job_post_categories"> | Date | string | null
  }

  export type applicantsCreateInput = {
    id: string
    status?: $Enums.applicants_status
    cv: string
    national_identity_card: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    job_post_categories: job_post_categoriesCreateNestedOneWithoutApplicantsInput
    users: usersCreateNestedOneWithoutApplicantsInput
    selections?: selectionsCreateNestedManyWithoutApplicantsInput
  }

  export type applicantsUncheckedCreateInput = {
    id: string
    user_id: string
    job_post_category_id: string
    status?: $Enums.applicants_status
    cv: string
    national_identity_card: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    selections?: selectionsUncheckedCreateNestedManyWithoutApplicantsInput
  }

  export type applicantsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: Enumapplicants_statusFieldUpdateOperationsInput | $Enums.applicants_status
    cv?: StringFieldUpdateOperationsInput | string
    national_identity_card?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    job_post_categories?: job_post_categoriesUpdateOneRequiredWithoutApplicantsNestedInput
    users?: usersUpdateOneRequiredWithoutApplicantsNestedInput
    selections?: selectionsUpdateManyWithoutApplicantsNestedInput
  }

  export type applicantsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    job_post_category_id?: StringFieldUpdateOperationsInput | string
    status?: Enumapplicants_statusFieldUpdateOperationsInput | $Enums.applicants_status
    cv?: StringFieldUpdateOperationsInput | string
    national_identity_card?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    selections?: selectionsUncheckedUpdateManyWithoutApplicantsNestedInput
  }

  export type applicantsCreateManyInput = {
    id: string
    user_id: string
    job_post_category_id: string
    status?: $Enums.applicants_status
    cv: string
    national_identity_card: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type applicantsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: Enumapplicants_statusFieldUpdateOperationsInput | $Enums.applicants_status
    cv?: StringFieldUpdateOperationsInput | string
    national_identity_card?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type applicantsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    job_post_category_id?: StringFieldUpdateOperationsInput | string
    status?: Enumapplicants_statusFieldUpdateOperationsInput | $Enums.applicants_status
    cv?: StringFieldUpdateOperationsInput | string
    national_identity_card?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type cacheCreateInput = {
    key: string
    value: string
    expiration: number
  }

  export type cacheUncheckedCreateInput = {
    key: string
    value: string
    expiration: number
  }

  export type cacheUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiration?: IntFieldUpdateOperationsInput | number
  }

  export type cacheUncheckedUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiration?: IntFieldUpdateOperationsInput | number
  }

  export type cacheCreateManyInput = {
    key: string
    value: string
    expiration: number
  }

  export type cacheUpdateManyMutationInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiration?: IntFieldUpdateOperationsInput | number
  }

  export type cacheUncheckedUpdateManyInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiration?: IntFieldUpdateOperationsInput | number
  }

  export type cache_locksCreateInput = {
    key: string
    owner: string
    expiration: number
  }

  export type cache_locksUncheckedCreateInput = {
    key: string
    owner: string
    expiration: number
  }

  export type cache_locksUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    expiration?: IntFieldUpdateOperationsInput | number
  }

  export type cache_locksUncheckedUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    expiration?: IntFieldUpdateOperationsInput | number
  }

  export type cache_locksCreateManyInput = {
    key: string
    owner: string
    expiration: number
  }

  export type cache_locksUpdateManyMutationInput = {
    key?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    expiration?: IntFieldUpdateOperationsInput | number
  }

  export type cache_locksUncheckedUpdateManyInput = {
    key?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    expiration?: IntFieldUpdateOperationsInput | number
  }

  export type companiesCreateInput = {
    id: string
    name: string
    email: string
    phone: string
    website?: string | null
    logo?: string | null
    location: string
    description?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    job_posts?: job_postsCreateNestedManyWithoutCompaniesInput
  }

  export type companiesUncheckedCreateInput = {
    id: string
    name: string
    email: string
    phone: string
    website?: string | null
    logo?: string | null
    location: string
    description?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    job_posts?: job_postsUncheckedCreateNestedManyWithoutCompaniesInput
  }

  export type companiesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    job_posts?: job_postsUpdateManyWithoutCompaniesNestedInput
  }

  export type companiesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    job_posts?: job_postsUncheckedUpdateManyWithoutCompaniesNestedInput
  }

  export type companiesCreateManyInput = {
    id: string
    name: string
    email: string
    phone: string
    website?: string | null
    logo?: string | null
    location: string
    description?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type companiesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type companiesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type failed_jobsCreateInput = {
    id?: bigint | number
    uuid: string
    connection: string
    queue: string
    payload: string
    exception: string
    failed_at?: Date | string
  }

  export type failed_jobsUncheckedCreateInput = {
    id?: bigint | number
    uuid: string
    connection: string
    queue: string
    payload: string
    exception: string
    failed_at?: Date | string
  }

  export type failed_jobsUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: StringFieldUpdateOperationsInput | string
    connection?: StringFieldUpdateOperationsInput | string
    queue?: StringFieldUpdateOperationsInput | string
    payload?: StringFieldUpdateOperationsInput | string
    exception?: StringFieldUpdateOperationsInput | string
    failed_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type failed_jobsUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: StringFieldUpdateOperationsInput | string
    connection?: StringFieldUpdateOperationsInput | string
    queue?: StringFieldUpdateOperationsInput | string
    payload?: StringFieldUpdateOperationsInput | string
    exception?: StringFieldUpdateOperationsInput | string
    failed_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type failed_jobsCreateManyInput = {
    id?: bigint | number
    uuid: string
    connection: string
    queue: string
    payload: string
    exception: string
    failed_at?: Date | string
  }

  export type failed_jobsUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: StringFieldUpdateOperationsInput | string
    connection?: StringFieldUpdateOperationsInput | string
    queue?: StringFieldUpdateOperationsInput | string
    payload?: StringFieldUpdateOperationsInput | string
    exception?: StringFieldUpdateOperationsInput | string
    failed_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type failed_jobsUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: StringFieldUpdateOperationsInput | string
    connection?: StringFieldUpdateOperationsInput | string
    queue?: StringFieldUpdateOperationsInput | string
    payload?: StringFieldUpdateOperationsInput | string
    exception?: StringFieldUpdateOperationsInput | string
    failed_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type job_batchesCreateInput = {
    id: string
    name: string
    total_jobs: number
    pending_jobs: number
    failed_jobs: number
    failed_job_ids: string
    options?: string | null
    cancelled_at?: number | null
    created_at: number
    finished_at?: number | null
  }

  export type job_batchesUncheckedCreateInput = {
    id: string
    name: string
    total_jobs: number
    pending_jobs: number
    failed_jobs: number
    failed_job_ids: string
    options?: string | null
    cancelled_at?: number | null
    created_at: number
    finished_at?: number | null
  }

  export type job_batchesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    total_jobs?: IntFieldUpdateOperationsInput | number
    pending_jobs?: IntFieldUpdateOperationsInput | number
    failed_jobs?: IntFieldUpdateOperationsInput | number
    failed_job_ids?: StringFieldUpdateOperationsInput | string
    options?: NullableStringFieldUpdateOperationsInput | string | null
    cancelled_at?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: IntFieldUpdateOperationsInput | number
    finished_at?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type job_batchesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    total_jobs?: IntFieldUpdateOperationsInput | number
    pending_jobs?: IntFieldUpdateOperationsInput | number
    failed_jobs?: IntFieldUpdateOperationsInput | number
    failed_job_ids?: StringFieldUpdateOperationsInput | string
    options?: NullableStringFieldUpdateOperationsInput | string | null
    cancelled_at?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: IntFieldUpdateOperationsInput | number
    finished_at?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type job_batchesCreateManyInput = {
    id: string
    name: string
    total_jobs: number
    pending_jobs: number
    failed_jobs: number
    failed_job_ids: string
    options?: string | null
    cancelled_at?: number | null
    created_at: number
    finished_at?: number | null
  }

  export type job_batchesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    total_jobs?: IntFieldUpdateOperationsInput | number
    pending_jobs?: IntFieldUpdateOperationsInput | number
    failed_jobs?: IntFieldUpdateOperationsInput | number
    failed_job_ids?: StringFieldUpdateOperationsInput | string
    options?: NullableStringFieldUpdateOperationsInput | string | null
    cancelled_at?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: IntFieldUpdateOperationsInput | number
    finished_at?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type job_batchesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    total_jobs?: IntFieldUpdateOperationsInput | number
    pending_jobs?: IntFieldUpdateOperationsInput | number
    failed_jobs?: IntFieldUpdateOperationsInput | number
    failed_job_ids?: StringFieldUpdateOperationsInput | string
    options?: NullableStringFieldUpdateOperationsInput | string | null
    cancelled_at?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: IntFieldUpdateOperationsInput | number
    finished_at?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type job_categoriesCreateInput = {
    id: string
    name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    job_post_categories?: job_post_categoriesCreateNestedManyWithoutJob_categoriesInput
  }

  export type job_categoriesUncheckedCreateInput = {
    id: string
    name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    job_post_categories?: job_post_categoriesUncheckedCreateNestedManyWithoutJob_categoriesInput
  }

  export type job_categoriesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    job_post_categories?: job_post_categoriesUpdateManyWithoutJob_categoriesNestedInput
  }

  export type job_categoriesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    job_post_categories?: job_post_categoriesUncheckedUpdateManyWithoutJob_categoriesNestedInput
  }

  export type job_categoriesCreateManyInput = {
    id: string
    name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type job_categoriesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type job_categoriesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type job_postsCreateInput = {
    id: string
    title: string
    thumbnail: string
    status?: $Enums.job_posts_status
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    job_post_categories?: job_post_categoriesCreateNestedManyWithoutJob_postsInput
    companies: companiesCreateNestedOneWithoutJob_postsInput
  }

  export type job_postsUncheckedCreateInput = {
    id: string
    company_id: string
    title: string
    thumbnail: string
    status?: $Enums.job_posts_status
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    job_post_categories?: job_post_categoriesUncheckedCreateNestedManyWithoutJob_postsInput
  }

  export type job_postsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    status?: Enumjob_posts_statusFieldUpdateOperationsInput | $Enums.job_posts_status
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    job_post_categories?: job_post_categoriesUpdateManyWithoutJob_postsNestedInput
    companies?: companiesUpdateOneRequiredWithoutJob_postsNestedInput
  }

  export type job_postsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    status?: Enumjob_posts_statusFieldUpdateOperationsInput | $Enums.job_posts_status
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    job_post_categories?: job_post_categoriesUncheckedUpdateManyWithoutJob_postsNestedInput
  }

  export type job_postsCreateManyInput = {
    id: string
    company_id: string
    title: string
    thumbnail: string
    status?: $Enums.job_posts_status
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type job_postsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    status?: Enumjob_posts_statusFieldUpdateOperationsInput | $Enums.job_posts_status
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type job_postsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    status?: Enumjob_posts_statusFieldUpdateOperationsInput | $Enums.job_posts_status
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type jobsCreateInput = {
    id?: bigint | number
    queue: string
    payload: string
    attempts: number
    reserved_at?: number | null
    available_at: number
    created_at: number
  }

  export type jobsUncheckedCreateInput = {
    id?: bigint | number
    queue: string
    payload: string
    attempts: number
    reserved_at?: number | null
    available_at: number
    created_at: number
  }

  export type jobsUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    queue?: StringFieldUpdateOperationsInput | string
    payload?: StringFieldUpdateOperationsInput | string
    attempts?: IntFieldUpdateOperationsInput | number
    reserved_at?: NullableIntFieldUpdateOperationsInput | number | null
    available_at?: IntFieldUpdateOperationsInput | number
    created_at?: IntFieldUpdateOperationsInput | number
  }

  export type jobsUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    queue?: StringFieldUpdateOperationsInput | string
    payload?: StringFieldUpdateOperationsInput | string
    attempts?: IntFieldUpdateOperationsInput | number
    reserved_at?: NullableIntFieldUpdateOperationsInput | number | null
    available_at?: IntFieldUpdateOperationsInput | number
    created_at?: IntFieldUpdateOperationsInput | number
  }

  export type jobsCreateManyInput = {
    id?: bigint | number
    queue: string
    payload: string
    attempts: number
    reserved_at?: number | null
    available_at: number
    created_at: number
  }

  export type jobsUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    queue?: StringFieldUpdateOperationsInput | string
    payload?: StringFieldUpdateOperationsInput | string
    attempts?: IntFieldUpdateOperationsInput | number
    reserved_at?: NullableIntFieldUpdateOperationsInput | number | null
    available_at?: IntFieldUpdateOperationsInput | number
    created_at?: IntFieldUpdateOperationsInput | number
  }

  export type jobsUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    queue?: StringFieldUpdateOperationsInput | string
    payload?: StringFieldUpdateOperationsInput | string
    attempts?: IntFieldUpdateOperationsInput | number
    reserved_at?: NullableIntFieldUpdateOperationsInput | number | null
    available_at?: IntFieldUpdateOperationsInput | number
    created_at?: IntFieldUpdateOperationsInput | number
  }

  export type migrationsCreateInput = {
    migration: string
    batch: number
  }

  export type migrationsUncheckedCreateInput = {
    id?: number
    migration: string
    batch: number
  }

  export type migrationsUpdateInput = {
    migration?: StringFieldUpdateOperationsInput | string
    batch?: IntFieldUpdateOperationsInput | number
  }

  export type migrationsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    migration?: StringFieldUpdateOperationsInput | string
    batch?: IntFieldUpdateOperationsInput | number
  }

  export type migrationsCreateManyInput = {
    id?: number
    migration: string
    batch: number
  }

  export type migrationsUpdateManyMutationInput = {
    migration?: StringFieldUpdateOperationsInput | string
    batch?: IntFieldUpdateOperationsInput | number
  }

  export type migrationsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    migration?: StringFieldUpdateOperationsInput | string
    batch?: IntFieldUpdateOperationsInput | number
  }

  export type selectionsCreateInput = {
    id: string
    stage: $Enums.selections_stage
    status?: $Enums.selections_status
    attachment?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    applicants: applicantsCreateNestedOneWithoutSelectionsInput
    job_post_categories: job_post_categoriesCreateNestedOneWithoutSelectionsInput
  }

  export type selectionsUncheckedCreateInput = {
    id: string
    applicant_id: string
    job_post_category_id: string
    stage: $Enums.selections_stage
    status?: $Enums.selections_status
    attachment?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type selectionsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    stage?: Enumselections_stageFieldUpdateOperationsInput | $Enums.selections_stage
    status?: Enumselections_statusFieldUpdateOperationsInput | $Enums.selections_status
    attachment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    applicants?: applicantsUpdateOneRequiredWithoutSelectionsNestedInput
    job_post_categories?: job_post_categoriesUpdateOneRequiredWithoutSelectionsNestedInput
  }

  export type selectionsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicant_id?: StringFieldUpdateOperationsInput | string
    job_post_category_id?: StringFieldUpdateOperationsInput | string
    stage?: Enumselections_stageFieldUpdateOperationsInput | $Enums.selections_stage
    status?: Enumselections_statusFieldUpdateOperationsInput | $Enums.selections_status
    attachment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type selectionsCreateManyInput = {
    id: string
    applicant_id: string
    job_post_category_id: string
    stage: $Enums.selections_stage
    status?: $Enums.selections_status
    attachment?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type selectionsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    stage?: Enumselections_stageFieldUpdateOperationsInput | $Enums.selections_stage
    status?: Enumselections_statusFieldUpdateOperationsInput | $Enums.selections_status
    attachment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type selectionsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicant_id?: StringFieldUpdateOperationsInput | string
    job_post_category_id?: StringFieldUpdateOperationsInput | string
    stage?: Enumselections_stageFieldUpdateOperationsInput | $Enums.selections_stage
    status?: Enumselections_statusFieldUpdateOperationsInput | $Enums.selections_status
    attachment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sessionsCreateInput = {
    id: string
    user_id?: string | null
    ip_address?: string | null
    user_agent?: string | null
    payload: string
    last_activity: number
  }

  export type sessionsUncheckedCreateInput = {
    id: string
    user_id?: string | null
    ip_address?: string | null
    user_agent?: string | null
    payload: string
    last_activity: number
  }

  export type sessionsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    payload?: StringFieldUpdateOperationsInput | string
    last_activity?: IntFieldUpdateOperationsInput | number
  }

  export type sessionsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    payload?: StringFieldUpdateOperationsInput | string
    last_activity?: IntFieldUpdateOperationsInput | number
  }

  export type sessionsCreateManyInput = {
    id: string
    user_id?: string | null
    ip_address?: string | null
    user_agent?: string | null
    payload: string
    last_activity: number
  }

  export type sessionsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    payload?: StringFieldUpdateOperationsInput | string
    last_activity?: IntFieldUpdateOperationsInput | number
  }

  export type sessionsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    payload?: StringFieldUpdateOperationsInput | string
    last_activity?: IntFieldUpdateOperationsInput | number
  }

  export type usersCreateInput = {
    id: string
    photo?: string | null
    name: string
    phone: string
    email: string
    address?: string | null
    description?: string | null
    password: string
    role?: $Enums.users_role
    verified_at?: Date | string | null
    remember_token?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    applicants?: applicantsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    id: string
    photo?: string | null
    name: string
    phone: string
    email: string
    address?: string | null
    description?: string | null
    password: string
    role?: $Enums.users_role
    verified_at?: Date | string | null
    remember_token?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    applicants?: applicantsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: Enumusers_roleFieldUpdateOperationsInput | $Enums.users_role
    verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    remember_token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    applicants?: applicantsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: Enumusers_roleFieldUpdateOperationsInput | $Enums.users_role
    verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    remember_token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    applicants?: applicantsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    id: string
    photo?: string | null
    name: string
    phone: string
    email: string
    address?: string | null
    description?: string | null
    password: string
    role?: $Enums.users_role
    verified_at?: Date | string | null
    remember_token?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type usersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: Enumusers_roleFieldUpdateOperationsInput | $Enums.users_role
    verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    remember_token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: Enumusers_roleFieldUpdateOperationsInput | $Enums.users_role
    verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    remember_token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type job_post_categoriesCreateInput = {
    id: string
    type: $Enums.job_post_categories_type
    required_count?: number
    description?: string | null
    requirements?: string | null
    benefits?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    applicants?: applicantsCreateNestedManyWithoutJob_post_categoriesInput
    job_categories: job_categoriesCreateNestedOneWithoutJob_post_categoriesInput
    job_posts: job_postsCreateNestedOneWithoutJob_post_categoriesInput
    selections?: selectionsCreateNestedManyWithoutJob_post_categoriesInput
  }

  export type job_post_categoriesUncheckedCreateInput = {
    id: string
    job_category_id: string
    job_post_id: string
    type: $Enums.job_post_categories_type
    required_count?: number
    description?: string | null
    requirements?: string | null
    benefits?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    applicants?: applicantsUncheckedCreateNestedManyWithoutJob_post_categoriesInput
    selections?: selectionsUncheckedCreateNestedManyWithoutJob_post_categoriesInput
  }

  export type job_post_categoriesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: Enumjob_post_categories_typeFieldUpdateOperationsInput | $Enums.job_post_categories_type
    required_count?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    benefits?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    applicants?: applicantsUpdateManyWithoutJob_post_categoriesNestedInput
    job_categories?: job_categoriesUpdateOneRequiredWithoutJob_post_categoriesNestedInput
    job_posts?: job_postsUpdateOneRequiredWithoutJob_post_categoriesNestedInput
    selections?: selectionsUpdateManyWithoutJob_post_categoriesNestedInput
  }

  export type job_post_categoriesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    job_category_id?: StringFieldUpdateOperationsInput | string
    job_post_id?: StringFieldUpdateOperationsInput | string
    type?: Enumjob_post_categories_typeFieldUpdateOperationsInput | $Enums.job_post_categories_type
    required_count?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    benefits?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    applicants?: applicantsUncheckedUpdateManyWithoutJob_post_categoriesNestedInput
    selections?: selectionsUncheckedUpdateManyWithoutJob_post_categoriesNestedInput
  }

  export type job_post_categoriesCreateManyInput = {
    id: string
    job_category_id: string
    job_post_id: string
    type: $Enums.job_post_categories_type
    required_count?: number
    description?: string | null
    requirements?: string | null
    benefits?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type job_post_categoriesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: Enumjob_post_categories_typeFieldUpdateOperationsInput | $Enums.job_post_categories_type
    required_count?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    benefits?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type job_post_categoriesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    job_category_id?: StringFieldUpdateOperationsInput | string
    job_post_id?: StringFieldUpdateOperationsInput | string
    type?: Enumjob_post_categories_typeFieldUpdateOperationsInput | $Enums.job_post_categories_type
    required_count?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    benefits?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type Enumapplicants_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.applicants_status | Enumapplicants_statusFieldRefInput<$PrismaModel>
    in?: $Enums.applicants_status[]
    notIn?: $Enums.applicants_status[]
    not?: NestedEnumapplicants_statusFilter<$PrismaModel> | $Enums.applicants_status
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type Job_post_categoriesScalarRelationFilter = {
    is?: job_post_categoriesWhereInput
    isNot?: job_post_categoriesWhereInput
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type SelectionsListRelationFilter = {
    every?: selectionsWhereInput
    some?: selectionsWhereInput
    none?: selectionsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type selectionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type applicantsOrderByRelevanceInput = {
    fields: applicantsOrderByRelevanceFieldEnum | applicantsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type applicantsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    job_post_category_id?: SortOrder
    status?: SortOrder
    cv?: SortOrder
    national_identity_card?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type applicantsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    job_post_category_id?: SortOrder
    status?: SortOrder
    cv?: SortOrder
    national_identity_card?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type applicantsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    job_post_category_id?: SortOrder
    status?: SortOrder
    cv?: SortOrder
    national_identity_card?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type Enumapplicants_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.applicants_status | Enumapplicants_statusFieldRefInput<$PrismaModel>
    in?: $Enums.applicants_status[]
    notIn?: $Enums.applicants_status[]
    not?: NestedEnumapplicants_statusWithAggregatesFilter<$PrismaModel> | $Enums.applicants_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumapplicants_statusFilter<$PrismaModel>
    _max?: NestedEnumapplicants_statusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type cacheOrderByRelevanceInput = {
    fields: cacheOrderByRelevanceFieldEnum | cacheOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type cacheCountOrderByAggregateInput = {
    key?: SortOrder
    value?: SortOrder
    expiration?: SortOrder
  }

  export type cacheAvgOrderByAggregateInput = {
    expiration?: SortOrder
  }

  export type cacheMaxOrderByAggregateInput = {
    key?: SortOrder
    value?: SortOrder
    expiration?: SortOrder
  }

  export type cacheMinOrderByAggregateInput = {
    key?: SortOrder
    value?: SortOrder
    expiration?: SortOrder
  }

  export type cacheSumOrderByAggregateInput = {
    expiration?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type cache_locksOrderByRelevanceInput = {
    fields: cache_locksOrderByRelevanceFieldEnum | cache_locksOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type cache_locksCountOrderByAggregateInput = {
    key?: SortOrder
    owner?: SortOrder
    expiration?: SortOrder
  }

  export type cache_locksAvgOrderByAggregateInput = {
    expiration?: SortOrder
  }

  export type cache_locksMaxOrderByAggregateInput = {
    key?: SortOrder
    owner?: SortOrder
    expiration?: SortOrder
  }

  export type cache_locksMinOrderByAggregateInput = {
    key?: SortOrder
    owner?: SortOrder
    expiration?: SortOrder
  }

  export type cache_locksSumOrderByAggregateInput = {
    expiration?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type Job_postsListRelationFilter = {
    every?: job_postsWhereInput
    some?: job_postsWhereInput
    none?: job_postsWhereInput
  }

  export type job_postsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type companiesOrderByRelevanceInput = {
    fields: companiesOrderByRelevanceFieldEnum | companiesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type companiesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    website?: SortOrder
    logo?: SortOrder
    location?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type companiesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    website?: SortOrder
    logo?: SortOrder
    location?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type companiesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    website?: SortOrder
    logo?: SortOrder
    location?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type failed_jobsOrderByRelevanceInput = {
    fields: failed_jobsOrderByRelevanceFieldEnum | failed_jobsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type failed_jobsCountOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    connection?: SortOrder
    queue?: SortOrder
    payload?: SortOrder
    exception?: SortOrder
    failed_at?: SortOrder
  }

  export type failed_jobsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type failed_jobsMaxOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    connection?: SortOrder
    queue?: SortOrder
    payload?: SortOrder
    exception?: SortOrder
    failed_at?: SortOrder
  }

  export type failed_jobsMinOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    connection?: SortOrder
    queue?: SortOrder
    payload?: SortOrder
    exception?: SortOrder
    failed_at?: SortOrder
  }

  export type failed_jobsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type job_batchesOrderByRelevanceInput = {
    fields: job_batchesOrderByRelevanceFieldEnum | job_batchesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type job_batchesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    total_jobs?: SortOrder
    pending_jobs?: SortOrder
    failed_jobs?: SortOrder
    failed_job_ids?: SortOrder
    options?: SortOrder
    cancelled_at?: SortOrder
    created_at?: SortOrder
    finished_at?: SortOrder
  }

  export type job_batchesAvgOrderByAggregateInput = {
    total_jobs?: SortOrder
    pending_jobs?: SortOrder
    failed_jobs?: SortOrder
    cancelled_at?: SortOrder
    created_at?: SortOrder
    finished_at?: SortOrder
  }

  export type job_batchesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    total_jobs?: SortOrder
    pending_jobs?: SortOrder
    failed_jobs?: SortOrder
    failed_job_ids?: SortOrder
    options?: SortOrder
    cancelled_at?: SortOrder
    created_at?: SortOrder
    finished_at?: SortOrder
  }

  export type job_batchesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    total_jobs?: SortOrder
    pending_jobs?: SortOrder
    failed_jobs?: SortOrder
    failed_job_ids?: SortOrder
    options?: SortOrder
    cancelled_at?: SortOrder
    created_at?: SortOrder
    finished_at?: SortOrder
  }

  export type job_batchesSumOrderByAggregateInput = {
    total_jobs?: SortOrder
    pending_jobs?: SortOrder
    failed_jobs?: SortOrder
    cancelled_at?: SortOrder
    created_at?: SortOrder
    finished_at?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type Job_post_categoriesListRelationFilter = {
    every?: job_post_categoriesWhereInput
    some?: job_post_categoriesWhereInput
    none?: job_post_categoriesWhereInput
  }

  export type job_post_categoriesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type job_categoriesOrderByRelevanceInput = {
    fields: job_categoriesOrderByRelevanceFieldEnum | job_categoriesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type job_categoriesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type job_categoriesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type job_categoriesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type Enumjob_posts_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.job_posts_status | Enumjob_posts_statusFieldRefInput<$PrismaModel>
    in?: $Enums.job_posts_status[]
    notIn?: $Enums.job_posts_status[]
    not?: NestedEnumjob_posts_statusFilter<$PrismaModel> | $Enums.job_posts_status
  }

  export type CompaniesScalarRelationFilter = {
    is?: companiesWhereInput
    isNot?: companiesWhereInput
  }

  export type job_postsOrderByRelevanceInput = {
    fields: job_postsOrderByRelevanceFieldEnum | job_postsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type job_postsCountOrderByAggregateInput = {
    id?: SortOrder
    company_id?: SortOrder
    title?: SortOrder
    thumbnail?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type job_postsMaxOrderByAggregateInput = {
    id?: SortOrder
    company_id?: SortOrder
    title?: SortOrder
    thumbnail?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type job_postsMinOrderByAggregateInput = {
    id?: SortOrder
    company_id?: SortOrder
    title?: SortOrder
    thumbnail?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type Enumjob_posts_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.job_posts_status | Enumjob_posts_statusFieldRefInput<$PrismaModel>
    in?: $Enums.job_posts_status[]
    notIn?: $Enums.job_posts_status[]
    not?: NestedEnumjob_posts_statusWithAggregatesFilter<$PrismaModel> | $Enums.job_posts_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumjob_posts_statusFilter<$PrismaModel>
    _max?: NestedEnumjob_posts_statusFilter<$PrismaModel>
  }

  export type jobsOrderByRelevanceInput = {
    fields: jobsOrderByRelevanceFieldEnum | jobsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type jobsCountOrderByAggregateInput = {
    id?: SortOrder
    queue?: SortOrder
    payload?: SortOrder
    attempts?: SortOrder
    reserved_at?: SortOrder
    available_at?: SortOrder
    created_at?: SortOrder
  }

  export type jobsAvgOrderByAggregateInput = {
    id?: SortOrder
    attempts?: SortOrder
    reserved_at?: SortOrder
    available_at?: SortOrder
    created_at?: SortOrder
  }

  export type jobsMaxOrderByAggregateInput = {
    id?: SortOrder
    queue?: SortOrder
    payload?: SortOrder
    attempts?: SortOrder
    reserved_at?: SortOrder
    available_at?: SortOrder
    created_at?: SortOrder
  }

  export type jobsMinOrderByAggregateInput = {
    id?: SortOrder
    queue?: SortOrder
    payload?: SortOrder
    attempts?: SortOrder
    reserved_at?: SortOrder
    available_at?: SortOrder
    created_at?: SortOrder
  }

  export type jobsSumOrderByAggregateInput = {
    id?: SortOrder
    attempts?: SortOrder
    reserved_at?: SortOrder
    available_at?: SortOrder
    created_at?: SortOrder
  }

  export type migrationsOrderByRelevanceInput = {
    fields: migrationsOrderByRelevanceFieldEnum | migrationsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type migrationsCountOrderByAggregateInput = {
    id?: SortOrder
    migration?: SortOrder
    batch?: SortOrder
  }

  export type migrationsAvgOrderByAggregateInput = {
    id?: SortOrder
    batch?: SortOrder
  }

  export type migrationsMaxOrderByAggregateInput = {
    id?: SortOrder
    migration?: SortOrder
    batch?: SortOrder
  }

  export type migrationsMinOrderByAggregateInput = {
    id?: SortOrder
    migration?: SortOrder
    batch?: SortOrder
  }

  export type migrationsSumOrderByAggregateInput = {
    id?: SortOrder
    batch?: SortOrder
  }

  export type Enumselections_stageFilter<$PrismaModel = never> = {
    equals?: $Enums.selections_stage | Enumselections_stageFieldRefInput<$PrismaModel>
    in?: $Enums.selections_stage[]
    notIn?: $Enums.selections_stage[]
    not?: NestedEnumselections_stageFilter<$PrismaModel> | $Enums.selections_stage
  }

  export type Enumselections_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.selections_status | Enumselections_statusFieldRefInput<$PrismaModel>
    in?: $Enums.selections_status[]
    notIn?: $Enums.selections_status[]
    not?: NestedEnumselections_statusFilter<$PrismaModel> | $Enums.selections_status
  }

  export type ApplicantsScalarRelationFilter = {
    is?: applicantsWhereInput
    isNot?: applicantsWhereInput
  }

  export type selectionsOrderByRelevanceInput = {
    fields: selectionsOrderByRelevanceFieldEnum | selectionsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type selectionsCountOrderByAggregateInput = {
    id?: SortOrder
    applicant_id?: SortOrder
    job_post_category_id?: SortOrder
    stage?: SortOrder
    status?: SortOrder
    attachment?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type selectionsMaxOrderByAggregateInput = {
    id?: SortOrder
    applicant_id?: SortOrder
    job_post_category_id?: SortOrder
    stage?: SortOrder
    status?: SortOrder
    attachment?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type selectionsMinOrderByAggregateInput = {
    id?: SortOrder
    applicant_id?: SortOrder
    job_post_category_id?: SortOrder
    stage?: SortOrder
    status?: SortOrder
    attachment?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type Enumselections_stageWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.selections_stage | Enumselections_stageFieldRefInput<$PrismaModel>
    in?: $Enums.selections_stage[]
    notIn?: $Enums.selections_stage[]
    not?: NestedEnumselections_stageWithAggregatesFilter<$PrismaModel> | $Enums.selections_stage
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumselections_stageFilter<$PrismaModel>
    _max?: NestedEnumselections_stageFilter<$PrismaModel>
  }

  export type Enumselections_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.selections_status | Enumselections_statusFieldRefInput<$PrismaModel>
    in?: $Enums.selections_status[]
    notIn?: $Enums.selections_status[]
    not?: NestedEnumselections_statusWithAggregatesFilter<$PrismaModel> | $Enums.selections_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumselections_statusFilter<$PrismaModel>
    _max?: NestedEnumselections_statusFilter<$PrismaModel>
  }

  export type sessionsOrderByRelevanceInput = {
    fields: sessionsOrderByRelevanceFieldEnum | sessionsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type sessionsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    ip_address?: SortOrder
    user_agent?: SortOrder
    payload?: SortOrder
    last_activity?: SortOrder
  }

  export type sessionsAvgOrderByAggregateInput = {
    last_activity?: SortOrder
  }

  export type sessionsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    ip_address?: SortOrder
    user_agent?: SortOrder
    payload?: SortOrder
    last_activity?: SortOrder
  }

  export type sessionsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    ip_address?: SortOrder
    user_agent?: SortOrder
    payload?: SortOrder
    last_activity?: SortOrder
  }

  export type sessionsSumOrderByAggregateInput = {
    last_activity?: SortOrder
  }

  export type Enumusers_roleFilter<$PrismaModel = never> = {
    equals?: $Enums.users_role | Enumusers_roleFieldRefInput<$PrismaModel>
    in?: $Enums.users_role[]
    notIn?: $Enums.users_role[]
    not?: NestedEnumusers_roleFilter<$PrismaModel> | $Enums.users_role
  }

  export type ApplicantsListRelationFilter = {
    every?: applicantsWhereInput
    some?: applicantsWhereInput
    none?: applicantsWhereInput
  }

  export type applicantsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersOrderByRelevanceInput = {
    fields: usersOrderByRelevanceFieldEnum | usersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    photo?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    address?: SortOrder
    description?: SortOrder
    password?: SortOrder
    role?: SortOrder
    verified_at?: SortOrder
    remember_token?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    photo?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    address?: SortOrder
    description?: SortOrder
    password?: SortOrder
    role?: SortOrder
    verified_at?: SortOrder
    remember_token?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    photo?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    address?: SortOrder
    description?: SortOrder
    password?: SortOrder
    role?: SortOrder
    verified_at?: SortOrder
    remember_token?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type Enumusers_roleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.users_role | Enumusers_roleFieldRefInput<$PrismaModel>
    in?: $Enums.users_role[]
    notIn?: $Enums.users_role[]
    not?: NestedEnumusers_roleWithAggregatesFilter<$PrismaModel> | $Enums.users_role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumusers_roleFilter<$PrismaModel>
    _max?: NestedEnumusers_roleFilter<$PrismaModel>
  }

  export type Enumjob_post_categories_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.job_post_categories_type | Enumjob_post_categories_typeFieldRefInput<$PrismaModel>
    in?: $Enums.job_post_categories_type[]
    notIn?: $Enums.job_post_categories_type[]
    not?: NestedEnumjob_post_categories_typeFilter<$PrismaModel> | $Enums.job_post_categories_type
  }

  export type Job_categoriesScalarRelationFilter = {
    is?: job_categoriesWhereInput
    isNot?: job_categoriesWhereInput
  }

  export type Job_postsScalarRelationFilter = {
    is?: job_postsWhereInput
    isNot?: job_postsWhereInput
  }

  export type job_post_categoriesOrderByRelevanceInput = {
    fields: job_post_categoriesOrderByRelevanceFieldEnum | job_post_categoriesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type job_post_categoriesJob_post_idJob_category_idCompoundUniqueInput = {
    job_post_id: string
    job_category_id: string
  }

  export type job_post_categoriesCountOrderByAggregateInput = {
    id?: SortOrder
    job_category_id?: SortOrder
    job_post_id?: SortOrder
    type?: SortOrder
    required_count?: SortOrder
    description?: SortOrder
    requirements?: SortOrder
    benefits?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type job_post_categoriesAvgOrderByAggregateInput = {
    required_count?: SortOrder
  }

  export type job_post_categoriesMaxOrderByAggregateInput = {
    id?: SortOrder
    job_category_id?: SortOrder
    job_post_id?: SortOrder
    type?: SortOrder
    required_count?: SortOrder
    description?: SortOrder
    requirements?: SortOrder
    benefits?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type job_post_categoriesMinOrderByAggregateInput = {
    id?: SortOrder
    job_category_id?: SortOrder
    job_post_id?: SortOrder
    type?: SortOrder
    required_count?: SortOrder
    description?: SortOrder
    requirements?: SortOrder
    benefits?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type job_post_categoriesSumOrderByAggregateInput = {
    required_count?: SortOrder
  }

  export type Enumjob_post_categories_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.job_post_categories_type | Enumjob_post_categories_typeFieldRefInput<$PrismaModel>
    in?: $Enums.job_post_categories_type[]
    notIn?: $Enums.job_post_categories_type[]
    not?: NestedEnumjob_post_categories_typeWithAggregatesFilter<$PrismaModel> | $Enums.job_post_categories_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumjob_post_categories_typeFilter<$PrismaModel>
    _max?: NestedEnumjob_post_categories_typeFilter<$PrismaModel>
  }

  export type job_post_categoriesCreateNestedOneWithoutApplicantsInput = {
    create?: XOR<job_post_categoriesCreateWithoutApplicantsInput, job_post_categoriesUncheckedCreateWithoutApplicantsInput>
    connectOrCreate?: job_post_categoriesCreateOrConnectWithoutApplicantsInput
    connect?: job_post_categoriesWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutApplicantsInput = {
    create?: XOR<usersCreateWithoutApplicantsInput, usersUncheckedCreateWithoutApplicantsInput>
    connectOrCreate?: usersCreateOrConnectWithoutApplicantsInput
    connect?: usersWhereUniqueInput
  }

  export type selectionsCreateNestedManyWithoutApplicantsInput = {
    create?: XOR<selectionsCreateWithoutApplicantsInput, selectionsUncheckedCreateWithoutApplicantsInput> | selectionsCreateWithoutApplicantsInput[] | selectionsUncheckedCreateWithoutApplicantsInput[]
    connectOrCreate?: selectionsCreateOrConnectWithoutApplicantsInput | selectionsCreateOrConnectWithoutApplicantsInput[]
    createMany?: selectionsCreateManyApplicantsInputEnvelope
    connect?: selectionsWhereUniqueInput | selectionsWhereUniqueInput[]
  }

  export type selectionsUncheckedCreateNestedManyWithoutApplicantsInput = {
    create?: XOR<selectionsCreateWithoutApplicantsInput, selectionsUncheckedCreateWithoutApplicantsInput> | selectionsCreateWithoutApplicantsInput[] | selectionsUncheckedCreateWithoutApplicantsInput[]
    connectOrCreate?: selectionsCreateOrConnectWithoutApplicantsInput | selectionsCreateOrConnectWithoutApplicantsInput[]
    createMany?: selectionsCreateManyApplicantsInputEnvelope
    connect?: selectionsWhereUniqueInput | selectionsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type Enumapplicants_statusFieldUpdateOperationsInput = {
    set?: $Enums.applicants_status
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type job_post_categoriesUpdateOneRequiredWithoutApplicantsNestedInput = {
    create?: XOR<job_post_categoriesCreateWithoutApplicantsInput, job_post_categoriesUncheckedCreateWithoutApplicantsInput>
    connectOrCreate?: job_post_categoriesCreateOrConnectWithoutApplicantsInput
    upsert?: job_post_categoriesUpsertWithoutApplicantsInput
    connect?: job_post_categoriesWhereUniqueInput
    update?: XOR<XOR<job_post_categoriesUpdateToOneWithWhereWithoutApplicantsInput, job_post_categoriesUpdateWithoutApplicantsInput>, job_post_categoriesUncheckedUpdateWithoutApplicantsInput>
  }

  export type usersUpdateOneRequiredWithoutApplicantsNestedInput = {
    create?: XOR<usersCreateWithoutApplicantsInput, usersUncheckedCreateWithoutApplicantsInput>
    connectOrCreate?: usersCreateOrConnectWithoutApplicantsInput
    upsert?: usersUpsertWithoutApplicantsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutApplicantsInput, usersUpdateWithoutApplicantsInput>, usersUncheckedUpdateWithoutApplicantsInput>
  }

  export type selectionsUpdateManyWithoutApplicantsNestedInput = {
    create?: XOR<selectionsCreateWithoutApplicantsInput, selectionsUncheckedCreateWithoutApplicantsInput> | selectionsCreateWithoutApplicantsInput[] | selectionsUncheckedCreateWithoutApplicantsInput[]
    connectOrCreate?: selectionsCreateOrConnectWithoutApplicantsInput | selectionsCreateOrConnectWithoutApplicantsInput[]
    upsert?: selectionsUpsertWithWhereUniqueWithoutApplicantsInput | selectionsUpsertWithWhereUniqueWithoutApplicantsInput[]
    createMany?: selectionsCreateManyApplicantsInputEnvelope
    set?: selectionsWhereUniqueInput | selectionsWhereUniqueInput[]
    disconnect?: selectionsWhereUniqueInput | selectionsWhereUniqueInput[]
    delete?: selectionsWhereUniqueInput | selectionsWhereUniqueInput[]
    connect?: selectionsWhereUniqueInput | selectionsWhereUniqueInput[]
    update?: selectionsUpdateWithWhereUniqueWithoutApplicantsInput | selectionsUpdateWithWhereUniqueWithoutApplicantsInput[]
    updateMany?: selectionsUpdateManyWithWhereWithoutApplicantsInput | selectionsUpdateManyWithWhereWithoutApplicantsInput[]
    deleteMany?: selectionsScalarWhereInput | selectionsScalarWhereInput[]
  }

  export type selectionsUncheckedUpdateManyWithoutApplicantsNestedInput = {
    create?: XOR<selectionsCreateWithoutApplicantsInput, selectionsUncheckedCreateWithoutApplicantsInput> | selectionsCreateWithoutApplicantsInput[] | selectionsUncheckedCreateWithoutApplicantsInput[]
    connectOrCreate?: selectionsCreateOrConnectWithoutApplicantsInput | selectionsCreateOrConnectWithoutApplicantsInput[]
    upsert?: selectionsUpsertWithWhereUniqueWithoutApplicantsInput | selectionsUpsertWithWhereUniqueWithoutApplicantsInput[]
    createMany?: selectionsCreateManyApplicantsInputEnvelope
    set?: selectionsWhereUniqueInput | selectionsWhereUniqueInput[]
    disconnect?: selectionsWhereUniqueInput | selectionsWhereUniqueInput[]
    delete?: selectionsWhereUniqueInput | selectionsWhereUniqueInput[]
    connect?: selectionsWhereUniqueInput | selectionsWhereUniqueInput[]
    update?: selectionsUpdateWithWhereUniqueWithoutApplicantsInput | selectionsUpdateWithWhereUniqueWithoutApplicantsInput[]
    updateMany?: selectionsUpdateManyWithWhereWithoutApplicantsInput | selectionsUpdateManyWithWhereWithoutApplicantsInput[]
    deleteMany?: selectionsScalarWhereInput | selectionsScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type job_postsCreateNestedManyWithoutCompaniesInput = {
    create?: XOR<job_postsCreateWithoutCompaniesInput, job_postsUncheckedCreateWithoutCompaniesInput> | job_postsCreateWithoutCompaniesInput[] | job_postsUncheckedCreateWithoutCompaniesInput[]
    connectOrCreate?: job_postsCreateOrConnectWithoutCompaniesInput | job_postsCreateOrConnectWithoutCompaniesInput[]
    createMany?: job_postsCreateManyCompaniesInputEnvelope
    connect?: job_postsWhereUniqueInput | job_postsWhereUniqueInput[]
  }

  export type job_postsUncheckedCreateNestedManyWithoutCompaniesInput = {
    create?: XOR<job_postsCreateWithoutCompaniesInput, job_postsUncheckedCreateWithoutCompaniesInput> | job_postsCreateWithoutCompaniesInput[] | job_postsUncheckedCreateWithoutCompaniesInput[]
    connectOrCreate?: job_postsCreateOrConnectWithoutCompaniesInput | job_postsCreateOrConnectWithoutCompaniesInput[]
    createMany?: job_postsCreateManyCompaniesInputEnvelope
    connect?: job_postsWhereUniqueInput | job_postsWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type job_postsUpdateManyWithoutCompaniesNestedInput = {
    create?: XOR<job_postsCreateWithoutCompaniesInput, job_postsUncheckedCreateWithoutCompaniesInput> | job_postsCreateWithoutCompaniesInput[] | job_postsUncheckedCreateWithoutCompaniesInput[]
    connectOrCreate?: job_postsCreateOrConnectWithoutCompaniesInput | job_postsCreateOrConnectWithoutCompaniesInput[]
    upsert?: job_postsUpsertWithWhereUniqueWithoutCompaniesInput | job_postsUpsertWithWhereUniqueWithoutCompaniesInput[]
    createMany?: job_postsCreateManyCompaniesInputEnvelope
    set?: job_postsWhereUniqueInput | job_postsWhereUniqueInput[]
    disconnect?: job_postsWhereUniqueInput | job_postsWhereUniqueInput[]
    delete?: job_postsWhereUniqueInput | job_postsWhereUniqueInput[]
    connect?: job_postsWhereUniqueInput | job_postsWhereUniqueInput[]
    update?: job_postsUpdateWithWhereUniqueWithoutCompaniesInput | job_postsUpdateWithWhereUniqueWithoutCompaniesInput[]
    updateMany?: job_postsUpdateManyWithWhereWithoutCompaniesInput | job_postsUpdateManyWithWhereWithoutCompaniesInput[]
    deleteMany?: job_postsScalarWhereInput | job_postsScalarWhereInput[]
  }

  export type job_postsUncheckedUpdateManyWithoutCompaniesNestedInput = {
    create?: XOR<job_postsCreateWithoutCompaniesInput, job_postsUncheckedCreateWithoutCompaniesInput> | job_postsCreateWithoutCompaniesInput[] | job_postsUncheckedCreateWithoutCompaniesInput[]
    connectOrCreate?: job_postsCreateOrConnectWithoutCompaniesInput | job_postsCreateOrConnectWithoutCompaniesInput[]
    upsert?: job_postsUpsertWithWhereUniqueWithoutCompaniesInput | job_postsUpsertWithWhereUniqueWithoutCompaniesInput[]
    createMany?: job_postsCreateManyCompaniesInputEnvelope
    set?: job_postsWhereUniqueInput | job_postsWhereUniqueInput[]
    disconnect?: job_postsWhereUniqueInput | job_postsWhereUniqueInput[]
    delete?: job_postsWhereUniqueInput | job_postsWhereUniqueInput[]
    connect?: job_postsWhereUniqueInput | job_postsWhereUniqueInput[]
    update?: job_postsUpdateWithWhereUniqueWithoutCompaniesInput | job_postsUpdateWithWhereUniqueWithoutCompaniesInput[]
    updateMany?: job_postsUpdateManyWithWhereWithoutCompaniesInput | job_postsUpdateManyWithWhereWithoutCompaniesInput[]
    deleteMany?: job_postsScalarWhereInput | job_postsScalarWhereInput[]
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type job_post_categoriesCreateNestedManyWithoutJob_categoriesInput = {
    create?: XOR<job_post_categoriesCreateWithoutJob_categoriesInput, job_post_categoriesUncheckedCreateWithoutJob_categoriesInput> | job_post_categoriesCreateWithoutJob_categoriesInput[] | job_post_categoriesUncheckedCreateWithoutJob_categoriesInput[]
    connectOrCreate?: job_post_categoriesCreateOrConnectWithoutJob_categoriesInput | job_post_categoriesCreateOrConnectWithoutJob_categoriesInput[]
    createMany?: job_post_categoriesCreateManyJob_categoriesInputEnvelope
    connect?: job_post_categoriesWhereUniqueInput | job_post_categoriesWhereUniqueInput[]
  }

  export type job_post_categoriesUncheckedCreateNestedManyWithoutJob_categoriesInput = {
    create?: XOR<job_post_categoriesCreateWithoutJob_categoriesInput, job_post_categoriesUncheckedCreateWithoutJob_categoriesInput> | job_post_categoriesCreateWithoutJob_categoriesInput[] | job_post_categoriesUncheckedCreateWithoutJob_categoriesInput[]
    connectOrCreate?: job_post_categoriesCreateOrConnectWithoutJob_categoriesInput | job_post_categoriesCreateOrConnectWithoutJob_categoriesInput[]
    createMany?: job_post_categoriesCreateManyJob_categoriesInputEnvelope
    connect?: job_post_categoriesWhereUniqueInput | job_post_categoriesWhereUniqueInput[]
  }

  export type job_post_categoriesUpdateManyWithoutJob_categoriesNestedInput = {
    create?: XOR<job_post_categoriesCreateWithoutJob_categoriesInput, job_post_categoriesUncheckedCreateWithoutJob_categoriesInput> | job_post_categoriesCreateWithoutJob_categoriesInput[] | job_post_categoriesUncheckedCreateWithoutJob_categoriesInput[]
    connectOrCreate?: job_post_categoriesCreateOrConnectWithoutJob_categoriesInput | job_post_categoriesCreateOrConnectWithoutJob_categoriesInput[]
    upsert?: job_post_categoriesUpsertWithWhereUniqueWithoutJob_categoriesInput | job_post_categoriesUpsertWithWhereUniqueWithoutJob_categoriesInput[]
    createMany?: job_post_categoriesCreateManyJob_categoriesInputEnvelope
    set?: job_post_categoriesWhereUniqueInput | job_post_categoriesWhereUniqueInput[]
    disconnect?: job_post_categoriesWhereUniqueInput | job_post_categoriesWhereUniqueInput[]
    delete?: job_post_categoriesWhereUniqueInput | job_post_categoriesWhereUniqueInput[]
    connect?: job_post_categoriesWhereUniqueInput | job_post_categoriesWhereUniqueInput[]
    update?: job_post_categoriesUpdateWithWhereUniqueWithoutJob_categoriesInput | job_post_categoriesUpdateWithWhereUniqueWithoutJob_categoriesInput[]
    updateMany?: job_post_categoriesUpdateManyWithWhereWithoutJob_categoriesInput | job_post_categoriesUpdateManyWithWhereWithoutJob_categoriesInput[]
    deleteMany?: job_post_categoriesScalarWhereInput | job_post_categoriesScalarWhereInput[]
  }

  export type job_post_categoriesUncheckedUpdateManyWithoutJob_categoriesNestedInput = {
    create?: XOR<job_post_categoriesCreateWithoutJob_categoriesInput, job_post_categoriesUncheckedCreateWithoutJob_categoriesInput> | job_post_categoriesCreateWithoutJob_categoriesInput[] | job_post_categoriesUncheckedCreateWithoutJob_categoriesInput[]
    connectOrCreate?: job_post_categoriesCreateOrConnectWithoutJob_categoriesInput | job_post_categoriesCreateOrConnectWithoutJob_categoriesInput[]
    upsert?: job_post_categoriesUpsertWithWhereUniqueWithoutJob_categoriesInput | job_post_categoriesUpsertWithWhereUniqueWithoutJob_categoriesInput[]
    createMany?: job_post_categoriesCreateManyJob_categoriesInputEnvelope
    set?: job_post_categoriesWhereUniqueInput | job_post_categoriesWhereUniqueInput[]
    disconnect?: job_post_categoriesWhereUniqueInput | job_post_categoriesWhereUniqueInput[]
    delete?: job_post_categoriesWhereUniqueInput | job_post_categoriesWhereUniqueInput[]
    connect?: job_post_categoriesWhereUniqueInput | job_post_categoriesWhereUniqueInput[]
    update?: job_post_categoriesUpdateWithWhereUniqueWithoutJob_categoriesInput | job_post_categoriesUpdateWithWhereUniqueWithoutJob_categoriesInput[]
    updateMany?: job_post_categoriesUpdateManyWithWhereWithoutJob_categoriesInput | job_post_categoriesUpdateManyWithWhereWithoutJob_categoriesInput[]
    deleteMany?: job_post_categoriesScalarWhereInput | job_post_categoriesScalarWhereInput[]
  }

  export type job_post_categoriesCreateNestedManyWithoutJob_postsInput = {
    create?: XOR<job_post_categoriesCreateWithoutJob_postsInput, job_post_categoriesUncheckedCreateWithoutJob_postsInput> | job_post_categoriesCreateWithoutJob_postsInput[] | job_post_categoriesUncheckedCreateWithoutJob_postsInput[]
    connectOrCreate?: job_post_categoriesCreateOrConnectWithoutJob_postsInput | job_post_categoriesCreateOrConnectWithoutJob_postsInput[]
    createMany?: job_post_categoriesCreateManyJob_postsInputEnvelope
    connect?: job_post_categoriesWhereUniqueInput | job_post_categoriesWhereUniqueInput[]
  }

  export type companiesCreateNestedOneWithoutJob_postsInput = {
    create?: XOR<companiesCreateWithoutJob_postsInput, companiesUncheckedCreateWithoutJob_postsInput>
    connectOrCreate?: companiesCreateOrConnectWithoutJob_postsInput
    connect?: companiesWhereUniqueInput
  }

  export type job_post_categoriesUncheckedCreateNestedManyWithoutJob_postsInput = {
    create?: XOR<job_post_categoriesCreateWithoutJob_postsInput, job_post_categoriesUncheckedCreateWithoutJob_postsInput> | job_post_categoriesCreateWithoutJob_postsInput[] | job_post_categoriesUncheckedCreateWithoutJob_postsInput[]
    connectOrCreate?: job_post_categoriesCreateOrConnectWithoutJob_postsInput | job_post_categoriesCreateOrConnectWithoutJob_postsInput[]
    createMany?: job_post_categoriesCreateManyJob_postsInputEnvelope
    connect?: job_post_categoriesWhereUniqueInput | job_post_categoriesWhereUniqueInput[]
  }

  export type Enumjob_posts_statusFieldUpdateOperationsInput = {
    set?: $Enums.job_posts_status
  }

  export type job_post_categoriesUpdateManyWithoutJob_postsNestedInput = {
    create?: XOR<job_post_categoriesCreateWithoutJob_postsInput, job_post_categoriesUncheckedCreateWithoutJob_postsInput> | job_post_categoriesCreateWithoutJob_postsInput[] | job_post_categoriesUncheckedCreateWithoutJob_postsInput[]
    connectOrCreate?: job_post_categoriesCreateOrConnectWithoutJob_postsInput | job_post_categoriesCreateOrConnectWithoutJob_postsInput[]
    upsert?: job_post_categoriesUpsertWithWhereUniqueWithoutJob_postsInput | job_post_categoriesUpsertWithWhereUniqueWithoutJob_postsInput[]
    createMany?: job_post_categoriesCreateManyJob_postsInputEnvelope
    set?: job_post_categoriesWhereUniqueInput | job_post_categoriesWhereUniqueInput[]
    disconnect?: job_post_categoriesWhereUniqueInput | job_post_categoriesWhereUniqueInput[]
    delete?: job_post_categoriesWhereUniqueInput | job_post_categoriesWhereUniqueInput[]
    connect?: job_post_categoriesWhereUniqueInput | job_post_categoriesWhereUniqueInput[]
    update?: job_post_categoriesUpdateWithWhereUniqueWithoutJob_postsInput | job_post_categoriesUpdateWithWhereUniqueWithoutJob_postsInput[]
    updateMany?: job_post_categoriesUpdateManyWithWhereWithoutJob_postsInput | job_post_categoriesUpdateManyWithWhereWithoutJob_postsInput[]
    deleteMany?: job_post_categoriesScalarWhereInput | job_post_categoriesScalarWhereInput[]
  }

  export type companiesUpdateOneRequiredWithoutJob_postsNestedInput = {
    create?: XOR<companiesCreateWithoutJob_postsInput, companiesUncheckedCreateWithoutJob_postsInput>
    connectOrCreate?: companiesCreateOrConnectWithoutJob_postsInput
    upsert?: companiesUpsertWithoutJob_postsInput
    connect?: companiesWhereUniqueInput
    update?: XOR<XOR<companiesUpdateToOneWithWhereWithoutJob_postsInput, companiesUpdateWithoutJob_postsInput>, companiesUncheckedUpdateWithoutJob_postsInput>
  }

  export type job_post_categoriesUncheckedUpdateManyWithoutJob_postsNestedInput = {
    create?: XOR<job_post_categoriesCreateWithoutJob_postsInput, job_post_categoriesUncheckedCreateWithoutJob_postsInput> | job_post_categoriesCreateWithoutJob_postsInput[] | job_post_categoriesUncheckedCreateWithoutJob_postsInput[]
    connectOrCreate?: job_post_categoriesCreateOrConnectWithoutJob_postsInput | job_post_categoriesCreateOrConnectWithoutJob_postsInput[]
    upsert?: job_post_categoriesUpsertWithWhereUniqueWithoutJob_postsInput | job_post_categoriesUpsertWithWhereUniqueWithoutJob_postsInput[]
    createMany?: job_post_categoriesCreateManyJob_postsInputEnvelope
    set?: job_post_categoriesWhereUniqueInput | job_post_categoriesWhereUniqueInput[]
    disconnect?: job_post_categoriesWhereUniqueInput | job_post_categoriesWhereUniqueInput[]
    delete?: job_post_categoriesWhereUniqueInput | job_post_categoriesWhereUniqueInput[]
    connect?: job_post_categoriesWhereUniqueInput | job_post_categoriesWhereUniqueInput[]
    update?: job_post_categoriesUpdateWithWhereUniqueWithoutJob_postsInput | job_post_categoriesUpdateWithWhereUniqueWithoutJob_postsInput[]
    updateMany?: job_post_categoriesUpdateManyWithWhereWithoutJob_postsInput | job_post_categoriesUpdateManyWithWhereWithoutJob_postsInput[]
    deleteMany?: job_post_categoriesScalarWhereInput | job_post_categoriesScalarWhereInput[]
  }

  export type applicantsCreateNestedOneWithoutSelectionsInput = {
    create?: XOR<applicantsCreateWithoutSelectionsInput, applicantsUncheckedCreateWithoutSelectionsInput>
    connectOrCreate?: applicantsCreateOrConnectWithoutSelectionsInput
    connect?: applicantsWhereUniqueInput
  }

  export type job_post_categoriesCreateNestedOneWithoutSelectionsInput = {
    create?: XOR<job_post_categoriesCreateWithoutSelectionsInput, job_post_categoriesUncheckedCreateWithoutSelectionsInput>
    connectOrCreate?: job_post_categoriesCreateOrConnectWithoutSelectionsInput
    connect?: job_post_categoriesWhereUniqueInput
  }

  export type Enumselections_stageFieldUpdateOperationsInput = {
    set?: $Enums.selections_stage
  }

  export type Enumselections_statusFieldUpdateOperationsInput = {
    set?: $Enums.selections_status
  }

  export type applicantsUpdateOneRequiredWithoutSelectionsNestedInput = {
    create?: XOR<applicantsCreateWithoutSelectionsInput, applicantsUncheckedCreateWithoutSelectionsInput>
    connectOrCreate?: applicantsCreateOrConnectWithoutSelectionsInput
    upsert?: applicantsUpsertWithoutSelectionsInput
    connect?: applicantsWhereUniqueInput
    update?: XOR<XOR<applicantsUpdateToOneWithWhereWithoutSelectionsInput, applicantsUpdateWithoutSelectionsInput>, applicantsUncheckedUpdateWithoutSelectionsInput>
  }

  export type job_post_categoriesUpdateOneRequiredWithoutSelectionsNestedInput = {
    create?: XOR<job_post_categoriesCreateWithoutSelectionsInput, job_post_categoriesUncheckedCreateWithoutSelectionsInput>
    connectOrCreate?: job_post_categoriesCreateOrConnectWithoutSelectionsInput
    upsert?: job_post_categoriesUpsertWithoutSelectionsInput
    connect?: job_post_categoriesWhereUniqueInput
    update?: XOR<XOR<job_post_categoriesUpdateToOneWithWhereWithoutSelectionsInput, job_post_categoriesUpdateWithoutSelectionsInput>, job_post_categoriesUncheckedUpdateWithoutSelectionsInput>
  }

  export type applicantsCreateNestedManyWithoutUsersInput = {
    create?: XOR<applicantsCreateWithoutUsersInput, applicantsUncheckedCreateWithoutUsersInput> | applicantsCreateWithoutUsersInput[] | applicantsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: applicantsCreateOrConnectWithoutUsersInput | applicantsCreateOrConnectWithoutUsersInput[]
    createMany?: applicantsCreateManyUsersInputEnvelope
    connect?: applicantsWhereUniqueInput | applicantsWhereUniqueInput[]
  }

  export type applicantsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<applicantsCreateWithoutUsersInput, applicantsUncheckedCreateWithoutUsersInput> | applicantsCreateWithoutUsersInput[] | applicantsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: applicantsCreateOrConnectWithoutUsersInput | applicantsCreateOrConnectWithoutUsersInput[]
    createMany?: applicantsCreateManyUsersInputEnvelope
    connect?: applicantsWhereUniqueInput | applicantsWhereUniqueInput[]
  }

  export type Enumusers_roleFieldUpdateOperationsInput = {
    set?: $Enums.users_role
  }

  export type applicantsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<applicantsCreateWithoutUsersInput, applicantsUncheckedCreateWithoutUsersInput> | applicantsCreateWithoutUsersInput[] | applicantsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: applicantsCreateOrConnectWithoutUsersInput | applicantsCreateOrConnectWithoutUsersInput[]
    upsert?: applicantsUpsertWithWhereUniqueWithoutUsersInput | applicantsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: applicantsCreateManyUsersInputEnvelope
    set?: applicantsWhereUniqueInput | applicantsWhereUniqueInput[]
    disconnect?: applicantsWhereUniqueInput | applicantsWhereUniqueInput[]
    delete?: applicantsWhereUniqueInput | applicantsWhereUniqueInput[]
    connect?: applicantsWhereUniqueInput | applicantsWhereUniqueInput[]
    update?: applicantsUpdateWithWhereUniqueWithoutUsersInput | applicantsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: applicantsUpdateManyWithWhereWithoutUsersInput | applicantsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: applicantsScalarWhereInput | applicantsScalarWhereInput[]
  }

  export type applicantsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<applicantsCreateWithoutUsersInput, applicantsUncheckedCreateWithoutUsersInput> | applicantsCreateWithoutUsersInput[] | applicantsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: applicantsCreateOrConnectWithoutUsersInput | applicantsCreateOrConnectWithoutUsersInput[]
    upsert?: applicantsUpsertWithWhereUniqueWithoutUsersInput | applicantsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: applicantsCreateManyUsersInputEnvelope
    set?: applicantsWhereUniqueInput | applicantsWhereUniqueInput[]
    disconnect?: applicantsWhereUniqueInput | applicantsWhereUniqueInput[]
    delete?: applicantsWhereUniqueInput | applicantsWhereUniqueInput[]
    connect?: applicantsWhereUniqueInput | applicantsWhereUniqueInput[]
    update?: applicantsUpdateWithWhereUniqueWithoutUsersInput | applicantsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: applicantsUpdateManyWithWhereWithoutUsersInput | applicantsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: applicantsScalarWhereInput | applicantsScalarWhereInput[]
  }

  export type applicantsCreateNestedManyWithoutJob_post_categoriesInput = {
    create?: XOR<applicantsCreateWithoutJob_post_categoriesInput, applicantsUncheckedCreateWithoutJob_post_categoriesInput> | applicantsCreateWithoutJob_post_categoriesInput[] | applicantsUncheckedCreateWithoutJob_post_categoriesInput[]
    connectOrCreate?: applicantsCreateOrConnectWithoutJob_post_categoriesInput | applicantsCreateOrConnectWithoutJob_post_categoriesInput[]
    createMany?: applicantsCreateManyJob_post_categoriesInputEnvelope
    connect?: applicantsWhereUniqueInput | applicantsWhereUniqueInput[]
  }

  export type job_categoriesCreateNestedOneWithoutJob_post_categoriesInput = {
    create?: XOR<job_categoriesCreateWithoutJob_post_categoriesInput, job_categoriesUncheckedCreateWithoutJob_post_categoriesInput>
    connectOrCreate?: job_categoriesCreateOrConnectWithoutJob_post_categoriesInput
    connect?: job_categoriesWhereUniqueInput
  }

  export type job_postsCreateNestedOneWithoutJob_post_categoriesInput = {
    create?: XOR<job_postsCreateWithoutJob_post_categoriesInput, job_postsUncheckedCreateWithoutJob_post_categoriesInput>
    connectOrCreate?: job_postsCreateOrConnectWithoutJob_post_categoriesInput
    connect?: job_postsWhereUniqueInput
  }

  export type selectionsCreateNestedManyWithoutJob_post_categoriesInput = {
    create?: XOR<selectionsCreateWithoutJob_post_categoriesInput, selectionsUncheckedCreateWithoutJob_post_categoriesInput> | selectionsCreateWithoutJob_post_categoriesInput[] | selectionsUncheckedCreateWithoutJob_post_categoriesInput[]
    connectOrCreate?: selectionsCreateOrConnectWithoutJob_post_categoriesInput | selectionsCreateOrConnectWithoutJob_post_categoriesInput[]
    createMany?: selectionsCreateManyJob_post_categoriesInputEnvelope
    connect?: selectionsWhereUniqueInput | selectionsWhereUniqueInput[]
  }

  export type applicantsUncheckedCreateNestedManyWithoutJob_post_categoriesInput = {
    create?: XOR<applicantsCreateWithoutJob_post_categoriesInput, applicantsUncheckedCreateWithoutJob_post_categoriesInput> | applicantsCreateWithoutJob_post_categoriesInput[] | applicantsUncheckedCreateWithoutJob_post_categoriesInput[]
    connectOrCreate?: applicantsCreateOrConnectWithoutJob_post_categoriesInput | applicantsCreateOrConnectWithoutJob_post_categoriesInput[]
    createMany?: applicantsCreateManyJob_post_categoriesInputEnvelope
    connect?: applicantsWhereUniqueInput | applicantsWhereUniqueInput[]
  }

  export type selectionsUncheckedCreateNestedManyWithoutJob_post_categoriesInput = {
    create?: XOR<selectionsCreateWithoutJob_post_categoriesInput, selectionsUncheckedCreateWithoutJob_post_categoriesInput> | selectionsCreateWithoutJob_post_categoriesInput[] | selectionsUncheckedCreateWithoutJob_post_categoriesInput[]
    connectOrCreate?: selectionsCreateOrConnectWithoutJob_post_categoriesInput | selectionsCreateOrConnectWithoutJob_post_categoriesInput[]
    createMany?: selectionsCreateManyJob_post_categoriesInputEnvelope
    connect?: selectionsWhereUniqueInput | selectionsWhereUniqueInput[]
  }

  export type Enumjob_post_categories_typeFieldUpdateOperationsInput = {
    set?: $Enums.job_post_categories_type
  }

  export type applicantsUpdateManyWithoutJob_post_categoriesNestedInput = {
    create?: XOR<applicantsCreateWithoutJob_post_categoriesInput, applicantsUncheckedCreateWithoutJob_post_categoriesInput> | applicantsCreateWithoutJob_post_categoriesInput[] | applicantsUncheckedCreateWithoutJob_post_categoriesInput[]
    connectOrCreate?: applicantsCreateOrConnectWithoutJob_post_categoriesInput | applicantsCreateOrConnectWithoutJob_post_categoriesInput[]
    upsert?: applicantsUpsertWithWhereUniqueWithoutJob_post_categoriesInput | applicantsUpsertWithWhereUniqueWithoutJob_post_categoriesInput[]
    createMany?: applicantsCreateManyJob_post_categoriesInputEnvelope
    set?: applicantsWhereUniqueInput | applicantsWhereUniqueInput[]
    disconnect?: applicantsWhereUniqueInput | applicantsWhereUniqueInput[]
    delete?: applicantsWhereUniqueInput | applicantsWhereUniqueInput[]
    connect?: applicantsWhereUniqueInput | applicantsWhereUniqueInput[]
    update?: applicantsUpdateWithWhereUniqueWithoutJob_post_categoriesInput | applicantsUpdateWithWhereUniqueWithoutJob_post_categoriesInput[]
    updateMany?: applicantsUpdateManyWithWhereWithoutJob_post_categoriesInput | applicantsUpdateManyWithWhereWithoutJob_post_categoriesInput[]
    deleteMany?: applicantsScalarWhereInput | applicantsScalarWhereInput[]
  }

  export type job_categoriesUpdateOneRequiredWithoutJob_post_categoriesNestedInput = {
    create?: XOR<job_categoriesCreateWithoutJob_post_categoriesInput, job_categoriesUncheckedCreateWithoutJob_post_categoriesInput>
    connectOrCreate?: job_categoriesCreateOrConnectWithoutJob_post_categoriesInput
    upsert?: job_categoriesUpsertWithoutJob_post_categoriesInput
    connect?: job_categoriesWhereUniqueInput
    update?: XOR<XOR<job_categoriesUpdateToOneWithWhereWithoutJob_post_categoriesInput, job_categoriesUpdateWithoutJob_post_categoriesInput>, job_categoriesUncheckedUpdateWithoutJob_post_categoriesInput>
  }

  export type job_postsUpdateOneRequiredWithoutJob_post_categoriesNestedInput = {
    create?: XOR<job_postsCreateWithoutJob_post_categoriesInput, job_postsUncheckedCreateWithoutJob_post_categoriesInput>
    connectOrCreate?: job_postsCreateOrConnectWithoutJob_post_categoriesInput
    upsert?: job_postsUpsertWithoutJob_post_categoriesInput
    connect?: job_postsWhereUniqueInput
    update?: XOR<XOR<job_postsUpdateToOneWithWhereWithoutJob_post_categoriesInput, job_postsUpdateWithoutJob_post_categoriesInput>, job_postsUncheckedUpdateWithoutJob_post_categoriesInput>
  }

  export type selectionsUpdateManyWithoutJob_post_categoriesNestedInput = {
    create?: XOR<selectionsCreateWithoutJob_post_categoriesInput, selectionsUncheckedCreateWithoutJob_post_categoriesInput> | selectionsCreateWithoutJob_post_categoriesInput[] | selectionsUncheckedCreateWithoutJob_post_categoriesInput[]
    connectOrCreate?: selectionsCreateOrConnectWithoutJob_post_categoriesInput | selectionsCreateOrConnectWithoutJob_post_categoriesInput[]
    upsert?: selectionsUpsertWithWhereUniqueWithoutJob_post_categoriesInput | selectionsUpsertWithWhereUniqueWithoutJob_post_categoriesInput[]
    createMany?: selectionsCreateManyJob_post_categoriesInputEnvelope
    set?: selectionsWhereUniqueInput | selectionsWhereUniqueInput[]
    disconnect?: selectionsWhereUniqueInput | selectionsWhereUniqueInput[]
    delete?: selectionsWhereUniqueInput | selectionsWhereUniqueInput[]
    connect?: selectionsWhereUniqueInput | selectionsWhereUniqueInput[]
    update?: selectionsUpdateWithWhereUniqueWithoutJob_post_categoriesInput | selectionsUpdateWithWhereUniqueWithoutJob_post_categoriesInput[]
    updateMany?: selectionsUpdateManyWithWhereWithoutJob_post_categoriesInput | selectionsUpdateManyWithWhereWithoutJob_post_categoriesInput[]
    deleteMany?: selectionsScalarWhereInput | selectionsScalarWhereInput[]
  }

  export type applicantsUncheckedUpdateManyWithoutJob_post_categoriesNestedInput = {
    create?: XOR<applicantsCreateWithoutJob_post_categoriesInput, applicantsUncheckedCreateWithoutJob_post_categoriesInput> | applicantsCreateWithoutJob_post_categoriesInput[] | applicantsUncheckedCreateWithoutJob_post_categoriesInput[]
    connectOrCreate?: applicantsCreateOrConnectWithoutJob_post_categoriesInput | applicantsCreateOrConnectWithoutJob_post_categoriesInput[]
    upsert?: applicantsUpsertWithWhereUniqueWithoutJob_post_categoriesInput | applicantsUpsertWithWhereUniqueWithoutJob_post_categoriesInput[]
    createMany?: applicantsCreateManyJob_post_categoriesInputEnvelope
    set?: applicantsWhereUniqueInput | applicantsWhereUniqueInput[]
    disconnect?: applicantsWhereUniqueInput | applicantsWhereUniqueInput[]
    delete?: applicantsWhereUniqueInput | applicantsWhereUniqueInput[]
    connect?: applicantsWhereUniqueInput | applicantsWhereUniqueInput[]
    update?: applicantsUpdateWithWhereUniqueWithoutJob_post_categoriesInput | applicantsUpdateWithWhereUniqueWithoutJob_post_categoriesInput[]
    updateMany?: applicantsUpdateManyWithWhereWithoutJob_post_categoriesInput | applicantsUpdateManyWithWhereWithoutJob_post_categoriesInput[]
    deleteMany?: applicantsScalarWhereInput | applicantsScalarWhereInput[]
  }

  export type selectionsUncheckedUpdateManyWithoutJob_post_categoriesNestedInput = {
    create?: XOR<selectionsCreateWithoutJob_post_categoriesInput, selectionsUncheckedCreateWithoutJob_post_categoriesInput> | selectionsCreateWithoutJob_post_categoriesInput[] | selectionsUncheckedCreateWithoutJob_post_categoriesInput[]
    connectOrCreate?: selectionsCreateOrConnectWithoutJob_post_categoriesInput | selectionsCreateOrConnectWithoutJob_post_categoriesInput[]
    upsert?: selectionsUpsertWithWhereUniqueWithoutJob_post_categoriesInput | selectionsUpsertWithWhereUniqueWithoutJob_post_categoriesInput[]
    createMany?: selectionsCreateManyJob_post_categoriesInputEnvelope
    set?: selectionsWhereUniqueInput | selectionsWhereUniqueInput[]
    disconnect?: selectionsWhereUniqueInput | selectionsWhereUniqueInput[]
    delete?: selectionsWhereUniqueInput | selectionsWhereUniqueInput[]
    connect?: selectionsWhereUniqueInput | selectionsWhereUniqueInput[]
    update?: selectionsUpdateWithWhereUniqueWithoutJob_post_categoriesInput | selectionsUpdateWithWhereUniqueWithoutJob_post_categoriesInput[]
    updateMany?: selectionsUpdateManyWithWhereWithoutJob_post_categoriesInput | selectionsUpdateManyWithWhereWithoutJob_post_categoriesInput[]
    deleteMany?: selectionsScalarWhereInput | selectionsScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumapplicants_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.applicants_status | Enumapplicants_statusFieldRefInput<$PrismaModel>
    in?: $Enums.applicants_status[]
    notIn?: $Enums.applicants_status[]
    not?: NestedEnumapplicants_statusFilter<$PrismaModel> | $Enums.applicants_status
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumapplicants_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.applicants_status | Enumapplicants_statusFieldRefInput<$PrismaModel>
    in?: $Enums.applicants_status[]
    notIn?: $Enums.applicants_status[]
    not?: NestedEnumapplicants_statusWithAggregatesFilter<$PrismaModel> | $Enums.applicants_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumapplicants_statusFilter<$PrismaModel>
    _max?: NestedEnumapplicants_statusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumjob_posts_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.job_posts_status | Enumjob_posts_statusFieldRefInput<$PrismaModel>
    in?: $Enums.job_posts_status[]
    notIn?: $Enums.job_posts_status[]
    not?: NestedEnumjob_posts_statusFilter<$PrismaModel> | $Enums.job_posts_status
  }

  export type NestedEnumjob_posts_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.job_posts_status | Enumjob_posts_statusFieldRefInput<$PrismaModel>
    in?: $Enums.job_posts_status[]
    notIn?: $Enums.job_posts_status[]
    not?: NestedEnumjob_posts_statusWithAggregatesFilter<$PrismaModel> | $Enums.job_posts_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumjob_posts_statusFilter<$PrismaModel>
    _max?: NestedEnumjob_posts_statusFilter<$PrismaModel>
  }

  export type NestedEnumselections_stageFilter<$PrismaModel = never> = {
    equals?: $Enums.selections_stage | Enumselections_stageFieldRefInput<$PrismaModel>
    in?: $Enums.selections_stage[]
    notIn?: $Enums.selections_stage[]
    not?: NestedEnumselections_stageFilter<$PrismaModel> | $Enums.selections_stage
  }

  export type NestedEnumselections_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.selections_status | Enumselections_statusFieldRefInput<$PrismaModel>
    in?: $Enums.selections_status[]
    notIn?: $Enums.selections_status[]
    not?: NestedEnumselections_statusFilter<$PrismaModel> | $Enums.selections_status
  }

  export type NestedEnumselections_stageWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.selections_stage | Enumselections_stageFieldRefInput<$PrismaModel>
    in?: $Enums.selections_stage[]
    notIn?: $Enums.selections_stage[]
    not?: NestedEnumselections_stageWithAggregatesFilter<$PrismaModel> | $Enums.selections_stage
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumselections_stageFilter<$PrismaModel>
    _max?: NestedEnumselections_stageFilter<$PrismaModel>
  }

  export type NestedEnumselections_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.selections_status | Enumselections_statusFieldRefInput<$PrismaModel>
    in?: $Enums.selections_status[]
    notIn?: $Enums.selections_status[]
    not?: NestedEnumselections_statusWithAggregatesFilter<$PrismaModel> | $Enums.selections_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumselections_statusFilter<$PrismaModel>
    _max?: NestedEnumselections_statusFilter<$PrismaModel>
  }

  export type NestedEnumusers_roleFilter<$PrismaModel = never> = {
    equals?: $Enums.users_role | Enumusers_roleFieldRefInput<$PrismaModel>
    in?: $Enums.users_role[]
    notIn?: $Enums.users_role[]
    not?: NestedEnumusers_roleFilter<$PrismaModel> | $Enums.users_role
  }

  export type NestedEnumusers_roleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.users_role | Enumusers_roleFieldRefInput<$PrismaModel>
    in?: $Enums.users_role[]
    notIn?: $Enums.users_role[]
    not?: NestedEnumusers_roleWithAggregatesFilter<$PrismaModel> | $Enums.users_role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumusers_roleFilter<$PrismaModel>
    _max?: NestedEnumusers_roleFilter<$PrismaModel>
  }

  export type NestedEnumjob_post_categories_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.job_post_categories_type | Enumjob_post_categories_typeFieldRefInput<$PrismaModel>
    in?: $Enums.job_post_categories_type[]
    notIn?: $Enums.job_post_categories_type[]
    not?: NestedEnumjob_post_categories_typeFilter<$PrismaModel> | $Enums.job_post_categories_type
  }

  export type NestedEnumjob_post_categories_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.job_post_categories_type | Enumjob_post_categories_typeFieldRefInput<$PrismaModel>
    in?: $Enums.job_post_categories_type[]
    notIn?: $Enums.job_post_categories_type[]
    not?: NestedEnumjob_post_categories_typeWithAggregatesFilter<$PrismaModel> | $Enums.job_post_categories_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumjob_post_categories_typeFilter<$PrismaModel>
    _max?: NestedEnumjob_post_categories_typeFilter<$PrismaModel>
  }

  export type job_post_categoriesCreateWithoutApplicantsInput = {
    id: string
    type: $Enums.job_post_categories_type
    required_count?: number
    description?: string | null
    requirements?: string | null
    benefits?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    job_categories: job_categoriesCreateNestedOneWithoutJob_post_categoriesInput
    job_posts: job_postsCreateNestedOneWithoutJob_post_categoriesInput
    selections?: selectionsCreateNestedManyWithoutJob_post_categoriesInput
  }

  export type job_post_categoriesUncheckedCreateWithoutApplicantsInput = {
    id: string
    job_category_id: string
    job_post_id: string
    type: $Enums.job_post_categories_type
    required_count?: number
    description?: string | null
    requirements?: string | null
    benefits?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    selections?: selectionsUncheckedCreateNestedManyWithoutJob_post_categoriesInput
  }

  export type job_post_categoriesCreateOrConnectWithoutApplicantsInput = {
    where: job_post_categoriesWhereUniqueInput
    create: XOR<job_post_categoriesCreateWithoutApplicantsInput, job_post_categoriesUncheckedCreateWithoutApplicantsInput>
  }

  export type usersCreateWithoutApplicantsInput = {
    id: string
    photo?: string | null
    name: string
    phone: string
    email: string
    address?: string | null
    description?: string | null
    password: string
    role?: $Enums.users_role
    verified_at?: Date | string | null
    remember_token?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type usersUncheckedCreateWithoutApplicantsInput = {
    id: string
    photo?: string | null
    name: string
    phone: string
    email: string
    address?: string | null
    description?: string | null
    password: string
    role?: $Enums.users_role
    verified_at?: Date | string | null
    remember_token?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type usersCreateOrConnectWithoutApplicantsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutApplicantsInput, usersUncheckedCreateWithoutApplicantsInput>
  }

  export type selectionsCreateWithoutApplicantsInput = {
    id: string
    stage: $Enums.selections_stage
    status?: $Enums.selections_status
    attachment?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    job_post_categories: job_post_categoriesCreateNestedOneWithoutSelectionsInput
  }

  export type selectionsUncheckedCreateWithoutApplicantsInput = {
    id: string
    job_post_category_id: string
    stage: $Enums.selections_stage
    status?: $Enums.selections_status
    attachment?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type selectionsCreateOrConnectWithoutApplicantsInput = {
    where: selectionsWhereUniqueInput
    create: XOR<selectionsCreateWithoutApplicantsInput, selectionsUncheckedCreateWithoutApplicantsInput>
  }

  export type selectionsCreateManyApplicantsInputEnvelope = {
    data: selectionsCreateManyApplicantsInput | selectionsCreateManyApplicantsInput[]
    skipDuplicates?: boolean
  }

  export type job_post_categoriesUpsertWithoutApplicantsInput = {
    update: XOR<job_post_categoriesUpdateWithoutApplicantsInput, job_post_categoriesUncheckedUpdateWithoutApplicantsInput>
    create: XOR<job_post_categoriesCreateWithoutApplicantsInput, job_post_categoriesUncheckedCreateWithoutApplicantsInput>
    where?: job_post_categoriesWhereInput
  }

  export type job_post_categoriesUpdateToOneWithWhereWithoutApplicantsInput = {
    where?: job_post_categoriesWhereInput
    data: XOR<job_post_categoriesUpdateWithoutApplicantsInput, job_post_categoriesUncheckedUpdateWithoutApplicantsInput>
  }

  export type job_post_categoriesUpdateWithoutApplicantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: Enumjob_post_categories_typeFieldUpdateOperationsInput | $Enums.job_post_categories_type
    required_count?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    benefits?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    job_categories?: job_categoriesUpdateOneRequiredWithoutJob_post_categoriesNestedInput
    job_posts?: job_postsUpdateOneRequiredWithoutJob_post_categoriesNestedInput
    selections?: selectionsUpdateManyWithoutJob_post_categoriesNestedInput
  }

  export type job_post_categoriesUncheckedUpdateWithoutApplicantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    job_category_id?: StringFieldUpdateOperationsInput | string
    job_post_id?: StringFieldUpdateOperationsInput | string
    type?: Enumjob_post_categories_typeFieldUpdateOperationsInput | $Enums.job_post_categories_type
    required_count?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    benefits?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    selections?: selectionsUncheckedUpdateManyWithoutJob_post_categoriesNestedInput
  }

  export type usersUpsertWithoutApplicantsInput = {
    update: XOR<usersUpdateWithoutApplicantsInput, usersUncheckedUpdateWithoutApplicantsInput>
    create: XOR<usersCreateWithoutApplicantsInput, usersUncheckedCreateWithoutApplicantsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutApplicantsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutApplicantsInput, usersUncheckedUpdateWithoutApplicantsInput>
  }

  export type usersUpdateWithoutApplicantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: Enumusers_roleFieldUpdateOperationsInput | $Enums.users_role
    verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    remember_token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUncheckedUpdateWithoutApplicantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: Enumusers_roleFieldUpdateOperationsInput | $Enums.users_role
    verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    remember_token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type selectionsUpsertWithWhereUniqueWithoutApplicantsInput = {
    where: selectionsWhereUniqueInput
    update: XOR<selectionsUpdateWithoutApplicantsInput, selectionsUncheckedUpdateWithoutApplicantsInput>
    create: XOR<selectionsCreateWithoutApplicantsInput, selectionsUncheckedCreateWithoutApplicantsInput>
  }

  export type selectionsUpdateWithWhereUniqueWithoutApplicantsInput = {
    where: selectionsWhereUniqueInput
    data: XOR<selectionsUpdateWithoutApplicantsInput, selectionsUncheckedUpdateWithoutApplicantsInput>
  }

  export type selectionsUpdateManyWithWhereWithoutApplicantsInput = {
    where: selectionsScalarWhereInput
    data: XOR<selectionsUpdateManyMutationInput, selectionsUncheckedUpdateManyWithoutApplicantsInput>
  }

  export type selectionsScalarWhereInput = {
    AND?: selectionsScalarWhereInput | selectionsScalarWhereInput[]
    OR?: selectionsScalarWhereInput[]
    NOT?: selectionsScalarWhereInput | selectionsScalarWhereInput[]
    id?: StringFilter<"selections"> | string
    applicant_id?: StringFilter<"selections"> | string
    job_post_category_id?: StringFilter<"selections"> | string
    stage?: Enumselections_stageFilter<"selections"> | $Enums.selections_stage
    status?: Enumselections_statusFilter<"selections"> | $Enums.selections_status
    attachment?: StringNullableFilter<"selections"> | string | null
    created_at?: DateTimeNullableFilter<"selections"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"selections"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"selections"> | Date | string | null
  }

  export type job_postsCreateWithoutCompaniesInput = {
    id: string
    title: string
    thumbnail: string
    status?: $Enums.job_posts_status
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    job_post_categories?: job_post_categoriesCreateNestedManyWithoutJob_postsInput
  }

  export type job_postsUncheckedCreateWithoutCompaniesInput = {
    id: string
    title: string
    thumbnail: string
    status?: $Enums.job_posts_status
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    job_post_categories?: job_post_categoriesUncheckedCreateNestedManyWithoutJob_postsInput
  }

  export type job_postsCreateOrConnectWithoutCompaniesInput = {
    where: job_postsWhereUniqueInput
    create: XOR<job_postsCreateWithoutCompaniesInput, job_postsUncheckedCreateWithoutCompaniesInput>
  }

  export type job_postsCreateManyCompaniesInputEnvelope = {
    data: job_postsCreateManyCompaniesInput | job_postsCreateManyCompaniesInput[]
    skipDuplicates?: boolean
  }

  export type job_postsUpsertWithWhereUniqueWithoutCompaniesInput = {
    where: job_postsWhereUniqueInput
    update: XOR<job_postsUpdateWithoutCompaniesInput, job_postsUncheckedUpdateWithoutCompaniesInput>
    create: XOR<job_postsCreateWithoutCompaniesInput, job_postsUncheckedCreateWithoutCompaniesInput>
  }

  export type job_postsUpdateWithWhereUniqueWithoutCompaniesInput = {
    where: job_postsWhereUniqueInput
    data: XOR<job_postsUpdateWithoutCompaniesInput, job_postsUncheckedUpdateWithoutCompaniesInput>
  }

  export type job_postsUpdateManyWithWhereWithoutCompaniesInput = {
    where: job_postsScalarWhereInput
    data: XOR<job_postsUpdateManyMutationInput, job_postsUncheckedUpdateManyWithoutCompaniesInput>
  }

  export type job_postsScalarWhereInput = {
    AND?: job_postsScalarWhereInput | job_postsScalarWhereInput[]
    OR?: job_postsScalarWhereInput[]
    NOT?: job_postsScalarWhereInput | job_postsScalarWhereInput[]
    id?: StringFilter<"job_posts"> | string
    company_id?: StringFilter<"job_posts"> | string
    title?: StringFilter<"job_posts"> | string
    thumbnail?: StringFilter<"job_posts"> | string
    status?: Enumjob_posts_statusFilter<"job_posts"> | $Enums.job_posts_status
    created_at?: DateTimeNullableFilter<"job_posts"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"job_posts"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"job_posts"> | Date | string | null
  }

  export type job_post_categoriesCreateWithoutJob_categoriesInput = {
    id: string
    type: $Enums.job_post_categories_type
    required_count?: number
    description?: string | null
    requirements?: string | null
    benefits?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    applicants?: applicantsCreateNestedManyWithoutJob_post_categoriesInput
    job_posts: job_postsCreateNestedOneWithoutJob_post_categoriesInput
    selections?: selectionsCreateNestedManyWithoutJob_post_categoriesInput
  }

  export type job_post_categoriesUncheckedCreateWithoutJob_categoriesInput = {
    id: string
    job_post_id: string
    type: $Enums.job_post_categories_type
    required_count?: number
    description?: string | null
    requirements?: string | null
    benefits?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    applicants?: applicantsUncheckedCreateNestedManyWithoutJob_post_categoriesInput
    selections?: selectionsUncheckedCreateNestedManyWithoutJob_post_categoriesInput
  }

  export type job_post_categoriesCreateOrConnectWithoutJob_categoriesInput = {
    where: job_post_categoriesWhereUniqueInput
    create: XOR<job_post_categoriesCreateWithoutJob_categoriesInput, job_post_categoriesUncheckedCreateWithoutJob_categoriesInput>
  }

  export type job_post_categoriesCreateManyJob_categoriesInputEnvelope = {
    data: job_post_categoriesCreateManyJob_categoriesInput | job_post_categoriesCreateManyJob_categoriesInput[]
    skipDuplicates?: boolean
  }

  export type job_post_categoriesUpsertWithWhereUniqueWithoutJob_categoriesInput = {
    where: job_post_categoriesWhereUniqueInput
    update: XOR<job_post_categoriesUpdateWithoutJob_categoriesInput, job_post_categoriesUncheckedUpdateWithoutJob_categoriesInput>
    create: XOR<job_post_categoriesCreateWithoutJob_categoriesInput, job_post_categoriesUncheckedCreateWithoutJob_categoriesInput>
  }

  export type job_post_categoriesUpdateWithWhereUniqueWithoutJob_categoriesInput = {
    where: job_post_categoriesWhereUniqueInput
    data: XOR<job_post_categoriesUpdateWithoutJob_categoriesInput, job_post_categoriesUncheckedUpdateWithoutJob_categoriesInput>
  }

  export type job_post_categoriesUpdateManyWithWhereWithoutJob_categoriesInput = {
    where: job_post_categoriesScalarWhereInput
    data: XOR<job_post_categoriesUpdateManyMutationInput, job_post_categoriesUncheckedUpdateManyWithoutJob_categoriesInput>
  }

  export type job_post_categoriesScalarWhereInput = {
    AND?: job_post_categoriesScalarWhereInput | job_post_categoriesScalarWhereInput[]
    OR?: job_post_categoriesScalarWhereInput[]
    NOT?: job_post_categoriesScalarWhereInput | job_post_categoriesScalarWhereInput[]
    id?: StringFilter<"job_post_categories"> | string
    job_category_id?: StringFilter<"job_post_categories"> | string
    job_post_id?: StringFilter<"job_post_categories"> | string
    type?: Enumjob_post_categories_typeFilter<"job_post_categories"> | $Enums.job_post_categories_type
    required_count?: IntFilter<"job_post_categories"> | number
    description?: StringNullableFilter<"job_post_categories"> | string | null
    requirements?: StringNullableFilter<"job_post_categories"> | string | null
    benefits?: StringNullableFilter<"job_post_categories"> | string | null
    created_at?: DateTimeNullableFilter<"job_post_categories"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"job_post_categories"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"job_post_categories"> | Date | string | null
  }

  export type job_post_categoriesCreateWithoutJob_postsInput = {
    id: string
    type: $Enums.job_post_categories_type
    required_count?: number
    description?: string | null
    requirements?: string | null
    benefits?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    applicants?: applicantsCreateNestedManyWithoutJob_post_categoriesInput
    job_categories: job_categoriesCreateNestedOneWithoutJob_post_categoriesInput
    selections?: selectionsCreateNestedManyWithoutJob_post_categoriesInput
  }

  export type job_post_categoriesUncheckedCreateWithoutJob_postsInput = {
    id: string
    job_category_id: string
    type: $Enums.job_post_categories_type
    required_count?: number
    description?: string | null
    requirements?: string | null
    benefits?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    applicants?: applicantsUncheckedCreateNestedManyWithoutJob_post_categoriesInput
    selections?: selectionsUncheckedCreateNestedManyWithoutJob_post_categoriesInput
  }

  export type job_post_categoriesCreateOrConnectWithoutJob_postsInput = {
    where: job_post_categoriesWhereUniqueInput
    create: XOR<job_post_categoriesCreateWithoutJob_postsInput, job_post_categoriesUncheckedCreateWithoutJob_postsInput>
  }

  export type job_post_categoriesCreateManyJob_postsInputEnvelope = {
    data: job_post_categoriesCreateManyJob_postsInput | job_post_categoriesCreateManyJob_postsInput[]
    skipDuplicates?: boolean
  }

  export type companiesCreateWithoutJob_postsInput = {
    id: string
    name: string
    email: string
    phone: string
    website?: string | null
    logo?: string | null
    location: string
    description?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type companiesUncheckedCreateWithoutJob_postsInput = {
    id: string
    name: string
    email: string
    phone: string
    website?: string | null
    logo?: string | null
    location: string
    description?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type companiesCreateOrConnectWithoutJob_postsInput = {
    where: companiesWhereUniqueInput
    create: XOR<companiesCreateWithoutJob_postsInput, companiesUncheckedCreateWithoutJob_postsInput>
  }

  export type job_post_categoriesUpsertWithWhereUniqueWithoutJob_postsInput = {
    where: job_post_categoriesWhereUniqueInput
    update: XOR<job_post_categoriesUpdateWithoutJob_postsInput, job_post_categoriesUncheckedUpdateWithoutJob_postsInput>
    create: XOR<job_post_categoriesCreateWithoutJob_postsInput, job_post_categoriesUncheckedCreateWithoutJob_postsInput>
  }

  export type job_post_categoriesUpdateWithWhereUniqueWithoutJob_postsInput = {
    where: job_post_categoriesWhereUniqueInput
    data: XOR<job_post_categoriesUpdateWithoutJob_postsInput, job_post_categoriesUncheckedUpdateWithoutJob_postsInput>
  }

  export type job_post_categoriesUpdateManyWithWhereWithoutJob_postsInput = {
    where: job_post_categoriesScalarWhereInput
    data: XOR<job_post_categoriesUpdateManyMutationInput, job_post_categoriesUncheckedUpdateManyWithoutJob_postsInput>
  }

  export type companiesUpsertWithoutJob_postsInput = {
    update: XOR<companiesUpdateWithoutJob_postsInput, companiesUncheckedUpdateWithoutJob_postsInput>
    create: XOR<companiesCreateWithoutJob_postsInput, companiesUncheckedCreateWithoutJob_postsInput>
    where?: companiesWhereInput
  }

  export type companiesUpdateToOneWithWhereWithoutJob_postsInput = {
    where?: companiesWhereInput
    data: XOR<companiesUpdateWithoutJob_postsInput, companiesUncheckedUpdateWithoutJob_postsInput>
  }

  export type companiesUpdateWithoutJob_postsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type companiesUncheckedUpdateWithoutJob_postsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type applicantsCreateWithoutSelectionsInput = {
    id: string
    status?: $Enums.applicants_status
    cv: string
    national_identity_card: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    job_post_categories: job_post_categoriesCreateNestedOneWithoutApplicantsInput
    users: usersCreateNestedOneWithoutApplicantsInput
  }

  export type applicantsUncheckedCreateWithoutSelectionsInput = {
    id: string
    user_id: string
    job_post_category_id: string
    status?: $Enums.applicants_status
    cv: string
    national_identity_card: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type applicantsCreateOrConnectWithoutSelectionsInput = {
    where: applicantsWhereUniqueInput
    create: XOR<applicantsCreateWithoutSelectionsInput, applicantsUncheckedCreateWithoutSelectionsInput>
  }

  export type job_post_categoriesCreateWithoutSelectionsInput = {
    id: string
    type: $Enums.job_post_categories_type
    required_count?: number
    description?: string | null
    requirements?: string | null
    benefits?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    applicants?: applicantsCreateNestedManyWithoutJob_post_categoriesInput
    job_categories: job_categoriesCreateNestedOneWithoutJob_post_categoriesInput
    job_posts: job_postsCreateNestedOneWithoutJob_post_categoriesInput
  }

  export type job_post_categoriesUncheckedCreateWithoutSelectionsInput = {
    id: string
    job_category_id: string
    job_post_id: string
    type: $Enums.job_post_categories_type
    required_count?: number
    description?: string | null
    requirements?: string | null
    benefits?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    applicants?: applicantsUncheckedCreateNestedManyWithoutJob_post_categoriesInput
  }

  export type job_post_categoriesCreateOrConnectWithoutSelectionsInput = {
    where: job_post_categoriesWhereUniqueInput
    create: XOR<job_post_categoriesCreateWithoutSelectionsInput, job_post_categoriesUncheckedCreateWithoutSelectionsInput>
  }

  export type applicantsUpsertWithoutSelectionsInput = {
    update: XOR<applicantsUpdateWithoutSelectionsInput, applicantsUncheckedUpdateWithoutSelectionsInput>
    create: XOR<applicantsCreateWithoutSelectionsInput, applicantsUncheckedCreateWithoutSelectionsInput>
    where?: applicantsWhereInput
  }

  export type applicantsUpdateToOneWithWhereWithoutSelectionsInput = {
    where?: applicantsWhereInput
    data: XOR<applicantsUpdateWithoutSelectionsInput, applicantsUncheckedUpdateWithoutSelectionsInput>
  }

  export type applicantsUpdateWithoutSelectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: Enumapplicants_statusFieldUpdateOperationsInput | $Enums.applicants_status
    cv?: StringFieldUpdateOperationsInput | string
    national_identity_card?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    job_post_categories?: job_post_categoriesUpdateOneRequiredWithoutApplicantsNestedInput
    users?: usersUpdateOneRequiredWithoutApplicantsNestedInput
  }

  export type applicantsUncheckedUpdateWithoutSelectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    job_post_category_id?: StringFieldUpdateOperationsInput | string
    status?: Enumapplicants_statusFieldUpdateOperationsInput | $Enums.applicants_status
    cv?: StringFieldUpdateOperationsInput | string
    national_identity_card?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type job_post_categoriesUpsertWithoutSelectionsInput = {
    update: XOR<job_post_categoriesUpdateWithoutSelectionsInput, job_post_categoriesUncheckedUpdateWithoutSelectionsInput>
    create: XOR<job_post_categoriesCreateWithoutSelectionsInput, job_post_categoriesUncheckedCreateWithoutSelectionsInput>
    where?: job_post_categoriesWhereInput
  }

  export type job_post_categoriesUpdateToOneWithWhereWithoutSelectionsInput = {
    where?: job_post_categoriesWhereInput
    data: XOR<job_post_categoriesUpdateWithoutSelectionsInput, job_post_categoriesUncheckedUpdateWithoutSelectionsInput>
  }

  export type job_post_categoriesUpdateWithoutSelectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: Enumjob_post_categories_typeFieldUpdateOperationsInput | $Enums.job_post_categories_type
    required_count?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    benefits?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    applicants?: applicantsUpdateManyWithoutJob_post_categoriesNestedInput
    job_categories?: job_categoriesUpdateOneRequiredWithoutJob_post_categoriesNestedInput
    job_posts?: job_postsUpdateOneRequiredWithoutJob_post_categoriesNestedInput
  }

  export type job_post_categoriesUncheckedUpdateWithoutSelectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    job_category_id?: StringFieldUpdateOperationsInput | string
    job_post_id?: StringFieldUpdateOperationsInput | string
    type?: Enumjob_post_categories_typeFieldUpdateOperationsInput | $Enums.job_post_categories_type
    required_count?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    benefits?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    applicants?: applicantsUncheckedUpdateManyWithoutJob_post_categoriesNestedInput
  }

  export type applicantsCreateWithoutUsersInput = {
    id: string
    status?: $Enums.applicants_status
    cv: string
    national_identity_card: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    job_post_categories: job_post_categoriesCreateNestedOneWithoutApplicantsInput
    selections?: selectionsCreateNestedManyWithoutApplicantsInput
  }

  export type applicantsUncheckedCreateWithoutUsersInput = {
    id: string
    job_post_category_id: string
    status?: $Enums.applicants_status
    cv: string
    national_identity_card: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    selections?: selectionsUncheckedCreateNestedManyWithoutApplicantsInput
  }

  export type applicantsCreateOrConnectWithoutUsersInput = {
    where: applicantsWhereUniqueInput
    create: XOR<applicantsCreateWithoutUsersInput, applicantsUncheckedCreateWithoutUsersInput>
  }

  export type applicantsCreateManyUsersInputEnvelope = {
    data: applicantsCreateManyUsersInput | applicantsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type applicantsUpsertWithWhereUniqueWithoutUsersInput = {
    where: applicantsWhereUniqueInput
    update: XOR<applicantsUpdateWithoutUsersInput, applicantsUncheckedUpdateWithoutUsersInput>
    create: XOR<applicantsCreateWithoutUsersInput, applicantsUncheckedCreateWithoutUsersInput>
  }

  export type applicantsUpdateWithWhereUniqueWithoutUsersInput = {
    where: applicantsWhereUniqueInput
    data: XOR<applicantsUpdateWithoutUsersInput, applicantsUncheckedUpdateWithoutUsersInput>
  }

  export type applicantsUpdateManyWithWhereWithoutUsersInput = {
    where: applicantsScalarWhereInput
    data: XOR<applicantsUpdateManyMutationInput, applicantsUncheckedUpdateManyWithoutUsersInput>
  }

  export type applicantsScalarWhereInput = {
    AND?: applicantsScalarWhereInput | applicantsScalarWhereInput[]
    OR?: applicantsScalarWhereInput[]
    NOT?: applicantsScalarWhereInput | applicantsScalarWhereInput[]
    id?: StringFilter<"applicants"> | string
    user_id?: StringFilter<"applicants"> | string
    job_post_category_id?: StringFilter<"applicants"> | string
    status?: Enumapplicants_statusFilter<"applicants"> | $Enums.applicants_status
    cv?: StringFilter<"applicants"> | string
    national_identity_card?: StringFilter<"applicants"> | string
    created_at?: DateTimeNullableFilter<"applicants"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"applicants"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"applicants"> | Date | string | null
  }

  export type applicantsCreateWithoutJob_post_categoriesInput = {
    id: string
    status?: $Enums.applicants_status
    cv: string
    national_identity_card: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    users: usersCreateNestedOneWithoutApplicantsInput
    selections?: selectionsCreateNestedManyWithoutApplicantsInput
  }

  export type applicantsUncheckedCreateWithoutJob_post_categoriesInput = {
    id: string
    user_id: string
    status?: $Enums.applicants_status
    cv: string
    national_identity_card: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    selections?: selectionsUncheckedCreateNestedManyWithoutApplicantsInput
  }

  export type applicantsCreateOrConnectWithoutJob_post_categoriesInput = {
    where: applicantsWhereUniqueInput
    create: XOR<applicantsCreateWithoutJob_post_categoriesInput, applicantsUncheckedCreateWithoutJob_post_categoriesInput>
  }

  export type applicantsCreateManyJob_post_categoriesInputEnvelope = {
    data: applicantsCreateManyJob_post_categoriesInput | applicantsCreateManyJob_post_categoriesInput[]
    skipDuplicates?: boolean
  }

  export type job_categoriesCreateWithoutJob_post_categoriesInput = {
    id: string
    name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type job_categoriesUncheckedCreateWithoutJob_post_categoriesInput = {
    id: string
    name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type job_categoriesCreateOrConnectWithoutJob_post_categoriesInput = {
    where: job_categoriesWhereUniqueInput
    create: XOR<job_categoriesCreateWithoutJob_post_categoriesInput, job_categoriesUncheckedCreateWithoutJob_post_categoriesInput>
  }

  export type job_postsCreateWithoutJob_post_categoriesInput = {
    id: string
    title: string
    thumbnail: string
    status?: $Enums.job_posts_status
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    companies: companiesCreateNestedOneWithoutJob_postsInput
  }

  export type job_postsUncheckedCreateWithoutJob_post_categoriesInput = {
    id: string
    company_id: string
    title: string
    thumbnail: string
    status?: $Enums.job_posts_status
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type job_postsCreateOrConnectWithoutJob_post_categoriesInput = {
    where: job_postsWhereUniqueInput
    create: XOR<job_postsCreateWithoutJob_post_categoriesInput, job_postsUncheckedCreateWithoutJob_post_categoriesInput>
  }

  export type selectionsCreateWithoutJob_post_categoriesInput = {
    id: string
    stage: $Enums.selections_stage
    status?: $Enums.selections_status
    attachment?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    applicants: applicantsCreateNestedOneWithoutSelectionsInput
  }

  export type selectionsUncheckedCreateWithoutJob_post_categoriesInput = {
    id: string
    applicant_id: string
    stage: $Enums.selections_stage
    status?: $Enums.selections_status
    attachment?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type selectionsCreateOrConnectWithoutJob_post_categoriesInput = {
    where: selectionsWhereUniqueInput
    create: XOR<selectionsCreateWithoutJob_post_categoriesInput, selectionsUncheckedCreateWithoutJob_post_categoriesInput>
  }

  export type selectionsCreateManyJob_post_categoriesInputEnvelope = {
    data: selectionsCreateManyJob_post_categoriesInput | selectionsCreateManyJob_post_categoriesInput[]
    skipDuplicates?: boolean
  }

  export type applicantsUpsertWithWhereUniqueWithoutJob_post_categoriesInput = {
    where: applicantsWhereUniqueInput
    update: XOR<applicantsUpdateWithoutJob_post_categoriesInput, applicantsUncheckedUpdateWithoutJob_post_categoriesInput>
    create: XOR<applicantsCreateWithoutJob_post_categoriesInput, applicantsUncheckedCreateWithoutJob_post_categoriesInput>
  }

  export type applicantsUpdateWithWhereUniqueWithoutJob_post_categoriesInput = {
    where: applicantsWhereUniqueInput
    data: XOR<applicantsUpdateWithoutJob_post_categoriesInput, applicantsUncheckedUpdateWithoutJob_post_categoriesInput>
  }

  export type applicantsUpdateManyWithWhereWithoutJob_post_categoriesInput = {
    where: applicantsScalarWhereInput
    data: XOR<applicantsUpdateManyMutationInput, applicantsUncheckedUpdateManyWithoutJob_post_categoriesInput>
  }

  export type job_categoriesUpsertWithoutJob_post_categoriesInput = {
    update: XOR<job_categoriesUpdateWithoutJob_post_categoriesInput, job_categoriesUncheckedUpdateWithoutJob_post_categoriesInput>
    create: XOR<job_categoriesCreateWithoutJob_post_categoriesInput, job_categoriesUncheckedCreateWithoutJob_post_categoriesInput>
    where?: job_categoriesWhereInput
  }

  export type job_categoriesUpdateToOneWithWhereWithoutJob_post_categoriesInput = {
    where?: job_categoriesWhereInput
    data: XOR<job_categoriesUpdateWithoutJob_post_categoriesInput, job_categoriesUncheckedUpdateWithoutJob_post_categoriesInput>
  }

  export type job_categoriesUpdateWithoutJob_post_categoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type job_categoriesUncheckedUpdateWithoutJob_post_categoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type job_postsUpsertWithoutJob_post_categoriesInput = {
    update: XOR<job_postsUpdateWithoutJob_post_categoriesInput, job_postsUncheckedUpdateWithoutJob_post_categoriesInput>
    create: XOR<job_postsCreateWithoutJob_post_categoriesInput, job_postsUncheckedCreateWithoutJob_post_categoriesInput>
    where?: job_postsWhereInput
  }

  export type job_postsUpdateToOneWithWhereWithoutJob_post_categoriesInput = {
    where?: job_postsWhereInput
    data: XOR<job_postsUpdateWithoutJob_post_categoriesInput, job_postsUncheckedUpdateWithoutJob_post_categoriesInput>
  }

  export type job_postsUpdateWithoutJob_post_categoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    status?: Enumjob_posts_statusFieldUpdateOperationsInput | $Enums.job_posts_status
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    companies?: companiesUpdateOneRequiredWithoutJob_postsNestedInput
  }

  export type job_postsUncheckedUpdateWithoutJob_post_categoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    status?: Enumjob_posts_statusFieldUpdateOperationsInput | $Enums.job_posts_status
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type selectionsUpsertWithWhereUniqueWithoutJob_post_categoriesInput = {
    where: selectionsWhereUniqueInput
    update: XOR<selectionsUpdateWithoutJob_post_categoriesInput, selectionsUncheckedUpdateWithoutJob_post_categoriesInput>
    create: XOR<selectionsCreateWithoutJob_post_categoriesInput, selectionsUncheckedCreateWithoutJob_post_categoriesInput>
  }

  export type selectionsUpdateWithWhereUniqueWithoutJob_post_categoriesInput = {
    where: selectionsWhereUniqueInput
    data: XOR<selectionsUpdateWithoutJob_post_categoriesInput, selectionsUncheckedUpdateWithoutJob_post_categoriesInput>
  }

  export type selectionsUpdateManyWithWhereWithoutJob_post_categoriesInput = {
    where: selectionsScalarWhereInput
    data: XOR<selectionsUpdateManyMutationInput, selectionsUncheckedUpdateManyWithoutJob_post_categoriesInput>
  }

  export type selectionsCreateManyApplicantsInput = {
    id: string
    job_post_category_id: string
    stage: $Enums.selections_stage
    status?: $Enums.selections_status
    attachment?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type selectionsUpdateWithoutApplicantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    stage?: Enumselections_stageFieldUpdateOperationsInput | $Enums.selections_stage
    status?: Enumselections_statusFieldUpdateOperationsInput | $Enums.selections_status
    attachment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    job_post_categories?: job_post_categoriesUpdateOneRequiredWithoutSelectionsNestedInput
  }

  export type selectionsUncheckedUpdateWithoutApplicantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    job_post_category_id?: StringFieldUpdateOperationsInput | string
    stage?: Enumselections_stageFieldUpdateOperationsInput | $Enums.selections_stage
    status?: Enumselections_statusFieldUpdateOperationsInput | $Enums.selections_status
    attachment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type selectionsUncheckedUpdateManyWithoutApplicantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    job_post_category_id?: StringFieldUpdateOperationsInput | string
    stage?: Enumselections_stageFieldUpdateOperationsInput | $Enums.selections_stage
    status?: Enumselections_statusFieldUpdateOperationsInput | $Enums.selections_status
    attachment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type job_postsCreateManyCompaniesInput = {
    id: string
    title: string
    thumbnail: string
    status?: $Enums.job_posts_status
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type job_postsUpdateWithoutCompaniesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    status?: Enumjob_posts_statusFieldUpdateOperationsInput | $Enums.job_posts_status
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    job_post_categories?: job_post_categoriesUpdateManyWithoutJob_postsNestedInput
  }

  export type job_postsUncheckedUpdateWithoutCompaniesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    status?: Enumjob_posts_statusFieldUpdateOperationsInput | $Enums.job_posts_status
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    job_post_categories?: job_post_categoriesUncheckedUpdateManyWithoutJob_postsNestedInput
  }

  export type job_postsUncheckedUpdateManyWithoutCompaniesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    status?: Enumjob_posts_statusFieldUpdateOperationsInput | $Enums.job_posts_status
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type job_post_categoriesCreateManyJob_categoriesInput = {
    id: string
    job_post_id: string
    type: $Enums.job_post_categories_type
    required_count?: number
    description?: string | null
    requirements?: string | null
    benefits?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type job_post_categoriesUpdateWithoutJob_categoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: Enumjob_post_categories_typeFieldUpdateOperationsInput | $Enums.job_post_categories_type
    required_count?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    benefits?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    applicants?: applicantsUpdateManyWithoutJob_post_categoriesNestedInput
    job_posts?: job_postsUpdateOneRequiredWithoutJob_post_categoriesNestedInput
    selections?: selectionsUpdateManyWithoutJob_post_categoriesNestedInput
  }

  export type job_post_categoriesUncheckedUpdateWithoutJob_categoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    job_post_id?: StringFieldUpdateOperationsInput | string
    type?: Enumjob_post_categories_typeFieldUpdateOperationsInput | $Enums.job_post_categories_type
    required_count?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    benefits?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    applicants?: applicantsUncheckedUpdateManyWithoutJob_post_categoriesNestedInput
    selections?: selectionsUncheckedUpdateManyWithoutJob_post_categoriesNestedInput
  }

  export type job_post_categoriesUncheckedUpdateManyWithoutJob_categoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    job_post_id?: StringFieldUpdateOperationsInput | string
    type?: Enumjob_post_categories_typeFieldUpdateOperationsInput | $Enums.job_post_categories_type
    required_count?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    benefits?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type job_post_categoriesCreateManyJob_postsInput = {
    id: string
    job_category_id: string
    type: $Enums.job_post_categories_type
    required_count?: number
    description?: string | null
    requirements?: string | null
    benefits?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type job_post_categoriesUpdateWithoutJob_postsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: Enumjob_post_categories_typeFieldUpdateOperationsInput | $Enums.job_post_categories_type
    required_count?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    benefits?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    applicants?: applicantsUpdateManyWithoutJob_post_categoriesNestedInput
    job_categories?: job_categoriesUpdateOneRequiredWithoutJob_post_categoriesNestedInput
    selections?: selectionsUpdateManyWithoutJob_post_categoriesNestedInput
  }

  export type job_post_categoriesUncheckedUpdateWithoutJob_postsInput = {
    id?: StringFieldUpdateOperationsInput | string
    job_category_id?: StringFieldUpdateOperationsInput | string
    type?: Enumjob_post_categories_typeFieldUpdateOperationsInput | $Enums.job_post_categories_type
    required_count?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    benefits?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    applicants?: applicantsUncheckedUpdateManyWithoutJob_post_categoriesNestedInput
    selections?: selectionsUncheckedUpdateManyWithoutJob_post_categoriesNestedInput
  }

  export type job_post_categoriesUncheckedUpdateManyWithoutJob_postsInput = {
    id?: StringFieldUpdateOperationsInput | string
    job_category_id?: StringFieldUpdateOperationsInput | string
    type?: Enumjob_post_categories_typeFieldUpdateOperationsInput | $Enums.job_post_categories_type
    required_count?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    benefits?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type applicantsCreateManyUsersInput = {
    id: string
    job_post_category_id: string
    status?: $Enums.applicants_status
    cv: string
    national_identity_card: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type applicantsUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: Enumapplicants_statusFieldUpdateOperationsInput | $Enums.applicants_status
    cv?: StringFieldUpdateOperationsInput | string
    national_identity_card?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    job_post_categories?: job_post_categoriesUpdateOneRequiredWithoutApplicantsNestedInput
    selections?: selectionsUpdateManyWithoutApplicantsNestedInput
  }

  export type applicantsUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    job_post_category_id?: StringFieldUpdateOperationsInput | string
    status?: Enumapplicants_statusFieldUpdateOperationsInput | $Enums.applicants_status
    cv?: StringFieldUpdateOperationsInput | string
    national_identity_card?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    selections?: selectionsUncheckedUpdateManyWithoutApplicantsNestedInput
  }

  export type applicantsUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    job_post_category_id?: StringFieldUpdateOperationsInput | string
    status?: Enumapplicants_statusFieldUpdateOperationsInput | $Enums.applicants_status
    cv?: StringFieldUpdateOperationsInput | string
    national_identity_card?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type applicantsCreateManyJob_post_categoriesInput = {
    id: string
    user_id: string
    status?: $Enums.applicants_status
    cv: string
    national_identity_card: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type selectionsCreateManyJob_post_categoriesInput = {
    id: string
    applicant_id: string
    stage: $Enums.selections_stage
    status?: $Enums.selections_status
    attachment?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type applicantsUpdateWithoutJob_post_categoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: Enumapplicants_statusFieldUpdateOperationsInput | $Enums.applicants_status
    cv?: StringFieldUpdateOperationsInput | string
    national_identity_card?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneRequiredWithoutApplicantsNestedInput
    selections?: selectionsUpdateManyWithoutApplicantsNestedInput
  }

  export type applicantsUncheckedUpdateWithoutJob_post_categoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    status?: Enumapplicants_statusFieldUpdateOperationsInput | $Enums.applicants_status
    cv?: StringFieldUpdateOperationsInput | string
    national_identity_card?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    selections?: selectionsUncheckedUpdateManyWithoutApplicantsNestedInput
  }

  export type applicantsUncheckedUpdateManyWithoutJob_post_categoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    status?: Enumapplicants_statusFieldUpdateOperationsInput | $Enums.applicants_status
    cv?: StringFieldUpdateOperationsInput | string
    national_identity_card?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type selectionsUpdateWithoutJob_post_categoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    stage?: Enumselections_stageFieldUpdateOperationsInput | $Enums.selections_stage
    status?: Enumselections_statusFieldUpdateOperationsInput | $Enums.selections_status
    attachment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    applicants?: applicantsUpdateOneRequiredWithoutSelectionsNestedInput
  }

  export type selectionsUncheckedUpdateWithoutJob_post_categoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicant_id?: StringFieldUpdateOperationsInput | string
    stage?: Enumselections_stageFieldUpdateOperationsInput | $Enums.selections_stage
    status?: Enumselections_statusFieldUpdateOperationsInput | $Enums.selections_status
    attachment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type selectionsUncheckedUpdateManyWithoutJob_post_categoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicant_id?: StringFieldUpdateOperationsInput | string
    stage?: Enumselections_stageFieldUpdateOperationsInput | $Enums.selections_stage
    status?: Enumselections_statusFieldUpdateOperationsInput | $Enums.selections_status
    attachment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}