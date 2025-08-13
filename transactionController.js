const Account = require('../models/Account');

exports.deposit = async (req, res) => {
  const { accountId } = req.params;
  const { amount } = req.body;
  const account = await Account.findOne({ _id: accountId, userId: req.user.id });
  if (!account) return res.status(404).json({ error: 'Account not found' });
  account.balance += amount;
  await account.save();
  res.json(account);
};

exports.withdraw = async (req, res) => {
  const { accountId } = req.params;
  const { amount } = req.body;
  const account = await Account.findOne({ _id: accountId, userId: req.user.id });
  if (!account || account.balance < amount) return res.status(400).json({ error: 'Insufficient funds' });
  account.balance -= amount;
  await account.save();
  res.json(account);
};

exports.transfer = async (req, res) => {
  const { fromId, toId, amount } = req.body;
  const fromAcc = await Account.findOne({ _id: fromId, userId: req.user.id });
  const toAcc = await Account.findOne({ _id: toId });
  if (!fromAcc || !toAcc || fromAcc.balance < amount) return res.status(400).json({ error: 'Transfer failed' });
  fromAcc.balance -= amount;
  toAcc.balance += amount;
  await fromAcc.save();
  await toAcc.save();
  res.json({ fromAcc, toAcc });
};