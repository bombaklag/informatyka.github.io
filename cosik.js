document.addEventListener("DOMContentLoaded", function() {
    let footer = document.querySelector("footer");
    data = new Date();
    footer.innerText = `${data.getFullYear()}.${data.getMonth() + 1}.${data.getDate()}`
})