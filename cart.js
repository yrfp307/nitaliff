const incrementQuantity = (param) => {
    let valueElm = document.querySelector(`.quantity.${param}`);
    let value = document.querySelector(`.quantity.${param}`).innerText;
  
    value++;
    valueElm.innerHTML = value;
    setTotal();  
}
  
const decrementQuantity = (param) => {
    let valueElm = document.querySelector(`.quantity.${param}`);
    let value = document.querySelector(`.quantity.${param}`).innerText;
  
    value--;
    if(value < 0 ){
      value = 0;
      valueElm.innerHTML = value;
      showPayment();    
    } else {
      valueElm.innerHTML = value;
      setTotal();  
    }
}
  
let setTotal = () => {
    for(let i=1; i<=4; i++){
      eval(`menu${i} = document.querySelector('.quantity.menu-${i}').innerText;`);
    }
    showPayment();
}

let showPayment = () => {
    let total = (menu1*15000)+(menu2*12000)+(menu3*20000)+(menu4*3000);
    let totalElm =  document.querySelector('.total');

    totalElm.innerHTML = `
    Karedok : ${menu1} <br>
    Pecel lele : ${menu2} <br>
    Lontong sayur : ${menu3} <br>
    Es teh manis : ${menu4} <br>
    <hr>
    Total : Rp ${total}
  `;
}
