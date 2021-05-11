let monday;
let tuesday;
let wednesday;
let thursday;
let friday;
let saturday;
let sunday;


let counter = -1;
let ENVECKAFRAMMÅNDAG = new Date(currentDay + 86400000 * 7);
const framenvecka = () => {

    counter++;
    ENVECKAFRAMMÅNDAG = new Date(+currentDay + (86400000 * 7) * counter);
    monday = ENVECKAFRAMMÅNDAG;
    tuesday = new Date(+ENVECKAFRAMMÅNDAG + 86400000 * 1);
    wednesday = new Date(+ENVECKAFRAMMÅNDAG + 86400000 * 2);
    thursday = new Date(+ENVECKAFRAMMÅNDAG + 86400000 * 3);
    friday = new Date(+ENVECKAFRAMMÅNDAG + 86400000 * 4);
    saturday = new Date(+ENVECKAFRAMMÅNDAG + 86400000 * 5);
    sunday = new Date(+ENVECKAFRAMMÅNDAG + 86400000 * 6)

    console.log(monday, tuesday, wednesday, thursday, friday, saturday, sunday);


    console.log(ENVECKAFRAMMÅNDAG);

    let arr = [monday, tuesday, wednesday, thursday, friday, saturday, sunday];
    let dates = document.querySelectorAll(".dayDate");
    dates.forEach(date => {
        let currentDaySplit = currentDay.toLocaleDateString().split("-");
        date.textContent = currentDaySplit[2] + "/" + currentDaySplit[1];
        console.log(currentDay.toLocaleDateString());
        date.dataset.date = currentDay.toLocaleDateString();
        currentDay.setHours(+24);
    })

    for (let i = 0; i < dates.length; i++) {
        for (let i2 = 0; i2 < arr.length; i2++) {
            let DaySplit = arr[i2].toLocaleDateString().split("-");
            if (i === i2) {
                dates[i].textContent = DaySplit[2] + "/" + DaySplit[1];
            }
        }
    }

}



const arrowLeft = document.querySelector(".arrowLeft");
arrowLeft.addEventListener("click", () => {
    console.log("HEJ")
});

const arrowRight = document.querySelector(".arrowRight");
arrowRight.addEventListener("click", () => {
    console.log("TJO")
    framenvecka();

})