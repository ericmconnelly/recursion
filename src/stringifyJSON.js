// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  var input = typeof obj;

  switch(input){

    case 'number':
    case 'boolean':
           return String(obj);
           break;
    case 'string':
           return '"'+obj+'"';
    case 'object':
      if (obj === null)
            return "null";
      // check if an array
      else if (Array.isArray(obj)){
        return '[' + obj.map(stringifyJSON) + ']';
      }else{

        var output = "";
        for(var key in obj) {
          if(typeof obj[key] !== 'function' && obj[key] !== undefined) {
              output += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ",";
          }
        }

        if(output.slice(-1) === ',') {
            output = output.slice(0, -1);
        }
        return '{' + output + '}';
      }
      // catch undefined or 'function'
    default:
      return '';
      break;
    }


};
