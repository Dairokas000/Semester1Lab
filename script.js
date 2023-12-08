function changeColor(squareid){
    var square = document.getElementById(squareid)
    var randomColor = getrandomColor()
    square.style.backgroundColor = randomColor
}

function getrandomColor(){
    var letters = '0123456789ABCDEF';
    var color = '#';
    for(var i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color;

}

function flashColors(){
    var flashes = document.querySelectorAll(".flash")
    flashes.forEach(function(flash){
        var randomColor = getrandomColor()
        flash.style.backgroundColor = randomColor
    })
    

}
setInterval(flashColors, 0.1)

var newH2 = document.createElement("h2")
newH2.innerHTML = "Super fast"
newH2.setAttribute("style", "backgroundColor: gold")
document.body.appendChild(newH2)