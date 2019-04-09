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

/*============================================
                 RECEIPT
==============================================*/

function createReceipt(){
        var body = document.getElementsByClassName("modal-body")[0];
        body.innerHTML = "";
        var tbl = document.createElement("table");
        var bases = fillBaseItems();
        var basePrices = fillBasePrice()
        var meats = fillToppingsItems("meat");
        var vegetables = fillToppingsItems("veg");
        var toppings = meats.concat(vegetables);
        var vegPrice = fillToppingsPrices("veg");
        var meatPrice = fillToppingsPrices("meat");
        var toppingPrice = meatPrice.concat(vegPrice);
        var total = 0.00;
        
        for (var i=0;i<(bases.length + toppings.length+1);i++){
                var  row = document.createElement("tr");
        

                for (var j=0;j<2;j++){
                        var cell = document.createElement("td");
                        if (j==0){
                                if (i<4){
                                        cell.innerHTML = (bases[i]);
                                 
                                }
                                else if (i==(bases.length + toppings.length)){
                                        cell.innerHTML = "Total";
                                        cell.className = "receipt_total";
                                }
                                else{
                                       cell.innerHTML = (toppings[i-4]);
                                }
                        }
                       
                        row.appendChild(cell);
                }
                tbl.appendChild(row);
        }              
        

        body.appendChild(tbl);
        tbl.setAttribute("border", "2");
        var mTracker = 0;
        var vTracker = 0;

        for (var i=0;i<bases.length+toppings.length+1;i++){
                var x = tbl.rows[i].cells[0].innerHTML;
                if (i<4){
                tbl.rows[i].cells[1].innerHTML = ("$" + basePrices[i] + ".00");
                tbl.rows[i].cells[1].className = "receipt_price";
                total += basePrices[i];
                }
                else if (i==(bases.length + toppings.length)){
                        tbl.rows[i].cells[1].innerHTML = ("$" + total + ".00");
                        tbl.rows[i].cells[1].className = "receipt_total receipt_price";
                        }
                else if (meats.includes(x) == true){
                        tbl.rows[i].cells[1].innerHTML = ("$" + meatPrice[mTracker] + ".00");
                        tbl.rows[i].cells[1].className = "receipt_price";
                        total += meatPrice[mTracker]
                        mTracker++;
                }
                else{
                        tbl.rows[i].cells[1].innerHTML = ("$" + vegPrice[vTracker] + ".00");
                        tbl.rows[i].cells[1].className = "receipt_price";
                        total += vegPrice[vTracker];
                        vTracker++;
                }
                
                
        }

}

function fillBaseItems(){
        
        //Size 

        var sizeArray = document.getElementsByName("size");
        for (var i=0; i<sizeArray.length; ++i){
                if (sizeArray[i].checked == true){
                        var size = sizeArray[i].value;
                }
               
        }
        if (size == undefined){
                alert("Please select a size option.");
        }
        console.log(size);

        //Crust

        var crustArray = document.getElementsByName("crust");
        for (var i=0; i<crustArray.length; ++i){
                if (crustArray[i].checked == true){
                        var crust = crustArray[i].value;
                }
        }
        if (crust==undefined){
                alert("Please select a crust option.")
        }
        console.log(crust);

        //Sauce

        var sauceArray = document.getElementsByName("sauce");
        for (var i=0; i<sauceArray.length; ++i){
                if (sauceArray[i].checked == true){
                        var sauce = sauceArray[i].value;
                }
                
        }
        if (sauce==undefined){
                alert("Please select a sauce option.")
        }
        console.log(sauce);

        //Cheese

        var cheeseArray = document.getElementsByName("cheese");
        for (var i=0; i<cheeseArray.length; ++i){
                if (cheeseArray[i].checked == true){
                        var cheese = cheeseArray[i].value;
                }
        }
        if (cheese==undefined){
                alert("Please select a cheese option.")
        }
        console.log(cheese);

        var baseArray = [size, crust, sauce, cheese];
        return baseArray;
}

function fillBasePrice(){

        //Size

        var sizeArray = document.getElementsByName("size");
        var sizePriceArray = [6, 10, 14, 16];
        for (var i=0; i<sizeArray.length; i++){
                if (sizeArray[i].checked == true){
                        var sizePrice = sizePriceArray[i];
                }
        }
       

        //Crust

        var crustArray = document.getElementsByName("crust");
        var crustPriceArray = [0,0,3,0,0];
        for (var i=0; i<crustArray.length; i++){
                if(crustArray[i].checked == true){
                        var crustPrice = crustPriceArray[i];
                }
        }
        //Cheese

        var cheeseArray = document.getElementsByName("cheese");
        var cheesePriceArray = [0, 3, 0];
        for (var i=0; i<cheeseArray.length; i++){
                if (cheeseArray[i].checked == true){
                        var cheesePrice = cheesePriceArray[i];
                }
        }
        
        var basePrice = [sizePrice, crustPrice, 0, cheesePrice];
        return basePrice;

}


function fillToppingsItems(cname){

        var array = document.getElementsByClassName(cname);
        var checked = [];
        for (var i=0; i<array.length; i++){
                if (array[i].checked == true){
                        checked.push(array[i].value);
                }
        }
        return checked;
}

function fillToppingsPrices(cname){
        var checked = fillToppingsItems(cname);
        var toppingPrice = [0];
        var i = 0
        while (i < checked.length){
                toppingPrice.push(1);
                i++;
        }
        console.log (toppingPrice);
        return toppingPrice;
}



