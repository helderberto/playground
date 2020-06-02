// S => State
// T => Type
// K => Key
// V => Value
// E => Element

type numOrStr = number | string;

// React.FC<Props, State>

function useState<S extends numOrStr = string>() {
  let state: S;

  function getState() {
    return state;
  }

  function setState(newState: S) {
    state = newState;
  }

  return { getState, setState };
}

const newState = useState();

// newState.setState(false);
// console.log(newState.getState());

newState.setState("foo"); // it's a string
console.log(newState.getState());

// newState.setState(123); // raise an error
// console.log(newState.getState());

// newState.setState("bar");
// console.log(newState.getState());
