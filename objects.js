// //declaring objects

// const newUser = Object(); // this is singleton object

// newUser.id=23232;
// newUser.name="Mukul";
// newUser.age=23;
// // console.log(newUser);

// // const newUserr={

// // } // this is not singleton...multiton

// const newObject = {
//     email: "kgnefk@gmail.com",
//     firstname:{
//         username:"mmmmmm",
//         id:"90ab"
//     },

//     phone: 9090909009090


// }

// console.log(newObject.firstname.username);



const obj1 = {
    1:"a" , 2: "b", 3: "c"
}

const obj2 = {
    4:"d",5: "e",6:"f"
}

// const obj3 = Object.assign({}, obj1, obj2);   used in production grade applications
const obj3 = {...obj1, ...obj2}; // used in basic programming
// 


