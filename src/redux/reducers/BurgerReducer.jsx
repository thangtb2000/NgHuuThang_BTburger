const initialState = {
    burger: { salad: 1, cheese: 1, beef: 1 }, // [{name:'salad',amount:1},{name:'cheese',amount:1},{name:'beef',amount:1}]
    menu: {
        salad: 10,
        cheese: 20,
        beef: 55,
    },

    total: 85,
};

// export const BurgerReducer = (state = initialState, action) =>{
//     return {...state};
// }
function BurgerReducer (state = initialState, action) {
    switch (action.type) {
        case "ADD_BREADMID": {
           const {propsBuger, amount} = action.payload;
           const burgerUpdate = {...state.burger};
            //Thay đổi số lượng
            //số lượng nhỏ hơn 1 thì ko giảm
            if(amount === -1 && state.burger[propsBuger] < 1 ) {
                return {...state};
            }
           burgerUpdate[propsBuger] += amount;
           state.burger = burgerUpdate;
           
           //Tính tổng tiền
           state.total += amount * state.menu[propsBuger];
           
           return {...state};
        } 
        default:
           return {...state};
    }
  
}
export default BurgerReducer;