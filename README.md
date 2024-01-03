# Recipe Book Application - MERN Stack

Live Site URL : [Recipe Book](https://food-verse-five.vercel.app/)

This project is a full-stack web application built using React for the frontend and Express.js with MongoDB for the backend. The frontend uses various packages such as React-Axios, React-Router-Dom and React-Cookie to create a sign-up page and login page, a home page with a search bar to search data based on name of the recipe and ingredients used, a create-recipe page to add new recipes and edit-recipe page to edit previously created recipes. The application also has a recipe detail page that displays information such as cooking time, instructions, description, and ingredients for each recipe. The TailwindCSS, a CSS framework is used to style the whole application.

The backend uses packages such as bcrypt, cors, jsonwebtoken and mongoose to handle user authentication, password encryption, and database operations. It checks whether the user exists before storing the user's information in the database and uses JSON web tokens for secure communication between the client and server.

To use the application, users must first sign up with their email and password. Once signed in, they can search for recipes, create new recipes as well as edit those recipes. The application also provides a logout button to ensure the user's privacy and security.

## Installation

To run this project, you'll need to have Node.js and MongoDB installed on your system. You can download Node.js from the official website: https://nodejs.org/, and install MongoDB by following the instructions provided here: https://docs.mongodb.com/manual/installation/.

To install the project dependencies, follow these steps:

Clone the repository to your local machine using the following command:

bash
Copy code
git clone https://github.com/your-name/your-project-name.git
Navigate to the project directory:

bash
Copy code
```bash
cd your-project
```
Install the frontend dependencies:
```bash
npm install
```
Navigate to the backend directory:

```bash
cd backend
```
Install the backend dependencies:

```bash
npm install
```
Create a .env file in the backend directory, and set the following environment variables:

makefile
```bash
MONGO_URL=<your-mongodb-url>
JWT_SECRET=<your-jwt-secret>
```
Replace <your-mongodb-uri> with the URI of your MongoDB database, and <your-jwt-secret> with a secret key of your choice.

Start the backend server:

```bash
npm run start
```
Open a new terminal window, navigate to the project directory, and start the frontend server:

```bash
npm run start
```
Open your web browser and navigate to http://localhost:3000 to view the application.

That's it! You should now be able to run the application locally. If you encounter any issues, please refer to the project documentation or create a new issue on the project's GitHub repository.
    
  
