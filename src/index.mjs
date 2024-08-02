import express, { response } from "express";

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

const users = [
  { id: 1, userName: "Gaurav", email: "email.com" },
  { id: 2, userName: "Gaurav", email: "email.com" },
  { id: 3, userName: "Gaurav", email: "email.com" },
];

//GET REQUEST

// these are all routes that the user will query the server to do something
// "/"=> base url so when the client accesses the base url then the server will be sending hello world
app.get("/", (request, response) => {
  response.status(201).send({ msg: "Hellow" });
});

app.get("/api/users", (request, response) => {
  response.send(users);
});
// create a get request that will send that particular user also handle potential errors

app.get("/api/users/:id", (request, response) => {
  const parsedId = parseInt(request.params.id);
  if (isNaN(parsedId)) {
    return response.status(400).send({ msg: "invalid id you put" });
  }
  const finduser = users.find((user) => user.id === parsedId);
  if (!finduser) return response.sendStatus(404);
  return response.send(finduser);
});

app.get("/api/products", (request, response) => {
  response.status(202).send([
    {
      id: 1,
      name: "Hello world",
    },
  ]);
});

// POST REQUEST
//can reuse path when the type of request is different
app.post("/api/users", (request, response) => {
  const { body } = request;
  console.log(request.body);
  const newUser = { id: users[users.length - 1].id + 1, ...body };
  users.push(newUser);
  return response.status(200).send(users);
});

//PUT REQUEST
app.put("/api/users/:id", (request, response) => {
  const {
    body,
    params: { id },
  } = request;
  const parsedId = parseInt(id);
  if (isNaN(parsedId)) return response.sendStatus(400);

  const findUserIndex = users.findIndex((user) => user.id === parsedId);

  if (findUserIndex === -1) return response.sendStatus(404);

  users[findUserIndex] = { id: parsedId, ...body };
  return response.sendStatus(200);
});

// PATCH REQUEST
app.patch("/api/users/:id", (request, response) => {
  const {
    body,
    params: { id },
  } = request;
  const parsedId = parseInt(id);
  if (isNaN(parsedId)) return response.sendStatus(400);

  const findUserIndex = users.findIndex((user) => user.id === parsedId);

  if (findUserIndex === -1) return response.sendStatus(404);

  users[findUserIndex] = { ...users[findUserIndex], ...body };
});

app.listen(PORT, () => {
  console.log(`Running on ${PORT}`);
});
