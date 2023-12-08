const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('nav-list');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active')
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active')
    })
}

function incrementQuantity() {
    document.getElementById('quantity1').stepUp();
}
  
 function decrementQuantity() {
    document.getElementById('quantity1').stepDown();
 }
  
function updateSubtotal() {
    var quantity = document.getElementById('quantity').value;
    var price = document.getElementById('price1').value;
    var subtotal = `$${parseFloat(quantity)} * ${parseFloat(price)}`;
    document.getElementById('subtotal').innerText = '$' + subtotal.toFixed(2);
    }

document.getElementById('quantity1').addEventListener('input', updateSubtotal);
 