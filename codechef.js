let container=document.body.querySelector(".content")
let input=document.querySelector("#input")

let submit=document.querySelector(".submit-button");
console.log(submit)
submit.addEventListener('click',()=>{
    let div=document.createElement("div");
    let data=input.value;
    console.log(data)
    div.innerHTML=` <div class="sent-container"> 
                        <div class="sent"> <p>${data}</p></div>
                        <p class="sent-time"> 02:59pm</p>
                    </div>`
    container.append(div);
    input.value=""
})