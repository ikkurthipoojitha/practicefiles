 var ar = [12,45,67,89,9,34,75,23,789]
function filterApp(){
    console.log(ar);
    var newar = ar.fliter((element,index) =>{
        return element > 50
    })
}