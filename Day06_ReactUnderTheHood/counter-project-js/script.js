let count = 0; 

function render() {
    document.getElementById('root').innerHTML = `
    <p>React Counter</p>
    <h1>Counter: ${count}</h1>
    <button onClick="decrement()">decrement</button>
    <button onClick="increment()">Increment</button>`
}

function decrement() {
    count--;
    render();
}
function increment() {
    count++;
    render();
}

render();