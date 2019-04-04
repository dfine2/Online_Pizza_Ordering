/*==========================================
        PIZZA-BASE OPTIONS
==========================================*/
window.onload = function(){
       var toppingPrice = document.getElementsByClassName("topping_price");
       toppingPrice.style.display="none";
}
//Size button clicked by default
window.onload = function(){
        document.getElementById("size_button").focus();
}


function baseDisplay(id) //Load relevant window
{
        var source = document.getElementById(id);
        document.getElementById('base_display').innerHTML = source.innerHTML;
}


/*=============================================
        TOPPINGS OPTIONS
=============================================*/


function countToppings(cname)
{       
        var count= 0;
        var array = document.getElementsByClassName(cname);
        for (var i=0; i<array.length;++i)
        {
                if (array[i].checked==true)
                {
                        count++;
                }
        }
        
        return count;
}

function displayToppingPrice(cname)
{
        switch (cname)
        {
                case "meat":
                        var labels = document.getElementById("meat_form").getElementsByClassName("clabel");
                        break;
                case "veg":
                        var labels = document.getElementById("veg_form").getElementsByClassName("clabel");
                        break;
                default:
                        break;
        }
        var count= countToppings(cname);
        if (count > 1)
        {
                for (var i=0; i<labels.length;++i)
                {
                        if (labels[i].getElementsByTagName("input").checked == true)
                        {
                                labels[i].getElementsByClassName("topping_price").style.removeProperty("display");
                        }
                }
        }
}

function toppingsCharge(cname)
{
        var price = 0;
        var count = countToppings(cname);
        if (count > 1)
        {
                price += count;
        }
        displayToppingPrice(cname);
}

