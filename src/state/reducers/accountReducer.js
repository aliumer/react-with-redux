// this is the banker

const reducer = (initialState = 1000, action) => {
    switch (action.type) {
        case "deposit":
            return initialState + action.payload;
        case "withdraw":
            return initialState - action.payload;
        default:
            return initialState;
    };  
}

export default reducer;