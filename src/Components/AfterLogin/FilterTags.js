import React, { /*useRef,*/ useState, useEffect, useCallback } from 'react'
import "./Blogs.css"
import { useDispatch/*,useSelector*/ } from 'react-redux'
import { FilterTags, homePageData, IndividualPage } from "../../Redux/Action";
import { useTranslation } from 'react-i18next'
import axios from "axios"


export const FilterTag = ({ tags, filterTagFunc })=>{  
  
  const {t} = useTranslation()
  const [selectedTag, setSelectedTag] = useState([]);
  const dispatch = useDispatch()
  //const inputRef = useRef([])
  // var count=0;

  

  function handleTag(tag){
    if (selectedTag.indexOf(tag) === -1) {
      setSelectedTag([...selectedTag, tag])
      filterTagFunc([...selectedTag, tag])
    } else {
      let newSelectedTag = selectedTag.filter(item => item !== tag)
      setSelectedTag(newSelectedTag)
      filterTagFunc(newSelectedTag)
    }
  }

    return(        
        <>
        <div className="recommended_topics">
           <p>{t("SearchTopics")}</p>
           <div className="various_tags">
            {
            tags?.map((el, i)=>
              <p key={i} style={{backgroundColor:selectedTag.indexOf(el)>-1? "black":"white", color:selectedTag.indexOf(el)>-1? "white":"black" }} 
              onClick={(e)=>{
                handleTag(el);
              }}
              className="makeActive1">{el}</p>
            )} 
            </div>           
        </div>
        <hr className="hr_after_divs2"/>
     
 </>
    )
}