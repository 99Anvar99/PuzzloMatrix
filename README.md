# PuzzloMatrix
## Description
PuzzloMatrix is a website in which users can create an account and log in to take different coding quizzes to test their knowledge.

## Main Task

* An application for users to register an account and take quizzes on different code modules.
* Register an account by pressing the register button or by going to: /register
* Login by using the same credentials or by going to: /login
* after login, you will be presented with the categories available or go to: /category
* and then select a category like "JavaScript" : /quizzes/javascript

## Install and Run Instructions

* npm i
* add .env file with following variables for SQL database:
* dbname: user_db
	username: your mysql username
	password: your mysql password

* npm run start-dev
* open the project on localhost:3001


## Final Work Review

### The following images demonstrates the application functionality:
![application starting page](/src/assets/image.png)
When the application is opened, this is the landing page shown. All of the pages scale with the size of the window.

![Login page](/src/assets/image-1.png)
When the "get started" button is clicked, you are brought to the login page. If you click register, it registers an account for with a username, email, and password.
![Alt text](/src/assets/image-3.png)

![Quiz categories](/src/assets/image-2.png)
Once logged in, the different categories of quizzes are shown. You can also press the log out button at the top right of the screen to log out of the account and return to the login screen.
