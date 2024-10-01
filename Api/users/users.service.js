const pool = require("../../config/");

module.exports = {
    create : (data, callBack) =>{
        pool.query (
            'insert into registration(firstName, lastName, gender, email, password, number)value (?,?,?,?,?,?)',
            [

                data.first_name,
                data.last_name,
                data.gender,
                data.email,
                data.password,
                data.number

            ], 
            (error, results, fields) => {
                if(error) {
                  return  callBack(error);
                }
                return callBack(null, results)
            }
          
            
        );
    }
};
    