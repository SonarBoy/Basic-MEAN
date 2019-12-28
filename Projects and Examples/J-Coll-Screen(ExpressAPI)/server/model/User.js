var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');

var UserSchema = mongoose.Schema({
    username:{
        type: String,
        default: '',
        trim: true,
        required: 'username is required'
    },
    //password will be encrypted by passport local mongoose
    email:{
        type: String,
        default: '',
        trim: true,
        required: 'Email is required'
    },
    displayName:{
        type: String,
        default: '',
        trim: true,
        required: 'Display Name is required'
    },
    created:{
        type: Date,
        default: Date.now
    },
    update:{
        type: Date,
        default: Date.now
    }
},{
    collection: "PassportUsers"
});

//Configure Options for the UserSchema
var options =({
    missingPasswordError: "wrong / Missing Password"
});

//Allowing passport to plugin to the mongoose database.
UserSchema.plugin(passportLocalMongoose, options);


module.exports.User = mongoose.model('Users',UserSchema);