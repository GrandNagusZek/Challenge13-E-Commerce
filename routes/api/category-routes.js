const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint


// http:localhost:3001/api/catergories/
router.get('/', async (req, res) => {
  try {
    const catergoryData = await Category.findAll({
      include: [{model: Product } ],
    });
    res.status(200).json(catergoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//http:localhost:3001/api/categories/1

router.get('/:id', async (req, res) => {
  try {
    const catergoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product } ],
    });

    if (!catergoryData) {
      res.status(404).json({ message: 'No reader found with that id!'});
      return;
    }
    
    res.status(200).json(catergoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//http://localhost:3001/api/catergories/
router.post('/', async (req, res) => {
  try {
    const catergoryData = await Category.create(req.body);
    res.status(200).json(catergoryData);
  } catch (err) {
    res.status(400).json(err)
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const categoryData = await Category.update({
      category_name: req.body.category_name

    },{
      where: {
        id: req.params.id, 
      },
    });

    if (!categoryData) {
      res.status(404).json({ message: 'No reader found with that id!' });
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});




//http://localhost:3001/api/categories/2
router.delete('/:id', async (req, res) => {
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id, 
      },
    });

    if (!categoryData) {
      res.status(404).json({ message: 'No reader found with that id!' });
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
