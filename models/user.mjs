import mongoose from "mongoose";
import isEmail from "validator/lib/isEmail.js";
import bcrypt from "bcrypt";
const userSchema = new mongoose.Schema({        
    email: {
        type: String,
        required: [true, 'Email is required'],             
        unique: [true, 'Email must be unique'],
        lowercase: true,
        validate: [isEmail, 'Please enter a valid email']


    },
    password: {     
        type: String,
        required: [true, 'Password is required'],
        minlength: [6, 'Password must be at least 6 characters long']
    }
});

userSchema.post('save',     (doc, next) => {       
console.log('New user was created and saved', doc);
next();
});

userSchema.pre('save', async function() {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
});

userSchema.statics.login = async function(email, password) {
    const user = await this.findOne({ email });
    if (user) {
        const auth = await bcrypt.compare(password, user.password);
        if (auth) {
            return user;
        }   
        throw Error('Incorrect password');
    }
    throw Error('Incorrect email');
}

const User = mongoose.model('users', userSchema);

export default User;      
    