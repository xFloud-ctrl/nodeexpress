import 'dotenv/config';
import bodyParser from 'body-parser';
import express from 'express';
import mongoose from 'mongoose';
import authRoutes from './routes/authRoutes.mjs';
import cookieParser from 'cookie-parser';
import {requireAuth,checkUser} from './middleware/authMiddleware.mjs';
const port = process.env.PORT;
const app = express();

// middleware

app.use(express.static('public'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// view engine
app.set('view engine', 'ejs');
const port = process.env.PORT || 3001;
// database connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
  .then((result) => console.log('Connected to MongoDB'))
 
  .catch((err) => console.log(err));

  app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});


// routes

app.get('/set-cookies', (req, res) => {
  res.cookie('newUser', false);
  res.cookie('isEmployee', true, { maxAge: 1000 * 60 * 60 * 24, httpOnly: true });
});
app.get('/read-cookies', (req, res) => {
 const cookies = req.cookies;
 console.log(cookies);
 res.json(cookies);
});
app.get('*', checkUser);
app.get('/',checkUser, (req, res) => res.render('home'));
app.get('/smoothies',checkUser, (req, res) => res.render('smoothies'));
app.use(authRoutes);