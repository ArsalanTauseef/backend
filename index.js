import express from "express";
import cors from "cors";
import {
  getData,
  addContact,
  updateContacts,
  deleteContact,
} from "./funcs/funcs.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
const port = 4000;

app.get("/", (req, res) => {
  res.send("Hi, welcome to my backend server deployed in vercel.");
});

app.get("/api/mycontacts", (req, res) => {
  const arrayOfContacts = getData();
  res.send(arrayOfContacts);
});

app.post("/api/addcontact", (req, res) => {
  const data = req.body;
  const contactCreated = addContact(data);
  res.send({
    message: "New p added",
    contacts: contactCreated,
  });
});

app.patch("/api/updatecontact/:id", (req, res) => {
  const id = req.params.id;
  const data = req.body;
  data.id = id;
  const updatedContactDetails = updateContacts(data);
  if (updatedContactDetails == null) {
    res.status(400).send("Product not found");
    return;
  }

  res.send({
    message: "Update successful",
    contacts: updatedContactDetails,
  });
});

app.delete("/api/deletecontact/:id", (req, res) => {
  const id = req.params.id;
  // Create a contact object with the id
  const paramContact = { id: id };
  console.log(paramContact);
  // Call the deleteContact function
  const deletedContact = deleteContact(paramContact);
  console.log(deletedContact);
  if (!deletedContact) {
    res.status(404).send("Contact not found");
    return;
  }

  res.send({
    message: "Contact deleted successfully",
    contact: deletedContact,
  });
});

app.listen(port, () => {
  console.log(
    `The server is running on http://localhost:${port}/api/mycontacts`
  );
});
