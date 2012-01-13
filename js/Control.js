function Control($model, $view) {

    var model = $model;
    var view = $view;

    function onImageLoadComplete($e) {
        model.images.images[$e.target.name] = new Bitmap($e.target);
        model.imagesLoaded++;
        if (model.imagesLoaded == model.imagesToLoad) {
            view.init(model);

            /*view.getTitleScreen().getBackground().onClick = function() {
                alert("Title Screen clicked!");
            };

            view.getTitleScreen().getCloseButton().onClick = function($e) {
                view.getTitleScreen().onHide();
            };
*/
        };
    };

    //Preload Graphics
    var closeButton = new Image();
    closeButton.name = 'closeButton';
    closeButton.src = 'img/close-button.png';
    closeButton.onload = onImageLoadComplete;

};