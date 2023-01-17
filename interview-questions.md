# ASSESSMENT 5: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What does calling super do in a class?

Your answer: Calling 'super' imports the attributes and methods from the parent class specified in the declaration (denoted by the (>) operator), i.e. the subclass inherits from the parent class. The attributes must be specified as the arguments for super() in the same order as the parent class. 

Researched answer: Calling super inside the initialize method of a class initializes that instance variables inherited from the parent class. super called inside of a method in a class calls the method in the parent class with the same name as the method in the subclass it was called in. super() can be used in cases where the number of arguments between the methods in the parent and subclass are different. 
https://www.rubyguides.com/2018/09/ruby-super-keyword/

2. What is a gem?

Your answer: A gem is a Ruby framework or library that can be imported into a project via the use of the keyword 'gem.' 

Researched answer: exmaples of gems are: Rails, RSpec, Bundler, etc.

3. What is a relational database? Are there other kinds of databases?

Your answer: A relational database consists of tables with colums and values. Tables can be related via the use of foreign keys. Relational databases are typically accessed via SQL commands. There is also nonrelationl databases which use documents which function more like an object and can be interacted without SQL. 

Researched answer: Relational databases hold collections of data organized in tables. The use of tables makes it easy to see the relatonships between different data within the collection, whether that relationship is within the table or with data from other tables. Relational databases use Structured Query Language (SQL). Other types of databases are:
- Hierarchichal
- Network
- Object-oriented
- Relational

4. What are primary keys? Why are they important?

Your answer: Primary keys are unique attributes given to each element created in a relational databse. Typically a number. They are used to identify and access each element. 

Researched answer: In SQL, a table can have only one primary key and it cannot be null. 

5. What are the HTTP verbs? What is each verb's corresponding CRUD action?

Your answer: Hyper Text TP verbs are standard words used to interact with a server. Each term PUT, PATCH, DELETE, GET, performs a specific action. GET retrieves information from the server, DELETE erases records, PUT and PATCH modify or alter the existing data.

Researched answer: Hypertext Transfer Protocol (HTTP) verbs share some common features but each has a specific use:
- GET
- HEAD
- POST
- PUT
- PATCH
- DELETE
- OPTIONS
- TRACE
- CONNECT

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. RESTful routes: Standardized paths established for client-server interactions. These routes are used to perform CRUD (Create, Read, Update, Delete) actions. REST stands for Representational State Transfer, and any API that abides to this type of architecture is known as RESTful.

2. Model validations: The process of testing a trained model with to determine if it is performing as expected or to determine its accuracy. Used to minimize error before deployment or before applying the model to real life circumstances/data.

3. Params: The keyword params is used to access data sent in a user's request to a web application. The use of this keyword returns an object that behaves like a hash. All the values inside params are strings, accessed via bracket notation (e.g. params[:id]).

4. ERB: A gem in which ruby can be used used to create templates for text or html documents. The use of ruby allows for functionality in creating lines of text without the ruby code showing in the final product.

5. API: Application Program Interface is the defined endpoints and instructions used to access a specific server. With an API the code to perform CRUD actions is specified. 
