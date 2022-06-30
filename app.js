// npm - global command, comes with node - full form: node package manager, just like pip for python
// npm --version

// local dependency - use it only in this particualar project
// npm i <packageName>
// npm uninstall <packageName> - to uninstall
// global dependency - use it in any project
// npm install -g <packageName>

// devDependencies are used by developers to assist in development'
// nodemon is a dependency that helps to re-run the app whenever any changes occur in any file

// package.json - manifest file that stores important info about project/package like dependencies, scripts,etc
// mannual approach
// npm init (step by step approach)
// npm init -y (everything default)

// node_modules folder is created when dependencies are installed
// npm install - install necessary dependencies using package.json and it creates package-lock.json
// scripts contains shorthand commands. for example npm start executes 'node app.js' here. 

const _ = require('lodash')

const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items);
console.log(newItems)
console.log('hello world')
console.log('what is up prasiddha')
