module.exports = {
    prompts: [
        {
            name: "ui",
            message: "UI framework:",
            type: "select",
            pageSize: 3,
            choices: [
                { message: "Layout Vertical", name: "vertical" },
                { message: "Layout Horizontal", name: "horizontal" },
            ],
            default: "vertical",
        },
    ],
    ignores: [
        {
            plugin: ["css", "scss", "styled-components"],
            when: function (answers) {
                return answers.ui !== "none";
            },
            pattern: ["src/components/**", "src/pages/index.tsx"],
        },
        {
            when: function (answers) {
                return answers.css_features !== "css";
            },
            pattern: ["**/*.css"],
        },
        {
            when: function (answers) {
                return answers.css_features !== "scss";
            },
            pattern: ["**/*.s@(c|a)ss"],
        },
        {
            when: function (answers) {
                return !(
                    answers.features && answers.features.includes("storybook")
                );
            },
            pattern: ["**/*.stories.tsx"],
        },
        {
            when: function (answers) {
                return answers.testing === "jest";
            },
            pattern: ["**/src/**/*.@(spec|test).@(tsx)"],
        },
        {
            plugin: ["mobx"],
            when: function (answers) {
                return answers.mobx_state_tree === "mobx-state-tree";
            },
            pattern: ["**/src/**/*.d.ts"],
        },
    ],
};
