let Hot_dog_price = 3.75;
let fries_price = 3;
let soda_price = 2.5;

let numDogs = prompt('How many Hotdogs do you want? ($3.75 /hotdog)');
let numFries = prompt('How many bag of fries do you want? ($3.00 /fries)');
let numSoda = prompt('How many soda cans do you want? ($2.50 /soda)');

//checking for an empty imput or cancel response
if (numDogs === null || numDogs.trim() === '') {
    numDogs = 0;
} else {
    numDogs = parseInt(numDogs);
    //if input is not a number
    if (isNaN(numDogs)) {
        numDogs = 0;
    }
}

//checking for an empty imput or cancel response
if (numFries === null || numFries.trim() === '') {
    numFries = 0;
} else {
    numFries = parseInt(numFries);
    //if input is not a number
    if (isNaN(numFries)) {
        numFries = 0;
    }
}

//checking for an empty imput or cancel response
if (numSoda === null || numSoda.trim() === '') {
    numSoda = 0;
} else {
    numSoda = parseInt(numSoda);
    //if input is not a number
    if (isNaN(numSoda)) {
        numSoda = 0;
    }
}

let hot_dog_total = Hot_dog_price * numDogs;
let fries_total = fries_price * numFries;
let soda_total = soda_price * numSoda;

round_off = (amount) => {
    amount *= 100; //shift decimals by 2
    amount += 0.5; //add 0.5 to round of up/bottom
    amount |= 0; //remove the extra decimals
    return amount / 100;
};

convert_to_string = (amount) => {
    let amt = amount.toString();

    if (amt.includes('.')) {
        //has decimals check if 1dp or two
        if (amt.split('.')[1].length === 1) {
            //only has one dp
            amt = amt + '0';
        }
    } else {
        amt = amt + '.00'; //add .00
    }

    return '$' + amt;
};

let total_order = hot_dog_total + fries_total + soda_total;
total_order = round_off(total_order);
console.log(convert_to_string(fries_total));

let discount = 0;

if (total_order > 25) {
    discount = 0.1 * total_order;
    discount = round_off(discount);
}

let total_after_discount = total_order - discount;
total_after_discount = round_off(total_after_discount);

let tax = 0.625 * total_order;
tax = round_off(tax);

amount_to_pay = total_after_discount + tax;
amount_to_pay = round_off(amount_to_pay);

let paymentInfo = document.getElementById('paymentInfo');

paymentInfo.innerHTML = `
                <div class="payment-box">
                    <div class="item-header">
                        <h2>Item</h2>
                        <h2>Qty</h2>
                        <h2>Price</h2>
                        <h2>Total</h2>
                    </div>
                    <div class="item-details">
                        <h2>Hotdogs</h2>
                        <h2>${numDogs}</h2>
                        <h2>${convert_to_string(Hot_dog_price)}</h2>
                        <h2>${convert_to_string(hot_dog_total)}</h2>
                    </div>
                    <div class="item-details">
                        <h2>Fries</h2>
                        <h2>${numFries}</h2>
                        <h2>${convert_to_string(fries_price)}</h2>
                        <h2>${convert_to_string(fries_total)}</h2>
                    </div>
                    <div class="item-details">
                        <h2>Soda</h2>
                        <h2>${numSoda}</h2>
                        <h2>${convert_to_string(soda_price)}</h2>
                        <h2>${convert_to_string(soda_total)}</h2>
                    </div>
                    <div class="amount-info">
                        <h2>Amount:</h2>
                        <h2>${convert_to_string(total_order)}</h2>
                    </div>
                    <div class="amount-info">
                        <h2>Discount:</h2>
                        <h2>${convert_to_string(discount)}</h2>
                    </div>
                    <div class="amount-info">
                        <h2>Total:</h2>
                        <h2>${convert_to_string(total_after_discount)}</h2>
                    </div>
                    <div class = "amount-info">
                        <h2>Tax:</h2>
                        <h2>${convert_to_string(tax)}</h2>
                    </div>
                    <div class="amount-info">
                        <h2>Balance:</h2>
                        <h2>${convert_to_string(amount_to_pay)}</h2>
                    </div>
                    <div class="button">
                        <a href="#"
                            ><button type="button" class="btn">
                                Place Order
                            </button></a
                        > 
                        <a href="#"
                            ><button type="button" class="btn">
                                Cancel Order
                            </button></a
                        >
                    </div>
                </div>
                `;
