console.log('hello');
var doing;
function inc() {
  var inc=document.getElementById('countdown').innerHTML;
  inc++;
  document.getElementById('countdown').innerHTML=inc;

}
function dec() {

  var dec=document.getElementById('countdown').innerHTML;
  if(dec!=0)
  {
  dec--;
  }
  else {
    alert('Reached 0');
    stop();

  }
  document.getElementById('countdown').innerHTML=dec;

}
function start() {
  var s=document.getElementById('countdown').innerHTML;
  doing=setInterval(dec,1000);
}
function stop(){
  clearInterval(doing);
}
function reset() {
  document.getElementById('countdown').innerHTML=25;

}
