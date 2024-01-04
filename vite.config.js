import { resolve } from "path";
import { defineConfig, resolveConfig } from "vite"; 
export default defineConfig({
    resolve: {
        alias: {
            "@": resolve(__dirname, "src"),
        },
    },
});