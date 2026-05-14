const coderitUrl = "https://www.codeit.com.np/web-development/mern-stack";

const urlObject = new URL(coderitUrl);
console.log(urlObject);
console.log(urlObject.host);
console.log(urlObject.search);
console.log(urlObject.searchParams);

new params = URLSearchParams(urlObject.search);
console.log(params);

params.set("time", "8pm");
console.log(params);

params.set("duration", "2months");
console.log(params);