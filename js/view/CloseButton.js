function CloseButton($model) {

    var display = $model.images.images["closeButton"];
    //alert($model.images["closeButton"]);

    this.getDisplay = function() {
        return display;
    };

};