var _count= Date.now();
var element = document.getElementById("output");

var inc = document.getElementById("inc");
var dec = document.getElementById("dec");

inc.addEventListener('click', function(event){
    increment();
})

dec.addEventListener('click', function(event){
    decrement();
})

function increment() {
    _count++;
    element.innerText = _count;
}
function decrement() {
    _count--;
    element.innerText = _count;
}

document.getElementById('key').addEventListener('keyup', function(event){
    if(event.which === 13){
        alert('Enter clicked!')
    }
})
