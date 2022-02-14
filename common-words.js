let array1 = ["hello", "javascript"]
let array2 = ["I", "love", "javascript"]

function commonWords(s, t){
  let c = []
  s.forEach(el=>{
    if (t.includes(el)) {
      c.push(el)
    }
  })
  
  return c
}

console.log("----->",commonWords(array1, array2));
