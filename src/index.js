require('dotenv').config();

console.log('For each data source, 10 products should be retrieved:')

// test PostgreSQL connection

const { Pool } = require('pg');

const dbConfig = { connectionString: `postgres://${process.env.PGUSER}@localhost:5432/northwind` };

const pool = new Pool(dbConfig);

pool
  .query('select productid, productname from products limit 10')
  .then(result => console.log('PostgreSQL Server Products Count: ' + result.rows.length));

// test Neo4J connection

const neo4j = require('neo4j-driver');

const driver = neo4j.driver(
  process.env.NEO4JURI,
  neo4j.auth.basic(process.env.NEO4JUSER, process.env.NEO4JPASS,
));

const session = driver.session();

const resultPromise = session.writeTransaction(tx =>
  tx.run(
    'MATCH (p:Product) RETURN p.productID, p.productName LIMIT 10'
  )
)

resultPromise.then(result => {
  session.close()
  console.log('Neo4J Server Products Count: ' + result.records.length)
  driver.close()
});

// test REST API connection

const fetch = require('node-fetch');

fetch('http://localhost:3000/api/products?_start=0&_limit=10')
  .then(res => res.json())
  .then(products => console.log('REST Server Products Count: ' + products.length));
