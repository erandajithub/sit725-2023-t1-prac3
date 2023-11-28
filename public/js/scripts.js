const clickMe = () => {
    alert("Hello World! This is my first Application")
}
$(document).ready(function () {
    // $('.materialboxed').materialbox();
    $('#clickButton').click(() => {
        clickMe();
    })


    
});