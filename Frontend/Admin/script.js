let mentioned_price = 150;
let btnAdd = document.querySelector('button');
let table = document.querySelector('table');

let sInput = document.querySelector('#no');
let stockInput = document.querySelector('#name');
let orderInput = document.querySelector('#quantity');
let orderType = document.querySelector('#type');
let executionInput = document.querySelector('#ex_quanity');
let priceInput = document.querySelector('#price');
let statusInput = document.querySelector('#status');
let dateInput = document.querySelector('#date');
/*
 <input type="text" id="no" placeholder="S.NO">
            <input type="text" id="name" placeholder="Stock Name">
            <input type="text" id="quantity" placeholder="Order Quantity">
            <input type="text" id="type" placeholder="Order Type">
            <input type="text" id="ex_quanity" placeholder="Executed Quantity">
            <input type="text" id="price" placeholder="Price Given">
            <input type="text" id="status" placeholder="Order Status">
            <input type="text" id="date" placeholder="Order Date">
*/


btnAdd.addEventListener('click', () => {
    let sno = sInput.value;
    let sname = stockInput.value;
    let order = orderInput.value;
    let type = orderType.value;
    let ex_quanity = executionInput.value;
    let price = priceInput.value;
    let status = statusInput.value;
    let date = dateInput.value;

    if (mentioned_price > price) {
        status = "NOT PLACED";
    }   

    let template = `
                <tr>
                    <td>${sno}</td>
                    <td>${sname}</td>
                    <td>${order}</td>
                    <td>${type}</td>
                    <td>${ex_quanity}</td>
                    <td>${price}</td>
                    <td>${status}</td>
                    <td>${date}</td>
                </tr>`;

    table.innerHTML += template;
});
