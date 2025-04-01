let selectedProduct = "";

function buy(product, price) {
    selectedProduct = product;
    document.querySelector('.product').style.display = 'none';
    document.querySelector('#payment-screen').style.display = 'block';
}

function paymentOption(paymentType) {
    if (paymentType === 'pix') {
        document.querySelector('#payment-screen').style.display = 'none';
        document.querySelector('#pix-screen').style.display = 'block';
    } else if (paymentType === 'card') {
        document.querySelector('#payment-screen').style.display = 'none';
        document.querySelector('#card-screen').style.display = 'block';
    }
}

function finishPurchase() {
    alert(`Compra do ${selectedProduct} finalizada com sucesso!`);
    resetPage();
}

document.getElementById('card-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert(`Compra do ${selectedProduct} com cartão finalizada com sucesso!`);
    resetPage();
});

function resetPage() {
    document.querySelector('#pix-screen').style.display = 'none';
    document.querySelector('#card-screen').style.display = 'none';
    document.querySelector('#payment-screen').style.display = 'none';
    document.querySelector('#product1').style.display = 'block';
    document.querySelector('#product2').style.display = 'block';
}