![Screenshot 2024-01-12 102818](https://github.com/quyenquyen21/proshop/assets/104281254/6cc2e4c1-ee14-4156-a57e-d31e5ab20cf0) <br>
## Overview
ProShop is a comprehensive e-commerce platform designed with the MERN stack & Redux to offer an exceptional online shopping experience for both customers and administrators. This platform is built with a focus on user-friendliness, efficiency, and versatility in managing and purchasing products. With a range of features from a full-featured shopping cart to PayPal/credit card integration, ProShop streamlines the online retail process. Preview at: https://proshop-e8cz.onrender.com/
<img width="990" alt="screens" src="https://github.com/quyenquyen21/proshop/assets/104281254/126aeec0-8f38-4f23-8964-02b8f2a5f07c">

## Features

### For Customers:
- **Engaging Shopping Experience**: Customers can enjoy browsing through top products showcased in a dynamic carousel, making their shopping experience engaging and straightforward.
- **Advanced Product Interactions**: Customers can review and rate products, providing valuable feedback and insights for other shoppers.
- **Efficient Product Navigation**: With product pagination and a dedicated search feature, finding the right product is both intuitive and time-saving.
- **Personalized User Profiles**: Users can create profiles, view their order history, and track current orders, enhancing their shopping experience.

### For Administrators:
- **Robust Product Management**: Admins can easily manage the product inventory, including adding, editing, and removing items as needed.
- **User Management System**: Admins have the tools to manage user accounts, ensuring a secure and trustworthy user base.
- **Order Management**: An admin-specific order details page allows for comprehensive order tracking, including the option to mark orders as delivered.
- **Payment Processing Integration**: Secure and diverse payment options including PayPal and credit card payments are integrated for smooth transaction processes.

### Technical Aspects:
- **Checkout Process**: An efficient checkout process includes steps like shipping, payment method selection, etc., making online purchasing seamless.
- **Database Seeder**: For initial setup and testing, the platform includes a database seeder for products and users.

## Usage

### Setting Up MongoDB

 **Create a MongoDB database:**
   - Sign up or log in to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
   - Follow the steps to create a new database cluster.
   - Once your database cluster is set up, navigate to the 'Connect' section and choose 'Connect your application'.
   - Copy the MongoDB URI provided. This will be used in your application's configuration.

### Setting Up PayPal Integration

 **Create a PayPal Developer Account:**
   - Visit [PayPal Developer](https://developer.paypal.com/) and sign in or sign up.
   - Navigate to the 'Dashboard' and go to 'My Apps & Credentials'.
   - Create a new app under the 'REST API apps' section.
   - Once your app is created, you will receive a Client ID and Secret. Use the Client ID in your application's payment configuration.

## Environment Variables

To configure your environment variables:

1. **Rename the `.env.example` file to `.env`** in the root folder of the project.

2. **Add the following environment variables in the `.env` file:**

    ```
    NODE_ENV = development
    PORT = 5000
    MONGO_URI = your_mongodb_uri
    JWT_SECRET = 'abc123'
    PAYPAL_CLIENT_ID = your_paypal_client_id
    PAGINATION_LIMIT = 8
    ```

    - Replace `your_mongodb_uri` with your MongoDB URI.
    - Replace `your_paypal_client_id` with your PayPal Client ID.
    - Change the JWT_SECRET and PAGINATION_LIMIT to what you want

3. **Save the changes** to the `.env` file.

These environment variables will be used to configure various aspects of your application, such as database connection, authentication, and payment integration.

## Installation

### Install Dependencies (frontend & backend)

1. **Install backend dependencies:**
    npm install

2. **Install frontend dependencies:**
    cd frontend
    npm install

## Running the Application

### Run both frontend and backend

- To run both frontend (port 3000) and backend (port 5000) simultaneously:
  npm run dev

### Run backend only

- To run only the backend server:
  npm run server


## Build & Deploy

### Create frontend production build

1. Navigate to the frontend directory:
   cd frontend

2. Build the frontend for production:
   npm run build


## Seed the Database

You can seed the database with sample data or destroy all existing data using these commands:

- **Import sample data:**
npm run data:import



- **Destroy all data:**
npm run data:destroy


## Sample User Logins

Use these sample accounts to log in and test the application:

- **Admin Account:**
Email: admin@email.com
Password: 123456



- **Customer Account 1:**
Email: john@email.com
Password: 123456


- **Customer Account 2:**
Email: jane@email.com
Password: 123456


