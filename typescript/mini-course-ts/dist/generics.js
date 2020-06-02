"use strict";
// S => State
// T => Type
// K => Key
// V => Value
// E => Element
// React.FC<Props, State>
function useState() {
    var state;
    function getState() {
        return state;
    }
    function setState(newState) {
        state = newState;
    }
    return { getState: getState, setState: setState };
}
var newState = useState();
// newState.setState(false);
// console.log(newState.getState());
newState.setState("foo"); // it's a string
console.log(newState.getState());
// newState.setState(123); // raise an error
// console.log(newState.getState());
// newState.setState("bar");
// console.log(newState.getState());
