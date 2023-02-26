import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import * as path from "path";
// import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
    ],
    build: {
        outDir: "dist"
    },
    resolve: {
        alias: {
            "@components": path.resolve(__dirname, "src/components"),
            "@common": path.resolve(__dirname, "src/common"),
            "@constants": path.resolve(__dirname, "src/constants"),
            "@hooks": path.resolve(__dirname, "src/hooks"),
            "@assets": path.resolve(__dirname, "src/assets"),
            "@types": path.resolve(__dirname, "src/types"),
            "@pages": path.resolve(__dirname, "src/pages"),
        }
    }
})
