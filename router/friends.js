const express = require('express');

const router = express.Router();

let friends = {
    "mertdemir@gamil.com": {"firstName": "Mert","lastName": "Demir","DOB":"09-11-1998"},
    "taylorswift@gamil.com":{"firstName": "Taylor","lastName": "Swift","DOB":"01-012-1997"},
    "afrasarach@gamil.com":{"firstName": "Afra","lastName": "Sarach","DOB":"21-03-1989"}
};



router.get("/",(req,res)=>{
  res.send(JSON.stringify(friends,null,4));
});


router.get("/:email",(req,res)=>{
  const email = req.params.email;
  res.send(friends[email]);

});



router.post("/",(req,res)=>{
  if (req.body.email)
  {
    friends[req.body.email] = {
      "firstName": req.body.firstName,
    };
    res.send("The user" + (' ')+ (req.body.firstName) + " Has been added!");}
});



  router.put("/:email", function (req, res) { 
    const email = req.params.email; 
    let friend = friends[email] 
    if (friend) {  
    let DOB = req.body.DOB; 
   
    
     
     if(DOB) { 
     friend["DOB"] = DOB 
     } 
     
     friends[email]=friend; 
     res.send(`Friend with the email ${email} updated.`); 
     } 
     else{ 
     res.send("Unable to find friend!"); 
     } 
     });
    




  router.delete("/:email", (req, res) => { 
     const email = req.params.email; 
     if (email){ 
     delete friends[email] 
     } 
     res.send(`Friend with the email ${email} deleted.`); 
     });
    

module.exports=router;