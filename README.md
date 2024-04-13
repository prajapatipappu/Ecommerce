# Ecommerce - API

# About This Product 
This is an E-commerece API made using Node.js & MongoDB.

In this product we create the server first,  After that we create the Schema  for the product details for Name and Quantity- according the models.
and the function are created and passport are made for the auththentications.

# Getting Started
 Prerequisites
Make sure We have the following installed on your machine:

Node.js

npm (Node Package Manager)

MongoDB

Postman

# Interacting with the API:-

--> To interact with the E-commecrec API , we can use the tools like Postman or any other API testing tool.
Below are the details on how to perform various operations.

# Base URL
 The Base URL for the API is  http://localhost:8004/

---> STEPS TO USE THE API:-

1.Run "npm init" command on terminal in this proects directory.
2.start the server using node.js"npm start"
3.Open Postman
4.Make a GET request on the localhost: http://localhost:8004/product
5.The product should be visible

---> STEPS TO CREATE A NEW PRODUCT:-

1.Start the server using the node.js "npm start"
2.Open Postman
3.Put the localhost :- http://localhost:8004/create  -- as URL 
4.Select the Body tab below the url textarea and then  select  x-www-form-urlencoded
5.Add Name and Quantity as the Keys and set the desired values for the keys
6.Make a POST request
7. If we received the message "sucesfull added " means all the process done correct way.
8.The product is created ,then we can check it out by  making GET request at the localhost :-http://localhost:8004/product 

---> STEPS TO DELETE A PRODUCT :-

1.Copy  the object id of the product which we want to delete
2.add the if after  localhost :- http://localhost:8004/products/id 
3.Make a DELETE request.
4.We will received the message that "sucessfully deleted ".

---> STEPS TO UPDATE THE QUANTITY OF A PRODUCT:-

1.Copy  the object id of the product whose the Quantity we want to update
2.put the id after localhost 
3.After putting the id /updatequantity/?number={x}, in the url where x is the number by which we want to increase or decrease the quantity.
4.The url should be looking like localhost:3000/products/{id}/updatequantity/?number={x}
5.Make a POST request  and we will received the message as "updated sucessfully Done" 
 

 

1.For Registered user : POST method used
     :- http://localhost:8004/user/signup

    example  :-    key                   value
                   name                  cde
                   email                 cde@gmail.com
                   paassword             1234

    ![Registered new user](image.png)

2.For sign in :- POST method used
      :- http://localhost:8004/user/sign



3.For creating the product : POST method is used 
      :-http://localhost:8004/product/create

    

4.For getting the product details which were added  : GET method is used 
      :- http://localhost:8004/product

     

5.For updating the Qunatity of the product : POST method is used 
      :-http://localhost:8004/product/65f55b2f2106e6e120ad454c/updatequantity/?number=30

       syntax :-http://localhost:8004/product/{id}/updatequantity/?number={value}




6.For Deleting the product details : POST method used 

      :-http://localhost:8004/product/65f55b2f2106e6e120ad454c

      syntax:-http://localhost:8004/product/{product id}

     



# TEACHSTACK :- Node.js and MongoDB

                                         :- Thank you :-
