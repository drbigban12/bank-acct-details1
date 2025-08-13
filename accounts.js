const express = require('express');
const router = express.Router();
const accountController = require('../controllers/accountController');
const auth = require('../middleware/auth');

router.post('/', auth, accountController.createAccount);
router.get('/', auth, accountController.getAccounts);
router.delete('/:accountId', auth, accountController.deleteAccount);

module.exports = router;