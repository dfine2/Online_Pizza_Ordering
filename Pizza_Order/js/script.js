/*==========================================
        PIZZA-BASE OPTIONS
==========================================*/

//Size button clicked by default
window.onload = function(){
        document.getElementById("size_button").focus();
}


function baseDisplay(id)
{
        document.getElementById(id).style.display = "block";
}
function baseHide(id1, id2, id3)
{
        document.getElementById(id1).style.display = "none";
        document.getElementById(id2).style.display = "none";
        document.getElementById(id3).style.display = "none";
}
/*function baseDisplay(id) //Load relevant window
{
        var source = document.getElementById(id);
        document.getElementById('base_display').innerHTML = source.innerHTML;
}*/


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

function toppingsCharge(cname)
{
        var price = 0;
        var count = countToppings(cname);
        if (count > 1)
        {
                price += count;
        }
}

