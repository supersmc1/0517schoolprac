const arrExample = ["피카츄", "라이츄", "파이리", "꼬부기", "버터풀", "야도란" , "피존투", "또가스", "우린", "서로", "모습은", "달라도"]
//arrExample.forEach(pokemon =>{
  //console.log(pokemon);
//})

//const mapTest = arrExample.map( arrExample => "잉어킹");
//console.log(mapTest);

//arrExample.push("잉어킹")
//console.log(arrExample)

//arrExample.pop()
//console.log(arrExample)

//arrExample.shift()
//console.log(arrExample)

//arrExample.unshift("피츄")
//console.log(arrExample)

//console.log(arrExample.indexOf("버터풀"));
//arrExample.splice(7,1,'또도가스')
//console.log(arrExample)

//const arrExample2 = arrExample.slice(1,4)

//console.log(arrExample2)
//console.log(arrExample)

//console.log(Array.from('포켓몬스터'))

//Array.isArray(arrExample);
//console.log(Array.isArray(arrExample));

//console.log(arrExample.at(-1))

//const arrExample2 = ["잠만보","거북왕","리자몽"]
//const arrExample3 = arrExample.concat(arrExample2)
//console.log(arrExample3)
//const pokemon = (value)=> value < 10
//console.log(arrExample.every(pokemon))

//const result = arrExample.filter( pokemon => pokemon.length > 2);
//console.log(result)

//const isLargeNumber = (pokemon) => pokemon > 13;

//console.log(arrExample.findIndex(isLargeNumber));

//console.log(arrExample.includes("야도란"));

//console.log(arrExample.join())

//const pokemon = (value)=> value > 5
//console.log(arrExample.some(pokemon))

//arrExample.sort()
//console.log(arrExample)

//console.log(arrExample.toString())

const iterator = arrExample.values();

for (const value of iterator) {
  console.log(value);
}
