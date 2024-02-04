# To-Do List Web App

## Overview

This is a simple To-Do List web application built using Node.js and Express with a PostgreSQL database for storing tasks. Users can add, edit, and delete tasks, and the application dynamically updates the task list.

## Prerequisites

Ensure you have the following dependencies installed:

- [Node.js](https://nodejs.org/)
- [PostgreSQL](https://www.postgresql.org/)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/vinit-y/To_Do_List.git
   cd To_Do_List
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up the PostgreSQL database:

   - Create a database named `to_do_list`.
   - Update the database configuration in `index.js` with your PostgreSQL credentials if needed.

4. Start the application:

   ```bash
   npm start
   ```

   The application will be accessible at [http://localhost:3000](http://localhost:3000).

## Usage

- Open your web browser and navigate to [http://localhost:3000](http://localhost:3000).
- You can add tasks, edit existing tasks, and delete tasks as needed.

## Dependencies

- [body-parser](https://www.npmjs.com/package/body-parser)
- [ejs](https://www.npmjs.com/package/ejs)
- [express](https://www.npmjs.com/package/express)
- [pg](https://www.npmjs.com/package/pg)

## Author

- [Vinit Yadav](https://github.com/your-username)

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.