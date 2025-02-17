// controllers/userController.js

// Sample in-memory users data
let users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com' }
  ];
  
  // GET /api/users?name=optionalQuery
  exports.getAllUsers = (req, res) => {
    const { name } = req.query;
    if (name) {
      // Filter users by name substring (case-insensitive)
      const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(name.toLowerCase())
      );
      return res.json(filteredUsers);
    }
    res.json(users);
  };
  
  // GET /api/users/:id
  exports.getUserById = (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  };
  
  // POST /api/users
  exports.createUser = (req, res) => {
    if (!req.body.name || !req.body.email) {
      return res.status(400).json({ error: 'Name and email are required' });
    }
    const newUser = {
      id: users.length + 1,
      name: req.body.name,
      email: req.body.email
    };
    users.push(newUser);
    res.status(201).json(newUser);
  };
  
  // PUT /api/users/:id
  exports.updateUser = (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    // Allow updating name and email
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    res.json(user);
  };
  
  // DELETE /api/users/:id
  exports.deleteUser = (req, res) => {
    const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
    if (userIndex === -1) {
      return res.status(404).json({ error: 'User not found' });
    }
    users.splice(userIndex, 1);
    res.status(204).end();
  };
  