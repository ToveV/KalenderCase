import fs from "fs";

const eventsJson = './data/events.json';

let events = JSON.parse(fs.readFileSync(eventsJson, 'utf-8'));

const findAllEvents = () => {
    return events;
}

const findEventById = (id) => {
    return events.find(event => event.id === id);
}

const deleteEventById = (id) => {
    let index = events.findIndex(e => e.id === id);
    console.log(index, "hola", id);
    events.splice(index, 1);
    fs.writeFileSync(eventsJson, JSON.stringify(events), 'utf-8');
}

const updateEventById = (id, body) => {
    try {
        console.log(id);
        id = parseInt(id);
        const eventToUpdate = findEventById(id);
        if (!eventToUpdate) {
            throw `No event found with id: ${id}`;
        }
        const updateEvent = {
            id: eventToUpdate.id,
            date: body.date || eventToUpdate.date,
            title: body.title || eventToUpdate.title,
            starttime: body.starttime || eventToUpdate.starttime,
            endtime: body.endtime || eventToUpdate.endtime,
            description: body.description || eventToUpdate.description,
            sleep: body.sleep || eventToUpdate.sleep,
            workout: body.workout || eventToUpdate.workout,
            school: body.school || eventToUpdate.school,
            food: body.food || eventToUpdate.food,
            music: body.music || eventToUpdate.music,
            freetime: body.freetime || eventToUpdate.freetime,
            study: body.study || eventToUpdate.study 
        }
        events = events.filter(event => event.id !== id);

        events.push(updateEvent);

        fs.writeFileSync(eventsJson, JSON.stringify(events), 'utf-8');
        return true;
    } catch(error) {
        console.log(error);
        return false;
    }
}

const createEvent = (body) => {
    try {
        const newEvent = {
            id: events.length,
            date: body.date,
            title: body.title,
            starttime: body.starttime,
            endtime: body.endtime,
            description: body.description,
            sleep: body.sleep,
            workout: body.workout,
            school: body.school,
            food: body.food,
            music: body.music,
            freetime: body.freetime,
            study: body.study
        };
        events.push(newEvent);
        fs.writeFileSync(eventsJson, JSON.stringify(events), 'utf-8');
        return true;
    } catch (error) {
        console.log(error);
        return false;
    };
}
export default { findAllEvents, findEventById, createEvent, deleteEventById, updateEventById };