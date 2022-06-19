$(".digit").click(function () {

    var x = parseInt(this.innerHTML);
    var y = parseInt(this.innerHTML);


    $(".screen").html(x);
    $(".screen").html(y);

    console.log(x, y);

    // if (this.innerHTML === "+") {

    //     add(x, y);
    // }









})


function add(a, b) {


    console.log(a + b)

}


var add = function (x, y) {

    return x + y;
}

$("body").on("keypress", (event) => {

    ($("h2").html(event.key));

});