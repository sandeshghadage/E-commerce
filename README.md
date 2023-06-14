# E-commerce Website

This repository contains a Fruit and Veggies E-commerce Website built with React, Firebase for authentication, MongoDB for the database, Node.js, and Express. The website allows users to browse and purchase a variety of fruits and vegetables. It provides functionality for adding products to a cart and placing orders. Below you will find information on how to set up and run the website.

## Table of Contents
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Database Setup](#database-setup)
- [Running the Application](#running-the-application)

## Features
- **User Authentication:** Users can sign up, log in, and log out using their email and password. Firebase Authentication is used for user management.
- **Product Listings:** Display a variety of fruits and vegetables with details such as name, price, and image.
- **Cart Functionality:** Users can add products to their cart, update quantities, and remove items from the cart.
- **Order Placement:** Users can place an order, providing their shipping details and payment information.
- **Order History:** Users can view their order history and track the status of their orders.

## Prerequisites
Before running the website, make sure you have the following installed:

- Node.js (version 12 or above)
- MongoDB (either running locally or using a cloud-based MongoDB service)
- Firebase account for setting up Firebase Authentication

## Getting Started
To get started with the Fruit and Veggies E-commerce Website, follow these steps:

1. Clone the repository to your local machine:
   ```
   git clone https://github.com/sandeshghadage/E-commerce.git
   ```

2. Navigate to the project directory:
   ```
   cd ecommerce
   ```

3. Install the required dependencies using npm or yarn:
   ```
   npm install
   ```

4. Set up your environment variables (see the next section for details).

5. Set up the database (see the next section for instructions).

6. Start the development server:
   ```
   npm start
   ```

7. Open your web browser and visit `http://localhost:3000` to see the website in action.

## Environment Variables
The application requires the following environment variables:

- `FIREBASE_API_KEY`: Your Firebase API key for authentication.
- `FIREBASE_AUTH_DOMAIN`: Your Firebase authentication domain.
- `FIREBASE_PROJECT_ID`: Your Firebase project ID.
- `MONGODB_URI`: The connection URI for your MongoDB database.

Create a `.env` file in the root directory and add the required environment variables.

## Database Setup
Set up your MongoDB database by following these steps:

1. Install MongoDB on your machine or use a cloud-based MongoDB service.
2. Create a new MongoDB database for the project.
3. Obtain the connection URI for your MongoDB database.
4. Set the `MONGODB_URI` environment variable in the `.env` file to the obtained connection URI.

## Running the Application
To run the E-commerce Website:

1. Ensure your MongoDB database is running.

2. Start the back-end server:
   ```
   cd server
   npm start
