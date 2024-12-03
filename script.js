document.addEventListener("DOMContentLoaded",()=>{
    const products =
    [
        {id:1, name:"Product 1",price:19.19},
        {id:2, name:"Product 2",price:29.79},
        {id:3, name:"Product 3",price:39.9},
    ]

    const productList=document.getElementById("product-list");
    const cartItems=document.getElementById("cart-items");
    const emptyCartMessage=document.getElementById("empty-cart");
    const cartTotalMessage=document.getElementById("cart-total");
    const totalPriceDisplay=document.getElementById("total-price");
    const checkoutBtn=document.getElementById("checkout-btn");

   

    products.forEach((product)=>{
        const productDiv =document.createElement("div")
        productDiv.classList.add("product");
        productDiv.innerHTML=`
            <span>${product.name} - $${product.price.toFixed(2)}</span>
            <button data-id="${product.id}">Add to cart</button>
        `;
        productList.appendChild(productDiv)
    });

    productList.addEventListener("click",(e)=>{
        if(e.target.tagName ==="BUTTON")
        {
            const productId = parseInt(e.target.getAttribute("data-id"));
            const product = products.find((p)=>p.id===productId)
            addToCart(product)

        }
    });

    const cart=[];//Array to add products for cart
    //Add To Cart Function
    function addToCart(product)
    {
        cart.push(product);
        renderCart();
    }
    function renderCart()
    {
        cartItems.innerText="";
        let totalPrice =0;
        if(cart.length>0)
        {
            emptyCartMessage.classList.add("hidden");
            cartTotalMessage.classList.remove("hidden");
            cart.forEach((items,index)=>
            {
                totalPrice+=items.price;
                const cartItem=document.createElement("div");
                cartItem.innerHTML=`${items.name} - $${items.price.toFixed(2)}
                `;
                cartItems.appendChild(cartItem)
                totalPriceDisplay.textContent=`${totalPrice.toFixed(2)}`;
            });
        }else{
            emptyCartMessage.classList.remove("hidden");
            totalPriceDisplay.textContent=`$0.00`;
        }
    }
    checkoutBtn.addEventListener("click",()=>{
        cart.length=0;
        alert("Checkout Successfully");
        renderCart();

    });
});