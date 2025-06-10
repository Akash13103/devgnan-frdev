let restaurantName = "Srinidhi";
let fooditemName="Biryani";
let fooditemPrice=200;
let customerName="Srinu";
let isDeliveryNeeded="No";
let deliveryArea="ShantiNagar-Palakol";
let estimatedDeliveryTime="30 mins";
let deliveryCharges=40
let quantity=2;
function calculateTotalPrice(){
    let SubTotalPrice=0;
    let totalPrice=0;
    SubTotalPrice=fooditemPrice*quantity;
    totalPrice=SubTotalPrice+deliveryCharges;
    console.log("Restaurant:",restaurantName);
    console.log("Customer:",customerName);
    console.log("Item:",fooditemName);
    console.log("Quantity:",quantity,"plates");
    console.log("Price per Item:₹",fooditemPrice);
    console.log("SubTotal:₹",SubTotalPrice);
    console.log("Delivery to:",deliveryArea);
    console.log("Delivery charges:₹",deliveryCharges);
    console.log("Total:₹",totalPrice);
    if(totalPrice>100){
        isDeliveryNeeded="Yes";
        console.log("Delivery kavala:","Yes mama");
    }
    else{
        isDeliveryNeeded="No";
        console.log("Delivery Needed:","Vadhu tarvatha choodham");
    }
    console.log("Estimated Time:",estimatedDeliveryTime);
}
calculateTotalPrice();