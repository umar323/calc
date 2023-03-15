const calcscreen = document.querySelector('.calc__screen-out');
const calcbtns = Array.from(document.querySelectorAll('.calc__btn')) 

calcbtns.map((btn)=>{
    btn.addEventListener('click',function (e) {
        let answer = e.target.innerHTML
        if (answer === 'ac') clear()
        else if (answer ==='ce') del()
        else if (answer ==='+/-') plus()
        else if (answer ==='√') sqrt()
        else if (answer ==='=') equal()
        else add(answer)  
        limit()
    })
})

function clear() { 
    calcscreen.innerHTML = ''
 }
function del() {
    calcscreen.innerHTML =  calcscreen.innerHTML.slice(0,-1)
}
function add(answer) {
    calcscreen.innerHTML.length >= 22    
        ? calcscreen.innerHTML = calcscreen.innerHTML 
        : calcscreen.innerHTML += answer
}
function plus() {
    calcscreen.innerHTML = parseFloat(calcscreen.innerHTML) * -1
}
function sqrt() {
    calcscreen.innerHTML = Math.sqrt(calcscreen.innerHTML)
}
function equal() {
    calcscreen.innerHTML = eval(calcscreen.innerHTML)
}
function limit() {
    if (calcscreen.innerHTML.length >= 12) {
        calcscreen.style.fontSize = '30px'
    }else if (calcscreen.innerHTML.length >= 20) {
        calcscreen.style.fontSize = '20px'
    }else if (calcscreen.innerHTML.length < 12) {
        calcscreen.style.fontSize = '40px'
    }
}