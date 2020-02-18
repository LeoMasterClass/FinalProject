const wrapper = document.getElementById("wrapper");
const imgslide = ["octoberfest2.jpeg", "slider2.jpg", "slider3.jpg", "slider4.jpg",];
const prev = document.getElementById("left-arrow");
const next = document.getElementById("right-arrow");

let i = 0;
wrapper.innerHTML = "<img src='public/img/" + imgslide[i] + "' />";

prev.addEventListener('click', function () {

    if (i === 0) {
        i = 2;
    } else {
        i--;
    }


    wrapper.innerHTML = "<img src='public/img/" + imgslide[i] + "' />";
})
next.addEventListener('click', function () {

    if (i === 2) {
        i = 0;
    } else {
        i++;
    }


    wrapper.innerHTML = "<img src='public/img/" + imgslide[i] + "' />";
})