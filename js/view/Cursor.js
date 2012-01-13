function Cursor() {

    var display = new Container();
    this.getDisplay = function() {
        return display;
    };

    //Cursor Graphic
    var g = new Graphics();
    g.setStrokeStyle(3);
    g.beginStroke("#fff");
    g.moveTo(0,0);
    g.lineTo(0,20);
    //g.drawRect(0,0,20,20);
    g.endStroke();
    var cursor = new Shape(g);

    display.addChild(cursor);

};
