function klirosi(){
var n;
var p=new Array();
for (var i=1;i<=6;i++) {
  do{
n=Math.floor(Math.random()*49)+1;
  }while (p.indexOf(n)!=-1);
  p.push(n);
}
var ex=document.querySelector("#exada");
ex.innerHTML=p;
}