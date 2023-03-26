const base = {
    _app: {
        import: [
            'import Dashboard from "./components/Dashboard";',
        ],
        inner: [],
        wrapper: [
            [
                "<Dashboard/>"
            ],
        ],
    },
    testSetup: {
        import: [
            'import { QueryClient, QueryClientProvider } from "react-query";',
        ],
        inner: ["const queryClient = new QueryClient()"],
        wrapper: [
            [
                "<QueryClientProvider client={queryClient}>",
                "</QueryClientProvider>",
            ],
        ],
    },
};

module.exports = {
    extend() {
        return base;
    },
};
