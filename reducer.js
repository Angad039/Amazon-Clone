export const initialState={
    basket: [
        {
        id:"123344",
                title:"The Lean Startup:How Const Innovation Creates Radically Successfully Businesses Paperback",
                price:11.96,
                rating:5,
                image:"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._325_BO1,204,203,200.jpg",

              id : "4354578",
                title:"Samsung Galaxy S21 Ultra",
                price:250.96,
                rating:5,
                image:"https://images-na.ssl-images-amazon.com/images/I/91dLTREdG1L._SL1500_.jpg",
        },
    ],
    user:null,
};
export const getBasketTotal=(basket)=>
    basket?.reduce((amount,item)=>item.price+amount,0);

const reducer = (state,action) => {
    console.log(action);
    switch(action.type){
        case "SET_USER":
            return{
                ...state,
                user:action.user
            }
        case 'ADD_TO_BASKET':
        //add item 
        return {
            ...state,
            basket: [...state.basket,action.item],
        };
        case 'REMOVE_FROM_BASKET':
        //remove item
        let newBasket=[...state.Basket];
        const index=state.basket.findIndex((basketItem)=>basketItem.id===action.id);
        if(index >= 0){
                newBasket.splice(index,1);
        }else{
            console.warn(
                `cant remove product(id:${action.id})`
            );
        }
        return {...state,
            basket:newBasket,
        };
        default:
            return state;
    }
    
};
export default reducer;