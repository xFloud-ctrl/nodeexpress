import User from '../models/шser.mjs';
import jwt from 'jsonwebtoken';

const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: maxAge
    });
}   


export const signup_get = (req, res) => {
    res.render('signup');
};

const handleErrors = (err) => {
    console.log(err.message, err.code);
    let errors = { email: '', password: '' };
    
    if (err.message === 'Incorrect email') {
        errors.email = 'That email is not registered';
    } 
    if (err.message === 'Incorrect password') {
        errors.password = 'That password is incorrect';
    }
    if (err.message.includes('users validation failed')) {
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message;
        });
    }   
    return errors;
};
export const signup_post = async (req, res) => {
    const { email, password } = req.body;
    console.log(email, password);
    
    try {
        const user = await User.create({ email, password })
        const token = createToken(user._id);
        res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
        res.status(201).json({ User: user._id });
        

    } catch (err) {
        const errors =handleErrors(err);
        res.status(400).json({ errors });
    }
};
export const login_get = (req, res) => {
    res.render('login');
};
         
export const login_post = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);
    res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
    return res.status(200).json({ User: user._id });
  } catch (err) {
    const errors = handleErrors(err);
    return res.status(400).json({ errors });
  }
};
 export const logout_get = (req, res) => {
    res.cookie('jwt', '', { maxAge: 1 });
    res.redirect('/');
};