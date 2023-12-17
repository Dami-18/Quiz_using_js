var qu1 = "How many stars are on the Chinese flag?"; //5
var qu2 = "What is the capital of Ireland?"; //Dublin
var qu3 = 'What company was originally called "Cadabra"?';//Amazon
var qu4 = "In Harry Potter, what is the name of The Weasley's house?"; //The Burrow

var q1o1 = "Four";
var q1o2 = "Five";
var q1o3 = "Three";
var q1o4 = "Six";

var q2o1 = "Dublin";
var q2o2 = "Helsinki";
var q2o3 = "Budapest";
var q2o4 = "Tokyo";

var q3o1 = "Google";
var q3o2 = "Microsoft";
var q3o3 = "Amazon";
var q3o4 = "Apple";

var q4o1 = "The Willow";
var q4o2 = "The Weasly's";
var q4o3 = "The Burrow";
var q4o4 = "Weasly Niche";

var num = (Math.floor(Math.random() * 4) + 1);

switch (num) {
    case 1:
        $("p").html(qu1);
        $(".opt1").html(q1o1);
        $(".opt2").html(q1o2);
        $(".opt3").html(q1o3);
        $(".opt4").html(q1o4);
        $(".opt2").on("click", function () {
            $(".opt2").css("background-color", "chartreuse");
            var audio = new Audio("goodresult-82807.mp3");
            audio.play();


        });
        $(".opt1").on("click", function () {
            $(".opt1").css("background-color", "red");
            var audio = new Audio("lose.mp3");
            audio.play();


        });
        $(".opt3").on("click", function () {
            $(".opt3").css("background-color", "red");
            var audio = new Audio("lose.mp3");
            audio.play();


        });
        $(".opt4").on("click", function () {
            $(".opt4").css("background-color", "red");
            var audio = new Audio("lose.mp3");
            audio.play();


        });
        break;
    case 2:
        $("p").html(qu2);
        $(".opt1").html(q2o1);
        $(".opt2").html(q2o2);
        $(".opt3").html(q2o3);
        $(".opt4").html(q2o4);
        $(".opt2").on("click", function () {
            $(".opt2").css("background-color", "red");
            var audio = new Audio("lose.mp3");
            audio.play();


        });
        $(".opt1").on("click", function () {
            $(".opt1").css("background-color", "chartreuse");
            var audio = new Audio("goodresult-82807.mp3");
            audio.play();


        });
        $(".opt3").on("click", function () {
            $(".opt3").css("background-color", "red");
            var audio = new Audio("lose.mp3");
            audio.play();


        });
        $(".opt4").on("click", function () {
            $(".opt4").css("background-color", "red");
            var audio = new Audio("lose.mp3");
            audio.play();


        });
        break;
    case 3:
        $("p").html(qu3);
        $(".opt1").html(q3o1);
        $(".opt2").html(q3o2);
        $(".opt3").html(q3o3);
        $(".opt4").html(q3o4);
        $(".opt2").on("click", function () {
            $(".opt2").css("background-color", "red");
            var audio = new Audio("lose.mp3");
            audio.play();


        });
        $(".opt1").on("click", function () {
            $(".opt1").css("background-color", "red");
            var audio = new Audio("lose.mp3");
            audio.play();


        });
        $(".opt3").on("click", function () {
            $(".opt3").css("background-color", "chartreuse");
            var audio = new Audio("goodresult-82807.mp3");
            audio.play();


        });
        $(".opt4").on("click", function () {
            $(".opt4").css("background-color", "red");
            var audio = new Audio("lose.mp3");
            audio.play();


        });
        break;
    case 4:
        $("p").html(qu4);
        $(".opt1").html(q4o1);
        $(".opt2").html(q4o2);
        $(".opt3").html(q4o3);
        $(".opt4").html(q4o4);
        $(".opt2").on("click", function () {
            $(".opt2").css("background-color", "red");
            var audio = new Audio("lose.mp3");
            audio.play();


        });
        $(".opt1").on("click", function () {
            $(".opt1").css("background-color", "red");
            var audio = new Audio("lose.mp3");
            audio.play();


        });
        $(".opt3").on("click", function () {
            $(".opt3").css("background-color", "chartreuse");
            var audio = new Audio("goodresult-82807.mp3");
            audio.play();


        });
        $(".opt4").on("click", function () {
            $(".opt4").css("background-color", "red");
            var audio = new Audio("lose.mp3");
            audio.play();


        });
        break;

}





