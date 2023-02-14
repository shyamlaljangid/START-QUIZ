
  const input = document.querySelector("form input:nth-of-type(1)")
  const form = document.querySelector("form")
  const text = document.querySelector(".page2 nav p")
  const h2 = document.querySelector(".page1 h2")



let a1 = document.querySelector(".page1 a")

let page1 = document.querySelector(".page1")
let page2 = document.querySelector(".page2")
let button = document.querySelector(" .page2 button")
let a = document.querySelectorAll(".page2 a")
let time = document.querySelector(".page3 p span")
let qs = document.querySelector(".page3 .box p")
let span = document.querySelector(".page3 .box span")
let page3 = document.querySelector(".page3")




const Question = document.querySelectorAll(".Question")
const one = document.querySelector("#opt")
const two = document.querySelector("#opt1")
const three = document.querySelector("#opt2")
const four = document.querySelector("#opt3")

 const next= document.querySelector(".play a:nth-of-type(1)")

let quiz = [
    {
        qs: "WHAT IS THIS  12",
        a: "number",
        b: "wo",
        c: "w",
        d: "abc",
        ans:'ans1'
        

    },

    {
        qs: " What is JavaScript",
        a: "JavaScript is a scripting language used to make the website interactive",
        b: "JavaScript is an assembly language used to make the website interactive",
        c: "JavaScript is a compiled language used to make the website interactive",
        d: "None of the mentioned",
        ans:"ans2"
    }
    , {
        qs: "Which of the following is correct about JavaScript ",
        a: "JavaScript is an Object - Based language",
        b: "JavaScript is Assembly - language",
        c: "JavaScript is an Object - Oriented language",
        d: "JavaScript is a High - level language",
        ans:"ans4"
    },
    {
        qs: "WHAT IS THIS  12",
        a: "number",
        b: "wo",
        c: "w",
        d: "abc",
        ans:'ans1'

    },

    {
        qs: " What is JavaScript",
        a: "JavaScript is a scripting language used to make the website interactive",
        b: "JavaScript is an assembly language used to make the website interactive",
        c: "JavaScript is a compiled language used to make the website interactive",
        d: "None of the mentioned",
        ans:'ans1'
    }
    , {
        qs: "Which of the following is correct about JavaScript ",
        a: "JavaScript is an Object - Based language",
        b: "JavaScript is Assembly - language",
        c: "JavaScript is an Object - Oriented language",
        d: "JavaScript is a High - level language"
        , 
         ans:'ans1'
    }


]





a1.onclick = (e) => {
        e.preventDefault()


        if(h2.innerHTML === "User"){
            alert("Enter your user id")
        }
        else{
        page1.style.display = "none"
        page2.style.display = "block"
    }
    }




   h2.onclick=()=>{
    form.style.display="block"
    form.onsubmit=(e)=>{
        e.preventDefault()
    

         h2.innerHTML= input.value
         text.innerHTML= input.value
          form.style.display="none"
     console.log(h2.innerHTML)
        alert("user id done")
    }
   
   }


for (let i = 0; i < a.length; i++) {
    a[i].onclick = (e) => {
        e.preventDefault()
        a[i].style.border = "2px solid black"

        button.onclick = (e) => {
            e.preventDefault()
            page2.style.display = "none"
            page3.style.display = "block"

            tim()
           
        }

    }

} 

function tim() {
    let times = 15
    let clear;
    
    time.innerHTML = times--
    clear = setInterval(() => {
        if (times === 0) {
            times = 15
            // clearInterval(clear)
            time.innerHTML = 15
        }
        time.innerHTML = times--
        
        start()

        }, 1000)
        
      }
    
   
function start(){
    let count = 0
      let score=0;
   
      next.onclick=(e)=>{
        e.preventDefault()
        count++
    
       
        let update = quiz[count]
        qs.innerHTML = update.qs
        opt.innerHTML = update.a 
        opt1.innerHTML = update.b 
        opt2.innerHTML = update.c 
        opt3.innerHTML = update.d

        // next.onclick=(e)=>{
        //     e.preventDefault()
        
        //       const right = chack();
        //       if(right === quiz[count].ans){
        //         score++
        //       }
              
        //     count++
        //     del();
        
        
        //     if(count <quiz.length)
        // {
        //     start();
        // }
    }
       

//     function chack (){
//         let answer;
//    Question.forEach((quest)=>{
//          if(quest.checked){
//             answer=quest.id
//          }
//    });
//    return answer;
//    console.log(answer)   
// }
//    function  del(){
//     Question.forEach((ans)=>{
//     ans.checked =false;
//     })
//    }
     



   
   }
    


// function nextQs (){
//     next.onclick=(e)=>{
//         e.preventDefault()
//         count++
//     }
// }








