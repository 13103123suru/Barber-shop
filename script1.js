var menubtn=document.getElementById('menubtn');
var navbar=document.getElementById('navbar');
var menu=document.getElementById('menu');
navbar.style.right=="-200px";
menubtn.onclick= function()
{
    if(navbar.style.right=="-200px")
    {
        navbar.style.right="0";
        menu.src="banner/close.png";
    }
    else
    {
    navbar.style.right="-200px";
    menu.src="banner/menu.png";
    }
}