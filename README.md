<div align="center">

![YOKE](https://assets.website-files.com/61962213743dcc1668257079/61963015ab8ee97d1ce4d384_main-logo.svg)

  <h1 align="center">Test Project</h1>
  <p align="center">
by Doug Kulak
  </p>
</div>

## Introduction

A simple express Node.js and React app for "a popular grocery store brand" that aims to demonstrate competence as part of the YOKE hiring process. 


## Requirements


### Node.js App 

The Node.js App should:

- Use Javascript with Node.js
- Use Firebase’s Firestore and Functions (Or other NoSQL services)
- Use appropriate NPM libraries deemed necessary
- DO NOT use middleware that authorizes users who call the endpoint

In addition, the Node.js App should contain three API endpoints:

- Allow a user to purchase a product model, which should deduct the price from
  the user’s balance and save the purchase receipt for the user to view later. If the
  product is out of stock, however, the purchase should not occur and an error
  should be returned.
- Allow a user to view a product model’s variables
- Allow a user to see their user model
    - This includes receipts from their previous purchases
  
### React App 

The React App should:

- Interact with the Nodejs app developed with the requirements outlined above. 
- There should be at least two pages that:
    - (Required) Displays all products
    - (Required) Shows user info
    - (Bonus) Allows user to purchase the product with a button next to the product
    

### Models

Sample models are provided below, and can be modified see fit.

**User Model**
- Name: String
- Email: String
- Account balance: Int -> 500
- isMember: Bool -> True

**Product Model**
- Product Name: String -> Toilet Paper
- Price: Double -> 2.50
- quantityInStock: Int -> 30


## Links

- [Original YOKE Job Listing](https://yoketeam.notion.site/Senior-Full-Stack-Web3-Engineer-fdcc99cdb19047299e465066a1c8de6e)
- [Public Issue Tracker](https://github.com/dougkulak/yoke-test/issues)

## License
Distributed under the [MIT](./LICENSE) license.