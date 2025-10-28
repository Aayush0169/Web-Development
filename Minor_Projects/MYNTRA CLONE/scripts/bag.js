const CONVENIENCE_FEES =99;
let bagItemObjects;
onLoad();

function onLoad(){
    loadBagItemsObjects();
    displayBagItems();
    displayBagSummary();
}
function displayBagSummary(){
    let bagSummaryElement = document.querySelector('.bag-summary');
    let totalItem =bagItemObjects.length;
    let totalMRP = 0;
    let totalDiscount = 0;

    bagItemObjects.forEach(bagItem => {
        totalMRP += bagItem.orginal_price;
        totalDiscount += bagItem.orginal_price - bagItem.current_price;
    });

    let finalPayment = totalMRP - totalDiscount + CONVENIENCE_FEES;

    bagSummaryElement.innerHTML = `<div class="bag-details-container">
    <div class="price-header">PRICE DETAILS (${totalItem} Items) </div>
    <div class="price-item">
      <span class="price-item-tag">Total MRP</span>
      <span class="price-item-value"> ₹ ${totalMRP}</span>
    </div>
    <div class="price-item">
      <span class="price-item-tag">Discount on MRP</span>
      <span class="price-item-value priceDetail-base-discount">- ₹ ${totalDiscount}</span>
    </div>
    <div class="price-item">
      <span class="price-item-tag">Convenience Fee</span>
      <span class="price-item-value">Rs 99</span>
    </div>
    <hr>
    <div class="price-footer">
      <span class="price-item-tag">Total Amount</span>
      <span class="price-item-value"> ₹ ${finalPayment}</span>
    </div>
  </div>
  <button class="btn-place-order">
    <div class="css-xjhrni">PLACE ORDER</div>
  </button>`;
}

function loadBagItemsObjects() {
    bagItemObjects = bagItems.map(itemId => {
        for (let i=0; i < items.length; i++){
            if (itemId == items[i].id){
                return items[i];
            }
        }
    });
    console.log(bagItemObjects);
}

function displayBagItems(){
    let containerElement = document.querySelector('.bag-items-container');
    let innerHTML='';
    bagItemObjects.forEach(bagItem => {
        innerHTML += generateItemsHTML(bagItem);
    });
    containerElement.innerHTML = innerHTML;
}

function removeFromBag(itemId){
    bagItems = bagItems.filter(bagitemId => bagitemId != itemId);
    localStorage.setItem('bagItems' , JSON.stringify(bagItems));
    loadBagItemsObjects();
    displayBagIcon();
    displayBagItems();
    displayBagSummary();
}

function generateItemsHTML(item){
    return `<div class="bag-item-container">
    <div class="item-left-part">
      <img class="bag-item-img" src="../${item.item_img}">
    </div>
    <div class="item-right-part">
      <div class="company">${item.company_name}</div>
      <div class="item-name">${item.item_name}</div>
      <div class="price-container">
        <span class="current-price">₹ ${item.current_price}</span>
        <span class="orginal-price">₹ ${item.orginal_price}</span>
        <span class="discount">(${item.discount}% OFF)</span>
      </div>
      <div class="return-period">
        <span class="return-period-days">${item.return_period} days</span> return available
      </div>
      <div class="delivery-details">
        Delivery by
        <span class="delivery-details-days">${item.delivery_date}</span>
      </div>
    </div>

    <div class="remove-from-cart" onclick="removeFromBag(${item.id})">X</div>
  </div>`;
}