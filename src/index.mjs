import "./styles.css";

// document.querySelector(".container").innerHTML = `
// <h1>CountDownTimer</h1>
// `;

(function(){
  var hour = document.querySelector(".hour");
  var min = document.querySelector(".minute");
  var sec = document.querySelector(".sec");

  var startBtn = document.querySelector(".start");
  var stopBtn = document.querySelector(".stop");
  var resetBtn = document.querySelector(".reset");

  var countdowntimer = null;

  startBtn.addEventListener("click", function(){
    if( hour.value==0 && min.value==0 && sec.value==0 ) return;

    function startInterval() {
      startBtn.style.display = "none";
      stopBtn.style.display = "initial";

      countdowntimer = setInterval(()=>{
        timer();
      },1000)

    };
    startInterval();
  })
    function stopInterval(state){
      startBtn.innerHTML = state === "pause"? "Continue":"start";
      startBtn.style.display = "initial";
      stopBtn.style.display = "none";
      clearInterval(countdowntimer);
    };

    function timer (){
      if(min.value>60){
        hour.value++;
        min.value = min.value - 60;
      }
      if(sec.value>60){
        min.value++;
        sec.value = sec.value - 60;
      }
      if(hour.value==0 && min.value==0 && sec.value==0){
      hour.value="";
      min.value="" ;
      sec.value="";
      stopInterval();
      }else if(sec.value) {
      sec.value = `${sec.value<=10?"0":""}${sec.value - 1}`;
      }else if(min.value){
        sec.value = 59;
        min.value = `${min.value<=10?"0":""}${min.value - 1}`;
      }else if(hour.value){
        hour.value = `${hour.value<=10?"0":""}${hour.value - 1}`;
        min.value = 60;
      }
    };

    stopBtn.addEventListener("click", function(){
      stopInterval("pause");
    })
    resetBtn.addEventListener("click", function(){
      stopInterval();
      hour.value="";
      min.value="" ;
      sec.value="";
    })

})()