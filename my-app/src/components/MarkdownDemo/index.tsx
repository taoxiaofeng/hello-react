import React from 'react'
import Markdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dark, funky, okaidia, twilight, } from 'react-syntax-highlighter/dist/esm/styles/prism'

// Did you know you can use tildes instead of backticks for code in markdown? ✨
// const markdown = `Here is some JavaScript code:

// ~~~js
// console.log('It works!')
// ~~~
// `
const markdown = '```typescript\nfunction bubbleSort(arr: number[]): number[] {\n    const len = arr.length;\n    // 外层循环控制比较轮数\n    for (let i = 0; i < len; i++) {\n        // 内层循环控制每一轮的比较次数\n        for (let j = 0; j < len - 1 - i; j++) {\n            // 如果前一个元素大于后一个元素，则交换它们的位置\n            if (arr[j] > arr[j + 1]) {\n                [arr[j], arr[j + 1]] = [arr[j + ], arr[j]];\n            }\n        }\n    }\n    return arr;\n}\n\n// 测试\nconst arr = [64, 34, 25, 12, 22, 11, 90];\nconst sortedArr = bubbleSort(arr);\nconsole.log(sortedArr); // [11, 12, 22, 25, 34, 64, 90]\n```'

const MarkdownDemo = () => {
  return (
    <Markdown
      children={markdown}
      components={{
        code(props) {
          const { children, className, node, ...rest } = props
          console.log(`className -- `, className)
          const match = /language-(\w+)/.exec(className || '')
          return match ? (
            <SyntaxHighlighter
              {...rest}
              PreTag="div"
              children={String(children).replace(/\n$/, '')}
              language={match[1]}
              style={
                okaidia
              }
            />
          ) : (
            <code {...rest} className={className}>
              {children}
            </code>
          )
        }
      }}
    />
  )
}

export default MarkdownDemo
