export function progressBar() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
    var progressContainer = document.getElementById("progressContainer");
    if (winScroll > 5) {
        progressContainer.style.display = "block";
    } else {
        progressContainer.style.display = "none";
    }
}