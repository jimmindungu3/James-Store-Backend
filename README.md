# E-Commerce API

This project is a RESTful API for an e-commerce platform built with Node.js, Express, and MongoDB. It provides endpoints for managing products across various categories.

## Features

- Fetch all products
- Fetch products by category (men's clothing, women's clothing, electronics, jewellery)
- Add new products
- Delete products
- CORS enabled for cross-origin requests
- MongoDB integration for data persistence

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed (v14.0.0 or later recommended)
- MongoDB Atlas account or a local MongoDB instance
- npm (Node Package Manager)

## Installation

1. Clone the repository:
2. Navigate to the project directory:
3. Install dependencies:
4. Create a `.env` file in the root directory and add your MongoDB credentials:

   There is a sample .env file to help you with this

5. Run start command
   The server will start running at `http://localhost:3000`.

## API Endpoints


Base URL: https://james-store-backend.onrender.com

- `GET /`: Welcome message
- `GET /api/all-products`: Fetch all products
- `GET /api/men's-clothing`: Fetch men's clothing products
- `GET /api/women's-clothing`: Fetch women's clothing products
- `GET /api/electronics`: Fetch electronic products
- `GET /api/jewellery`: Fetch jewellery products
- `POST **********`: Add a new product
- `DELETE **********:id`: Delete a product by ID
- `PATCH **********:id`: Update a product by ID

For POST, DELETE, and PATCH operations, replace `:id` with the actual product ID.

[You could add more details about request bodies, parameters, and example responses here]

## Database Connection

The application uses MongoDB Atlas for data storage. The connection is established using the `MongoClient` from the `mongodb` package.

## Error Handling

The API includes basic error handling for database operations and invalid requests. Errors are returned with appropriate HTTP status codes and error messages.

## CORS

Cross-Origin Resource Sharing (CORS) is enabled for all routes, allowing the API to be accessed from different domains.

## Contributing

Contributions to this project are welcome. Please fork the repository and create a pull request with your changes.

## License

[MIT License](LICENSE)

## Contact

- Connect with me on [LinkedIn](https://www.linkedin.com/in/jamesndunguthedev/).
- Check out my [YouTube Channel](https://youtube.com/@DevsToday) for tech content.
- Follow me on X [@jimmindungu3](https://twitter.com/jimmindungu3).
- Email me at jimmindungu3@gmail.com for any inquiries or collaboration opportunities.
- WhatsApp or Call: +254 717 055 495
