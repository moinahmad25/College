const headerSection = document.querySelectorAll(".header-section"),
    navbar = document.querySelector(".navbar"),
    body = document.querySelector(".body"),
    nav = navbar.querySelector(".nav"),
navlist = nav.querySelector(".navlist"),
    navigation = navbar.querySelector(".navigation"),
    btn = document.querySelector(".btn"),
    bixCircleFill = document.querySelector(".bi-x-circle-fill")
    button = [...document.querySelectorAll(".button")],
    popupMenu = document.querySelector(".popup-menu");

navigation.addEventListener("click", () => {
    navigation.classList.toggle("acttive")

})


function revealpopup() {
    popupMenu.classList.toggle("activee")
}
bixCircleFill.addEventListener("click", () =>{
    popupMenu.classList.remove("activee")
})
button.forEach(element => {
    element.addEventListener("click", () =>{
        window.location.href = "Client/"+"Client Personal Detail Page/"+"index.html";
    })
});


