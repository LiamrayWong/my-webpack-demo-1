import {parse} from '@babel/core'
import traverse from '@babel/traverse';
import generate from '@babel/generator';

let code = 'var a = "let";var b = 2'

const ast = parse(code,{sourceType:'module'})

// 遍历AST
traverse(ast,{
  // 每进入一个节点执行enter钩子函数
  enter:item =>{
    if(item.node.type === 'VariableDeclaration'){
      if(item.node.kind === 'var'){
        item.node.kind = 'let'
      }
    }
  }
})

let result = generate(ast,{},code)
console.log(result.code);
