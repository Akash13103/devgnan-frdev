let restaurantName = "Srinidhi";
let fooditemName="Biryani";
let fooditemPrice=200;
let customerName="Srinu";
let isDeliveryNeeded="No";
let quantity=2;
function calculateTotalPrice(){
    let totalPrice=0;
    totalPrice=fooditemPrice*quantity;
    console.log("Restaurant:",restaurantName);
    console.log("Customer:",customerName);
    console.log("Item:",fooditemName);
    console.log("Quantity:",quantity);
    console.log("Price per Item:",fooditemPrice);
    console.log("Total:",totalPrice);
    if(totalPrice>100){
        isDeliveryNeeded="Yes";
        console.log("Delivery Needed:",isDeliveryNeeded);
    }
    else{
        isDeliveryNeeded="No";
        console.log("Delivery Needed:",isDeliveryNeeded);
    }
}
calculateTotalPrice();