// variables
let TestText = document.querySelector(".test-text");
let holder = document.querySelector(".holder");
let InputText = document.getElementById("text-input");
let Tmili = document.querySelector(".mili");
let Tsecond = document.querySelector(".second");
let Tminute = document.querySelector(".minute");
let reset = document.querySelector(".reset");
let mili=0;
let second=0;
let minute=0;
let TimerState = false;
let inter;
// timer function
function timer() {
     inter = setInterval(
        function(){
            mili++;
            if(mili >= 100) {
                mili = 0;
                second++;
            }
            if(second < 10) { Tsecond.innerHTML = "0"+second; }
            else {Tsecond.innerHTML = second;}
            if(second >= 60) {
                second = 0;
                minute++;
            }
            if(minute < 10) { Tminute.innerHTML = "0"+minute; }
            else {Tminute.innerHTML = minute;}
            Tmili.innerHTML = mili;
        } , 10
    );
}
let tlen = TestText.innerText.length;
for (let i =0; i<tlen; i++){
    let character = TestText.innerText[i];
    holder.innerHTML += `<span class='char'>${character}</span>`;
};
let lets = document.querySelectorAll(".char");
function corect() {
    for (let i=0; i < lets.length; i++){
        if(lets[i].innerHTML == " ") {
            lets[i].style.width="8px";
        }
    };
}
corect();
// start timer
InputText.addEventListener("keypress" , function(){
    if(InputText.value.length == 0 && TimerState == false) {
        timer();
        TimerState = true;
    }
});
// check text match
InputText.addEventListener("keyup" , function(){
    if(TestText.innerText === InputText.value) {
        clearInterval(inter);
        holder.style.backgroundColor = "lightgreen";
    }
    let check = TestText.innerText.substring(0,InputText.value.length);
    if(check == InputText.value && InputText.value != "" ){
        InputText.style.borderColor = "lightgreen";
    }
    else {InputText.style.borderColor = "tomato";}
    if(InputText.value == "" && InputText.value.length == 0) {
        InputText.style.borderColor = "lightgray";
    }
});
// reset button
reset.addEventListener("click" , function(){
    clearInterval(inter);
    InputText.value="";
    mili = 0;
    second = 0;
    minute = 0;
    Tsecond.innerText = "00";
    Tmili.innerText = "00";
    Tminute.innerText = "00";
    TimerState = false;
    holder.style.backgroundColor = "white";
    InputText.style.borderColor = "lightgray";
});