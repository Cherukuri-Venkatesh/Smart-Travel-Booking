function enterSite() {
    window.location.href = 'newhome.html';
}
function toggleDropdown(category) {
    document.getElementById(category).classList.toggle('visible');
}
// Toggle dropdown visibility
function toggleDropdown(id) {
    let dropdown = document.getElementById(id);
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

// Search feature
document.getElementById("searchBox").addEventListener("keyup", function() {
    let query = this.value.toLowerCase();
    let links = document.querySelectorAll(".dropdown a");

    links.forEach(link => {
        let text = link.innerText.toLowerCase();
        link.style.display = text.includes(query) ? "block" : "none";
    });
});