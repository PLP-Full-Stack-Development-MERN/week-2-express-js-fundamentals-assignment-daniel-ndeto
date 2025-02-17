# Express.js Fundamentals Assignment

This project demonstrates fundamental concepts of Express.js including routes, middleware, controllers, and RESTful API design.

## Project Structure

```
express-assignment/
│-- routes/           # Route definitions
│    ├── userRoutes.js
│    ├── productRoutes.js
│-- middleware/       # Custom middleware functions
│    ├── logger.js
│-- controllers/      # Business logic
│    ├── userController.js
│    ├── productController.js
│-- index.js          # Entry point
│-- package.json
│-- README.md
│-- .env              # Environment variables
```

## Setup Instructions

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Create a `.env` file in the root directory with the following contents:
   ```
   PORT=3000
   NODE_ENV=development
   ```
4. Start the server:
   ```
   node index.js
   ```

## API Documentation

### User Endpoints

#### GET /api/users
- Description: Get all users
- Response: Array of user objects
- Status Code: 200 OK

#### GET /api/users/:id
- Description: Get user by ID
- Parameters: id (path parameter)
- Response: User object
- Status Code: 200 OK, 404 Not Found

#### POST /api/users
- Description: Create a new user
- Request Body: `{ "name": "User Name", "email": "user@example.com" }`
- Response: Created user object
- Status Code: 201 Created, 400 Bad Request

#### PUT /api/users/:id
- Description: Update user by ID
- Parameters: id (path parameter)
- Request Body: `{ "name": "Updated Name", "email": "updated@example.com" }`
- Response: Updated user object
- Status Code: 200 OK, 404 Not Found

#### DELETE /api/users/:id
- Description: Delete user by ID
- Parameters: id (path parameter)
- Response: `{ "message": "User deleted successfully", "user": deletedUserObject }`
- Status Code: 200 OK, 404 Not Found

### Product Endpoints

#### GET /api/products
- Description: Get all products
- Query Parameters:
  - minPrice: Filter by minimum price
  - maxPrice: Filter by maximum price
  - inStock: Filter by stock status (true/false)
- Response: Array of product objects
- Status Code: 200 OK

#### GET /api/products/:id
- Description: Get product by ID
- Parameters: id (path parameter)
- Response: Product object
- Status Code: 200 OK, 404 Not Found

#### POST /api/products
- Description: Create a new product
- Request Body: `{ "name": "Product Name", "price": 99.99, "inStock": true }`
- Response: Created product object
- Status Code: 201 Created, 400 Bad Request

#### PUT /api/products/:id
- Description: Update product by ID
- Parameters: id (path parameter)
- Request Body: `{ "name": "Updated Product", "price": 129.99, "inStock": false }`
- Response: Updated product object
- Status Code: 200 OK, 404 Not Found

#### DELETE /api/products/:id
- Description: Delete product by ID
- Parameters: id (path parameter)
- Response: `{ "message": "Product deleted successfully", "product": deletedProductObject }`
- Status Code: 200 OK, 404 Not Found

## Testing the API

You can test the API endpoints using tools like Postman, cURL, or any API testing tool.

Example cURL commands:

### Get all users
```bash
curl -X GET http://localhost:3000/api/users
```

### Create a new user
```bash
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{"name": "Alice Johnson", "email": "alice@example.com"}'
```

### Get all products with price filter
```bash
curl -X GET "http://localhost:3000/api/products?minPrice=500&maxPrice=1000"
```

## Error Handling

The application implements a global error handler that returns appropriate error messages and HTTP status codes for different types of errors.

## Middleware

The application uses a custom logger middleware that logs the timestamp, HTTP method, and URL for each request.