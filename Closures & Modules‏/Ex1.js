const StringFormatter = function(){
  const capitalizeFirst = function(str){
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
  }
  const toSkewerCase = function(str){
    return str.split(" ").join("-")
  }
  return {
    capitalizeFirst,
    toSkewerCase
  }
}

const formatter = StringFormatter()

console.log(formatter.capitalizeFirst("dorothy")) 
console.log(formatter.toSkewerCase("blue box"))