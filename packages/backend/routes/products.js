const express = require('express');

const router = express.Router();

module.exports = (db) => {
  router.get('/', (req, res, next) => {
    const data = [];

    db.collection('products').get().then((querySnapshot) => {
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
}