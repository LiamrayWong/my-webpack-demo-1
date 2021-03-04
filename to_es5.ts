import * as babel from '@babel/core';
import {parse} from '@babel/core';

const code = `var a = 'a';let b = "b"; const c = 'c'`;
const ast = parse(code, {sourceType: 'module'});
const result = babel.transformFromAstSync(ast, code, {
  presets: ['@babel/preset-env']
});

console.log(result.code);
