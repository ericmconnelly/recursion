// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  // your code here
  var result = [];
  function getChildNode(parentNode) {
      if(parentNode.classList && parentNode.classList.contains(className)) {
        result.push(parentNode);
      }
      for(var i = 0; i < parentNode.childNodes.length; i++) {
          getChildNode(parentNode.childNodes[i])
      }
  }
  getChildNode(document.body)
  return result;
};
