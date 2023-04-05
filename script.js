const headerSection = document.querySelectorAll(".header-section"),
    navbar = document.querySelector(".navbar"),
    nav = navbar.querySelector(".nav")
    navlist = nav.querySelector(".navlist"),
    navigation = navbar.querySelector(".navigation"),
    // conttent = navigation.querySelector(".conttent");
// console.log(navigation)

navigation.addEventListener("click", () => {
        navigation.classList.toggle("acttive")
        
        // console.log(navigation)
})