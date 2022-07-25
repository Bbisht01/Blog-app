import React, { useState/*, useEffect*/, useRef/*, Fragment*/ } from "react";
import "./Comment.css"
import axios from 'axios';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder'
import {red} from '@mui/material/colors'
import Checkbox from '@mui/material/Checkbox';
import Favorite from '@mui/icons-material/Favorite';


const doRemoveWhiteSpace = str => str.replace(/\s{3,}/g, " ");
//Functional component - useFocus hook
const useFocus = () => {
  const htmlElRef = useRef(null),
    setFocus = () => {
      htmlElRef.current && htmlElRef.current.focus();
    };

  return [htmlElRef, setFocus];
};

export const CommentComponent = ({id, commentArr}) => {
  const [inputRef, setInputFocus] = useFocus(),//Functional component - useFocus hook
    //creating states using useState
    [textValue, setTextValue] = useState("")

    //Comments to show in ui
    const [commentData, setCommentData] = useState([])
    //Change event of textarea
    const onChangeTextValue = () => {
      setTextValue(inputRef.current.value);
    },
    //Submit buttion click event
    onSubmit = () => {
      console.log(id,"commentId");
      var commentText = doRemoveWhiteSpace(inputRef.current.value);
       commentArr = !commentArr ?  [commentText]:[...commentArr,commentText] 
      axios
        .patch(`http://localhost:5000/display_feeds/${id}`, {
            comment: commentArr,
        });
      // console.log(doRemoveWhiteSpace(inputRef.current.value));
      axios.get("http://localhost:5000/display_feeds")
      .then((res)=> setCommentData(res.data,"Comment"))
    }

  


  return (
    <div className="MainCommentOuterDiv">
    <div className="comment-div">
      <textarea
        placeholder={"Add a comment"}
        ref={inputRef}
        value={textValue}
        onChange={onChangeTextValue}
        className="comment-box"       
      />
      <br />
      <button onClick={()=>onSubmit()} className={"submit-btn"}>
        Comment
      </button>
      {/* <div>
       
      </div> */}
     
    </div>
    <div className="commentShowDiv">
      <h5 className="commentHead">Comments</h5>
      {
        commentData.map((comment)=>{
          return(
            <>
            <p style={{fontWeight:"bold",fontSize:"12px"}}>{comment.author}</p>
            <p className="LikeButtonForComment">{comment.comment}  <Checkbox  icon={<FavoriteBorder sx = {{color: red[500]}} />} checkedIcon={<Favorite sx = {{color: red[500]}}/>} /></p>           
            </>
          )
        })
      }

    </div>
    </div>
  );
};
