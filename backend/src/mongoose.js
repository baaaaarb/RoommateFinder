const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://admin:rfinder@cluster0-mbr1a.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: false,
    useFindAndModify: false
})

const User = mongoose.model('User',{
    email: {
        type: String
    },
    username: {
        type: String
    },
    password:{
        type: String
    }
})

const barbara = new User({
    username:'baarb',
    email:'baarb@gmail.com',
    password:'barbara123'
})

barbara.save().then(()=>{
        console.log(barbara)
    }).catch((error)=>{
        console.log('Error!', error)
    })