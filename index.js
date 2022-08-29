function createProduct() {

    let productName = document.querySelector("#productName").value;
    let productPrice = document.querySelector("#productPrice").value;
    let currencyCode = document.querySelector("#currencyCode").value;
    let numberOfSale = document.querySelector("#numberOfSale").value;
    let rating = document.querySelector("#rating").value;
    let isFreeShipping = document.querySelector("#isFreeShipping").value;
    let shopName = document.querySelector("#shopName").value;


    axios.post('http://localhost:3000/product', {
        productName,
        productPrice,
        currencyCode,
        numberOfSale,
        rating,
        isFreeShipping,
        shopName,
    })
        .then(function (response) {
            console.log(response.data);
            document.querySelector("#message").innerHTML = response.data.message;
        })
        .catch(function (error) {
            console.log(error.response.data);
            document.querySelector("#message").innerHTML = error.response.data.message;
        });
}

