var beg = 0;
var og = 0;
var pro = 0;
total = 0;
function showCart() {
    document.getElementById("notCart").style.display = "none";
    document.getElementById("cart").style.display = "block";
    document.getElementById("beg").innerHTML = beg;
    document.getElementById("og").innerHTML = og;
    document.getElementById("pro").innerHTML = pro;
    document.getElementById("total").innerHTML = "$" + total.toFixed(2);
}