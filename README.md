![fannypack](https://user-images.githubusercontent.com/21694364/50570775-46f81700-0d66-11e9-8e50-c6efffb8bde8.jpg)
[![npm version](https://badge.fury.io/js/fannypack-node.svg)](https://badge.fury.io/js/fannypack-node) 

fannypack is a build configuration for Node.js. Inspired by Facebook's create-react-app & Jared Palmer's backpack-core.

```bash
f-pack --basic-node your-app-name
cd your-app-name
yarn dev
```
## Installation

```bash
npm i -g fannypack-node
```

## Examples

### **Custom Node**
Batteries included 🔋
- [express](https://github.com/expressjs/express)
- [mongoose](https://github.com/Automattic/mongoose)
- [backpack](https://github.com/jaredpalmer/backpack)
```bash
f-pack --custom-node your-app-name
cd your-app-name
yarn dev
```
[Example project](https://github.com/david-castaneda/fannypack/tree/master/examples/custom-node)


### **Basic Node**
Minimalistic node server 🗃
- [express](https://github.com/expressjs/express)
```bash
f-pack --basic-node your-app-name
cd your-app-name
yarn dev
```
[Example project](https://github.com/david-castaneda/fannypack/tree/master/examples/basic-node)

## Inspirations
- [create-react-app](https://github.com/facebook/create-react-app)
- [backpack](https://github.com/jaredpalmer/backpack)
