import { defineConfig } from 'vite'
import { resolve, join } from 'path';


export default defineConfig(() => {

    const APP_PREFIX = 'money';
    const INPUT_DIR = 'static';
    const OUTPUT_DIR = join('dist', APP_PREFIX);

    return {
        root: resolve(INPUT_DIR),
        base: join('/static/', APP_PREFIX),
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
            outDir: resolve(OUTPUT_DIR),
            assetsDir: 'assets',
            emptyOutDir: true,
            target: 'esnext',
            rollupOptions: {
                input: {
                    money: join(INPUT_DIR, 'money/main.js'),
                }
            }
        }
    }
})
