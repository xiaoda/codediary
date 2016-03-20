# 前端技术培训内容

以下以实用性知识为主，快速掌握前端基础知识

## HTML

- 顶部

```
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="renderer" content="webkit">
    <title>51IDC|安畅，管理式云服务领导者_安畅</title>
    <meta name="keywords" content="51idc,安畅,安畅网络,安畅云,idc,idc服务商,云计算,云服务,服务器租用托管,BGP网络,管理式云服务">
    <meta name="description" content="安畅（证券代码831315）是国内最大的管理式云服务商，凭借强大开放的公有云平台、覆盖大陆和香港数据中心集群的FastFiber全路由BGP自治网络，持续不断的为初创企业和企业级用户提供包括公有云以及私有云的全面混合云服务和一站式运维管理服务。"/>
</head>
<body>
</body>
</html>
```

- 资源文件的位置

```
一般来说，CSS文件放在head，JS文件放在body底部
涉及到样式的JS文件入jQueryUI也需要放在head
```

- 常见的浏览器内核

```
Webkit(Blink): Chrome, Safari, iOS所有浏览器和安卓绝大多数浏览器, 国产浏览器
Trident: ~ IE11, 国产浏览器
Edge: IE Edge
Gecko: Firefox
```

- HTML5有哪些新特性、移除了那些元素？

```
* HTML5 现在已经不是 SGML 的子集，主要是关于图像，位置，存储，多任务等功能的增加
  绘画 canvas
  用于媒介回放的 video 和 audio 元素
  本地离线存储 localStorage 长期存储数据，浏览器关闭后数据不丢失
  sessionStorage 的数据在浏览器关闭后自动删除
  语意化更好的内容元素，比如 article, footer, header, nav, section
  表单控件，calendar, date, time, email, url, search
  新的技术webworker, websockt, Geolocation

* 移除的元素：
  纯表现的元素：basefont, big, center, font, s, strike, tt, u
  对可用性产生负面影响的元素：frame，frameset，noframes
```

## CSS

- CSS盒子模型

```
* 有两种， IE 盒子模型、标准 W3C 盒子模型；IE的content部分包含了 border 和 pading;
* 盒模型： 内容(content)、填充(padding)、边界(margin)、 边框(border)
```

- CSS选择器有哪些？哪些属性可以继承？

```
* 1.id选择器（ # myid）
  2.类选择器（.myclassname）
  3.标签选择器（div, h1, p）
  4.相邻选择器（h1 + p）
  5.子选择器（ul > li）
  6.后代选择器（li a）
  7.通配符选择器（ * ）
  8.属性选择器（a[rel = "external"]）
  9.伪类选择器（a: hover, li: nth - child）
* 可继承的样式： font-size font-family color
* 不可继承的样式：border padding margin width height
```

- CSS样式的优先级和选择器权重

```
* !important > 内联样式 > id > class > tag
* /* 权重为1 */
  div{}
  /* 权重为10 */
  .class1{}
  /* 权重为100 */
  #id1{}
  /* 权重为100+1=101 */
  #id1 div{}
  /* 权重为10+1=11 */
  .class1 div{}
  /* 权重为10+10+1=21 */
  .class1 .class2 div{}
* 相同权重以最后定义的样式为准
```

- CSS class的命名规范
```
同bootstrap
.class-this-that
#idThisThat
```

- 常用的display值

```
block 块级元素，div p
inline 行内元素，span
inline-block 行内块元素
```

- position值

```
absolute
    生成绝对定位的元素，相对于 static 定位以外的第一个父元素进行定位
fixed
    生成绝对定位的元素，相对于浏览器窗口进行定位
relative
    生成相对定位的元素，相对于其正常位置进行定位
static
    默认值。没有定位，元素出现在正常的流中
   （忽略 top, bottom, left, right z-index 声明）
```

- 居中一个div

```
div{width: 1000px; margin: 0 auto;}
```

```
div{
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100px;
    height: 100px;
    margin-top: -50px;
    margin-left: -50px;
}
```

```
div{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100px;
    height: 100px;
    margin: auto;
}
```

- CSS实现的一个三角形

```
.triangle{
    width: 0;
    height: 0;
    border-width: 10px;
    border-style: solid;
    border-color: transparent transparent red transparent;
}
```

- CSS3的新特性

```
CSS3实现圆角 border-radius: 10px
阴影 box-shadow: 10px
文字特效 text-shadow
线性渐变 gradient
旋转 transform
transform:rotate(9deg) scale(0.85,0.90) translate(0px,-30px) skew(-9deg,0deg);//旋转,缩放,定位,倾斜
更强大的CSS选择器
```

- CSS3属性内核前缀

```
-webkit-border-radius: 10px;
   -moz-border-radius: 10px;
    -ms-border-radius: 10px;
        border-radius: 10px;
```

- CSS3新增伪类

```
p:first-of-type 选择属于其父元素的首个 <p> 元素的每个 <p> 元素。
p:last-of-type  选择属于其父元素的最后 <p> 元素的每个 <p> 元素。
p:only-of-type  选择属于其父元素唯一的 <p> 元素的每个 <p> 元素。
p:only-child    选择属于其父元素的唯一子元素的每个 <p> 元素。
p:nth-child(2)  选择属于其父元素的第二个子元素的每个 <p> 元素。
:enabled        :disabled 控制表单控件的禁用状态。
:checked        单选框或复选框被选中。
```

- SASS

    - 变量

    ```
    $font-stack:    Helvetica, sans-serif;
    $primary-color: #333;

    body {
        font: 100% $font-stack;
        color: $primary-color;
    }
    ```

    - 嵌套

    ```
    .class1{
        width: 1000px;
        .class2{
            width: 500px;
        }
    }

    .class1 {width: 1000px;}
    .class1 .class2 {width: 500px;}
    ```

    - 混合
    ```
    @mixin border-radius($radius) {
        -webkit-border-radius: $radius;
           -moz-border-radius: $radius;
            -ms-border-radius: $radius;
                border-radius: $radius;
    }

    .box {@include border-radius(10px);}
    ```

    - 扩展/继承

    ```
    .message {
        border: 1px solid #ccc;
        padding: 10px;
        color: #333;
    }

    .success {
        @extend .message;
        border-color: green;
    }

    .error {
        @extend .message;
        border-color: red;
    }
    ```

## JavaScript

- JS的基础数据类型

```
Undefined, Null, Boolean, Number, String
```

- JS的内置对象

```
Object 是 JavaScript 中所有对象的父对象

数据封装类对象：Object, Array, Boolean, Number 和 String
其他对象：Function, Arguments, Math, Date, RegExp, Error
```

- JS是弱类型语言

```
JS变量类型的自动转换
1 + '1' // '11'
0 == false // true
0 === false // false
```

- 变量作用域

```
变量必须用var定义，否则变量提升
var a = 1,
    b = 2;
function test(){
    var a = 3;
    b = 4;
}
console.log(a, b); // 3 2
```

- 延时执行函数setTimeout / setInterval

```
var handle = setTimeout(function() {
    // something
}, 0);
clearTimeout(handle);
```

- jQuery事件绑定

```
$('.class').on('click', function(e) {
    // 普通绑定
});

$('body').on('click', '.class', function() {
    // 事件代理
});
```

- jQuery Ajax

```
$.ajax({
    url: '/',
    type: 'get',
    data: {},
    headers: {}, // 请求头信息
    context: this, // 传入this
    cache: false // 缓存
}).done(function(data, textStatus, jqXHR) {
    // 成功
}).fail(function(jqXHR, textStatus, errorThrown) {
    // 失败
}).always(function(data, textStatus, jqXHR) {
    // 无论成功失败
});
```
