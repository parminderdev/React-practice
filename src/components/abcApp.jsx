import React from 'react';
//import ReactDOM, { render } from 'react-dom';

// function Ad() {
//     return (
//         <div>
//             <h3>my new component</h3>
//         </div>
//     );
// }
const h = 10;
const d = 12;
let b = h + d;
console.log(b);

// const Ad = () => '<div>new const app</div>';
// function Ad() {
//     return (
//         <div>
//             <h2>rendering my component {b}</h2>
//         </div>
//     )
// }

class Ad extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }
    render() {
        return (
            <div>
                <h1>Hello this is my first class component<br></br>{this.state.date.toLocaleTimeString()}</h1>
            </div>
        );
    }
}
export default Ad;