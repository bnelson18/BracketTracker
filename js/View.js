function View($stage) {

    var stage = $stage;
    var titleScreen;
    var teamSelector;
    var loadedObjects = 0;

    this.getTitleScreen = function() {
        return titleScreen;
    }

    this.init = function($model) {
        //titleScreen = new TitleScreen($model);
        //stage.addChild(titleScreen.getDisplay());
        teamSelector = new TeamSelector($model);
        stage.addChild(teamSelector.getDisplay());
    };

    this.onLoadComplete = function($e) {
        loadedObjects++;

        if (loadedObjects == 1) {
            //Continue!
            onInitComplete();
        }
    };

    this.getStage = function() {
        return stage;
    };
}