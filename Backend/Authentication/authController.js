const AuthRepository = require("./authRepository");
const path = require("path");
const axios = require("axios");
const authRepository = new AuthRepository();

class AuthController {
    constructor() {}
    register = async (req, res) => {
        let result = await authRepository.register(req.body);
        console.log(result, "in auth controller sign up");
        if (result.success) {
            res.status(200).json({
                success: true,
                // data:result
                //need to show that successfully registered
            });
        } else {
            switch (result.error) {
                case process.env.ERROR_EMAIL_EXISTS:
                    res.status(401).json({
                        success: false,
                    });
                    break;
            }
        }
    };
    login = async (req, res) => {
        //console.log(req.body);
        let result = await authRepository.login(req.body);
        console.log(result);
        if (result.success) {
            console.log("jhog")
            /* res.status(200).json({
              success: true,
              // token:result.token
              //will be directed to looged in page
            });*/
            res.send({
                status:"success"
            })
        } else {
            switch (result.error) {
                case process.env.process.env.ERROR_EMAIL_AND_PASSWORD_DOES_NOT_MATCH:
                    res.status(401).json({
                        success: false,
                    });
                    break;
            }
        }
    };

    start = async (req, res) => {
        res.sendFile(path.join(__dirname + "/Login.html"));
    };
}

module.exports = AuthController;
