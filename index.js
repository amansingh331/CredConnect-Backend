import express from 'express';
import bodyParser from 'body-parser';
// import UserAuth from './Routes/UserAuth.js';
// import Home from './Routes/Home.js';
// import UserReview from './Routes/UserReview.js'
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 433;

app.use(bodyParser.json());
app.use(cors());

// app.use('/UserAuth', UserAuth);
// app.use('/UserReview', UserReview);
// app.use('/Home', Home);

app.get('/', (req, res) => {
    res.send('working perfectly!');
});



app.listen(PORT, () => console.log(`server Running on port: http://localhost:${PORT}`));
