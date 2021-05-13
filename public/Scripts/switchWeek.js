let monday;
let tuesday;
let wednesday;
let thursday;
let friday;
let saturday;
let sunday;


let counter = 0;

let dates = document.querySelectorAll(".dayDate");   

const switchWeek = (c) => {    
    let week = getNumberOfWeek();
    console.log(week);

    if(c != null || c != undefined) {
        counter = c;
    }

    let selectedWeek = week += counter;
    let days = arraySetup(selectedWeek);

    console.log(days);
    console.log(counter);

    let dates = document.querySelectorAll(".dayDate");

    for (let i = 0; i < dates.length; i++) {
        dates[i].dataset.date = days[i].toLocaleDateString();
        console.log(days[i].toLocaleDateString());
        let daySplit = days[i].toLocaleDateString().split("-");
        dates[i].textContent = `${daySplit[2]}/${daySplit[1]}`;
        
        
        // dates[i].textContent = days[i].toLocaleDateString();
    }

}

const arraySetup = (week) => {
    let dates = [];
    
    for(let i = 0; i < 7; i++) {
        dates.push(getDateOfWeek(week, 2021, i));
    }

    return dates;
}


const getDateOfWeek = (w, y, offset) => 
    new Date(y, 0, (1 + (w - 1) * 7) + (offset - 4));


document.querySelector(".arrowLeft")
.addEventListener("click", () => {
    switchWeek(counter - 1)
    document.querySelectorAll(".eventSection").forEach(sec => {
        sec.innerHTML = "";
    })
    getEvents();
});

document.querySelector(".arrowRight")
.addEventListener("click", () => {
    switchWeek(counter + 1)
    document.querySelectorAll(".eventSection").forEach(sec => {
        sec.innerHTML = "";
    })
    getEvents();
});