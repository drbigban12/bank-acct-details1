const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController');
const auth = require('../middleware/auth');

router.post('/:accountId/deposit', auth, transactionController.deposit);
router.post('/:accountId/withdraw', auth, transactionController.withdraw);
router.post('/transfer', auth, transactionController.transfer);

module.exports = router;