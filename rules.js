module.exports = {
  // 重载的函数必须写在一起
  "adjacent-overload-signatures": true,
  // 变量定义需要竖向对齐
  align: false,
  // 限制必须使用 T[] 或 Array<T> 之中的一种来定义数组的类型
  "array-type": false,
  // 箭头函数的参数必须有小括号
  "arrow-parens": true,
  // 箭头函数的函数体只有 return 语句的时候，必须简写
  "arrow-return-shorthand": true,
  // await 必须接受 Promise
  "await-promise": false,
  // 禁用指定的函数或全局方法
  ban: false,
  // 禁止使用逗号操作符
  "ban-comma-operator": true,
  // 注释禁用@ts-ignore
  "ban-ts-ignore": true,
  // 禁用特定的类型
  "ban-types": false,
  // 数字字面量必须在加号的右边，即禁止 1 + x
  "binary-expression-operand-order": false,
  // 可以简写为函数类型的接口或字面类似，必须简写
  "callable-types": true,
  // 类名与接口名必须为驼峰式
  "class-name": true,
  // 限制单行注释的规则
  "comment-format": [true, "check-space"],
  // 类、函数等必须写注释
  "completed-docs": false,
  // if 后面必须有 {，除非是单行 if
  curly: [true, "ignore-same-line"],
  // 禁止函数的循环复杂度超过 20，详见 https://en.wikipedia.org/wiki/Cyclomatic_complexity
  "cyclomatic-complexity": [true, 20],
  // 禁止使用废弃（被标识了 @deprecated）的 API
  deprecation: false,
  // 文件类型必须是 utf-8
  encoding: true,
  // 文件最后一行必须有一个空行
  eofline: true,
  // for in 内部必须有 hasOwnProperty
  forin: true,
  // 文件的开头必须有指定的字符串
  "file-header": false,
  // 约束文件命名规范
  "file-name-casing": [true, "kebab-case"],
  // 禁用指定的模块
  "import-blacklist": false,
  // import 语句中，关键字之间的间距必须是一个空格
  "import-spacing": true,
  // 一个缩进必须用2个空格替代
  indent: [true, "spaces", 2],
  // 接口名称必须已 I 开头
  "interface-name": false,
  // 优先使用接口而不是字面类型
  "interface-over-type-literal": true,
  // 注释必须符合 JSDoc 规范
  "jsdoc-format": [true, "check-multiline-start"],
  // 只允许在 do, for, while 或 switch 中使用 label
  "label-position": false,
  // 限制换行符为 LF 或 CRLF
  "linebreak-style": [true, "LF"],
  // import 的名称必须和 export default 的名称一致
  "match-default-export-name": false,
  // 限制每个文件的类的数量
  "max-classes-per-file": false,
  // 限制每个文件的行数
  "max-file-line-count": false,
  // 限制每行字符数
  "max-line-length": false,
  // 必须设置类的成员的可访问性
  "member-access": [
    true,
    "check-accessor",
    "check-constructor",
    "check-parameter-property"
  ],
  // 指定类成员的排序规则
  "member-ordering": [
    true,
    {
      order: [
        "public-static-field",
        "protected-static-field",
        "private-static-field",
        "public-static-method",
        "protected-static-method",
        "private-static-method",
        "public-instance-field",
        "protected-instance-field",
        "private-instance-field",
        "public-constructor",
        "protected-constructor",
        "private-constructor",
        "public-instance-method",
        "protected-instance-method",
        "private-instance-method"
      ]
    }
  ],
  // new 后面只必须有一个空格
  "new-parens": true,
  // return 语句前必须有空行
  "newline-before-return": false,
  // 链式调用时，每次调用都必须占用一行
  "newline-per-chained-call": false,
  // 类型断言必须使用 as Type，禁止使用 <Type>
  "no-angle-bracket-type-assertion": true,
  // 禁止使用any
  "no-any": false,
  // 禁止使用 arguments.callee
  "no-arg": true,
  // 禁止使用位运算
  "no-bitwise": false,
  // 禁止变量与 true 或 false 比较
  "no-boolean-literal-compare": false,
  // 禁止在分支条件判断中有赋值操作
  "no-conditional-assignment": true,
  // 禁止连续超过三行空行
  "no-consecutive-blank-lines": [true, 3],
  // 禁止使用 console
  "no-console": false,
  // 禁止使用 new 来生成 String, Number 或 Boolean
  "no-construct": true,
  // 禁止使用 debugger
  "no-debugger": false,
  // 禁止使用 default export
  "no-default-export": false,
  // 禁止出现重复的 import
  "no-duplicate-imports": true,
  // 禁止 super 在一个构造函数中出现两次
  "no-duplicate-super": true,
  // 禁止在 switch 语句中出现重复测试表达式的 case
  "no-duplicate-switch-case": true,
  // 禁止出现重复的变量定义或函数参数名
  "no-duplicate-variable": [true, "check-parameters"],
  // 禁止 delete 动态的值
  "no-dynamic-delete": false,
  // 禁止出现空代码块，允许 catch 是空代码块
  "no-empty": [true, "allow-empty-catch", "allow-empty-functions"],
  // 禁止使用 eval
  "no-eval": true,
  // 禁止定义空的接口
  "no-empty-interface": true,
  // 函数返回值为 Promise 时，必须被处理
  "no-floating-promises": false,
  // 禁止对 array 使用 for in 循环
  "no-for-in-array": false,
  // 禁止引入 package.json 中不存在的模块
  "no-implicit-dependencies": [true, "dev"],
  // 禁止导入有副作用（立即执行）的模块，除了css, less, sass, scss
  "no-import-side-effect": [
    true,
    { "ignore-module": "(\\.css|\\.less|\\.sass|\\.scss)$" }
  ],
  // 禁止给一个初始化时直接赋值为 number, string 或 boolean 的变量显式的指定类型
  "no-inferrable-types": true,
  // 禁止推论出的类型是空对象类型
  "no-inferred-empty-object-type": false,
  // 禁止使用 module 来定义命名空间
  "no-internal-module": true,
  // 禁止在非模版字符串中出现 ${}
  "no-invalid-template-strings": true,
  // 禁止在类外面使用 this
  "no-invalid-this": true,
  // 禁止使用特殊空白符（比如全角空格）
  "no-irregular-whitespace": true,
  // 禁止使用魔法数字，仅允许使用一部分白名单中的数字
  "no-magic-numbers": [
    true,
    -1,
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    100,
    1000,
    10000
  ],
  // 禁止一个文件中出现多个相同的 namespace
  "no-mergeable-namespace": true,
  // 禁止在接口中定义 constructor，或在类中定义 new
  "no-misused-new": false,
  // 禁止使用 namespace 来定义命名空间
  "no-namespace": [true, "allow-declarations"],
  // 禁止使用 non-null 断言（感叹号）
  "no-non-null-assertion": true,
  // 禁止使用 null
  "no-null-keyword": false,
  // 禁止对对象字面量进行类型断言（断言成 any 是允许的）
  "no-object-literal-type-assertion": true,
  // 禁止给类的构造函数的参数添加修饰符
  "no-parameter-properties": true,
  // 禁止对函数的参数重新赋值
  "no-parameter-reassignment": true,
  // 禁止 JSDoc 中的冗余类型声明，因为 TypeScirpt 已经包含了大部分功能
  "no-redundant-jsdoc": true,
  // 禁止使用三斜线引入模块 /// <reference path="foo" />
  "no-reference": true,
  // 如果已经引入过库，则禁止使用三斜杠引入类型定义文件
  "no-reference-import": true,
  // 禁止使用 require
  "no-require-imports": false,
  // 禁止没必要的 return await
  "no-return-await": false,
  // 禁止变量名与上层作用域内的定义过的变量重复
  "no-shadowed-variable": false,
  // 禁止在数组中出现连续的逗号，如 let foo = [,,]
  "no-sparse-arrays": true,
  // 禁止出现 foo['bar']，必须写成 foo.bar
  "no-string-literal": true,
  // 禁止 throw 字符串，必须 throw 一个 Error 对象
  "no-string-throw": true,
  // 禁止 import 模块的子文件
  "no-submodule-imports": false,
  // switch 的 case 必须 return 或 break
  "no-switch-case-fall-through": true,
  // 禁止将 this 赋值给其他变量，除非是解构赋值
  "no-this-assignment": [true, { "allow-destructuring": true }],
  // 禁止行尾有空格
  "no-trailing-whitespace": true,
  // 使用实例的方法时，必须 bind 到实例上
  "no-unbound-method": false,
  // 禁止没必要的函数调用，如 x => f(x) 应该简写为 f
  "no-unnecessary-callback-wrapper": false,
  // 禁止定义没必要的类，比如只有静态方法的类
  "no-unnecessary-class": false,
  // 禁止变量定义时赋值为 undefined
  "no-unnecessary-initializer": true,
  // 在命名空间中，可以直接使用内部变量，不需要添加命名空间前缀
  "no-unnecessary-qualifier": false,
  // 禁止无用的类型断言
  "no-unnecessary-type-assertion": false,
  // 禁止取用一个类型为 any 的对象的属性
  "no-unsafe-any": false,
  // 禁止 finally 内出现 return, continue, break, throw 等
  "no-unsafe-finally": true,
  // 禁止无用的表达式
  "no-unused-expression": true,
  // 变量必须先定义后使用
  "no-use-before-declare": false,
  // 禁止使用 var
  "no-var-keyword": true,
  // 禁止使用 require 来引入模块
  "no-var-requires": true,
  // 禁止返回值为 void 类型
  "no-void-expression": false,
  // 小数必须以 0. 开头，禁止以 . 开头，并且不能以 0 结尾
  "number-literal-format": true,
  // 对象的 key 必须用引号包起来
  "object-literal-key-quotes": false,
  // 必须使用 a = {b} 而不是 a = {b: b}
  "object-literal-shorthand": true,
  // 对象字面量必须按 key 排序
  "object-literal-sort-keys": false,
  // if 后的 { 禁止换行
  "one-line": true,
  // 变量申明必须每行一个，for 循环的初始条件中除外
  "one-variable-per-declaration": [true, "ignore-for-loop"],
  // 必须使用箭头函数，除非是单独的函数声明或是命名函数
  "only-arrow-functions": [true, "allow-declarations", "allow-named-functions"],
  // import 必须排序
  "ordered-imports": true,
  // 可以用三元表达式时，就不用 if else
  "prefer-conditional-expression": false,
  // 申明后不再被修改的变量必须使用 const 来申明
  "prefer-const": false,
  // 使用 for 循环遍历数组时，如果 index 仅用于获取成员，则必须使用 for of 循环替代 for 循环
  "prefer-for-of": true,
  // 类中没有使用 this 的方法应该提取成类外的函数
  "prefer-function-over-method": false,
  // 必须使用 foo(): void 而不是 foo: () => void
  "prefer-method-signature": false,
  // 使用 { ...foo, bar: 1 } 代替 Object.assign({}, foo, { bar: 1 })
  "prefer-object-spread": true,
  // 如果私有变量只在构造函数中被赋值，则必须使用 readonly 修饰符
  "prefer-readonly": false,
  // 当 if 中只有 === 时，必须使用 switch 替换 if
  "prefer-switch": false,
  // 必须使用模版字符串而不是字符串连接
  "prefer-template": false,
  // 当没有初始值的时候，必须使用 while 而不是 for
  "prefer-while": false,
  // async 函数的返回值必须是 Promise
  "promise-function-async": false,
  // 必须使用单引号
  quotemark: [true, "single", "avoid-template", "avoid-escape"],
  // parseInt 必须传入第二个参数
  radix: true,
  // 使用加号时，两者必须同为数字或同为字符串
  "restrict-plus-operands": false,
  // 使用 return; 而不是 return undefined;
  "return-undefined": false,
  // 行尾必须有分号
  semicolon: [true, "always"],
  // 函数名前必须有空格
  "space-before-function-paren": [true, "asyncArrow"],
  // 括号内首尾禁止有空格
  "space-within-parens": [true, 0],
  // 在分支条件判断中必须传入布尔类型的值
  "strict-boolean-expressions": false,
  // 禁止出现永远为 true 或永远为 false 的条件判断（通过类型预测出一个表达式为 true 还是 false）
  "strict-type-predicates": false,
  // switch 语句必须有 default
  "switch-default": true,
  // switch 的最后一项禁止有 break
  "switch-final-break": false,
  // 限制对象、数组、解构赋值等的最后一项末尾是否需要逗号
  "trailing-comma": [true, { multiline: "never", singleline: "never" }],
  // 必须使用 === 或 !==，禁止使用 == 或 !=
  "triple-equals": true,
  // 变量、函数返回值、函数参数等必须要有类型定义
  typedef: false,
  // typeof 表达式比较的对象必须是 'undefined', 'object', 'boolean', 'number', 'string', 'function' 或 'symbol'
  "typeof-compare": false,
  // 类型定义的冒号前面必须没有空格，后面必须有一个空格
  "typedef-whitespace": [
    true,
    {
      "call-signature": "nospace",
      "index-signature": "nospace",
      parameter: "nospace",
      "property-declaration": "nospace",
      "variable-declaration": "nospace"
    },
    {
      "call-signature": "onespace",
      "index-signature": "onespace",
      parameter: "onespace",
      "property-declaration": "onespace",
      "variable-declaration": "onespace"
    }
  ],
  // 字面类型的每个成员都必须有分号
  "type-literal-delimiter": true,
  // 函数重载时，若能通过联合类型将两个函数的类型声明合为一个，则使用联合类型而不是两个函数声明
  "unified-signatures": true,
  // 传入的类型与默认类型一致时，必须省略传入的类型
  "use-default-type-parameter": false,
  // 必须使用 isNaN(foo) 而不是 foo === NaN
  "use-isnan": true,
  // 限制变量命名规则
  "variable-name": [
    true,
    "ban-keywords",
    "check-format",
    "allow-leading-underscore"
  ],
  // 限制空格的位置
  whitespace: [
    true,
    "check-branch",
    "check-decl",
    "check-operator",
    "check-module",
    "check-separator",
    "check-rest-spread",
    "check-type",
    "check-typecast",
    "check-type-operator",
    "check-preblock"
  ]
};
