import express from 'express';
import bodyParser from 'body-parser';
// import UserAuth from './Routes/UserAuth.js';
// import Home from './Routes/Home.js';
// import UserReview from './Routes/UserReview.js'

const app = express();
const PORT = 3001;

app.use(bodyParser.json());

// app.use('/UserAuth', UserAuth);
// app.use('/UserReview', UserReview);
// app.use('/Home', Home);

app.get('/', (req, res) => {
    res.send('working perfectly!');
});



app.listen(PORT, () => console.log(`server Running on port: http://localhost:${PORT}`));
