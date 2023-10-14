const saveShippingData = (data , dispatch) => {
    dispatch({
        type : "SAVE_SHIPPING_DATA",
        payload : data
    })
}

export default saveShippingData