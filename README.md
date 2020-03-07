# Data Source Test for Apollo Server Class

## Install and Configure Neo4J Database

- Install desktop
- Create a graph database named 'northwind'
- Start the graph database
- Click the `Manage` button and select the `Details` tab
- Towards the button click on the copy button next to `HTTP Port`, paste the link in a web browser
- Login
- Run the command: `:play start`
- Setup the Northwind Database

## Install and Configure PostgreSQL Database

- Install Homebrew
- Install PostgreSQL with Homebrew
- Download the Northwind SQL file: [https://storage.googleapis.com/google-code-archive-downloads/v2/code.google.com/northwindextended/northwind.postgre.sql](https://storage.googleapis.com/google-code-archive-downloads/v2/code.google.com/northwindextended/northwind.postgre.sql)
- Run the command: `createdb northwind`
- Run the command: `psql -d northwind -f ~/Downloads/northwind.postgre.sql`
- Install PgAdmin 4 from [https://www.pgadmin.org/download/](https://www.pgadmin.org/download/)
- Run PgAdmin 4 and connect to the database

## Install and Run This Project

1. Clone this repository to your local machine
2. Change into the folder and run the command `npm install` or `yarn install` (lock files are provided for both npm and yarn)
3. Start the REST server with command `npm run rest`
4. Open a new terminal window or new terminal tab, change to the cloned project folder, run the command `npm start` or `yarn start`

The output should look like this:

```bash
For each data source, 10 products should be retrieved:
PostgreSQL Server Products Count: 10
Neo4J Server Products Count: 10
REST Server Products Count: 10
```