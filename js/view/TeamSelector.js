function TeamSelector($model) {

    var display = new Container();
    display.x = 300;
    display.y = 50;
    //Background
    var backgroundGraphics = new Graphics();
    backgroundGraphics.beginFill("rgba(0,0,0,1)");
    backgroundGraphics.drawRoundRectComplex(0,0,360,100,10,10,0,0);
    backgroundGraphics.endFill();
    var background = new Shape(backgroundGraphics);
    display.addChild(background);
    Tween.get(background).to({alpha:0.6},0);

    var backgroundGraphics2 = new Graphics();
    backgroundGraphics2.beginFill("rgba(0,0,0,1)");
    backgroundGraphics2.drawRoundRectComplex(0,0,360,10,0,0,10,10);
    backgroundGraphics2.endFill();
    var background2 = new Shape(backgroundGraphics2);
    background2.y = 340;
    display.addChild(background2);
    Tween.get(background2).to({alpha:0.6},0);

    //Seed TF and Background
    var seedBgGFX = new Graphics();
    seedBgGFX.setStrokeStyle(3);
    seedBgGFX.beginStroke(Graphics.getRGB(255,255,255));
    seedBgGFX.beginFill("rgba(0,0,0,.6)");
    seedBgGFX.drawRoundRect(0,0,52,37,7);
    var seedBg = new Shape(seedBgGFX);
    seedBg.x = 10;
    seedBg.y = 10;
    display.addChild(seedBg);

    var seedTF = new Text("#16", "16px Bold Verdana", "#fff");
    seedTF.x = seedBg.x + 12;
    seedTF.y = seedBg.y + 24;
    display.addChild(seedTF);
    //Seed #
    //"Input" text
    var inputTF = new Text("Type Team Name", "36px Bold Verdana", "#fff");

    //Cursor
    var cursor = new Cursor();
    cursor.getDisplay().x = 150;
    cursor.getDisplay().y = 50;
    display.addChild(cursor.getDisplay());

    //Four List Items
    //Close Button
    var items = 4;
    var listItems = [];
    for (var i=0; i < items; i++) {
        listItems[i] = new TeamSelectorListItem();
        listItems[i].update($model, $model.teams[i]);
        listItems[i].getDisplay().y = 100 + 60 * i;
        display.addChild(listItems[i].getDisplay());
    }

    this.updateText = function($text) {
        inputTF.text = $text;
    };

    this.getDisplay = function() {
        return display;
    };

};