import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import {terser} from 'rollup-plugin-terser';
import copy from 'rollup-plugin-copy'

export default {
    input: 'src/index.js',
    output: [
        {
            file: 'dist/bundle.mjs',
            format: 'esm',
            name: '@annunx/validators'
        },
        {
            file: 'dist/bundle.cjs',
            format: 'cjs',
            name: '@annunx/validators'
        },
    ],
    plugins: [
        commonjs(),
        babel({exclude: 'node_modules/**', include: ['src/**/*.js']}),
        terser(),
        copy({
            targets: [
                {src: 'README.md', dest: 'dist'},
                {src: 'LICENSE', dest: 'dist'}
            ]
        })
    ],
};
