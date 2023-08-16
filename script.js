const correct = ['A', 'C', 'D', 'C'];

let result = document.querySelector(".result");

let form = document.querySelector(".quiz-form");

form.addEventListener('submit', e => {
    e.preventDefault();
    let score = 0;
    const ans = [form.q1.value, form.q2.value, form.q3.value, form.q4.value]

    ans.forEach((answer, index) => {
        if(answer === correct[index]){
            score += 25;
        }
    })
    
    result.removeAttribute('class', 'd-none'); //or we can use result.classList.remove("d.none")
    scrollTo(0,0);

    let output = 0;
    let timer = setInterval(() => {
        result.querySelector("span").textContent = `${output}%`;
        if(output === score){
            clearInterval(timer);
        }
        else{
            output++;
        }
    }, 100);
})