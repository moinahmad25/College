const chooseOption = document.querySelector(".choose-option"),
    container = document.querySelector(".container"),
    vacant = document.querySelectorAll(".vacant"),
    btn = document.querySelector(".btn"),
    rooms = container.querySelector(".rooms");
let selectedSeat;


// console.log(rooms)


const value = vacant.forEach(items => {
    items.addEventListener("click", () => {
        
        if (selectedSeat) {
            // console.log(selectedSeat)
            selectedSeat.classList.remove('fill');
            // btn.classList.remove('active')
            
            // console.log(selectedSeat.innerText)
        }
        btn.addEventListener("click", (items) => {
            // const carry = selectedSeat.innerText;
                // console.log(carry)
                // console.log(items.innerText)
            const obj = JSON.parse(localStorage.getItem("myObject"));
            obj.roomNumber = selectedSeat.innerText;
            console.log(obj.roomNumber)
            localStorage.setItem("myObject", JSON.stringify(obj));

            window.location.href = 'DisplayPage/'+'index.html';
        })
        items.classList.add('fill')
        btn.classList.add('activate')
        selectedSeat = items;
        const floorNumber = [...document.querySelectorAll(".floor-number")]
        // console.log(floor)
        //   container.classList.remove("active")
        document.getElementById("add-txt").innerText = `(Room No.  ${items.innerText})`
    })
})

chooseOption.addEventListener("click", () => {
    container.classList.toggle("active")
    // console.log("Moin")
})

