window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("top-nav").style.backgroundColor = "#300595";
    } else {
        document.getElementById("top-nav").style.backgroundColor = "transparent";
    }
};

i = 0;
function changeBg() {
    if (document.body.scrollTop == 0 || document.documentElement.scrollTop == 0) {
        document.getElementById("top-nav").style.backgroundColor = "#300595";
        i++;
    } 

};
