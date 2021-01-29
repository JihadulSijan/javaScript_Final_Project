// Vat 
const vat = 0.15 // Total Vat 15%
// For The First Item
const removeOne = document.querySelector('#remove-one');//remove
const priceofFirstProduct = 1200;
const elementPriceofFirstProduct = document.querySelector('#price-one');//price
const plusItemForFirstProduct =document.querySelector('#increment-one');//plus
const minusItemForFirstProduct = document.querySelector('#decrement-one');//minus
const quantityOfFirstItem = document.querySelector('#quantity-one');// quantity

// For The Second Item 
const priceofSecondProduct = 59;
const removeTwo = document.querySelector('#remove-two');
const elementPriceofSecondProduct = document.querySelector('#price-two');
const plusItemForSecondProduct =document.querySelector('#increment-two');
const minusItemForSecondProduct = document.querySelector('#decrement-two');
const quantityOfSecondItem = document.querySelector('#quantity-two');

// Check Out Section
const elementVat = document.querySelector('#vat');
const elementSubTotal =  document.querySelector('#subtotal');
const elementTotal = document.querySelector('#total');

// Function For calculation
function calcSubTotal(){
   return (priceofFirstProduct*parseFloat(quantityOfFirstItem.value))+(priceofSecondProduct*parseFloat(quantityOfSecondItem.value));
}

function calcVat(subTotal) {
    return subTotal*vat;
}
function calTotal(subTotal,vatAmount) {
    return subTotal + vatAmount;
}
function initialProducts() {
    elementPriceofFirstProduct.textContent = priceofFirstProduct;
    elementPriceofSecondProduct.textContent = priceofSecondProduct;
    var subTotal = calcSubTotal();
    var vatAmount = calcVat(subTotal);
    elementSubTotal.textContent = subTotal;
    elementVat.textContent = vatAmount;
    elementTotal.textContent = calTotal(subTotal,vatAmount);
}
initialProducts();

 // First Product Increament
plusItemForFirstProduct.addEventListener('click',function(){
    const newAmountofFirstpProduct = parseFloat(quantityOfFirstItem.value)+1;
    quantityOfFirstItem.value = newAmountofFirstpProduct;
    // const newPriceOfFirstProduct = newAmountOfFirstProduct * priceofFirstProduct;

    const subTotal = calcSubTotal();
    const vatAmount = calcVat(subTotal);
    const total = calTotal (subTotal,vatAmount);

    elementSubTotal.textContent = subTotal;
    elementVat.textContent = vatAmount;
    elementTotal.textContent = total;
});

// first Product Decreament
minusItemForFirstProduct.addEventListener('click',function(){
    const newAmountofFirstpProduct = parseFloat(quantityOfFirstItem.value)-1;
    if(newAmountofFirstpProduct>=0) {
        quantityOfFirstItem.value = newAmountofFirstpProduct;

    }
    const subTotal = calcSubTotal();
    const vatAmount = calcVat(subTotal);
    const total = calTotal (subTotal,vatAmount);

    elementSubTotal.textContent = subTotal;
    elementVat.textContent = vatAmount;
    elementTotal.textContent = total;
})

// Second Product Increament 

plusItemForSecondProduct.addEventListener('click',function(){
    const newAmountofSecondProduct = parseFloat(quantityOfSecondItem.value)+1;
    quantityOfSecondItem.value = newAmountofSecondProduct;

    const subTotal = calcSubTotal();
    const vatAmount = calcVat(subTotal);
    const total = calTotal(subTotal,vatAmount);

    elementSubTotal.textContent = subTotal;
    elementVat.textContent = vatAmount;
    elementTotal.textContent = total;
})

// Second Product Decreament 
minusItemForSecondProduct.addEventListener('click',function(){
    const newAmountofSecondProduct = parseFloat(quantityOfSecondItem.value)-1;
    if(newAmountofSecondProduct>=0) {
        quantityOfSecondItem.value = newAmountofSecondProduct;
    }

    const subTotal = calcSubTotal();
    const vatAmount = calcVat(subTotal);
    const total = calTotal(subTotal,vatAmount);

    elementSubTotal.textContent = subTotal;
    elementVat.textContent = vatAmount;
    elementTotal.textContent = total;
})

// Removing First Product
removeOne.addEventListener('click',function(){
    const firstCart = document.querySelector('.cart-item:nth-child(1)');
    firstCart.style.display = 'none';

    quantityOfFirstItem.value = 0;

    const subTotal = calcSubTotal();
    const vatAmount = calcVat(subTotal);
    const total = calTotal(subTotal,vatAmount);

    elementSubTotal.textContent = subTotal;
    elementVat.textContent = vatAmount;
    elementTotal.textContent = total;

})

// Removing Second Product
removeTwo.addEventListener('click',function(){
    const secondCart = document.querySelector('.cart-item:nth-child(2)');
    secondCart.style.display = 'none';

    quantityOfSecondItem.value = 0;

    const subTotal = calcSubTotal();
    const vatAmount = calcVat(subTotal);
    const total = calTotal(subTotal,vatAmount);

    elementSubTotal.textContent = subTotal;
    elementVat.textContent = vatAmount;
    elementTotal.textContent = total;
})

const checkOutButton = document.querySelector('.check-out');
checkOutButton.addEventListener('click',function(){

    const firstCart = document.querySelector('.cart-item:nth-child(1)');
    firstCart.style.display = 'none';

    const secondCart = document.querySelector('.cart-item:nth-child(2)');
    secondCart.style.display = 'none';

    const subTotal = calcSubTotal();
    const vatAmount = calcVat(subTotal);
    const total = calTotal(subTotal,vatAmount);
    if((subTotal==0)||(vatAmount==0)||total==0) {
        alert("Hello, Mr.'X'\n Please, place order first!")
    }
    else {
        alert("Hello, Mr.'X'\n Your Order Placed Successfully!")
    }

})