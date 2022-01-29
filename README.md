# Problem Statement: ORDER BOOK SYSTEM

## BUSINESS REQUIREMENTS:
- System manages Order-Books. Each stock has specific stock Id and every order book deals with only one kind of Stock. I.e. every stock will have its own Order-book.
- There are 2 Users for System – Customer and Admin. Admin can OPEN/CLOSE the Market. Customer can place new order for any stock when market is open. System should not accept any order when ADMIN close the market.
- An Order is defined by Quantity, order date, stock Id and Price. 
- There are 2 Types of Order : Market Order and LIMIT Order. Limit order has a specified Price whereas Market orders are request for best price and Customer doesn’t provide Price for the Order
- When ADMIN Close the Market, Orders can be processed. Admin can select the stock and see all the orders for the day.
ADMIN Execute order in chunks. Every Executions of order will accept 2 inputs – Execution Qty and Execution Price.
- If Execution is added , some orders become REJECTED – if order is LIMIT order and its order price is lower than Execution price. All subsequent Execution will have same execution price. Execution price cant change 
- The Execution Quantity should be distributed linearly among all accepted order . ACCEPTED Order i.e. all market orders and where LIMIT Order price is greater or equal than Processing Price

## MODULES:
    - FRONTEND MODULES
    - BACKEND MODULES
