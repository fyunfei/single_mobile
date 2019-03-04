# 橘子情感移动端单页项目

### 安装要求
1. 项目依赖 nodejs 环境，安装指南请参考 [Node 官网](http://nodejs.cn/)。
2. 项目使用 [fis3](http://fis.baidu.com/) 构建，执行 `sudo npm install fis3 -g` 全局安装 fis3 环境，
   请参阅 [官网](http://fis.baidu.com/) 用户文档。

### 安装步骤
1. 首先 Fork 项目到你的 Github 仓库；
2. 在你的 Github 仓库中 clone 项目到你的开发机。

### 开发
1. 项目目录下执行 `fis3 server start` 开启服务，在浏览器中打开对应地址；
2. 执行 `fis3 release -wL` 启用热更新；
3. 恭喜，现在项目中的任何改动都能实时在浏览器中预览了，happy hacking!

### 部署
1. 执行 `fis3 release -d ./output` 将项目构建到当前目录下的 output 文件夹中；
2. 将构建的项目上传到小鱼情感 PC 端虚拟主机上即可。值得一提的是，注意构建的项目
   目录和虚拟主机中项目结构。
