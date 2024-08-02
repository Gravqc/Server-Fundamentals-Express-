# Client-Server Interaction:

- Client makes an HTTP request to the server.
- Client-side code requests data from the server-side application (Express API).
- Express API receives the request, performs business logic, retrieves/pushes data, and responds to the client.
- Example: Restaurant Scenario
  Client: Orders food.
  Server: Waiter (server) asks for the order, relays it to the kitchen (server room), and returns with the food (response).

# Route

- Routing refers to how an application’s endpoints (URIs) respond to client requests.
- Client will make requests to those routes that are defined in your server

# Get Requests:

When you want to query the server for some data.

- The "/"
  app.get("/", (request, response) => {
  response.status(201).send({ msg: "Message" });
  });

# Route Params:

Route parameters are named URL segments that are used to capture the values specified at their position in the URL. The captured values are populated in the req.params object, with the name of the route parameter specified in the path as their respective keys.

- ex: localhost/api/users/4; 4 being the route param

# Query Params:

- Extra bits at the end of a URL (e.g., form inputs, search bar)
- ex: localhost/products?key=value&key2=value2
