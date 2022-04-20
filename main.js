const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const seconds = document.querySelector('.seconds');


setInterval(()=>{
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    if(m<10) m = '0'+m;
    if(s<10) s = '0'+s;
    hour.innerHTML = h;
    minute.innerHTML = m;
    seconds.innerHTML = s;
   
}, 1000)