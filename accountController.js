const Account = require('../models/Account');

exports.createAccount = async (req, res) => {
  const { type } = req.body;
  try {
    const account = new Account({ userId: req.user.id, type });
    await account.save();
    res.status(201).json(account);
  } catch (err) {
    res.status(400).json({ error: 'Account creation failed', details: err });
  }
};

exports.getAccounts = async (req, res) => {
  const accounts = await Account.find({ userId: req.user.id });
  res.json(accounts);
};

exports.deleteAccount = async (req, res) => {
  const { accountId } = req.params;
  await Account.deleteOne({ _id: accountId, userId: req.user.id });
  res.json({ message: 'Account deleted' });
};