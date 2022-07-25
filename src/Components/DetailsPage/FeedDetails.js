import "./FeedDetails.css";
// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";


// import { useHistory} from "react-router-dom";
// import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { CommentComponent } from "../Comment/Comment";


export const ShowFeed = () => {

  // const user = useSelector((store) => store.homeData);

  const { homeData, Individual_data } = useSelector(
    (state) => state
  );

  // console.log(Individual_data,"Babita")
  const feedId = Individual_data;
  // const dispatch = useDispatch();


  
  const filteredData = homeData.filter((el) => el.id === feedId);
   console.log(filteredData);




  return (
    <div className="container">
    
      <div className="middleDiv">
        <div className="topMostDiv">
          <div className="user">
            <img style={{width:"50px",height:"55px",borderRadius:"50%"}} src={filteredData[0].profile_url} alt="" />
          </div>
          <div>
            <div className="userName">{filteredData[0].author}</div>
            <div>{filteredData[0].date}</div>
          </div>
        </div>
        <div className="blogBody">
          <p className="blogTitle">{filteredData[0].title}</p>
          <p style={{ fontSize: "14px", fontWeight: "500" }}>
            {filteredData[0].description}
          </p>
          <div>
            <img
              style={{ width: "450px", height: "300px", margin: "15px 0px" }}
              src={filteredData[0].urlToImage}
              alt=""
            />
          </div>
          <p className="blogBody">{filteredData[0].content}</p>
        </div>

        <div className="imgDiv">
          <div className="commentDiv">
                     
            
          </div>
          <div>
          
          </div>
          <div className="socialIcons">
            <img
              src="https://image.similarpng.com/very-thumbnail/2020/06/Black-icon-Twitter-logo-transparent-PNG.png"
              alt=""
            />
            <img
              src="https://www.citypng.com/public/uploads/preview/-11595326936asbkomoamd.png"
              alt=""
            />
            <img
              src="https://cdn.icon-icons.com/icons2/2428/PNG/512/linkedin_black_logo_icon_147114.png"
              alt=""
            />
            <img
              src="https://icon-library.com/images/link-png-icon/link-png-icon-1.jpg"
              alt=""
            />

           

         
          </div>
        </div>

        <div className="moreFrom">
          <p>More from {filteredData[0].author}</p>
        </div>
        <div className="bottomText">
         
         <CommentComponent id={filteredData[0].id} commentArr={filteredData[0].comment} />
        </div>
      </div>
     
    </div>
  );
};