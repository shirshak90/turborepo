export declare const authRouter: {
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
//# sourceMappingURL=auth.d.ts.map