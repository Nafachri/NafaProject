const ContactRouter = require("express").Router();
const salesforce = require("../middlewares/salesforce");
const ContactControllers = require("../controllers/contact");

ContactRouter.get("/", salesforce, ContactControllers.getContacts);
ContactRouter.get("/:contactId", salesforce, ContactControllers.getContactById);
ContactRouter.post("/create", salesforce, ContactControllers.createContact);
ContactRouter.patch("/edit", salesforce, ContactControllers.editContact);
ContactRouter.delete(
  "/delete",
  salesforce,
  ContactControllers.deleteContactById
);

// Danger Danger
ContactRouter.delete(
  "/delete-stress",
  salesforce,
  ContactControllers.deleteAllContact
);

// Second Choice
// ContactRouter.patch("/edit/:contactId", salesforce, ContactControllers.editContact);
// ContactRouter.patch(
//     "/delete/:contactId",
//     salesforce,
//     ContactControllers.deleteContactById
//   );

module.exports = ContactRouter;
