import { defineConfig } from 'vite'
import path from "path"


export default defineConfig({
    base: "/static/",
    root: path.resolve("./static/money"),
    server: {
        host: '0.0.0.0',
        port: 5173,
        strictPort: true,
        open: false,
        watch: {
            usePolling: true,
            disableGlobbing: false
        },
        hmr: {
            host: '0.0.0.0',
            port: 5173,
            protocol: 'ws',
        },
        cors: {
            origin: '*',
            methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
            credentials: true,
        }
    },
    build: {
        manifest: true,
        outDir: path.resolve("./dist"),
        assetsDir: 'assets',
        emptyOutDir: true,
        target: 'esnext',
        rollupOptions: {
            input: {
                money: path.resolve('static/money/main.js'),
            }
        }
    }
})
