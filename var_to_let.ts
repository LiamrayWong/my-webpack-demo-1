import {parse} from '@babel/core'
import traverse from '@babel/traverse';
import generate from '@babel/generator';

let code = 'var a = "let";var b = 2'

const ast = parse(code,{sourceType:'module'})
console.log(ast);

