import http from "http";

const server = http.createServer((request, response) => {
  //     console.log(request.method);
  //     const user = {
  //         name = "Ram",
  //         age = 20,
  //         address = "KTM",
  //     };
  //     response.writeHead(200, {"content-type": "application/json"});
  // //   response.end("<h1>Hello World</h1>");
  // response.end(JSON.stringify(user));

  switch (request.method) {
    case "GET":
      switch (request.url) {
        case "/":
          return response.end("Home page");

        case "/About":
          return response.end("About page");

        case "/contact":
          return response.end("contact page");

        default:
          response.writeHead(404);
          return response.end("Page not Found");
      }

    case "POST":
      response.end("Hello post");
      break;

    default:
      response.writeHead(405, { "content-type": "application/json" });
      response.end("Method not allowed");
      break;
  }
});

server.listen(5000, () => {
  console.log("Server running at port 5000");
});
