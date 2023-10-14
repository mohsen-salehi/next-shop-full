const savePaymentMethodAction = (data , dispatch) => {
    dispatch({
        type : "SAVE_PAYMENT_METHOD" ,
        payload : data
    })
}


export default savePaymentMethodAction;