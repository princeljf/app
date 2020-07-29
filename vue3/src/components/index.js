const context = require.context('./', true, /^\.\/([a-zA-Z1-9-]+)\/index.js$/)

console.log(1234, context);
context.keys().forEach((key)=>{
    
})

export default context