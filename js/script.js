// 1
let person = {
    firstName : "John",
    lastName  : "Doe",
    age     : 50,
    eyeColor  : "blue"
  };
  
console.log(person.firstName + " " + person.lastName);


// 2

let cars = {
    company: "Hyundai",
    model: "verna",
    color: "white",
    type: "sedan",
    fuel: "petrol"
}

console.log(cars.company);

// 3

let bikes = {
    company: "Yamaha",
    model: "r15",
    color: "blue",
    type: "sports",
    fuel: "petrol",
    companyModel : function() {
        return this.company + " " + this.model;
    }
};

console.log(function(companyModel));



