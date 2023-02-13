// Database:
// structured collection of data and may be either physical or logical.

// DBMS:
// Database Management System (DBMS) is a software application for creating and administering databases.

// SQL (Structured Query Language):
// is a language used to manage data held in relational db.
// mysql, postgres, mssql, sqlite

// DB types:
// RDBMS, ORDBMS, ORDBMS, Graph, cloud.

// PK:
//  unique identifier, not null

// FK:
//  to establish a relationship between two tables. refer pk.

// Transaction:
// sequence of operations performed against a database. Ensure data integrity.

// Ensure data integrity:
// primary keys, foreign keys, unique keys, and data types.

// ACID:
// ACID (Atomicity, Consistency, Isolation and Durability).

// Normilization:
// reduce redundancy and maintain data integrity.
// 1st Normal Form (1NF): All columns have atomic values and no repeating groups.
// 2nd Normal Form (2NF): All non-key attributes are dependent on the whole key.
// 3rd Normal Form (3NF): No transitive dependencies exist. All columns depend on the primary key.
// Boyce-Codd Normal Form (BCNF): A higher version of 3NF where every determinant is a candidate key.
// 4th Normal Form (4NF): A decomposition into tables having only simple multivalued dependencies.
// 5th Normal Form (5NF): Tables are decomposed into tables based onJoin Projection-Lattice.

// Index:
// Indexes are used to locate records quickly without having to search through the entire table.

// Referential integrity:
// set of rules that are enforced by the db to ensure that relationships between tables are maintained when data is inserted, deleted or updated.

// cursor:
// pointer used to iterate through the results of a database query.

// Transaction log:
// log is a record of all the changes that have been made to a database

// query optimization
// Process of tweaking a query to make it run more efficiently. 








// SQL QUERIES:
// ___________

// CREATE DATABASE test;

// DROP DATABASE test;

// CREATE TABLE customers (
// 	   id int NOT NULL AUTO_INCREMENT,
//     firstName VARCHAR(255),
//     lastName VARCHAR(255),
//     email VARCHAR(255),
//     zipCode VARCHAR(255),
//     PRIMARY KEY(id)
// );

// INSERT INTO customers (firstName, lastName, email, zipCode) VALUES ("Ali", "Raza", "ali@gmail.com", "46000");

// UPDATE customers SET email = "new@gmail.com" WHERE id = 3;

// DELETE FROM customers WHERE id = 2;

// SELECT * FROM `customers`;
// SELECT firstName FROM customers;
// SELECT firstName, lastName FROM customers WHERE id=3;
// SELECT firstName, lastName FROM customers ORDER BY zipCode DESC;
// SELECT firstName, lastName FROM customers ORDER BY zipCode ASC;
// SELECT DISTINCT zipCode FROM customers;
// SELECT * FROM customers WHERE zipCode <= 5000;
// SELECT * FROM customers WHERE zipCode BETWEEN 2000 AND 5000;
// SELECT * FROM customers WHERE firstName LIKE 'a%';
// SELECT * FROM customers WHERE firstName LIKE '%a%';
// SELECT * FROM customers WHERE firstName NOT LIKE 'a%';
// SELECT * FROM customers WHERE firstName in ('ali', 'munir');

// CREATE INDEX Zindex ON customers(zipCode);
// 

// Operators:
// = <> > < >= <= BETWEEN LIKE IN IS IS NOT AS





