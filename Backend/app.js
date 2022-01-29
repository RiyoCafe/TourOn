const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser=require('body-parser')
const authController=require('./Authentication/authController')
const Authcontroller=new authController()
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// const apiBase="/datatex"
// app.use(apiBase+'/auth',authRouter)


// app.post('/test',(req,res)=>
// {
//     console.log(req.body);
//     res.send("success");
// });
app.post('/test',Authcontroller.login);



const port=process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`App listening at port : ${port}`)
})

