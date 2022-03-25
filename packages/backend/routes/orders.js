const express = require('express');

const router = express.Router();

module.exports = (db) => {
  router.get('/', (req, res, next) => {
    const data = [];

    db.collection('orders')
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          data.push({
            id: doc.id,
            data: doc.data(),
          });
        });
        res.json(data);
      });
  });

  router.get('/:id', (req, res, next) => {
    const data = [];

    db.collection('orders')
      .where('user_id', '==', req.params.id)
      .orderBy('date', 'desc')
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          data.push({
            id: doc.id,
            data: doc.data(),
          });
        });
        res.json(data);
      });
  });

  return router;
};
