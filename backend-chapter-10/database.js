// ? Backend chapter-10. --------------------------------------------------------------------------------->

/**
 * SQL vs NoSQL:
    **  SQL Databases (Relational Databases)
    * Structure: Data stored in tables (rows and columns).
    * Schema: Fixed schema (you must define structure before inserting data).
    * Query Language: Uses SQL (Structured Query Language).
    * Examples: MySQL, PostgreSQL, Oracle, Microsoft SQL Server.
    * Use Case: Best for structured data with relationships (e.g., banking, ERP).
    * Pros:
        * Strong consistency
        * ACID transactions
        * Easy to join tables
    * Cons:
        * Hard to scale horizontally
        * Schema changes require planning
 * NoSQL Databases (Non-relational Databases)
    * Structure: Data stored in flexible formats like JSON, key-value, graph, or column.
    * Schema: Dynamic/flexible schema (you can add fields anytime).
    * Query Language: Database-specific (MongoDB uses its own query language).
    * Examples: MongoDB, Cassandra, Redis, Firebase.
    * Use Case: Best for unstructured or semi-structured data, fast scaling, big data, real-time apps.
    * Pros:
        * Flexible schema
        * Easy horizontal scaling
        * Fast for large datasets
    * Cons:
        * No strong ACID support in some NoSQL DBs
        * Complex relationships harder to model
 * Server Types:
    * When talking about databases and web applications, servers come in different types:
        * Database Server: Stores and manages your database.
            * Example: MySQL Server, MongoDB Server.
            * Handles queries, data storage, and retrieval.
        * Web Server: Serves your website or application over HTTP/HTTPS.
            * Example: Apache, Nginx, Express.js server.
            * Handles client requests and sends responses.
        * Application Server: Hosts the backend application logic.
            * Example: Node.js, Django, Spring Boot.
            * Connects database server with web server.
 * MongoDB Terminologies:
    * MongoDB is a NoSQL document-oriented database. Here are the key terms:

    Term                    Meaning                                                         
    ---------------------   ----------------------------------------------------------------------
    Database              -  A container for collections, similar to a schema in SQL.           
    Collection            -  A group of documents (like a table in SQL).                        
    Document              -  A single record in a collection, stored as a **JSON/BSON** object. 
    Field                 -  A key-value pair inside a document (like a column in SQL).         
    _id                   -  Unique identifier for each document, automatically generated.      
    Embedded Document     -  A document nested inside another document.                         
    Index                 -  Improves query performance on a field.                             
    Replica Set           -  Group of MongoDB servers for redundancy and high availability.     
    Shard                 -  Horizontal partition of data for scaling (used in sharding).       
    Aggregation           -  Process of computing results from data, similar to SQL `GROUP BY`.
*/

/**
 * Summary:
    * SQL: Structured, relational, table-based.
    * NoSQL (MongoDB): Flexible, document-based, JSON-like storage.
    * Server Types: Database server, Web server, Application server.
    * MongoDB: Database → Collection → Document → Fields; supports embedded documents, indexing, replication, sharding.
*/