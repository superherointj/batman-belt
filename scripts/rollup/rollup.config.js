'use strict'

import json from 'rollup-plugin-json'
import babel from 'rollup-plugin-babel'
import nodeResolve from 'rollup-plugin-node-resolve'
import replace from 'rollup-plugin-replace'

let rootPath = '../../'

let pkg = require(rootPath+'package.json')
console.log('Building ',pkg.name,' for: ', process.env.NODE_ENV == 'development' ? 'development' : 'production')
let npmPkgVersion = pkg.version

export default {
  entry: rootPath+'src/index.js',
  format: 'cjs', 
  plugins: [
    json(),
    replace({
      'process.env.NODE_ENV': JSON.stringify( (process.env.NODE_ENV == 'development' ? 'development' : 'production') ),
      'process.env.NPMPKGVER': JSON.stringify( npmPkgVersion )
    }),
    babel(),
    nodeResolve({
        module: true,
        jsnext: true,
        main: true,
        browser: false,
        extensions: ['.js'],
        skip : [
        ]        
    }) 
  ],
  dest: rootPath+'dist/bundle.'+(process.env.NODE_ENV == 'development' ? 'dev' : 'prod')+'.js' // equivalent to --output
}