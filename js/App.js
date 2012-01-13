$(document).ready(function() {

    //Set CSS styles
    $("body").addClass("blue-gradient");
    $("#app").addClass("rounded");

    //Initialize Easel.js canvas
    var stage = new Stage($("#main").get(0));
    stage.enableMouseOver();

    $("#app").jkey("a", function($e) {
        alert("'A' Key Pressed!");
    });

    //Initialize MVC
    var model = new Model();
    var view = new View(stage);
    var control = new Control(model, view);
    Ticker.setFPS(20);
    Ticker.addListener(stage);

});