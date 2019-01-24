// // CALLBACK DEMO
// console.log('[Callback Demo] A')
//
// function asyncDemo (cb) {
//   const name = 'Callback Demo'
//   setTimeout(function () {
//     cb(name)
//   }, 1000)
// }
//
// asyncDemo(function (name) {
//   console.log('[Callback Demo] B', name)
// })
//
// console.log('[Callback Demo] C')


// PROMISE DEMO
// console.log('[Promise Demo] A')
//
// const name = 'Promise Demo'
// setTimeout(function () {
// }, 1000)
//
// console.log('[Promise Demo] B')
//
// console.log('[Promise Demo] C')



// // ASYNC/AWAIT DEMO
// console.log('[Promise Demo] A')
// async function asyncDemo () {
//   console.log('[Promise Demo] B')
//
//   const p = new Promise (function (resolve, reject) {
//     const name = 'Promise Demo'
//     setTimeout(function () {
//       resolve(name)
//     }, 1000)
//   })
//
//   const name = await p
//   console.log('[Promise Demo] C', name)
// }
//
// asyncDemo()
//
// console.log('[Promise Demo] D')
