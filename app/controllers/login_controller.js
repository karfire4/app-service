const User = require('../models/login_model.js');

exports.createusers = (req, res) => {
    // Validate request
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

    // Create a Note
    const users = new User({
      //  title: req.body.title || "Untitled Note", 
        email_id: req.body.email_id,
        mobile_no: req.body.mobile_no,
        password: req.body.password,
        confirm_password: req.body.confirm_password
    });

    // Save Note in the database
    users.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Users."
        });
    });
};



// Find a single note with a noteId
exports.loginauth = (req, res) => {

    
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
   // User.find({}, { projection: { _id: 0, email_id: 1, password: 1 } }).toArray(function(err, result) { 

    User.find({"email_id":req.body.email_id , "password":req.body.password})
    .then(users => {
       
        if(users == '') {
           // console.log('USERS'+users);
            return res.status(404).send({
                message: "Record not found against " + req.body.email_id
            });            
        }
        res.send(users);
    }).catch(err => {
        //console.log('Error'+err);
      //  if(err.kind === '') {
            return res.status(404).send({
                message: "Record not found : " + err
            });                
      //  }
        return res.status(500).send({
            message: "Error retrieving User data" + req.body.email_id
        });
    });
   // console.log('USERS222'+users);
};