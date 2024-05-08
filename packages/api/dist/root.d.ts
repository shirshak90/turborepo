export declare const appRouter: import("@trpc/server/unstable-core-do-not-import").BuiltRouter<{
    ctx: {
        session: import("next-auth").Session | null;
        db: any;
    };
    meta: object;
    errorShape: {
        data: {
            zodError: import("zod").typeToFlattenedError<any, string> | null;
            code: "PARSE_ERROR" | "BAD_REQUEST" | "INTERNAL_SERVER_ERROR" | "NOT_IMPLEMENTED" | "UNAUTHORIZED" | "FORBIDDEN" | "NOT_FOUND" | "METHOD_NOT_SUPPORTED" | "TIMEOUT" | "CONFLICT" | "PRECONDITION_FAILED" | "UNSUPPORTED_MEDIA_TYPE" | "PAYLOAD_TOO_LARGE" | "UNPROCESSABLE_CONTENT" | "TOO_MANY_REQUESTS" | "CLIENT_CLOSED_REQUEST";
            httpStatus: number;
            path?: string | undefined;
            stack?: string | undefined;
        };
        message: string;
        code: import("@trpc/server/unstable-core-do-not-import").TRPC_ERROR_CODE_NUMBER;
    };
    transformer: true;
}, {
    post: {
        all: import("@trpc/server").TRPCQueryProcedure<{
            input: void;
            output: any;
        }>;
        create: import("@trpc/server").TRPCMutationProcedure<{
            input: void;
            output: any;
        }>;
    };
    auth: {
        login: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                email: string;
                password: string;
            };
            output: {
                user?: any;
                token?: any;
            } | null | undefined;
        }>;
        test: import("@trpc/server").TRPCMutationProcedure<{
            input: void;
            output: never[];
        }>;
    };
}>;
export type AppRouter = typeof appRouter;
//# sourceMappingURL=root.d.ts.map