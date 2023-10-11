# Mock Node Server

This repository contains a Mock Node Server used for testing purposes. The server is built with Express.js and is configured to handle CORS, JSON Web Tokens (JWT), and HTTP Cookies securely.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/mock-node-server.git
cd mock-node-server
```

2. Install dependencies:

```bash
npm install
```

3. Create a .env file in the root directory of the project and populate it with the necessary environment variables:

```bash
PORT=3001
JWT_SECRET_KEY=your-secret-key
NODE_ENV=development
```

Replace your-secret-key with your own secret key.

### Usage

To start the server in development mode, run:

```bash
npm run dev
```

To start the server in production mode, run:

```bash
npm start
```

Endpoints
POST /login

Body Parameters:

email: string (required)
password: string (required)
Response:

Success: JSON object containing user data and a JWT token set as an HTTP-only cookie.
Error: JSON object with an error message.
Security
The server is configured to set the secure flag on cookies when running in a production environment (as determined by the NODE_ENV environment variable). This ensures that cookies are sent over HTTPS only, improving the security of the application.

Contributing
Since this is a mock server for testing purposes, contributions may not be necessary. However, if you find any bugs or have suggestions, feel free to open an issue or create a pull request.

License
This project is licensed under the ISC License.

Acknowledgments
Express.js for the server framework
JSON Web Tokens for authentication
Cookie Parser and CORS middleware for handling cookies and cross-origin requests respectively.
