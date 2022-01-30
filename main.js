const btn =  document.querySelector(".btn");
const title = document.querySelector("h3");
const images = document.querySelectorAll(".image");
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const element = document.createElement("img");
const elementRight = document.createElement("img");
const hisob = document.querySelectorAll(".top-subtext");
let i = 0;
let j = 0;
let k = 0;

element.classList.add("img");
elementRight.classList.add("img");

function random(min,max){
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min; 

    return result;
}

btn.addEventListener("click", e =>{
    title.textContent = "Variantlardan birini tanlang";
    btn.classList.add("btn-active");
    for(let key of images){
        key.classList.remove("image");
        key.classList.add("img");
    }
    left.classList.add("left-active");
    right.classList.add("right-active");



});


images[0].addEventListener("click", e =>{
   element.src = images[0].src;
   left.appendChild(element);

 setTimeout(put, 200);

 function put(){
    let index = random(0, images.length-1);
    elementRight.src = images[index].src;
    right.appendChild(elementRight);
   
    
    if(elementRight.src == images[0].src){
        j += 1;
        hisob[1].textContent = j;
    }
    else if(elementRight.src == images[1].src){
        k += 1;
        hisob[2].textContent = k;
    }
    else{
        i += 1;
        hisob[0].textContent = i;
    }
 }
 
 
});

images[1].addEventListener("click", e =>{
    element.src = images[1].src;
    left.appendChild(element);

    setTimeout(put,500);

    function put(){
        let index = random(0, images.length-1);
        elementRight.src = images[index].src;
        right.appendChild(elementRight);
       
     
        if(elementRight.src == images[0].src){
            i += 1;
            hisob[0].textContent = i;
        }
        else if(elementRight.src == images[1].src){
            j += 1;
            hisob[1].textContent = j;
        }
        else{
            k += 1;
            hisob[2].textContent = k;
        }
    }
  
 });
 
images[2].addEventListener("click", e =>{
    element.src = images[2].src;
    left.appendChild(element);
     
    setTimeout(put, 200);
    function put(){
        let index = random(0, images.length-1);
        elementRight.src = images[index].src;
        right.appendChild(elementRight);
       
     
        if(elementRight.src == images[0].src){
            k += 1;
            hisob[2].textContent = k;
        }
        else if(elementRight.src == images[1].src){
            i += 1;
            hisob[0].textContent = i;
        }
        else{
            j += 1;
            hisob[1].textContent = j;
        }

    }
  
 });

