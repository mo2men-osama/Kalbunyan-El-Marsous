## Linkedin Learning

# Programming Foundations: APIs and Web Services

_____________________________________________________

## 1.Understanding Web Services:

### 1.1.Web services overview:

A web service allows different systems to talk to each other over the internet. These systems can be any combination of devices or applications.

Data is transferred between client and server with a common web language, like XML (eXtensible Markup Language).

Web Service Types:
- SOAP (Simple Object Access Protocol)
-- Sends messages using XML
-- XML document is sent with data

- RESTful (Representational State Transfer)
-- Uses HTTP to access resources

### 1.3.Considerations of web services:

Latency: The time it takes a request to return a response

Partial Failure: When a server or network fails to respond

### 1.5.Web services, APIs, and microservices:

API (Application Programming Interface)

All web services are APIs but not all APIs are web services.

_________________________________________________________

## 2.Using RESTful APIs and HATEOAS:

### 2.1.REST overview:

Representational State Transfer: A set of guidelines used to design APIs

API Principles

1. Uniform Resource Identifier (URI)
2. Operations
     - GET \- Retrieves a resource
     - POST \- Creates a resource
     - PUT \- Updates a resource
     - DELETE \- Removes a resource

3. Formats
     - HTML
     - XML
     - Plain text

4. Stateless
     - Server will not store any state the client made

### 2.2.Benefits of REST:

Payload: Data sent between client and server

### 2.3.HATEOAS overview:

HATEOAS (Hypermedia As The Engine Of Application State): Client interacts with a REST API entirely through the responses by the server

______________________________________________________

## 3.Using SOAP-Based Web Services:

### 3.1.SOAP overview:

SOAP (Simple Object Access Protocol): It's a messaging protocol that uses XML to allow applications running on different systems or platforms to communicate.

WSDL (Web Services Description Language): Contains information, like the data types being used in SOAP messages, and operations available via the web service

SOAP Messages
1. Envelope
2. Header
3. Body
4. Fault

__________________

## 4.Developing APIs Using GraphQL:

### 4.1.GraphQL overview:

GraphQL: A syntax describing how to ask for data, which is usually used to load data

### 4.2.The structure of GraphQL queries:

GraphQL Type System
- **Schema** defines a set of types.
- **Queries** obtain information about specific fields from objects.
- **Resolvers** retrieve the data.

Besides query, there are two other operation types.
- **Mutation** modifies server-side data.
- **Subscription** notifies changes in data in real time.





