# Artistry Avenue

Welcome to Artistry Avenue, your premier destination for art and paintings!

## Project Overview

Artistry Avenue provides a centralized platform for artists to showcase and sell their paintings, solving the following problems:

- Simplifies the process of buying and selling artwork online.
- Enhances accessibility for art enthusiasts to discover and purchase unique pieces.
- Facilitates secure transactions and communication between artists and buyers.
- Offers a user-friendly interface for managing paintings and interacting through comments.

## Links

[Live site](https://artistry-avenue.web.app/)
[Server Repo](https://github.com/najim2004/artistryavenue-sever)

## 3 Major Features

- **User Registration**: Users can register on the website to access exclusive features.
- **Update and Delete Posts**: Registered users can update or delete their posted paintings and admin can delete all the posts as his wish.
- **Comments Section**: Users can leave comments on painting posts.

## NPM Packages Used

swiper js, React-tooltip, React Awesome reveal, React Router, SweetAlert, react-icons, Firebase, react-lottie, react-simple-typewriter, react-helmet-async, react-hook-form, react-fast-marquee, react-fast-marquee, axios

## Setup and Installation

### Prerequisites

- Node.js (>= 14.x)
- MongoDB Atlas account or local MongoDB instance
- Firebase project setup for authentication

### Environment Variables

Create a `.env` file in the root directory of both the client and server projects with the following variables:

#### Client-side `.env`

```
VITE_APIKEY=<your-firebase-api-key>
VITE_AUTHDOMAIN=<your-firebase-auth-domain>
VITE_PROJECTID=<your-firebase-project-id>
VITE_STORAGEBUCKET=<your-firebase-storage-bucket>
VITE_MESSAGINGSENDERID=<your-firebase-messaging-sender-id>
VITE_APPID=<your-firebase-app-id>
```

#### Server-side `.env`

```
MONGODB_URI=<your-mongodb-uri>
```

### Installation

#### Client

```bash
cd client
npm install
npm start
```

#### Server

```bash
cd server
npm install
npm start
```
