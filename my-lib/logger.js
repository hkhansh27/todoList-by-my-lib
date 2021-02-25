export default function logger(reducer) {
  return (prevState, action, args) => {
    console.group(`%c ${action}`, "color: red");
    console.log("Prev State: ", prevState);
    console.log("Action Arguments", args);
    const nextState = reducer(prevState, action, args);
    console.log("Next State: ", nextState);
    console.groupEnd();
    return nextState;
  };
}
