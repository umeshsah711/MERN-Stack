MERN Stack

# Day 1

Introduction

# Day 2

HTML
Basic of HTML like <P> tag <h> tag
Shift 1 for html template
Control / for comment
Control D is used to select same word to change
<strong></strong> tag is used to bold the text

# Day 3

Create Table, Form

# Day 4

CSS : Cascading StyleSheet
Used to style web pages
Class is determined with dot(.)
ID is determined with #

\*\* Types of CSS:

1. Inline
2. Internal
3. External

** Properties **

1. color
2. text
3. font
4. box model

# Day 5

CSS Properties

1. display
2. flex
3. list
4. pseudo-class
5. units
6. overflow
7. table

# Day 6

Design form using CSS
CSS Properties

1. position
2. grid

# Day 7

CSS Properties

1. responsive design
2. animation
3. transform

# Day 8

Tailwind CSS

1. CSS framework
2. Used of building UI rapidly
3. Instead of writing CSS code, we use predefined utility classes directly in html
4. Highly customizable, works in dark mode, Justify in Time(JIT) compiler for faster builds

# Day 9

Properties

1. pseudo class
2. custom value
3. responsive design
4. dark mode
5. variables
6. semantics
7. transform
8. animation

# Day 10

Tailwind Project

# Day 11

Tailwind Project contd...

# Day 12

- JavaScript

1. High level programming language
2. Interpreted programming language
3. Built on C++
4. Used to build interactive web pages

- JS course contains

1. Print
2. Variables
3. Datatype
4. Operators (arithmetic, logical, relational)
5. Conditional Statements (if, else, switch)
6. Loop (for, while)
7. Function
8. EcmaScript (Template literals, spread operator, destructing, arrow function)
9. Array Methods (map, reduce, sort, filter, find)
10. DOM Manipulation

- Backend

1. Node
2. Express
3. MongoDB

- Frontend

1. React
2. Next.js

# Day 13

1. Operators
2. Conditional Statements
3. Loop

# Day 14

1. Function
2. EcmaScript

# Day 15

1. Array Methods

# Day 16

- Introduction on NodeJs

1. It is a Javascript runtime.
2. Runtime: A program that runs another program.
3. Runs JS in local machine.
4. Built on C++
5. Built on top of Google Chrome V8 engine
6. Used for: API, microservices, real time application, JSON based API.

- Architecture

1. Single threaded
2. Non-blocking operation
3. Event driven

# Day 17

- Import/ Export
- Modules

# Day 18

- Modules:

1. http
2. path
3. url

# Day 19

- HTTP Status Code

1. 1XX - Informational (Rarely Used)

2. 2XX - Success
   - 200: OK
   - 201: Created
   - 204: No Content(Delete)

3. 3XX - Redirect
   - 301: Move permanently
     304: Not Modified(used for caching)

4. 4XX - Client Error
   - 400: Bad Request(invalid input, )
   - 401: Unauthorized(not logged in user, no token/expired token)
   - 403: Forbidden(Logged in but not allowed)
   - 404: Not Found
   - 405: Method not allowed
   - 409: Conflict(duplicate email, phone)
   - 422: Unprocessable entity(validation error)

5. 5XX - Server Error
   - 500: Internal server error
   - 502: Bad gateway(invalid response from another service)
   - 503: Service unavailable
   - 504: Timeout

# Day 20

- Asynchronous Programming
- Callback
- Promises
- Async Await

# Day 21

- ExpressJs

1. It is a NodeJs API/Backend framework.
2. It simplifies the HTTP modules of Node.Js
3. Minimalist, unopinionated framework.
4. API format
   - JSON
   - XML
5. REST(Representational State Transfer) API

# Day 22

- Layered Architecture

1. API Layer
   a. Routes
   - Handle the routes/endpoint
     b. Controllers
   - Handle Request and responses
     c. Middlewares
   - Handle Request and responses
   - Logging, Auth

2. Business Logic Layer
   a. Services

3. Data Logic Layer
   a. Modules

4. Database Layer

# Day 23

- Controllers & Services

# Day 24

- MongoDB

1. Non Relational Database
2. Data are stored collection and documents.
3. Database: Main container where all data are stored.
4. Collection: Equivalent to table relational database.
5. Document: Equivalent to Row
6. Field: Equivalent to Column

- Tools used in MongoDB

1. Locally: MongoDB Compass
2. Cloud: MongoDB Atlas

# Day 25

- Mongoose Schema and Model

# Day 26

- Login & Register

# Day 27

- Authentication & Authorization

1. Authentication

- Who are you? Logged in user

2. Authorization

- What you can do? User role

- JWT

1. JSON Web Token
2. Used for auth
3. Tamper proof

- JWT Structure

1. Header
2. Payload
3. Signature

- Storage

1. Cookie Storage
2. Local Storage
3. Session Storage

- Auth Process

1. Login/Register Success
2. Generate Token
3. Store Token: Cookie, Session Storage, Local Storage
4. Append token every request to handle auth
5. Verify the token and authenticate/authorize user

# Day 28

- Middleware

1. Function that lies between request and response.
2. Function that has the access of both request and response object.
3. It has additional functionality to go to next() middleware call.

- Uses

1. Logging
2. Authentication & Authorization
3. Request & Response object modification
4. Error handling, Data validation

- Authorization -RBAC(Role Based Access Control)

1. USER - Purchase
2. MERCHANT - Product create/update/delete
3. ADMIN - Product management, User management, Order management

# Day 29

- Validation

1. Check/Verify whether the data is valid or not
2. e.g. name(string), age(number), isActive(boolean)

# Day 30

- Postman

- Code Semantics

1. Always format your code (Use prettier code formatter)
2. Use proper spacing and line spacing
3. Always use camelCase name your file and folder in JS (helloWorld)
4. Always use camelCase name your function and variable in JS (createUser)
5. File, Variable must be noun.
6. Function & methods name must be verb.
7. Also check singular & plural case e.g. (getUserById, getUsers)
8. Avoid using number while naming variable, function, file.

# Day 31

- Products filtering, Sort, limit & offset

# Day 32

- Order management

# Day 33

- Khalti payment, COD, Confirm payment

# Day 34

- File upload using multer in Cloudinary
- File Upload

1. File data -> Send as formData
2. Use multer package to handle form data
3. Upload Cloudinary
4. Receive the file url from uploaded file
5. Store the url in database

# Day 35

- Debugging

1. Check from root app.js file
2. Check in the routes file. e.g. `product.route.js`
3. Check in the controller file. e.g. `product.controller.js`
4. Check in the service file. e.g. `product.service.js`

# Day 36

- Forget/Reset password

1. User request for forget password.
2. User inputs the email address.
3. Using the email address, find the user and create a reset password link & token.
4. Send the reset password link to that email.
5. User clicks on the reset password link from the received email.
6. User inputs the new password along with token.
7. Verify the user and token.
8. Update the password.

# Day 37

- User management, Get orders by merchant

# Day 38

- Deployment & AI integration

# Day 39

- Template engine

# Day 40
