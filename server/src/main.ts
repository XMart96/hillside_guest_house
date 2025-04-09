import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

//app.use(express.static('../client/build'));

let data = {
    checkIn: '',
    checkOut: '',
    adult: '2',
};

app.get('/getCalendarData', (req, res) => {
    console.log('GET /getCalendarData received');
    res.json(data);
});

app.post('/postCalendarData', (req, res) => {
    console.log(req.body);
    data = req.body;
    res.json({ success: true, message: 'Данные сохранены!' });
});

app.listen(process.env.PORT);
