# Open Toontown BR Webserver

This is the API for the [Open Toontown BR](https://github.com/mister-jeperroni/open-toontown-br) project. It provides various routes for account management and authentication.

## Setup

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/mister-jeperroni/open-toontown-br-api
    cd open-toontown-br-api
    ```

2. Install the dependencies:

    ```sh
    npm install
    ```

3. Create a `.env` file in the root of the project and define the necessary environment variables:

    ```env
    PORT=80
    NODE_ENV=production
    MONGODB_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    ```

### Running the Server

To start the server in production mode, run:

```sh
npm start
```

For development mode with automatic restarts, use:

```sh
npx nodemon src/server.js
```