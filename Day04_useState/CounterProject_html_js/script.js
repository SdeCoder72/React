let count = 0
let p = document.createElement('p');
p.textContent = `Count: ${count}`

let button = document.createElement('button');
button.textContent = `Increament`;
button.style.fontSize = '20px'

let root = document.getElementById('root');
root.append(p, button);

button.addEventListener('click',()=> {
    count++;
    p.textContent = `Count: ${count}`
})