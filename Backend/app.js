const express = require("express");
const app = express();

const session = require("express-session");
const bodyParser = require("body-parser");
const router = require("express").Router();
const cors = require("cors");

const AuthController=require('./Authentication/authController')
const authController=new AuthController()

const SearchController=require('./Searching/searchController')
const searchController=new SearchController()

const HotelSearchController=require('./Searching/hotelSearchController')
const hotelSearchController=new HotelSearchController()

// const BookController=require('./Booking/BookController')
// const bookController=new BookController()
app.use(
    session({
        secret: "secret",
        resave: true,
        saveUninitialized: true,
    })
);
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

router.post("/register", authController.register);
router.post("/login", authController.login);
router.get("/", authController.start);

router.post("/address",searchController.address);
router.post("/hotelDetail",hotelSearchController.hotelDetail);

shortTimeRouter=(identifier)=>{
    router.get(`http://localhost:8080/verification/${identifier}`,authController.test);
}
app.use(router);

const port=process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`App listening at port : ${port}`)
})
module.exports = router;



