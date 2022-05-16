// action creators.
export const depositMoney = (amount) => {
    return (dispatch) => {
        dispatch({
            type: 'deposit',
            payload: amount
        });
    }
}


// action creators.
export const withdrawMoney = (amount) => {
    return (dispatch) => {
        dispatch({
            type: 'withdraw',
            payload: amount
        });
    }
}
