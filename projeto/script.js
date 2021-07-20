//Seleção relógio digital
let digitalElement = document.querySelector('.digital');
//Seleção relógio digital


//ponteiros
let sElement = document.querySelector('.p_s');
let mElement = document.querySelector('.p_m');
let hElement = document.querySelector('.p_h');
//ponteiros


function updateClock(){
    //Seleção hor, min, seg.
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
    //Seleção hor, min, seg.


    //inserido relogio digital
    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`;
    //inserido relogio digital



    // Relógio analógico
        //adaptação circulo & horário
    let hDeg = ((360/12) * hour) - 90;
    let mDeg = ((360/60) * minute) - 90;
    let sDeg = ((360/60) * second) - 90;
        //adaptação circulo & horário


    hElement.style.transform = `rotate(${hDeg}deg)`;
    mElement.style.transform = `rotate(${mDeg}deg)`;
    sElement.style.transform = `rotate(${sDeg}deg)`;
    // Relógio analógico

    if(hour >= 06 && hour <= 12 ){
        document.body.style.background = '#10E0E6';
    }else if(hour > 12 && hour < 18){
        document.body.style.background = '#AEC219';
    }else{
        document.body.style.background = '#212121';
    };
    
};




//Funcão para adicionar o zero e deixar formatado
function fixZero(time){
    return time < 10 ? `0${time}` : time;
};
//Funcão para adicionar o zero e deixar formatado


setInterval(updateClock, 1000);
updateClock();
