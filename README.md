# Todo API in TypeScript

A simple RESTful Todo API built with TypeScript and Express. This application provides endpoints for creating, reading, updating, and deleting Todo items. For simplicity, it uses an in-memory store (an array) to keep track of todos.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
  - [API Endpoints](#api-endpoints)
- [Development](#development)
- [Build & Deployment](#build--deployment)
- [Testing](#testing)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

## Overview

This project is a minimal Todo API written in a single TypeScript file (`app.ts`). It uses Express for handling HTTP requests, body-parser for parsing JSON request bodies, and uuid for generating unique identifiers. The API supports full CRUD (Create, Read, Update, Delete) operations on Todo items.

## Features

- **CRUD Operations:** Create, read, update, and delete todo items.
- **In-Memory Data Store:** Stores todo items in an array for simplicity.
- **Type Safety:** Written in TypeScript for type safety and improved code quality.
- **RESTful API:** Follows REST principles with clear endpoints and HTTP status codes.
- **Lightweight:** Minimal dependencies and setup for quick development.

## Project Structure

```
todo-api/
├── app.ts            # Main application file with the full API implementation
├── package.json      # Project metadata and dependencies
├── tsconfig.json     # TypeScript compiler configuration
└── .gitignore        # Files/folders to ignore in Git
```

## Tech Stack

- **Language:** TypeScript
- **Runtime:** Node.js
- **Framework:** Express
- **Libraries:** body-parser, uuid
- **Build Tool:** ts-node (for development) and tsc (for compiling)

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/todo-api.git
   cd todo-api
   ```

2. **Install Dependencies**

   Make sure you have [Node.js](https://nodejs.org/) installed. Then run:

   ```bash
   npm install
   ```

## Configuration

This project uses default settings and does not require additional configuration. The server runs on port 3000 by default. You can change the port by setting the `PORT` environment variable.

## Usage

### Running the Application

For development, you can use `ts-node` to run the app without compiling:

```bash
npm start
```

This will start the server on [http://localhost:3000](http://localhost:3000).

### API Endpoints

The following endpoints are available:

- **GET `/todos`**  
  Retrieve all todo items.  
  **Response:**  
  ```json
  [
    {
      "id": "550e8400-e29b-41d4-a716-446655440000",
      "title": "Buy groceries",
      "completed": false
    }
  ]
  ```

- **GET `/todos/:id`**  
  Retrieve a single todo item by its ID.  
  **Response:**  
  ```json
  {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "title": "Buy groceries",
    "completed": false
  }
  ```

- **POST `/todos`**  
  Create a new todo item.  
  **Request Body:**  
  ```json
  {
    "title": "Buy groceries"
  }
  ```
  **Response:**  
  ```json
  {
    "id": "newly-generated-uuid",
    "title": "Buy groceries",
    "completed": false
  }
  ```

- **PUT `/todos/:id`**  
  Update an existing todo item.  
  **Request Body Example:**  
  ```json
  {
    "title": "Buy groceries and cook dinner",
    "completed": true
  }
  ```
  **Response:**  
  ```json
  {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "title": "Buy groceries and cook dinner",
    "completed": true
  }
  ```

- **DELETE `/todos/:id`**  
  Delete a todo item by its ID.  
  **Response:**  
  ```json
  {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "title": "Buy groceries and cook dinner",
    "completed": true
  }
  ```

## Development

For local development, use `ts-node` to run the TypeScript application without compiling:

```bash
npm start
```

If you prefer compiling to JavaScript, run:

```bash
npm run build
```

Then execute the compiled JavaScript from the `dist` folder:

```bash
node dist/app.js
```

## Build & Deployment

- **Build:**  
  The command `npm run build` uses the TypeScript compiler (`tsc`) to compile the source code into the `dist` directory.

- **Deployment:**  
  To deploy the app, compile it with `npm run build` and deploy the contents of the `dist` folder to your Node.js hosting environment. Ensure that you set the environment variable `PORT` if you need a custom port.

## Testing

You can use tools like [Postman](https://www.postman.com/) or `curl` to test the API endpoints. Automated testing can be added using frameworks such as Mocha or Jest if required.

## Troubleshooting

- **Server Not Starting:**  
  Ensure that all dependencies are installed and that you are running the correct Node.js version.
  
- **Endpoint Not Found:**  
  Double-check the URL and port number. Ensure the server is running on the expected port.

- **TypeScript Errors:**  
  Review the error messages and adjust your code or `tsconfig.json` settings accordingly.

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a feature branch (e.g., `git checkout -b feature/my-new-feature`).
3. Commit your changes with clear commit messages.
4. Push your branch to your fork and create a pull request.
5. Follow any additional guidelines provided in the repository.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Enjoy using the Todo API, and feel free to extend it with persistent storage, authentication, and more advanced features!
