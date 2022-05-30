const url = require('url');
const myUrl = new URL('http://website.com:800/hello.html?id=100&status=Active');

// Serialized URL
console.log(myUrl.href);
console.log(myUrl.toString());

// Host(root Doamain)
console.log(myUrl.host);
//Host Name (Does not get Port)
console.log(myUrl.hostname)

// Path Name
console.log(myUrl.pathname);

// Serialized querry
console.log(myUrl.search);
// Params Object
console.log(myUrl.searchParams);
// Add Params
myUrl.searchParams.append('abc','123');
console.log(myUrl.searchParams)
// Loop through Params
myUrl.searchParams.forEach((value,name)=>console.log(`${name}: ${value}`))


