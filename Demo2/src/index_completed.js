import { Observable } from 'rxjs'

function addToLog (content) {
  var node = document.createElement("li");
  var textnode = document.createTextNode(content);
  node.appendChild(textnode);
  document.getElementById("list").appendChild(node);
}

addToLog('---- Page Loaded')

// const delay = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('Log Item')
//     resolve('Log Item2')
//   }, 1000)
// })
//
// delay.then(addToLog)

var items = Observable.create(observer => {
  observer.next('Event 1')
  observer.next('Event 2')
  observer.next('Event 3')
})

items.subscribe(
  (item) => addToLog(item)
)
