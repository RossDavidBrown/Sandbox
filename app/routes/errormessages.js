const express = require('express')
const router = express.Router()

// copy the const name and the file path to new version
router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})



// ROUTES FOR THE LETTER GENERATOR

router.post('/errormessages/radios', function(req, res) {
  if (req.body['where-do-you-live'] === 'england') {
    res.redirect('checkboxes');
  } if (req.body['where-do-you-live'] === 'scotland') {
    res.redirect('checkboxes');
  } if (req.body['where-do-you-live'] === 'wales') {
    res.redirect('checkboxes');
  } if (req.body['where-do-you-live'] === 'northern-ireland') {
    res.redirect('checkboxes');
  } else {
    res.redirect('radios-error');
  }
});


router.post('/errormessages/radios-error', function(req, res) {
  if (req.body['where-do-you-live'] === 'england') {
    res.redirect('checkboxes');
  } if (req.body['where-do-you-live'] === 'scotland') {
    res.redirect('checkboxes');
  } if (req.body['where-do-you-live'] === 'wales') {
    res.redirect('checkboxes');
  } if (req.body['where-do-you-live'] === 'northern-ireland') {
    res.redirect('checkboxes');
  } else {
    res.redirect('radios-error');
  }
});

router.post('/errormessages/checkboxes', function(req, res) {
  if (req.body['waste'] == 'carcasses') {
    res.redirect('date');
  } if (req.body['waste'] == 'mines') {
    res.redirect('date');
  } if (req.body['waste'] == 'farm') {
    res.redirect('date');
  } else {
    res.redirect('checkboxes-error');
  }
});


router.post('/errormessages/checkboxes-error', function(req, res) {
  if (req.body['waste'] == 'carcasses') {
    res.redirect('date');
  } if (req.body['waste'] == 'mines') {
    res.redirect('date');
  } if (req.body['waste'] == 'farm') {
    res.redirect('date');
  } else {
    res.redirect('checkboxes-error');
  }
});


router.post('/errormessages/checkboxes', (req, res) => {
  res.redirect('/errormessages/date')
})
;


router.post('/errormessages/date', (req, res) => {
  res.redirect('/errormessages/text')
})
;


router.post('/errormessages/text', (req, res) => {
  res.redirect('/errormessages/radios')
})
;


// router.post('/lettergenerator/where-did-the-incident-take-place', function(req, res) {
//   if (req.body['where-did-the-incident-take-place'] === 'written') {
//    res.redirect('decide-action');
//  } if (req.body['where-did-the-incident-take-place'] === 'uc-diary') {
//    res.redirect('decide-action');
//  } if (req.body['where-did-the-incident-take-place'] === 'phone') {
//    res.redirect('what-happened-phone');
//  } else {
//    res.redirect('what-happened');
//  }
// });


module.exports = router
