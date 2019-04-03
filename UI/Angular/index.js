let jsClock=document.querySelector('#js-clock');
function jsTick(){
    let time=new Date().toLocaleTimeString();

    let ui=`
    <div class="alert alert-info">
    <span class="badge badge-danger">${time} </span>
    </div>
   `
  // alert(ui);
jsClock.innerHTML=ui;

}
setInterval(jsTick,1000);