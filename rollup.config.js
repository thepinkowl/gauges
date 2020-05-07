import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import sveltePreprocess from 'svelte-preprocess';
import typescript from "@rollup/plugin-typescript";
import html2 from "rollup-plugin-html2";
import postcss from "rollup-plugin-postcss";

const production = !process.env.ROLLUP_WATCH;

const preprocess = sveltePreprocess({
    scss: {
        includePaths: ['src'],
    },
    postcss: {
        plugins: [require('autoprefixer')],
    },
    typescript: {
        // skips type checking
        transpileOnly: true,
    },
});

export default {
    input: 'src/index.ts',
    output: {
        sourcemap: true,
        format: 'iife',
        name: 'app',
        file: 'public/build/bundle.js'
    },
    plugins: [
        json(),
        svelte({
            preprocess,
            // enable run-time checks when not in production
            dev: !production,
            // we'll extract any component CSS out into
            // a separate file - better for performance
            css: css => {
                css.write('public/build/bundle.css');
            }
        }),

        postcss({
            extract: true,
        }),

        typescript(),

        // If you have external dependencies installed from
        // npm, you'll most likely need these plugins. In
        // some cases you'll need additional configuration -
        // consult the documentation for details:
        // https://github.com/rollup/plugins/tree/master/packages/commonjs
        commonjs({ include: "node_modules/**", extensions: [".js", ".ts"] }),

        resolve({
            browser: true,
            dedupe: ['svelte']
        }),

        html2({
            template: "public/index.html",
        }),

        // In dev mode, call `npm run start` once
        // the bundle has been generated
        !production && serve(),

        // Watch the `public` directory and refresh the
        // browser on changes when not in production
        !production && livereload('public'),

        // If we're building for production (npm run build
        // instead of npm run dev), minify
        production && terser({ sourcemap: true })
    ],
    watch: {
        clearScreen: false
    }
};

function serve() {
    let started = false;

    return {
        writeBundle() {
            if (!started) {
                started = true;

                require('child_process').spawn('npm', ['run', 'start', '--', '--dev'], {
                    stdio: ['ignore', 'inherit', 'inherit'],
                    shell: true
                });
            }
        }
    };
}
