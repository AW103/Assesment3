let color = document.querySelector("#color")
let place = document.querySelector("#place")
let ritual = document.querySelector("#ritual")

const colorAlert = () => {
    alert("My favorite color is red!")
}
const placeAlert = () => {
    alert("My favorite place is on a mountain.")
}
const ritualAlert = () => {
    alert("My favorite ritual is eating")
}

color.addEventListener("click", colorAlert)
place.addEventListener("click", placeAlert)
ritual.addEventListener("click", ritualAlert)