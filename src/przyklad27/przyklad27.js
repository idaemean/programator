function testScreenObject() {
    document.getElementById("href").innerHTML =
        "Page adress is:<br>" +window.location.href;
    document.getElementById("protocol").innerHTML =
        "Page protocol is:<br>" +window.location.protocol;
    document.getElementById("port").innerHTML =
        "Page port is:<br>" +window.location.port;

}

//screen.availWidth
// ●screen.availHeight
// ●screen.colorDepth
// ●screen.pixelDepth