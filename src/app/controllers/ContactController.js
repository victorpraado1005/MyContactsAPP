const ContactsRepository = require('../repositories/ContactsRepository');

class ContactController {
  async index(request, response) {
    const contacts = await ContactsRepository.findAll();
    response.json(contacts);
  }

  async show(request, response) {
    // Obter 1 registro
    const { id } = request.params;
    const contact = await ContactsRepository.findById(id);

    if (!contact) {
      // 404 - Not Found
      return response.status(404).json({ error: 'User not found' });
    }

    response.json(contact);
  }

  store() {
    // Criar novo registro
  }

  update() {
    // Editar um registro
  }

  async delete(request, response) {
    // Apagar um registro
    const { id } = request.params;

    const contact = await ContactsRepository.findById(id);

    if (!contact) {
      // 404 - Not Found
      return response.status(404).json({ error: 'User not found' });
    }

    await ContactsRepository.delete(id);
    // 204 - No Content
    response.sendStatus(204);
  }
}

// Singleton
module.exports = new ContactController();
