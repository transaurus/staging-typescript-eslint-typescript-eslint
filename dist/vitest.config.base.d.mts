export declare const vitestBaseConfig: {
    readonly test: {
        readonly coverage: {
            readonly exclude: [...string[], "**/fixtures/"];
            readonly include: ["src/**/*.{ts,tsx,js,jsx}"];
            readonly reporter: (["lcov"] | ["text"] | ["text-summary"])[];
        };
        readonly globals: true;
        readonly include: ["**/*.test.?(c|m)ts?(x)"];
        readonly reporters: (["github-actions"] | ["default", {
            summary: false;
        }])[] | ["default"][];
        readonly setupFiles: ["console-fail-test/setup"];
        readonly testTimeout: 10000;
        readonly typecheck: {
            readonly include: ["**/*.test-d.?(c|m)ts?(x)"];
        };
        readonly watch: false;
    };
};
