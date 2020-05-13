const express = require('express');
const router = express.Router();

router.get('/version', function (req, res) {
    res.json({
        app: {
            name: 'Slack App Starter',
            description: 'Slack App Starter',
            version: '1.0.0'
        }
    });
});




module.exports = router;
