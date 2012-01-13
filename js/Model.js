
function Model() {

    this.teams = new Teams().getTeams();
    this.images = new ImagesModel();
    this.imagesLoaded = 0;
    this.imagesToLoad = 1;

}