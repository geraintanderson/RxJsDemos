function addToLog (content) {
  var node = document.createElement("li");
  var textnode = document.createTextNode(content);
  node.appendChild(textnode);
  document.getElementById("list").appendChild(node);
}
