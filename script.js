let link = document.getElementsByClassName("link");

let currentValue = 1;

function activeLink() {
    for (l of link) {
        l.classList.remove("active");
    }

    Event.target.classList.add("active");
    currentValue = Event.target.value

    function button1() {
        if (currentValue > 1) {
            for (l of link) {
                l.classList.remove("active");
            }

        }
    }

}