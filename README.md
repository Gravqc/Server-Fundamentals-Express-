# Client-Server Interaction:

- Client makes an HTTP request to the server.
- Client-side code requests data from the server-side application (Express API).
- Express API receives the request, performs business logic, retrieves/pushes data, and responds to the client.
- Example: Restaurant Scenario
  Client: Orders food.
  Server: Waiter (server) asks for the order, relays it to the kitchen (server room), and returns with the food (response).

# Route

- Define/register routes, Route can be thought of as a path in your serverapp ex:localhosttest.com/users will give users, localhosttest.com/products,etc
- Client will make requests to those routes that are defined in your server

# Requests:

- Get: When you want to query the server for some data.
  ex: // these are all routes that the user will query the server to do something
  // "/"=> base url so when the client accesses the base url then the server will be sending hello world
  app.get("/", (request, response) => {
  response.status(201).send({ msg: "Hellow" });
  });
- Post
- Delete
- Put
