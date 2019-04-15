/**
 * Created by sbsch_ham on 2016-11-11.
 */
'use strict';

var express = require('express');
var router = express.Router();

router.get('/44', function(req,res){
    res.render('fake',{
        helpers: {
            data: function () { return 'upppppppppppppp!'; }
        }
    });
});

module.exports = router;