// controllers/productController.js

// Sample in-memory products data
let products = [
    { id: 1, name: 'Laptop', price: 999.99 },
    { id: 2, name: 'Smartphone', price: 699.99 }
  ];
  
  // GET /api/products?name=optionalQuery
  exports.getAllProducts = (req, res) => {
    const { name } = req.query;
    if (name) {
      // Filter products by name substring (case-insensitive)
      const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(name.toLowerCase())
      );
      return res.json(filteredProducts);
    }
    res.json(products);
  };
  
  // GET /api/products/:id
  exports.getProductById = (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json(product);
  };
  
  // POST /api/products
  exports.createProduct = (req, res) => {
    if (!req.body.name || req.body.price == null) {
      return res.status(400).json({ error: 'Name and price are required' });
    }
    const newProduct = {
      id: products.length + 1,
      name: req.body.name,
      price: req.body.price
    };
    products.push(newProduct);
    res.status(201).json(newProduct);
  };
  
  // PUT /api/products/:id
  exports.updateProduct = (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    // Allow updating name and price
    product.name = req.body.name || product.name;
    product.price = req.body.price != null ? req.body.price : product.price;
    res.json(product);
  };
  
  // DELETE /api/products/:id
  exports.deleteProduct = (req, res) => {
    const productIndex = products.findIndex(p => p.id === parseInt(req.params.id));
    if (productIndex === -1) {
      return res.status(404).json({ error: 'Product not found' });
    }
    products.splice(productIndex, 1);
    res.status(204).end();
  };
  