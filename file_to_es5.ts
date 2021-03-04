import * as babel from '@babel/core';
import {parse} from '@babel/core';
import * as fs from 'fs'
// TODO test.js 改为任意文件
const code = fs.readFileSync("./test.js").toString()
const ast = parse(code, {sourceType: 'module'});
const result = babel.transformFromAstSync(ast, code, {
  presets: ['@babel/preset-env']
});
fs.writeFileSync('./test.es5.js',result.code)
