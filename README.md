![fannypack](https://user-images.githubusercontent.com/21694364/50570775-46f81700-0d66-11e9-8e50-c6efffb8bde8.jpg)
[![npm version](https://badge.fury.io/js/fannypack-node.svg)](https://badge.fury.io/js/fannypack-node) 

Fannypack is a hassle free setup build configuration for Node.js projects. Inspired by Facebook's create-react-app & Jared Palmer's backpack-core. Fannypack is made to bootstrap your Javascript development by offering you minimalistic build configurations for you to focus on developing, not the setup. Includes support for latest Javascript practices such as async/await, import/export and offers a hassle free setup experience. Fannypack is highly customizable but offers some awesome out-the-box folder/project structure.

```bash
fannypack --basic-node your-app-name
cd your-app-name
yarn dev
```
## Installation

```bash
npm i -g fannypack-core
```

## Examples

### **Custom Node project**
Batteries included 🔋
- [express](https://github.com/expressjs/express)
- [mongoose](https://github.com/Automattic/mongoose)
- [backpack](https://github.com/jaredpalmer/backpack)
```bash
fannypack --custom-node your-app-name
cd your-app-name
yarn dev
```
[Example project](https://github.com/david-castaneda/fannypack/tree/master/examples/custom-node)


### **Basic Node project**
Minimalistic node server 🗃
- [express](https://github.com/expressjs/express)
```bash
fannypack --basic-node your-app-name
cd your-app-name
yarn dev
```
[Example project](https://github.com/david-castaneda/fannypack/tree/master/examples/basic-node)

### In the works 👨🏻‍💻
- Typescript setup configurations (basic/custom)
- Flow setup configurations (basic/custom)

## Inspirations
- [create-react-app](https://github.com/facebook/create-react-app)
- [backpack](https://github.com/jaredpalmer/backpack)
