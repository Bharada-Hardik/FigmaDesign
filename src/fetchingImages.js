export default async function fetchingImages(){
    const response = await fetch('https://food-order-webapp-5c12e-default-rtdb.firebaseio.com/data.json');
    const datax=await response.json();
    return datax['-OMlPSrmJeDrRi9Uoic_'];
}