import User from '../models/userModel';

export default class LoginController{

    /**
     * createUsers is used to register new user.
     * @param req
     * @param res
     */
    public static createUsers = async(req, res) =>{
        if(!req.body.email_id) {
            return res.status(400).send({
                message: "Email ID can not be empty"
            });
        }
        if(!req.body.mobile_no) {
            return res.status(400).send({
                message: "Mobile No can not be empty"
            });
        }
        if(!req.body.password) {
            return res.status(400).send({
                message: "Password can not be empty"
            });
        }
        if(req.body.confirm_password != req.body.password) {
            return res.status(400).send({
                message: "Password missmatch"
            });
        }
        const users = new User ({
            email_id: req.body.email_id,
            mobile_no: req.body.mobile_no,
            password: req.body.password,
            confirm_password: req.body.confirm_password
        });
        users.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Users."
            });
        });
    };

    /**
     * loginAuth is used to login a valid user.
     * @param req
     * @param res
     */
    public static loginAuth = async(req,res)=>{
        if(!req.body.email_id) {
            return res.status(400).send({
                message: "Email ID can not be empty"
            });
        }
        if(!req.body.password) {
            return res.status(400).send({
                message: "Password can not be empty"
            });
        }
        User.find({"email_id":req.body.email_id , "password":req.body.password})
        .then(users => {
            if(users == '') {
                return res.status(404).send({
                    message: "Record not found against " + req.body.email_id
                });            
            }
            res.send(users);
        }).catch(err => {
                return res.status(404).send({
                    message: "Record not found : " + err
                });                
            // return res.status(500).send({
            //     message: "Error retrieving User data" + req.body.email_id
            // });
        });
    };
}
