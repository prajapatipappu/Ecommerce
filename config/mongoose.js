const mongoose=require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/ecommerce')
const db=mongoose.connection;
db.on('err',console.error.bind(console,'err to connecting'));
db.once('open',function(){
    console.log('sucessfully  connected to db')
})
module.exports=db