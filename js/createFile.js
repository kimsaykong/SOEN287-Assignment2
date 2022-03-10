function save2File(fName='textFile') {
    var inData = document.getElementById("displayWin").value;

    //var data2Blob = new Blob([inData], {type:"text/plain"});

    var data2Blob = new File([inData], fName, {type: "text/plain"});

    var blob2URL = window.URL.createObjectURL(data2Blob);

    /* Create a HTML anchor tag via JavaScript, and force download */

    var anchorTag = document.createElement("a");

    anchorTag.href = blob2URL;

    anchorTag.download = fName;

    anchorTag.click();
}