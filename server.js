console.log('boo');

import express from "express";
import eventController from "./controllers/eventController.js";

import path from "path";

const app = express();
const PORT = 3008;

app.use(express.urlencoded());
app.use(express.json());
app.use(express.static(path.resolve("./KalenderCase")));

app.get('/events', eventController.getAllEvents);

app.get('/events/:id', eventController.getEventById);

app.post('/create', eventController.createEvent);

app.get('/delete/:id', eventController.removeEventById);

app.post('/update/:id', eventController.updateEvent);

app.listen(PORT, () => {
    console.log('im listening on port', PORT);
});