# Web Service & RESTful API for ToDoList Application
## Built With
* express.js
* mongodb
* mongoose
* jsonwebtoken (jwt)
* bcrypt

## APIs Specification
### Users
* #### Register
* Method : POST
* Endpoint : /user/register
* Body :
```
{
    "name": "String",
    "email": "String",
    "password": "String"

}
```
* Response
```
{
    "message": "data has been created!!"
}
```
* #### Login
* Method : POST
* Endpoint : /user/login
* Body :
```
{
    "email": String,
    "password": String
}
```
* Response :
```
{
    "message": "Anda berhasil login"
    "token",
}
```
