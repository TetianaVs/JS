//How to avoid object mutations when copying objects?
//1. assign method (not effectibe when object has nested objest inside)

const person = {
    name: 'Bob',
    age: 25
  }
  
  const person2 = Object.assign({}, person);
  person2.age = 26;
  
  console.log (person2.age);
  console.log (person.age);

  //2. spread operator (not effectibe when object has nested objest inside)

  const work = {
    name: 'Ann',
    age: 21
  }
  
  const work2 ={ ... work };
  work2.age = 30;
  
  console.log (work2.age);
  console.log (work.age);
  
  //3. JSON.parse and JSON.stringify JSON methods (!!! effective when object has nested objest inside)
//Convert object into JSON and than convert JSON into object.
  const newAge = {
    name: 'Ann',
    age: 28
  }
  
  const newAge2 = JSON.parse (JSON.stringify (newAge));
  newAge2.age = 33;
  
  console.log (newAge2.age);
  console.log (newAge.age);
  