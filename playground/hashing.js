const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const password = '123abc!';

bcrypt.genSalt(10,(err,salt) =>{
  bcrypt.hash(password,salt, (err,hash) =>{
    console.log(hash);
  })
})

let hashedPassword = "$2a$10$KYtp441HGHg9CZpsTdJ9IuEYIGB51.Yyq/BvOoihGeGuWlxayivLu"
bcrypt.compare('123!',hashedPassword,(err,res) =>{
  console.log(res);
})

// const data = {
//   id:10
// };
// const token = jwt.sign(data,'123abc');
// console.log(token);
//  const decoded = jwt.verify(token,'123abc');
//  console.log('decoded',decoded);

// const message = 'I am user number 3';
// const hash = SHA256(message).toString();
//
// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`)
