export declare const authRouter: {
    login: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            email: string;
            password: string;
        };
        output: {
            user: any;
            token: string;
        } | null | undefined;
    }>;
};
//# sourceMappingURL=auth.d.ts.map