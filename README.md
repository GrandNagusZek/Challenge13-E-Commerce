# Challenge13-E-Commerce

This project is aimed at building the back end for an e-commerce site using the latest technologies. By configuring a working Express.js API to interact with an SQL database using Sequelize, this application enables businesses to compete effectively in the e-commerce industry.

## Description

E-commerce is a vital sector within the electronics industry, offering businesses and consumers a convenient platform for online buying and selling. This project aims to develop a robust back end for an e-commerce website, leveraging Express.js and Sequelize to interact with an SQL database. By meeting the specified acceptance criteria, the application ensures seamless functionality for managing categories, products, and tags.


## Getting Started

To set up the project:

Clone the repository.
Install dependencies using npm install.
Create an SQL database using the schema.sql file.
Set up environment variables for SQL username, password, and database name.
Seed the database with test data using npm run seed.
Start the application's server using npm start.


## Features

1. Express.js API
Configured a functional Express.js API to handle HTTP requests and responses.
Implemented RESTful routing for categories, products, and tags.
Utilized Express.js middleware for error handling and request processing.

2. SQL Database Integration
Established a connection to an SQL database using the pg and Sequelize packages.
Stored sensitive data, such as SQL username and password, securely using environment variables through the dotenv package.
Synchronized Sequelize models to the SQL database on server start to ensure data consistency.

3. Database Models
Defined four database models: Category, Product, Tag, and ProductTag, with specific column requirements and associations.
Implemented model associations to establish relationships between models, including one-to-many and many-to-many relationships.

4. CRUD Operations
Provided API routes for performing CRUD operations on categories, products, and tags.
Enabled the creation, retrieval, updating, and deletion of data through API endpoints using Sequelize models.

5. Insomnia Testing
Tested API routes using Insomnia to ensure proper functionality and data retrieval.
Verified the successful execution of GET, POST, PUT, and DELETE routes for categories, products, and tags.

6. Database Seeding
Seeded the SQL database with test data to facilitate development and testing of API routes.
Used the schema.sql file to create the initial database structure and seed data into the tables.


## License

MIT License