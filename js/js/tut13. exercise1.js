let a = document.links;

let name = 'code'

console.log(`The Link Include - \n ${name} \n are:`)

Array.from(a).forEach(function(linku){
    if(String(linku).includes(name)){
        console.log(linku.href)
        linku.style.border = '2px solid red'
    }
})
