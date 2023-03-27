const base = {
    _app: {
        import: [
            'import Dashboard from "./components/Dashboard";',
        ],
        inner: [],
        wrapper: [
            [
                "<Dashboard>", "</Dashboard>"
            ],
        ],
    },
};

module.exports = {
    extend() {
        return base;
    },
};
