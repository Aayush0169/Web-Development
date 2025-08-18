let bagItems;
onLoad();
function onLoad(){
    displayItems();
    let bagItemStr = localStorage.getItem('bagItems');
    bagItems = bagItemStr ? JSON.parse(bagItemStr) : [];
    displayBagIcon();
}
function addToBag(itemId){
    bagItems.push(itemId);
    localStorage.setItem('bagItems' , JSON.stringify(bagItems));
    displayBagIcon();
};
function displayBagIcon(){
    let bagItemCount = document.querySelector('.bag-item-count')
    if (bagItems.length>0){
        bagItemCount.style.visibility = 'visible';    
        bagItemCount.innerText = bagItems.length;
    } else{
        bagItemCount.style.visibility = 'hidden';
    }
};
function displayItems(){
let itemsContainerElements = document.querySelector('.items-container');
if(!itemsContainerElements){
    return;
}
let innerHTML ='';
items.forEach(item => {
    innerHTML +=`<div class="item-container">
    <img class="item-image" src="${item.item_img}" alt="item image">
    <div class="rating">
        ${item.ratings.stars}⭐ | ${item.ratings.noOfReviews}
    </div>
    <div class="company-name">
        ${item.company_name}
    </div>
    <div class="item-name">${item.item_name}</div>
    <div class="price">
        <span class="current-price"> ₹ ${item.current_price} </span>
        <span class="orginal-price"> ₹ ${item.orginal_price}</span>
        <span class="discount"> (${item.discount}% OFF) </span>
    </div>
    <button class="btn-add-bag" onclick="addToBag(${item.id});">Add to cart</button>
    </div>`
});
itemsContainerElements.innerHTML= innerHTML;};


