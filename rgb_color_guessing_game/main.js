// var colors = [
//     "rgb(255, 0, 0)",
//     "rgb(0, 255, 0)",
//     "rgb(0, 0, 255)",
//     "rgb(255, 255, 0)",
//     "rgb(0, 255, 255)",
//     "rgb(255, 0, 255)"
// ]


var square = $(".square");
var span = $("span").text()
var h1 = $("h1")
var num = 6;

function generateRandomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var randomColor = "rgb(" + r + ", " + g + ", " + b + ")"
    return randomColor;
}




function generateColorList(num) {
    var list = [];
    for (var i = 0; i < num; i++) {

        list.push(generateRandomColor());

    }
    return list;
}



var colors = generateColorList(num);
console.log(colors[2]);
console.log(colors);

function assignColors() {
    square.each(function(index) {
        $(this).css("background-color", colors[index])
    })

};


assignColors();


var pickedColor = colors[Math.floor(Math.random() * num)]
$("span.random").text(pickedColor)

console.log(pickedColor)

square.on("click", function() {
    console.log(pickedColor);
    console.log($(this).css("background-color"))
    if ($(this).css("background-color") === pickedColor) {
        square.css("background-color", $(this).css("background-color"));
        h1.css("background-color", $(this).css("background-color"));
        $(".message").text("Correct!")
        $(".newcolors").text("Play Again?");
    } else {
        $(this).css("background-color", "#232323");
        $(".message").text("Try Again");
    }

})



$(".easy").on("click", function() {
    num = 3;
    colors = generateColorList(num);
    assignColors();
    pickedColor = colors[Math.floor(Math.random() * num)]
    $("span.random").text(pickedColor);


    for (var i = 3; i < 6; i++) {
        $(square[i]).css("display", "none");
    }

    $(".hard").removeClass("highlighted");
    $(".easy").addClass("highlighted");

})


$(".hard").on("click", function() {
    num = 6;
    colors = generateColorList(num);
    assignColors();
    pickedColor = colors[Math.floor(Math.random() * num)]
    $("span.random").text(pickedColor);


    for (var i = 3; i < 6; i++) {
        $(square[i]).css("display", "block");
    }

    $(".hard").addClass("highlighted");
    $(".easy").removeClass("highlighted");

})


$(".newcolors").on("click", function() {
    colors = generateColorList(num);
    assignColors();
    pickedColor = colors[Math.floor(Math.random() * num)]
    $("span.random").text(pickedColor);
    $(".message").text("");
    h1.css("background-color", "steelblue");

})