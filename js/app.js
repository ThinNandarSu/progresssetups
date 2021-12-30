//UI
const progress = document.getElementById("progress");
const circles = document.querySelectorAll(".circle");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

const contents = document.querySelectorAll(".content");
// console.log(circles);
let currentactive = 1;

// Event Listener
next.addEventListener("click", ()=>{
    currentactive++;
    
    if(currentactive > circles.length){
        currentactive = circles.length;
    }

    for(let i = 0; i<contents.length;i++){
        if((i+1) == currentactive){
            contents[i].style.display = "block";
       } else {
        contents[i].style.display = "none";
       }
    }
    update();
})

prev.addEventListener('click', ()=>{
    currentactive--;
    if(currentactive < 1){
        currentactive = 1;
    }

    for(let i = 0; i<contents.length;i++){
        if((i+1) == currentactive){
            contents[i].style.display = "block";
       } else {
        contents[i].style.display = "none";
       }
    }
    update();
})

function update(){
    circles.forEach((circle,index) => {
        if(index < currentactive) {
            circle.classList.add("active");
        }else{
            circle.classList.remove("active");
        }
        if(currentactive === 1){
            prev.disabled = true;
        } else if(currentactive === circles.length){
            next.disabled = true;
        } else {
            next.disabled = false;
            prev.disabled = false;
        }
        const actives = document.querySelectorAll(".active");

        let act = actives.length - 1;
        let cls = circles.length - 1;

        progress.style.width = (act / cls) * 100 + "%";
    });
}

function content_update(){
    contents.forEach((content,index) => {
        // console.log(content);
        if(index < currentactive) {
            document.querySelector('.content').style.display = "block";
        }else{
            content.classList.add("disabled");
        }
    });
}