let req = new  XMLHttpRequest();
req.open("GET", "https://veshakov.github.io/", false);
req.send();
console.log(req.status, req.statusText);
console.log(req.getResponseHeader("content-type"));
console.log(req.responseText);

