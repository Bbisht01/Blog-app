import axios from "axios";
import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { FilterTags, homePageData, IndividualPage } from "../../Redux/Action";
// import Likes from '../../Redux/Likes'
import "./Blogs.css";
import { FilterTag } from "./FilterTags";
import { IoSearchOutline } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";


export default function Blogs() 
{
  console.log("blogs k andar hu")
  
  const dispatch = useDispatch();
   const history = useHistory();

  const [likeButton,setLikeButton] = useState(false);
  const [flag,setFlag] = useState(false);
  const [blogs,setBlogs] = useState([])
  const [tags,setTags] = useState([])
  const [searchString,setSearchString] = useState('')

  const settingBlogs = useCallback((data) => {
    let tagsArray = tags;
    lstorage(data);
    setBlogs(data);
    dispatch(homePageData(data));
    if (!tags.length) {
      data.forEach((tagData) => {
        tagsArray.push(...tagData.tag)
      })
      setTags(tagsArray)
    }
  }, [dispatch, tags])

  const fetchFeeds = useCallback(async() => {
    try {
      const res = await axios("http://localhost:5000/display_feeds");
      settingBlogs(res.data);
      
    } catch (err) {
      console.log('error', err);
    }
  }, [settingBlogs])

  const filterTagFunc = async (tags) => {
    let qs = '';
    tags.forEach((tag) => {
      qs += `tag=${tag}&`
    })
    const res = await axios(`http://localhost:5000/display_feeds?${qs}`);
    settingBlogs(res.data);
    
  };

  const searchFunc = async (searchstring) => {
    setSearchString(searchstring);
    const res = await axios(`http://localhost:5000/display_feeds?title=:${encodeURIComponent(searchstring)}`);
    settingBlogs(res.data);
    
  };
  

  useEffect(() => {
    console.log('useEffect', !blogs.length, (!tags.length || !searchString))
    // if (!blogs.length && (!tags.length || !searchString)) {
    if (!blogs.length && !tags.length) {
      fetchFeeds();
    }
  }, [fetchFeeds, blogs, tags, searchString]);

  const lstorage = (p) =>
  {   
      var lstoragedata = JSON.parse(localStorage.getItem("dataForlikebutton") || "[]");        
      lstoragedata = null;
      localStorage.setItem("dataForlikebutton",JSON.stringify(lstoragedata));
      lstoragedata = p;
      localStorage.setItem("dataForlikebutton",JSON.stringify(lstoragedata));
  }

  const dataForHomePage = useSelector((state) => state.homeData);


  const getTag = useSelector((state) => state.filterTag);


  // const FilteredTag = dataForHomePage.filter((e) => e.tag === getTag);


  function IndividualClick(e) 
  {
    
    const action = IndividualPage(e.id);

    dispatch(action);
     history.push("/showFeed");
  }

  const searchDataFromInput = (e) => {
    dispatch(FilterTags(e));
  };

  const handleLikeButton = (e) => 
  {    
    let lstoragedata = JSON.parse(localStorage.getItem("dataForlikebutton"));      
    lstoragedata.forEach((ele) => 
    {
        if(ele.id === e.id)                
        {
          ele.likes++
        }
    })  
    localStorage.setItem("dataForlikebutton",JSON.stringify(lstoragedata));
    setLikeButton(true);
    setFlag(!flag);
  };



  var lstoragedata = JSON.parse(localStorage.getItem("dataForlikebutton"));    
  

  

  return (
    <div className="homePageDiv">
      <div className="LeftBar">
        <div className="SearchInputDiv">
          <IoSearchOutline className="searchIcon" />
          <input
            type="search"
            placeholder="Search"
            // onChange={(event) => searchFunc(event.target.value)}
            aria-label="Search"
          />
        </div>
        <FilterTag tags={tags} filterTagFunc={filterTagFunc}/>
      </div>
      <div className="RightBar">
        {dataForHomePage?.map((e) => {
          return (
            <div className="feed_after_login" key={e.id}>
              <div className="feed_left">
                <div className="feed_top">
                  <img src={e.profile_url} alt='profile' />
                  <p>
                    {e.author}
                    <span className="feed_top_span"></span>
                    {e.source.name ? " in " + e.source.name : ""}
                  </p>
                  <p id="date_after_login">{e.date}</p>
                </div>
                <div
                  className="feed_middle"
                  onClick={() => IndividualClick(e)}
                  style={{ textAlign: "left" }}
                >
                  <h2>{e.title}</h2>
                  <p>{e.description}</p>
                </div>
                <div className="feed_bottom">
                  <div className="time">
                    <p>{e.reading_time} </p>
                    <p className="theTag">{e.tag}</p>
                    
                  </div>
                  <div className="LikeButton">
                    <button onClick={() => handleLikeButton(e)}>
                      <IoHeartOutline />
                      {e.likes}
                    </button>
                    {/* <Likes /> */}
                  </div>
                </div>
                {/* <hr id="hr_line_1"></hr> */}
              </div>
              <div className="feed_right">
                <img src={e.urlToImage} alt='feeds'/>
                {/* <hr id="hr_line_2"></hr> */}
              </div>
            </div>
          );
        })}
      </div>
      
    </div>
  );
}

