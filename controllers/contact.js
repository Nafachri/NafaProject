// Between BE and FE
const ContactEntity = require("../entities/contact");

class ContactControllers {
  static getContactById = async (req, res, next) => {
    try {
      const { contactId } = req.params;

      const contactData = await ContactEntity.getContactById(req.SF, contactId);

      res.status(200).json({
        status: "success",
        message: "success get contact by id",
        data: contactData,
      });
    } catch (error) {
      next(error);
    }
  };
  static getContacts = async (req, res, next) => {
    try {
      const contactData = await ContactEntity.getContacts(req.SF);
      res.status(200).json({
        status: "success",
        message: "success get all contacts",
        data: contactData,
      });
    } catch (error) {
      next(error);
    }
  };
  static createContact = async (req, res, next) => {
    try {
      const payload = {
        salutation: req.body.salutation,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        phone: req.body.phone,
        email: req.body.email,
      };
      const contactData = await ContactEntity.createContact(req.SF, payload);
      res.status(201).json({
        status: "success",
        message: "success created contact",
        data: contactData,
      });
    } catch (error) {
      next(error);
    }
  };
  static editContact = async (req, res, next) => {
    try {
      // const { contactId } = req.params;

      const payload = {
        salutation: req.body.salutation,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        phone: req.body.phone,
        email: req.body.email,
        contactId: req.body.contactId,
      };
      const contactData = await ContactEntity.editContact(
        req.SF,
        // contactId,
        payload
      );

      res.status(200).json({
        status: "success",
        message: "success updated data",
        data: contactData,
      });
    } catch (error) {
      next(error);
    }
  };
  static deleteContactById = async (req, res, next) => {
    try {
      // const {contactId} = req.params
      const payload = {
        contactId: req.body.contactId,
      };
      const contactData = await ContactEntity.deleteContactById(
        req.SF,
        payload
      );

      res.status(204).json({
        status: "success",
        message: "success deleting contact by id",
        data: contactData,
      });
    } catch (error) {
      next(error);
    }
  };
  static deleteAllContact = async (req, res, next) => {
    try {
      const contactData = await ContactEntity.deleteStress(req.SF);
      res.status(204).json({
        status: "success",
        message: "success deleting all contact data",
        data: contactData,
      });
    } catch (error) {
      next(error);
    }
  };
}

module.exports = ContactControllers;
