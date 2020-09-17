function toggle()
{
    document.getElementById("sidebar").classList.toggle('active');
}

var player=document.getElementById("player");
var my=document.getElementById("my");
function stop()
{
    player.style.display="none";
}
function play(a)
{
my.src=a;
palyer.style.display="block";
}


