let ele = React.createElement('h1', {id: 'heading'}, "Hello World!");

// For inserting multiple elements in the same tag(e.g. div), the process become lengthy
let ele2 = React.createElement('div', null, 
    React.createElement('h1', {id: "head"}, "Hey Everyone!"), 
    React.createElement('h2', {id: "head2"}, "How's your day?"));

let root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(ele);    
// root.render(ele2);


// So can we write html inside js?
const ele3 = <h1 id="heading" className="first">Hello World!</h1>
const ele4 = (<div>
    <h1>Hey Guys!</h1>
    <h2>What's up.</h2>
</div>);

root.render(ele3);
root.render(ele4);

// JSX --> React.createElement() --> React Element(JS Object) --> Real DOM(HTML Element)
//    Babel                     React                       ReactDOM

// <h1 id="heading">Hello World!</h1> --> React.createElement('h1', {id: 'heading'}, "Hello World!") --> {type: 'h1', props: {id:"heading", children: "Hello World!"}}  --> <h1 id="heading">Hello World!</h1>

// invalid syntax 
// const ele5 = (
//     <h1>Hello</h1>                   // BTS - React.createElement('h1', null, "Hello");
//     <h2>What are you doing?</h2>     // BTS - React.creatElement('h2', null, "What are you doing?");
// )

// which one from the above two created element assign to ele5?  That's why error

// FIX: wrap up in a div or fragment to make it a single element
// React Element
const ele5 = (
    <div>
        <h1>Hello</h1> 
        <h2>What are you doing?</h2>
    </div>
)

root.render(ele5);

// BTS 
// React.createElement('div', null, React.createElement('h1', null, "Hello"),React.creatElement('h2', null, "What are you doing?"))

// React Component

function App(name) {
    return(
        <h1>CodeDev by {name}</h1>
    );
}
// 4 ways of rendering the component

const a = App("Sabina");  // or <App /> 
// root.render(App());
// root.render(<h1>CodeDev</h1>)
// root.render(<App />)
root.render(a);

const e1 = <h1>Hello World! {4+3}</h1>
const e2 = <h1>Hello World! {"Shanaya"}</h1>
const e3 = <h1>Hello World! {true}</h1>
const e4 = <h1>Hello World! {null}</h1>
const e5 = <h1>Hello World! {undefined}</h1>
const e6 = <h1>Hello World!{["Apple", "Ball", "Cat", "Dog"]}</h1>
let age = 21;
const e7 = <h1>Hello World! {age>18? "Adult": "Kid"}</h1>
const e8 = <h1>Hello World! {{name: "Shanaya", age: 19}}</h1>  // ERROR

const Alpha = ["Apple", "Ball", "Cat", "Dog"]
const Alphabets = (
    <ul>
        {Alpha.map((letter)=><li>{letter}</li>)}
    </ul>
)

root.render(Alphabets);
// in {} , you can insert :-
// text/element and js expression
// Number, string, array, (boolean, null, undefined : these will be not visible in UI)
// object : ERROR

// Props

const ele10 = <h1 id="head" className="first" style={{backgroundColor:"blue", color:"white"}}>Hello World!</h1>
function App2(props) {
    return (
        <h1>Hello {props.name}</h1>
    )
}

// {
//     name: "Shanaya"
//     age: 19
// }

root.render(<App2 name="Shanaya" age={19}/>);  
root.render(ele10); 

// The first capital letter while declaring a component distiguish it from regular HTML elements


// Component and props practice
function Header({name}) {
    return (
        <h1>Hi {name}! Welcome to our Website</h1>
    )
}
function Main({user}) {

    return (
        <>
        <h2>User Information</h2>
        <p>Name: {user.name}</p>
        <p>Age: {user.age}</p>
        <p>City: {user.city}</p>
        <h2>Exlplore every feature, latest articles and blog of our Website.</h2>
        </>
    )
}
function Footer() {
    return (
        <h3>Thanks for visiting our Website. Your feedback means alot to us.</h3>
    )
}

function App3() {
    return (
        <>
        <Header name="Shanaya"/>
        <Main user={{name:"Shanaya", age:21, city:"Delhi"}} />
        <Footer />
        </>
    )
}

root.render(<App3 />)
