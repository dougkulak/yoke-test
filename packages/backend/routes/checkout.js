const express = require('express');

const router = express.Router();

module.exports = (db) => {
  router.get('/:id', (req, res, next) => {
    let productData = {};

    const productRef = db.collection('products').doc(req.params.id);

    productRef.get().then((doc) => {
      if (doc.exists) {
        productData = {
          id: doc.id,
          data: doc.data(),
        };

        if (productData.data.quantityInStock <= 0) {
          res.json({
            type: 'error',
            message: 'Product is out of stock!',
            productData: productData,
          });
          return;
        }

        let userData = {};

        const userRef = db
          .collection('users')
          .doc(process.env.FIREBASE_PRIMARY_USER_ID);

        userRef.get().then((doc) => {
          if (doc.exists) {
            userData = {
              id: doc.id,
              data: doc.data(),
            };

            const purchasePrice = productData.data.price;

            const newBalance = userData.data.accountBalance - purchasePrice;

            db.collection('orders')
              .add({
                date: new Date(),
                price: purchasePrice,
                product_id: productData.id,
                qty: 1,
                user_id: process.env.FIREBASE_PRIMARY_USER_ID,
              })
              .then((orderRef) => {
                userRef
                  .update({
                    accountBalance: newBalance,
                  })
                  .then(() => {
                    productRef
                      .update({
                        quantityInStock: productData.data.quantityInStock - 1,
                      })
                      .then(() => {
                        res.json({
                          type: 'success',
                          message: 'Purchase was successful!',
                          productData: productData,
                          userData: userData,
                          orderRef: orderRef.id,
                        });
                      })
                      .catch((error) => {
                        console.error('Error updating product: ', error);
                      });
                  })
                  .catch((error) => {
                    console.error('Error updating user: ', error);
                  });
              })
              .catch((error) => {
                console.error('Error adding order: ', error);
              });
          }
        });
      }
    });
  });

  return router;
};
