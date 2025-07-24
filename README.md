# E-Commerce API

A Node.js Express-based e-commerce backend API. This project provides endpoints for managing products, users, orders, and more, suitable for powering an online store.

## Features

- User authentication & authorization
- Product management (CRUD)
- Order processing
- Cart functionality
- RESTful API design
- MongoDB integration
- Environment-based configuration

## Getting Started

### Prerequisites

- Node.js (v14 or higher recommended)
- npm
- MongoDB instance (local or cloud)

### Installation

```bash
npm install
```

### Environment Variables

Create a `.env` file in the root directory. Example:

```
MONGODB_URI=mongodb://localhost:27017/ecommerce
PORT=3000
JWT_SECRET=your_jwt_secret
```

### Running the Server

```bash
npm start
```

The server will run on `http://localhost:3000` by default.

## Project Structure

```
src/
  app.js           # Express app setup
  server.js        # Server entry point
  config/          # Configuration files
  controllers/     # Route controllers
  middlewares/     # Express middlewares
  models/          # Mongoose models
  routes/          # API route definitions
  services/        # Business logic
  utils/           # Utility functions
```

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Code of Conduct

Please read our [Code of Conduct](CODE_OF_CONDUCT.md) before contributing.
