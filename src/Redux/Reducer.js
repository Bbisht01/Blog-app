import { FILTER_TAGS, HOMEPAGEDATA, INC_LIKES, INDIVIDUAL_PAGE, LOGGED_IN_DATA, SHOW_COLLECTION } from "./ActionType"

const initialState = {
    homeData : [],
    Individual_data:[],
    filterTag : "",
    likes:0,
    collection :[],
    loggedUser:{ }
}

export const reducer = (state=initialState,action)=>{
      switch(action.type){
        case HOMEPAGEDATA:
            // console.log(state.homeData)
            return{
                ...state, 
                homeData:action.payload
                            
            }
        case INDIVIDUAL_PAGE:{
            return{
                ...state,
                Individual_data:action.payload
            }
        }
        case FILTER_TAGS:{
            return{
                ...state,
                filterTag:action.payload
            }
        }
        case INC_LIKES:
            // console.log(state.likes) 
            return {
                ...state,
                likes: state.likes+action.value
            }
        case SHOW_COLLECTION:
        // console.log(state.likes) 
        return {
            ...state,
            collection: action.payload
        }
        case LOGGED_IN_DATA:
     console.log(state) 
        return {
            loggedUser: action.payload
        }
            default:
                 return state
      }
}