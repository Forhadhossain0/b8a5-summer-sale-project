document.addEventListener("DOMContentLoaded", function () {
  const productCards = document.querySelectorAll(".card");
  const selectedProductsList = document.getElementById("selected-products-list");
  const totalPriceElement = document.getElementById("total-price");
  const go = document.getElementById('go')

  const purchaseButton = document.querySelector(".purchase-button");

  productCards.forEach((card) => {
      card.addEventListener("click", function () {
          // Enable the purchase button
          purchaseButton.disabled = false;
          purchaseButton.style.backgroundColor = '#D81B60';
      });
  });

  go.addEventListener("click", function () {
      // Redirect to index.html
      window.location.href = "index.html";
  });


  let selectedProducts = []; // Array to store selected products and their prices

  productCards.forEach((card) => {
      card.addEventListener("click", function () {
          const productName = card.querySelector(".product-name").textContent;
          const productPrice = parseFloat(card.querySelector(".product-price").textContent);

          selectedProducts.push({ name: productName, price: productPrice });

          updateSelectedProductsList();
          updateTotalPrice();
      });
  });

  function updateSelectedProductsList() {
      selectedProductsList.innerHTML = ""; // Clear the list

      selectedProducts.forEach((product, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${index + 1}. ${product.name} - ${product.price} Tk`;
        selectedProductsList.appendChild(listItem);
    });
  }

  function updateTotalPrice() {
      const totalPrice = selectedProducts.reduce((sum, product) => sum + product.price, 0);
      totalPriceElement.innerText = totalPrice.toFixed(2); // Update total price

  }


      // Existing code ...

const couponCodeInput = document.getElementById("coupon-code-input");
const applyButton = document.getElementById("apply-button");
let isCouponApplied = false;
  
couponCodeInput.addEventListener("input", function () {
          if (couponCodeInput.value === "MYDISCOUNT") {
              applyButton.style.backgroundColor = '#D81B60';
              applyButton.disabled = false;
              isCouponApplied = true;
          } 
          else {
              applyButton.disabled = true;
              isCouponApplied = false;
          }
          
      });
  
      applyButton.addEventListener("click", function () {
          if (isCouponApplied) {
              applyDiscountToProducts();
              couponCodeInput.value = " ";
              applyButton.style.backgroundColor = 'gray';
              
          }
      });
  
      function applyDiscountToProducts() {
        const discountPercentage = 20;
        const discountElement = document.querySelector(".discount");
        const finalTotalElement = document.getElementById("final-total");
    
        
        if (selectedProducts.length > 0) {
            const totalPrice = selectedProducts.reduce((sum, product) => sum + product.price, 0);
            const discountAmount = (totalPrice * discountPercentage) / 100;
            const finalTotal = totalPrice - discountAmount;
    
            discountElement.textContent = discountAmount.toFixed(2);
            
            if (discountAmount > 0) {
                finalTotalElement.textContent = finalTotal.toFixed(2);
            } else {
                finalTotalElement.textContent = totalPrice.toFixed(2);
            }
        }
    }
    


});

