function TitleScreen($model) {

    //Display object and getter
    var display = new Container();

    //Constructor
    var g = new Graphics();
    g.beginFill("#0f1835");
    g.drawRect(0,0,500,200);
    var background = new Shape(g);
    background.x = 100;
    background.y = 100;
    display.addChild(background);

    var closeButton = $model.images.images["closeButton"];
    closeButton.x = 582;
    closeButton.y = 85;
    display.addChild(closeButton);

    this.getDisplay = function() {
        return display;
    };

    this.getCloseButton = function() {
        return closeButton;
    };

    this.getBackground = function() {
        return background;
    };

    this.onShow = function() {
        Tween.get(display).to({alpha:1},1000,Ease.get(1));
    };

    this.onHide = function() {
        Tween.get(display).to({alpha:0},1000,Ease.get(1));
    };

};