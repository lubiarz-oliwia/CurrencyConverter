# CurrencyConverter
The app for currency conversion from EUR to PLN.
> Live demo [_here_](https://currency-converter-kambu.herokuapp.com/). 

# Table of Contents
* [General Info](#general-information)
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Setup](#setup)
* [Project Status](#project-status)

# General Information
The purpose of the project is that the user can check the current currency rate (which is received from [_API_] (https://api.nbp.pl/api/exchangerates/rates/c/eur/today/), add the transaction to the list, 
and automatically calculate the previously added transactions with the updated rate. 

General information: 
- Using one of the advanced libraries: React.
- The design is styled in a modern and refined way.
- The project includes a form with controlled fields.
- The application sends [_API_](http://api.nbp.pl/) query libraries using fetch.
- The app is available in the Live version (Heroku).

# Technologies Used
- React
- Heroku 

# Features
- Adding a currency transaction: defined name and amount in euro.
- List of added currency transactions: displaying previously added
transactions (name, amount in EUR, automatically calculated amount in PLN); with the sum of all transactions.
Automatic conversion of amounts in PLN for previously added transactions after updating the currency converter.
Removing transactions from the list.
Information of transactions with the highest amount.
All the information is simultaneously visible on the screen.

# Setup
To run this project, install it locally using npm: 

- $ npm install
- $ npm start

