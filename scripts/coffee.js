let shakes = 3;
let shake = shakes
const delay1 = 150;
const delay2 = 4000;

const shake_RL = function(noStop){
  const delay = noStop ? 1 : delay1
  setTimeout(()=>{
    mugImg.style.transform = "rotate(-7deg)";
    setTimeout(()=>{
      if (shake > 0) {
        mugImg.style.transform = "rotate(2deg)";
        shake--
        shake_RL()
      } else {
        mugImg.style.transform = "rotate(0deg)";
        coffeeContainer.style.width = "40px"
        setTimeout(()=>{
          shake = shakes
          coffeeContainer.style.width = "45px"
          shake_RL(true)
        },delay2)
      }
    },delay1)
  },delay)
}

setTimeout(()=>{
  coffeeContainer.style.opacity = "1"
},500)

setTimeout(()=>{
  shake_RL(true)
},2000)
