x = 294
bi = 2
let xlist = []

while (x >= bi){

    xlist.push(x % bi)
    x = Math.floor(x / bi)
}

xlist.push(x)

console.log(xlist.reverse().join('')) 