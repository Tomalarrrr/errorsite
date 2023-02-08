$(document).ready(function(){

    // retrieve stored cart items from local storage
    var storedCart = JSON.parse(localStorage.getItem("cart"));
    
    // create array to hold cart items
    var cart = storedCart || [];

    // Get the button element
    var addToCartBtn = document.querySelector('.fa-fa-heart-o');
    
    // Set the data-id attribute for the button
    addToCartBtn.setAttribute('data-id', 'TS100');
    
    // add item to cart
    $(".add-to-cart").click(function(event){
        event.preventDefault();
        var name = $(this).data("name");
        var price = Number($(this).data("price"));
        var img = $(this).data("img");
        var id = $(this).data("id");
    
        addItemToCart(name, price, img, id);
        displayCart();
        localStorage.setItem("cart", JSON.stringify(cart));
    });
    
    // clear cart
    $(".clear-cart").click(function(){
        clearCart();
        displayCart();
        localStorage.setItem("cart", JSON.stringify(cart));
    });
    
    function displayCart(){
        var cartArray = listCart();
        var output = "";
        var totalPrice = 0;
        for(var i in cartArray){
            output += "<li style='padding-bottom: 15px; list-style: none;'>"
                     +"<img src='" + cartArray[i].img + "' width='100%;' style='max-height: 25vh; object-fit: cover;'>"
                     +"<div style='display: flex; background-color: #F5F5F5; padding: 5px; justify-content: space-around; '>"
                     +" <div style='align-self: center;'>Product: "+cartArray[i].name+"</div>"
                     +" <div style='align-self: center;'>Price: £"+cartArray[i].price+"</div>"
                     +" <div style='align-self: center;'>ID: "+cartArray[i].id+"</div>"
                     +" <button class='delete-item btn btn-danger' style='background-color: indianred;' data-name='"+cartArray[i].name+"'>Remove</button></div></li>";
                     totalPrice += cartArray[i].price;
                 }
                 $(".show-cart").html(output);
                 $(".total-count").html(countCart());
                 $(".total-price-display").html("Total Price: £" + totalPrice);
             }
             
             // delete item from cart
             $(".show-cart").on("click", ".delete-item", function(event){
                 var name = $(this).data("name");
                 removeItemFromCartAll(name);
                 displayCart();
                 localStorage.setItem("cart", JSON.stringify(cart));
             });
             
             // item count
             $(".show-cart").on("change", ".item-count", function(event){
                 var name = $(this).data("name");
                 var count = Number($(this).val());
                 itemCount(name, count);
                 displayCart();
                 localStorage.setItem("cart", JSON.stringify(cart));
             });
             
             // add item to cart
             function addItemToCart(name, price, img, id){
                 for(var i in cart){
                     if(cart[i].name === name){
                         return;
                     }
                 }
                 var item = {name: name, price: price, img: img, id: id, count: 1};
                 cart.push(item);
                 saveCart();
             }
             
                 // remove item from cart
                    function removeItemFromCart(name){
                        for(var i in cart){
                            if(cart[i].name === name){
                                cart[i].count --;
                                if(cart[i].count === 0){
                                    cart.splice(i, 1);
                                }
                                break;
                            }
                        }
                        saveCart();
                    }
                    
                    // remove all items with the same name from cart
                    function removeItemFromCartAll(name){
                        for(var i in cart){
                            if(cart[i].name === name){
                                cart.splice(i, 1);
                                break;
                            }
                        }
                        saveCart();
                    }
                    
                    // clear cart
                    function clearCart(){
                        cart = [];
                        saveCart();
                    }
                    
                    // count cart
                    function countCart(){
                        var totalCount = 0;
                        for(var i in cart){
                            totalCount += cart[i].count;
                        }
                        return totalCount;
                    }
                    
                    // total cart
                    function totalCart(){
                        var totalCost = 0;
                        for(var i in cart){
                            totalCost += cart[i].price * cart[i].count;
                        }
                        return totalCost.toFixed(2);
                    }
                    
                        // list cart
                        function listCart(){
                            var cartCopy = [];
                            for(var i in cart){
                                var item = cart[i];
                                var itemCopy = {};
                                for(var p in item){
                                    itemCopy[p] = item[p];
                                }
                                itemCopy.total = (item.price * item.count).toFixed(2);
                                cartCopy.push(itemCopy);
                            }
                            return cartCopy;
                        }
                        
                        // save cart
                        function saveCart(){
                            localStorage.setItem("cart", JSON.stringify(cart));
                        }
                        
                        // load cart
                        function loadCart(){
                            cart = JSON.parse(localStorage.getItem("cart"));
                        }
                        loadCart();
                        displayCart();
                    });

                        
