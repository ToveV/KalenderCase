const today = new Date();
let currentDay;

// get dayDate
const setCalendar = () => {
    let dayOfWeek = today.getDay();
    if (dayOfWeek === 0) {
        dayOfWeek = 7;
    }
 
    let monday = new Date();
    if (dayOfWeek !== 1) {
        monday.setHours(-24 * (dayOfWeek - 1));
    }

    currentDay = new Date (monday);

    let dates = document.querySelectorAll(".dayDate");

    dates.forEach(date => {
        let currentDaySplit = currentDay.toLocaleDateString();
        let daySplit = currentDaySplit.split("-");
        date.textContent = `${daySplit[2]}/${daySplit[1]}`;
        date.dataset.date = currentDaySplit;
        currentDay.setHours(+24);
    });
}

setCalendar()


//get week number
const getNumberOfWeek = () => {
    const firstDayOfYear = new Date(today.getFullYear(), 0, 1);
    const pastDaysOfYear = (today - firstDayOfYear) / 86400000;
    return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
}


const week = document.getElementById("weekSelection");
week.textContent = "WEEK " + getNumberOfWeek();


//get month
const yearMonth = document.getElementById("yearMonth");

const getMonthName = () => {
    let January = {
        nr: 0,
        month: "JANUARY"
    }
    let february = {
        nr: 1,
        month: "FEBRUARY"
    }
    let march = {
        nr: 2,
        month: "MARCH"
    }
    let april = {
        nr: 3,
        month: "APRIL"
    }
    let may = {
        nr: 4,
        month: "MAY"
    }
    let june = {
        nr: 5,
        month: "JUNE"
    }
    let july = {
        nr: 6,
        month: "JULY"
    }
    let august = {
        nr: 7,
        month: "AUGUST"
    }
    let september = {
        nr: 8,
        month: "SEPTEMBER"
    }
    let october = {
        nr: 9,
        month: "OCTOBER"
    }
    let november = {
        nr: 10,
        month: "NOVEMBER"
    }
    let december = {
        nr: 11,
        month: "DECEMBER"
    }

    const array = [January, february, march, april, may, june, july, august, september, october, november, december];
    array.forEach(month => {
        if (today.getMonth() === month.nr) {
            yearMonth.textContent = today.getFullYear() + " " + month.month;
        }
    })
}

getMonthName()