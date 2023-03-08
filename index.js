var customerName = 'bob';

//console.log(customerName); 

const leastFavoriteCustomer = 'Rob Lopez';

function upperCaseCustomerName(){

    //console.log('the upper case customer name function has been called');

     //customerName.toUpperCase(); 

    customerName = customerName.toUpperCase(); 

     //console.log('this is the customer name variable inside the uppercaseCustomerName function:', customerName.toUpperCase());
}

//upperCaseCustomerName(); 

//console.log(customerName);

function setBestCustomer(){
    bestCustomer = 'not bob';
}

function overwriteBestCustomer(){
    bestCustomer = 'maybe bob';
}

function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 'Rachel Seno';
}