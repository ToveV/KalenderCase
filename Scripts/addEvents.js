const addEventButton = document.querySelectorAll(".addEventButton");
addEventButton.forEach(button => {
    button.addEventListener("click", (e) => {
        console.log(e.target.closest(".content"))
        // e.target.closest(".content");
        let form = document.createElement("form");
        form.classList.add("addEvent");
        form.innerHTML = `
        <input type="date" name="date" class="hidden">
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
            <img src="Images/BLsleep.svg" alt="">
            <input type="checkbox" name="sleep" class="iconCheckbox">
            <img src="Images/BLworkout.svg" alt="">
            <input type="checkbox" name="workout" class="iconCheckbox">
            <img src="Images/BLschool.svg" alt="">
            <input type="checkbox" name="school" class="iconCheckbox">
            <img src="Images/BLfood.svg" alt="">
            <input type="checkbox" name="food" class="iconCheckbox">
            <img src="Images/BLmusic.svg" alt="">
            <input type="checkbox" name="music" class="iconCheckbox">
            <img src="Images/BLfreetime.svg" alt="">
            <input type="checkbox" name="freetime" class="iconCheckbox">
            <img src="Images/BLstudy.svg" alt="">
            <input type="checkbox" name="study" class="iconCheckbox">
        </div>
        <input type="submit" class="saveEventButton" value="Add Event">
        `;
        e.target.closest(".content").appendChild(form);
        e.target.style.display = "none";
    })
})
