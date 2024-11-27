export default {
    printWidth: 90,
    useTabs: true,
    tabWidth: 2,
    plugins: ["prettier-plugin-astro"],
    overrides: [
        {
            files: "*.astro",
            options: {
                parser: "astro",
            },
        },
    ],
};
