export const reducer = (state, action) => {
  if (action.type === "INC") {
    return (state = state + 1);
  }
  if (action.type === "DEC") {
    let newNum = 0;
    state >= 1   ? (newNum = state - 1) : (newNum = 0);

    return newNum;
  }
  if (action.type === "RES") {
    let newNumb = 0;

    return newNumb;
  } else state;
};
