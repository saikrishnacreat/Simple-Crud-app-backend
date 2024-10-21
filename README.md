# Simple CRUD API with Node.js, Express, and MongoDB
Table of Contents
- Introduction
- Features
- Technologies
- Installation
- Environment Variables
- Usage
- API Endpoints
- Contributing
- License
# Introduction
This is a simple CRUD (Create, Read, Update, Delete) API built with Node.js, Express, and MongoDB using Mongoose as the ODM. It demonstrates how to create, fetch, update, and delete products in a MongoDB database.

# Features
- Create new products.
- Retrieve all products or specific products by ID.
- Update existing products by ID.
- Delete products by ID.
- Error handling for invalid requests.
# Technologies
Node.js: Backend JavaScript runtime.
Express.js: Web framework for Node.js.
MongoDB: NoSQL database for storing data.
Mongoose: MongoDB ODM for managing database operations.
Nodemon: Tool for automatically restarting the server during development.
# Installation
Prerequisites
Ensure that you have the following installed on your local machine:

Node.js (v12 or higher)
MongoDB Atlas Account or local MongoDB instance
Steps
Clone the repository:

bash
Copy Code
```bash
git clone https://github.com/your-username/simple-crud-api.git
```
- Navigate to the project directory:

bash
Copy code
cd simple-crud-api
Install dependencies:

bash
Copy code
```bash
npm install
```
Set up environment variables:

Create a .env file in the root of your project.
Add the following environment variables:
bash
Copy code
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>/<database>?retryWrites=true&w=majority
PORT=3000
Run the server:

bash
Copy code
npm start
Or for development with Nodemon:

bash
Copy code
npm run dev
Environment Variables
You need to configure the following environment variables in your .env file:

MONGODB_URI: The MongoDB connection string.
PORT: The port the application will run on (default is 3000).
Example .env file:

bash
Copy code
MONGODB_URI=mongodb+srv://your-username:your-password@cluster0.mongodb.net/myDatabase?retryWrites=true&w=majority
PORT=3000
Usage
Once the server is running, you can use tools like Postman or curl to test the API.

Example request using curl:
bash
Copy code
curl --request GET \
  --url http://localhost:3000/api/products
## API Endpoints
- Base URL: http://localhost:3000/api/products
- Method	Endpoint	Description
- GET	/	Fetch all products
- GET	/:id	Fetch a product by its ID
- POST	/	Create a new product
- PUT	/:id	Update an existing product by ID
- DELETE	/:id	Delete a product by ID
Example of Product Object:
json
- Copy code
- {
-   "name": "Product Name",
-   "price": 100,
-   "description": "Product description"
}
# Contributing
Contributions are welcome! Please follow these steps:

# Fork the project.
- Create your feature branch (git checkout -b feature/AmazingFeature).
- Commit your changes (git commit -m 'Add some AmazingFeature').
- Push to the branch (git push origin feature/AmazingFeature).
- Open a pull request.
## License
This project is licensed under the MIT License - see the LICENSE file for details.
