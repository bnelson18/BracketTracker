function TeamSelectorListItem() {

    var display = new Container();
    var backgroundGraphics = new Graphics();
    backgroundGraphics.beginFill("rgba(0,0,0,1)");
    backgroundGraphics.drawRect(0,0,360,60);
    backgroundGraphics.endFill();
    var background = new Shape(backgroundGraphics);
    display.addChild(background);
    Tween.get(background).to({alpha:0.6},0);
    var teamImage;
    var teamBitmap;
    var teamNameTF = new Text("Team Name", "16px Verdana", "#fff");
    teamNameTF.x = 98;
    teamNameTF.y = 24;
    var teamMascotTF = new Text("Team Mascot", "22px Bold Verdana", "#fff");
    teamMascotTF.x = 98;
    teamMascotTF.y = 45;
    display.addChild(teamNameTF);
    display.addChild(teamMascotTF);

    //360px wide
    this.getDisplay = function() {
        return display;
    };

    this.update = function($model, $team) {

        if ($model.images.images[$team.name]) {
            //Load Pre-existing Image
            teamBitmap = $model.images.images[$team.name];
            display.addChild(teamBitmap);
            Tween.get(teamBitmap).to({alpha:0.75},0);
        } else {
            //Load Team Image
            teamImage = new Image();
            teamImage.name = 'teamImage';
            teamImage.src = $team.image;
            teamImage.onload = function($e) {
                teamBitmap = new Bitmap($e.target);
                $model.images.images[$team.name] = teamBitmap;
                display.addChild(teamBitmap);
                Tween.get(teamBitmap).to({alpha:0.75},0);
            };
        }

        teamNameTF.text = $team.name;
        teamMascotTF.text = $team.mascot;
    };

    display.onMouseOver = function() {
        Tween.get(background).to({alpha:1},200);
        Tween.get(teamBitmap).to({alpha:1},200);
    };

    display.onMouseOut = function() {
        Tween.get(background).to({alpha:0.6},200);
        Tween.get(teamBitmap).to({alpha:0.75},200);
    };
};