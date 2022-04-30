// Destructuring assignment. Object

const userProfile = {
    name: 'Bogdan',
    commentsQty: 23,
    hasSignedAggreement: false,
 }

const { name, commentsQty } = userProfile;
const { hasSignedAggreement } = userProfile;

 console.log (name);
 console.log (commentsQty);


//Destructuring assignment. Array

 const fruits = ['Apple', 'Banana'];
 const [fruitOne, fruitTwo] = fruits;

 console.log(fruitOne);
 console.log(fruitTwo);

 // Destructuring assignment. Function

 const userProfile = {
     name: 'Bogdan',
     commentsQty: 23,
     hasSignedAgreement: false,
 }

 const userInfo = ({ name, commentsQty }) => {
     if (!commentsQty) {
         return `User ${name} has no comments`
     }
     return `User ${name} has ${commentsQty} comments`
 }
 userInfo(userProfile)



