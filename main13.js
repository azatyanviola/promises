'use strict'

// const promise = new Promise((resolve, reject) =>{
//     setTimeout(() => resolve('done'), 1000);
// });

// promise
// .then(
//     result => console.log(result)
//     error => console.log(error)
// );

// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => reject(new Error('Ooops'), 1000));
// });

// promise
// .then(
//     result => console.log(result),
//     error => console.log(error)
// );

// const delay = function (ms) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Done"), ms);
//   }).then((result) => console.log(result));
// };

// delay(2000);



//*********************** */

// function loadJson(url) {
//   return fetch(url)
//     .then(response => {
//       if (response.status === 200) {
//         return response.json();
//       } else {
//         throw new Error(response.status);
//       }
//     })
// }

// loadJson('no-such-user.json') // (3)
//   .catch(console.log); // Error: 404

  // change the code to async/await
//   async function loadJson(url){
//     const response = await fetch(url);

//     if(response.status === 200){
//       const json = await response.json();
//       return json;
//     }else{

//       throw new Error (response.status);
//     }
//   }

//   loadJson('no-such-user.json') 
//   .catch(console.log);
// //************************* */

// class HttpError extends Error {
//   constructor(response) {
//     super(`${response.status} for ${response.url}`);
//     this.name = 'HttpError';
//     this.response = response;
//   }
// }

// async function loadJson(url) {
//   let response = await fetch(url);
//   if (response.status == 200) {
//     return response.json();
//   } else {
//     throw new HttpError(response);
//   }
// }


// async function demoGithubUser() {

//   const user;
//   while(true) {
//     let name = prompt('Enter the login');

//     try {
//       user = await loadJson(`https://api.github.com/users/${name}`);
//       break; // there is no error and will be break
//     } catch(err) {
//       if (err instanceof HttpError && err.response.status == 404) {
      
//         console.log('There is no user, enter again');
//       } else {
      
//         throw err;
//       }
//     }
//   }


//   console.log(`The name: ${user.name}.`);
//   return user;
// }

// demoGithubUser();
//************** */


// async function wait(){
//    await new Promise(resolve => {
//     setTimeout(resolve, 1000)
//   });
//     return 10;
// }

// function f(){

//   wait()
//   .then(
//     result => console.log(result)
//   )
// }

// f();

//****************** */

//what will be the output?

// function func1() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve(2), 1000);
//   });
// }
// function func2(val) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve(val + 3), 1000);
//   });
// }
// function func3(val) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve(val + 4), 1000);
//   });
// }

// func1()
// 	.then((result) => func2(result))
//   .catch((error) => 5)
//   .then((result) => {
//     console.log(result); // 5
//   	throw new Error("oops");
//    })
//   .then((result) => func3(result))
//   .catch((error) => func3(2)) 
//   .then((result) => func2(result))
//   .then((result) => console.log(result)); // 9

  //*********************** */

  // What will be the output?



//   function job(state) {
//     return new Promise(function(resolve, reject) {
//         if (state) {
//             resolve('success');
//         } else {
//             reject('error');
//         }
//     });
// }

// job(true).then(function(data) {
//     console.log(data); // success
//     return job(true);
// }).then(function(data) {
//     if (data !== 'victory') {
//         throw new Error('Something is wrong');
//     }
//     return job(true);
// }).then(function(data) {
//     console.log(data);
// }).catch(function(error) {
//     console.log(error); // Something is wrong
//     return job(false);
// }).then(function(data) {
//     console.log(data);
//     return job(true);
// }).catch(function(error) {
//     console.log(error); // error
//     return 'Error caught';
// }).then(function(data) {
//     console.log(data); // Error caught
//     return new Error('test');
// }).then(function(data) {
//     console.log('Success:', data.message); // Success:,  test
// }).catch(function(data) {
//     console.log('Error:', data.message);
// });

//*************************** */

Promise.all([
 fetch('https://api.github.com/users/iliakan'), 
 fetch('https://api.github.com/users/remy'),
 fetch('https://api.github.com/users/jeresig')
]).then((streams) => {
  return Promise.all(streams.map((stream) => stream.json()));
}).then((results) => {
  console.log(JSON.stringify(results, null, 2));
}).catch((error) => {
  console.log(error);
});