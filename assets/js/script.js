let badge=document.getElementById('badge')
let incritment =document.getElementById('incritment')
let decriment =document.querySelector('#decriment')
let count= document.getElementById('count')

let counts=0
incritment.addEventListener('click', ()=>{
  counts++
  count.innerText = counts
})
decriment.addEventListener('click', ()=>{
 if (counts !== 0) {
  counts--
  count.innerText = counts
 }   
})  


const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')
const cartbody = document.getElementById('cart-body')
const addToCard = document.getElementById('add-to-card')
const activeImg=document.getElementsByClassName('active')
const price=document.getElementById('price')
console.log(activeImg);
if (toastTrigger) {
const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
toastTrigger.addEventListener('click', () => {
toastBootstrap.show()
})
}



const product ={
  name:'Fall Limited Edition Sneakers',
  price: 125.00,
  img:activeImg [5].src,
  removeProduct:'../images/icon-delete.svg'
  }
  
  function cartItems() {
    const cartItem=document.createElement('div')
    cartItem.classList.add('cart-item')
    if (counts === 0) {
    cartItem.innerHTML=`<p>You cart is Empty</p>`
  }
  if (counts > 0) {
    cartItem.innerHTML=`
    <div class="row">
    <div class="col d-sm-flex">
    <div class="col-sm-3"><img src='${product.img}' alt='${product.name}' style="width: 50px; height: 50px; object-fit: cover;"></div>
    <div class="col-sm-7">
      <h6> ${product.name} </h6>
      <p> ${product.price} X ${counts} = <b>${product.price * counts}</b></p>
      </div>
      <div class="col-sm-2">
        <img id="deleteProduct" class="deleteProduct text-center" src="${product.removeProduct}">
        </div>
    </div>
    <div class='checkoutbtn'>
    <button type="button" class="btn btn-warning w-100">Check Out</button>
    </div>
    </div>
    `
  }
  return cartItem; 
  }
  addToCard.addEventListener('click', ()=>{
    cartbody.innerHTML=''
  cartbody.appendChild(cartItems()) 
  badge.innerHTML=counts
  })
  
  cartbody.addEventListener('click', (event) => {
    if (event.target.classList.contains('deleteProduct')) {
      const removeProduct = event.target.closest('.cart-item');  
      if (removeProduct) {
        removeProduct.remove(); 
        cartbody.innerHTML= `<p>You cart is Empty</p>`
        badge.innerHTML=''
      }
    }
  });
  
  
  

