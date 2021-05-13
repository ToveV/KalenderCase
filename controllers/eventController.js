import eventModel from '../models/eventModels.js';
const getAllEvents = (req, res) => {
    const events = eventModel.findAllEvents();
    res.send({
        data: events
    });
}

const updateEvent = (req, res) => {
    const { id } = req.params;
    const { body } = req;
    const success = eventModel.updateEventById(id, body);
    if (success) {
        res.redirect('/');
    }
    else {
        res.status(400).json({
            message: "oh no, broke!"
        });
    }
}
const removeEventById = (req, res) => {
    const id = req.params.id;
    eventModel.deleteEventById(parseInt(id));
    console.log(id, "ok");
    res.redirect('/');
}
const getEventById = (req, res) => {
    const id = req.params.id;
    const event = eventModel.findEventById(id);
    if (!event) {
        res.status(404).send({
            message: "where it is? :c"
        });
    }
    else {
        res.send({
            data: event
        });
    }
};
const createEvent = (req, res) => {
    console.log('create');
    const body = req.body;
    const success = eventModel.createEvent(body);
    if (success) {
        res.redirect('/');
    }
    else {
        res.status(400).json({
            message: "event failed to create"
        })
    };
    console.log(body);
}
export default {
    getAllEvents,
    getEventById,
    createEvent,
    removeEventById,
    updateEvent,
};