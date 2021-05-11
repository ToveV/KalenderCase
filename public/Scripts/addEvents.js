

const addEventButton = document.querySelectorAll(".addEventButton");
addEventButton.forEach(button => {
    button.addEventListener("click", (e) => {
        console.log(e.target.parentNode.querySelector(".eventSection"))
        // e.target.closest(".content");
        let form = document.createElement("form");
        form.classList.add("addEvent");
        form.setAttribute("action", "/create");
        form.setAttribute("method", "post");
        form.innerHTML = `
        <input id="dateInput" type="text" name="date" class="hidden">
        <input type="text" name="title" class="addTitle2" placeholder="Title...">
        <div class="starttime">
            Starttime: <input type="time" name="starttime" class="addStarttime">
        </div>
        <div class="endtime">
            Endtime: <input type="time" name="endtime" class="addEndtime">
        </div>
        <textarea name="description" class="addDescription" cols="28" rows="5" placeholder="Add description..."></textarea>
        <div class="addIcon">Add icon:</div>
        <div class="iconSelection">
            <img src="/Images/BLsleep.svg" alt="">
            <input type="checkbox" name="sleep" class="iconCheckbox">
            <img src="/Images/BLworkout.svg" alt="">
            <input type="checkbox" name="workout" class="iconCheckbox">
            <img src="/Images/BLschool.svg" alt="">
            <input type="checkbox" name="school" class="iconCheckbox">
            <img src="/Images/BLfood.svg" alt="">
            <input type="checkbox" name="food" class="iconCheckbox">
            <img src="/Images/BLmusic.svg" alt="">
            <input type="checkbox" name="music" class="iconCheckbox">
            <img src="/Images/BLfreetime.svg" alt="">
            <input type="checkbox" name="freetime" class="iconCheckbox">
            <img src="/Images/BLstudy.svg" alt="">
            <input type="checkbox" name="study" class="iconCheckbox">
        </div>
        <input type="submit" class="saveEventButton" value="Add Event">
        `;
        e.target.closest(".content").appendChild(form);
        form.querySelector("#dateInput").value = e.target.closest(".content").querySelector(".dayDate").dataset.date;
        e.target.style.display = "none";

        // console.log(e.target);
        e.target.parentNode.querySelector(".eventSection").innerHTML = "";

    })
})

const getEvents = () => {
    fetch("http://127.0.0.1:3008/events").then((response) => response.json().then((data) => {
        const events = data.data;
        console.log(events);

        const weekdays = document.querySelectorAll(".weekday");

        weekdays.forEach(day => {
            // day.querySelector(".eventSection").innerHTML = "";
            events.forEach(event => {
                if (day.querySelector(".dayDate").dataset.date === event.date) {
                    let addEvent = document.createElement("div");
                    addEvent.classList.add("event");
                    addEvent.innerHTML = `
                    <div class="time">16:20</div>
                    <div class="icon"></div>
                    <div class="eventTitle">SCHOOL</div>
                    <div class="description hidden">Go to school, do big study, win at life.</div>
                    <div class="editEventButton hidden"><i class="fas fa-pencil-alt"></i></div>
                    <div class="eventUnderline"></div>
                    `;
                    day.querySelector(".eventSection").appendChild(addEvent);
                    addEvent.querySelector(".time").textContent = `${event.starttime} - ${event.endtime}`;
                    addEvent.querySelector(".eventTitle").textContent = `${event.title}`.toUpperCase();
                    addEvent.querySelector(".description").textContent = `${event.description}`;

                    if (event.food) {
                        addEvent.querySelector(".icon").innerHTML = `<img src="Images/BLfood.svg" alt="">`;
                    }
                    if (event.freetime) {
                        addEvent.querySelector(".icon").innerHTML = `<img src="Images/BLfreetime.svg" alt="">`;
                    }
                    if (event.music) {
                        addEvent.querySelector(".icon").innerHTML = `<img src="Images/BLmusic.svg" alt="">`;
                    }
                    if (event.school) {
                        addEvent.querySelector(".icon").innerHTML = `<img src="Images/BLschool.svg" alt="">`;
                    }
                    if (event.sleep) {
                        addEvent.querySelector(".icon").innerHTML = `<img src="Images/BLsleep.svg" alt="">`;
                    }
                    if (event.study) {
                        addEvent.querySelector(".icon").innerHTML = `<img src="Images/BLstudy.svg" alt="">`;
                    }
                    if (event.workout) {
                        addEvent.querySelector(".icon").innerHTML = `<img src="Images/BLworkout.svg" alt="">`;
                    }
                }
            });

            let moreInfoSwitch = false;
            day.querySelector(".eventSection").childNodes.forEach(child => {
                child.querySelector(".eventTitle").addEventListener("click", () => {
                    if (moreInfoSwitch === false) {
                        child.querySelector(".description").classList.remove("hidden");
                        child.querySelector(".editEventButton").classList.remove("hidden");
                        moreInfoSwitch = true;
                    } else {
                        child.querySelector(".description").classList.add("hidden");
                        child.querySelector(".editEventButton").classList.add("hidden");
                        moreInfoSwitch = false;
                    }
                    
                })
            })

            console.log(day.querySelectorAll(".editEventButton"));


            day.querySelectorAll(".editEventButton").forEach(editButton => {
                console.log(editButton);
                editButton.addEventListener("click", (e) => {
                    console.log(e.target.parentNode);
                    
                    
                })
            })

            // day.querySelector(".editEventButton").addEventListener("click", () => {
            //     console.log('hej');
            // })
        })

    }))
}
getEvents();




// console.log(document.querySelectorAll(".editEventButton"));
// const editEventButton = document.querySelectorAll(".editEventButton");
// editEventButton.forEach(button => {
//     console.log(button);
//     button.addEventListener("click", (e) => {
//         let form = document.createElement("form");
//         form.classList.add("addEvent");
//         form.setAttribute("action", "/update");
//         form.setAttribute("method", "get");
//         form.innerHTML = `
//         <input id="dateInput" type="text" name="date" class="hidden">
//         <input type="text" name="title" class="addTitle2" placeholder="Title...">
//         <div class="starttime">
//             Starttime: <input type="time" name="starttime" class="addStarttime">
//         </div>
//         <div class="endtime">
//             Endtime: <input type="time" name="endtime" class="addEndtime">
//         </div>
//         <textarea name="description" class="addDescription" cols="28" rows="5" placeholder="Add description..."></textarea>
//         <div class="addIcon">Add icon:</div>
//         <div class="iconSelection">
//             <img src="/Images/BLsleep.svg" alt="">
//             <input type="checkbox" name="sleep" class="iconCheckbox">
//             <img src="/Images/BLworkout.svg" alt="">
//             <input type="checkbox" name="workout" class="iconCheckbox">
//             <img src="/Images/BLschool.svg" alt="">
//             <input type="checkbox" name="school" class="iconCheckbox">
//             <img src="/Images/BLfood.svg" alt="">
//             <input type="checkbox" name="food" class="iconCheckbox">
//             <img src="/Images/BLmusic.svg" alt="">
//             <input type="checkbox" name="music" class="iconCheckbox">
//             <img src="/Images/BLfreetime.svg" alt="">
//             <input type="checkbox" name="freetime" class="iconCheckbox">
//             <img src="/Images/BLstudy.svg" alt="">
//             <input type="checkbox" name="study" class="iconCheckbox">
//         </div>
//         <input type="submit" class="saveEventButton" value="Add Event">
//         `;

//     })
// })