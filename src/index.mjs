import express, { response } from "express";

const app = express();

const PORT = process.env.PORT || 3000;

// these are all routes that the user will query the server to do something
// "/"=> base url so when the client accesses the base url then the server will be sending hello world
app.get("/", (request, response) => {
  response.status(201).send({ msg: "Hellow" });
});

app.get("/api/users", (request, response) => {
  response.send([
    { id: 1, userName: "Gaurav", email: "email.com" },
    { id: 1, userName: "Gaurav", email: "email.com" },
    { id: 1, userName: "Gaurav", email: "email.com" },
  ]);
});

app.listen(PORT, () => {
  console.log(`Running on ${PORT}`);
});
