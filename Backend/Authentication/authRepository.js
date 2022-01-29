const Repository = require("./connection");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const tokenExpiryDuration = 86400;

class AuthRepository extends Repository {
    constructor() {
        super();
    }

    register = async (data) => {
        /// check for unique email

        const query1 = "select * from customer where mail = :0";
        const params1 = [data.mail];
        const result1 = await this.sqlQuery(query1, params1);
        console.log(result1, "in sign in in auth repository");
        if (result1.data.length > 0) {
            return {
                success: false,
                error: process.env.ERROR_EMAIL_EXISTS,
            };
        }

        const query =
            "insert into customer (name,city,streetname,country,phonenumber,mail,password) values (:0,:1,:2,:3,:4,:5,:6,:7)";
        const params = [
            data.name,
            data.city,
            data.street_name,
            data.country,
            data.phone_number,
            data.mail,
            data.password,
        ];
        const result = await this.sqlQuery(query, params);
        console.log(result, "in sign up in auth repository cls");
        return result;
    };

    login = async (data) => {
        //console.log(data);
        const query = "select * from customer where mail = :0 and password= :1";
        const params = [data.mail, data.password];
        const result = await this.sqlQuery(query, params);
        console.log(result, "in sign in in auth repository");
        if (result.data.length == 0) {
            return {
                success: false,
                error: process.env.ERROR_EMAIL_AND_PASSWORD_DOES_NOT_MATCH,
            };
        }
        else
            return {
                success: true,
            };
    };
}
module.exports = AuthRepository;
