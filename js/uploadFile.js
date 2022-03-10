function load4rmFile() {

    var uploadFile = document.getElementById("uploadFile").files[0];

    var fileReader = new FileReader();

    fileReader.onload = function(fileLoadedEvent) {

        var elemHdl = document.getElementById("displayWin");

        elemHdl.value = fileLoadedEvent.target.result;

    };

    fileReader.readAsText(uploadFile, "UTF-8");

}