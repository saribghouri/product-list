function createProduct() {
  let productName = document.querySelector("#productName").value;
  let productPrice = document.querySelector("#productPrice").value;
  let currencyCode = document.querySelector("#currencyCode").value;
  let numberOfSale = document.querySelector("#numberOfSale").value;
  let rating = document.querySelector("#rating").value;
  let isFreeShipping = document.querySelector("#isFreeShipping").value;
  let shopName = document.querySelector("#shopName").value;

  axios
    .post("http://localhost:3000/product", {
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
      document.querySelector("#message").innerHTML =
        error.response.data.message;
    });
}

async function getAllProducts() {
  try {
    const response = await axios.get("http://localhost:3000/products");
    console.log(response.data.data);

    let productsListDiv = document.querySelector("#productsListDiv");

    response.data.data.map((Product) => {
      productsListDiv.innerHTML += `<div >
        <p> ${Product.productName} </p>
        <p> 
        ${Product.currencyCode}
        ${Product.productPrice} 
        </p>
        <p> ${Product.numberOfSale || 0} sold </p>
        <p> ${
          Product.isFreeShipping ? "free shipping" : "no free shipping"
        } </p>
        <p>${Product.shopName}</p>
        <button id="deletebtn" onclick="${cardDelete()}"()>delete</button>
        </div>`;
    });
  } catch (error) {
    console.error(error);
  }
}
getAllProducts();

async function cardDelete() {
  try {
    let deletes = document.getElementById("deletebtn");
    const delet = await axios
      .delete("http://localhost:3000/products")

      .then(() => (deletes.innerHTML = "Delete successful"));

    let productsListDiv = document.querySelector("#productsListDiv");
  } catch (error) {
    deletes.parentElement.innerHTML = `Error: ${error.message}`;
    console.error("There was an error!", error);
  }
}
cardDelete();
