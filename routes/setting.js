/**
 * Created by sbsch_ham on 2016-11-10.
 */
'use strict';
module.exports = function(app) {
    app.use('/', require('../logic/Fake'));
};