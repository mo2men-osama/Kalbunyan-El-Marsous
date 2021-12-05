Linkedin Learning 
Programming Foundation: Design Patterns
___________________________________________

1.Database Foundations:
1.2.Keys and unique values:
Composite Key: Two or more fields taken together to act as a unique identifier.

1.3.Realtionships:
Types of Database Relationships:
-One-to-many
-Many-to-many
-One-to-one

1.4.ACID and transactions:
ACID - Atomic, Consistent, Isolated, Durable

1.5.Basic SQL:
SQL - Structured, Query, Language
-Allows statements to be written for DBMS to interpret how to interact with data
--In this role, SQL is called a data manipulation language (DML)
-Offers feature to manage the database itself, such as creating or modifying tables and controlling access to tables 
--In this role, SQL is called a data definition language (DDL) and a data control language (DCL)

Relational Database Management System (RDBMS) Tools:
-Support American National Standards Institute (ANSI) SQL
-Many offer versions of the language that extends ANSI SQL to include features specific to that DBMS

CRUD - Create, Read, Update, Delete : basis of interacting with data.
___________________________________________________________________

2.Tables:
Entity Relationship Diagram (ER Diagram): A diagram that uses tables, fields, and relationships to plan a database.

2.4.Numbers and other types:
NULL represents the absence of a value.
If a cell has a value, it is NOT NULL
__________________________________

3.Relationships:
3.2.One-to-many relationships:
Crow's foot means many end points

3.3.Many-to-many relationships:
In most DBMS tools, we can't model a many-to-many relationship directly, so we need to create a linking table, which has a one-to-many relationship with both of the tables we want to use.

3.4.One-to-one relationships:
A one-to-one relationships associates only one row with only one other row.

3.5.Relationship rules and referential integrity:
Databases are aware of relationships and won't allow a user to modify data in a way that violates those relationships.
__________________________________________

4.Database Optimization:
4.1.Normalization:
In the early 1970s, Edgar Codd defined three rules for organizing data in a database. These are called normalization rules, and they help us reduce redundancy and improve the integrity of our data.

Normalization Rules:
-First normal form (1NF)
-Second normal form (2NF)
-Third normal form (3NF)

4.2.First normal form:
Values in each cell should be atomic and tables should have no repeating groups.

4.3.Second normal form:
No value in a table should depend on only part of a key that can be used to uniquely identifya row.

4.4.Third normal form:
Values should not be stored if they can be calculated from another non-key field.
In order to put a database into Third Normal Form, it must also be in First and Second Normal Form.

4.5.Denormalization:
The process of intentionally duplicating information in a table, in violaton of normalization rules.
-Denormalization refer to consciously choosing to violate the rules of normality in order to improve speed or for some other business reason.
-Denormalization is usually a trade-off between speed and integrity.
____________________________________________________________________

5.Querying a Database:

The asterisk is used as a wildcard to retrieve everything from the given table.
(*) character that indicates all possible values in order to ask the database to give me information from all the fields in the table that we specify.
_____________________________________________________________

6.Querying a Database (continue):
6.1.Access  control, compliance, and injection:
SQL Injection: Type of attack that includes part of a SQL command entered as a value to hijack a query and change how it works.

6.2.Software options:
Common Relational Database Management Systems (RDBMSs)
-Microsoft SQL Server, Oracle, dBase, FileMaker Pro, Microsoft Access, MySQL, MariaDB, SAP HANA, SQLite

Desktop Database:
-Used for smaller solutions
-Hosted on workstation
Examples; Access, Filemaker Pro...

Enterprise Database:
-Used by large number of people
-Services millions of interactions
Examples; SQL Server, Oracle, SAP HANA...

NoSQL (Not Only SQL)
-Unstructured data, Key-value pairs, Graphs, Objects, Geographic data points










