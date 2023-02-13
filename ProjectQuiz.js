let a1 = document.querySelector(".page1 a")
let page1 = document.querySelector(".page1")
let page2 = document.querySelector(".page2")
let button = document.querySelector(" .page2 button")
let a = document.querySelectorAll(".page2 a")
let time = document.querySelector(".page3 p span")
let qs = document.querySelector(".page3 .box p")
let span = document.querySelector(".page3 .box span")




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
        d: "12",
        

    },

    {
        qs: " What is JavaScript",
        a: "JavaScript is a scripting language used to make the website interactive",
        b: "JavaScript is an assembly language used to make the website interactive",
        c: "JavaScript is a compiled language used to make the website interactive",
        d: "None of the mentioned"
    }
    , {
        qs: "Which of the following is correct about JavaScript ",
        a: "JavaScript is an Object - Based language",
        b: "JavaScript is Assembly - language",
        c: "JavaScript is an Object - Oriented language",
        d: "JavaScript is a High - level language"
    }


]





a1.onclick = (e) => {
        e.preventDefault()
        page1.style.display = "none"
    }

for (let i = 0; i < a.length; i++) {
    a[i].onclick = (e) => {
        e.preventDefault()
        a[i].style.border = "2px solid black"

        button.onclick = (e) => {
            e.preventDefault()
            page2.style.display = "none"

            tim()
            start()
            // nextQs()
           
      
        }

    }

}
next.onclick=(e)=>{
    e.preventDefault()
    count = console.log(count+ 1) 
}

function tim() {
    let times = 15
    let clear;

    clear = setInterval(() => {
        if (times === 0) {

            times = 15
            clearInterval(clear)
            time.innerHTML = 15

        }

        time.innerHTML = times--


    }, 1000)
}

  let count = 0
  let score=0;
 
function start(){
  

     let update = quiz[count]
     qs.innerHTML = update.qs
     opt.innerHTML = update.a 
     opt1.innerHTML = update.b 
     opt2.innerHTML = update.c 
     opt3.innerHTML = update.d



     
    }
   


// function nextQs (){
//     next.onclick=(e)=>{
//         e.preventDefault()
//         count++
//     }
// }








