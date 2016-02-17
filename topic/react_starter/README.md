# Reactjs入门 & 开发准备

## 教程
- React官方教程
    - <a href="http://facebook.github.io/react/docs/tutorial.html" target="_blank">英文原版教程</a>
    - <a href="http://reactjs.cn/react/docs/tutorial.html" target="_blank">中文版教程</a>
- InfoQ教程
    - <a href="http://www.infoq.com/cn/articles/react-art-of-simplity" target="_blank">深入浅出React（一）：React的设计哲学 - 简单之美</a>
    - <a href="http://www.infoq.com/cn/articles/react-and-webpack" target="_blank">深入浅出React（二）：React开发神器Webpack</a>
    - <a href="http://www.infoq.com/cn/articles/react-jsx-and-component" target="_blank">深入浅出React（三）：理解JSX和组件</a>
    - <a href="http://www.infoq.com/cn/articles/react-dom-diff" target="_blank">深入浅出React（四）：虚拟DOM Diff算法解析</a>
- 其他网上教程

## 最轻量级开发环境
该方式适合尝试React，实际开发环境使用Gulp+Webpack+babel
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>React Demo</title>
</head>
<body>
    <div id="content"></div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.14.7/react.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.14.7/react-dom.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.23/browser.min.js"></script>

    <script type="text/babel">
        var Component = React.createClass({
            render: function() {
                return (
                    <div className="component">
                        Hello, world!
                    </div>
                );
            }
        });
        ReactDOM.render(
            <Component />,
            document.getElementById('content')
        );
    </script>
</body>
</html>
```

## 本地开发环境准备
- node & npm

## <a href="http://ant.design/docs/react/introduce" target="_blank">Ant Design of React</a>: 一个基于React的开源Admin后台框架
- 提供通用样式和组件，适用于自用型后台
- 作为后台开发的参考

