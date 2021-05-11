import express from "express";
import eventController from "./controllers/eventController.js";

const app = express();
const PORT = 3008;

app.use(express.urlencoded({ extended: false }));
app.use(express.json({ extended: false }));
app.use(express.static('./public'));

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: './'});
});

app.get('/events', eventController.getAllEvents);

app.get('/events/:id', eventController.getEventById);

app.post('/create', eventController.createEvent);

app.get('/delete/:id', eventController.removeEventById);

app.post('/update/:id', eventController.updateEvent);

app.listen(PORT, () => {
    console.log('im listening on port', PORT);
});