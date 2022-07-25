
import { FILTER_TAGS, HOMEPAGEDATA, INDIVIDUAL_PAGE, INC_LIKES, SHOW_COLLECTION, LOGGED_IN_DATA } from "./ActionType"

export const homePageData = (payload)=>{
    return{
        type:HOMEPAGEDATA,
        payload
    }
}

export const IndividualPage = (payload) => {
    return {
      type: INDIVIDUAL_PAGE,
      payload,
    };
  };

  export const FilterTags = (payload) => {
    return {
      type: FILTER_TAGS,
      payload,
    };
  };

  export const updateLikes = (val) => {
    //  localStorage.setItem('likes', val)
    return {
        type: INC_LIKES,
         value:val
        }
  }
  export const publishedData = (payload) => {
    //  localStorage.setItem('likes', val)
    return {
        type: SHOW_COLLECTION,
         payload
        }
  }


  export const loggedInData = (payload) => {
    //  localStorage.setItem('likes', val)
    return {
        type: LOGGED_IN_DATA,
         payload
        }
  }