const CategoriesRepository = require('../repositories/CategoriesRepository');

class CategoryController {
  async index(request, response) {
    const categories = await CategoriesRepository.findAll();
    response.json(categories);
  }

  async store(request, response) {
    const { name } = request.body;

    if (!name) {
      response.status(400).json({ error: 'Name is required' });
    }

    const category = await CategoriesRepository.create({ name });

    response.status(201).json(category);
  }

  async show(request, response) {
    const { id } = request.params;
    const category = await CategoriesRepository.findById(id);

    if (!category) {
      // 404 - Not Found
      return response.status(404).json({ error: 'User not found' });
    }
    response.json(category);
  }

  async update(request, response) {
    const { id } = request.params;
    const { name } = request.body;
    // verificando se o usuário está enviando algum nome
    if (!name) {
      return response.status(400).json({ error: 'Name is required' });
    }
    // comando para buscar se essa categoria realmente existe
    const categoryExists = await CategoriesRepository.findById(id);
    if (!categoryExists) {
      return response.status(404).json({ error: 'User not found' });
    }
    // comando para alterar a categoria
    const category = await CategoriesRepository.update(id, name);
    response.json(category);
  }

  async delete(request, response) {
    const { id } = request.params;

    const deleteOp = await CategoriesRepository.delete(id);

    response.status(204).json(deleteOp);
  }
}

module.exports = new CategoryController();
