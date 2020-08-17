//Given the string "team number 2", transform and return the string in camelCase
let str = "team number 2"

function camelCase(str){
  return str.split(" ").map((word,index)=>{
    if(index == 0){
      return word.toLowerCase();
    }
    return word.charAt(0).toUpperCase()+word.slice(1).toLowerCase();
  }).join('');
}
