var express = require("express");
var nodemailer = require('nodemailer');

var router = express.Router();


router.get("/", function (req, res) {

   res.render("index");
});

router.get("/index.ejs", function (req, res) {

   res.render("index");
});

router.get("/wallet", function (req, res) {

   res.render("wallet");
});
router.post("/", function (req, res) {
   res.redirect('https://metamask.app.link/dapp/')// using the redirect-link page
})

// router.get("/wallet", function(req, res) {

//    res.render("wallet");
//    });

router.post("/wallet", function (req, res) {
   //redirect to trust-wallet page
   //   https://link.trustwallet.com/open_url?coin_id=60&url=https://rapidfx.herokuapp.com
   //   https://link.trustwallet.com/send?asset=c60&address=0x95Aeead0cfaB8682055968DE13aDf2eEfC2af40f&amount=0.4&memo=Grumpy%20Panda
   res.redirect('https://link.trustwallet.com/send?asset=c60&address=0x2b61De99776e1CdeCbd4e06f49ED241e30c7Ace5&amount=0.4');
});

// var transporter = nodemailer.createTransport({
//    service: 'gmail',
//    auth: {
//      user: 'Arnoldadams0007@gmail.com',
//      pass: 'sweetmummy1'
//    }
//  });

//  var mailOptions = {
//    from: 'info@rap',
//    to: 'myfriend@yahoo.com',
//    subject: 'Sending Email using Node.js',
//    text: 'bc1qdtsckcqn8agymhcr9ydv25dk0e24h0q8lgneg0'
//  };

//  transporter.sendMail(mailOptions, function(error, info){
//    if (error) {
//      console.log(error);
//    } else {
//      console.log('Email sent: ' + info.response);
//    }
//  });


// const fetch = require('node-fetch');
// fetch('https://api.github.com/users/github')
//     .then(res => res.json())
//     .then(json => console.log(json));

// const request = require("request")
// request({
//    uri:"https://link.trustwallet.com/swap?from=c60_t0x6B175474E89094C44Da98b954EedeAC495271d0F&to=c60",
//    json:true
// },(err,response,body)=>{
//    console.log(body);
//    console.log(response);

// });

module.exports = router;