# 前端技术培训内容

以下内容参考<a href="https://github.com/markyun/My-blog/tree/master/Front-end-Developer-Questions/Questions-and-Answers" target="_blank">《前端开发面试题》</a>，主要选取能实实在在地提升前端技术能力并用于前端开发工作的内容。

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
