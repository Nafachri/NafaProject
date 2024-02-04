// Between BE and SF

class ContactEntity {
  static getContactById = async (SF, contactId) => {
    try {
      const contactData = await SF.sobject("contact").findOne({
        Id: contactId,
      });
      return contactData;
    } catch (error) {
      throw error;
    }
  };
  static getContacts = async (SF) => {
    try {
      const contactData = await SF.sobject("contact").find();
      return contactData;
    } catch (error) {
      throw error;
    }
  };
  static createContact = async (SF, payload) => {
    try {
      const contactData = {
        Salutation: payload.salutation,
        FirstName: payload.firstname,
        LastName: payload.lastname,
        Phone: payload.phone,
        Email: payload.email,
      };
      const createContact = await SF.sobject("contact").create(contactData);
      return createContact;
    } catch (error) {
      throw error;
    }
  };
  static editContact = async (
    SF,
    // contactId,
    payload
  ) => {
    try {
      const updateData = {
        Salutation: payload.salutation,
        FirstName: payload.firstname,
        LastName: payload.lastname,
        Phone: payload.phone,
        Email: payload.email,
        Id: payload.contactId,
        // Id: contactId,
      };

      const editContact = await SF.sobject("contact").update(updateData);
      return editContact;
    } catch (error) {
      throw error;
    }
  };
  static deleteContactById = async (
    SF,
    // contactId
    payload
  ) => {
    try {
      const deleteContact = await SF.sobject("contact").delete(
        payload.contactId
      );
      return deleteContact;
    } catch (error) {
      throw error;
    }
  };
  static deleteStress = async (SF) => {
    try {
      const contactRecord = await SF.sobject("contact").find().select("Id");

      const newData = contactRecord.map((v) => {
        return v.Id;
      });

      const deleteContact = await SF.sobject("contact").delete(newData);
      return deleteContact;
    } catch (error) {
      throw new Error("Aku Udah Stress Bwang");
    }
  };
}

module.exports = ContactEntity;
