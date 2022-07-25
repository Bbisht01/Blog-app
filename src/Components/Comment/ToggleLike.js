import React, { useEffect, useState } from 'react';
import { FaThumbsUp } from 'react-icons/fa';
import "./Comment.css"

function LikeButton({secret, liked, numLikes, onSelect}) {
    return (
      <>
        
        <div
        className="likeButoonComment"
          key={secret}
          liked={liked}
          onClick={() => onSelect(liked)} // invoked when clicked
        >
          <FaThumbsUp />
        </div>
        <p>{numLikes}</p>
      </>
    );
}

export default function ToggleLike() {
    const [likes, updateLikes] = useState(23);
    const [liked, updateLiked] = useState(false);
  
    useEffect(() => {
      updateLikes(likes => likes + (liked ? 1 : -1));
    }, [liked]);
  
    return (
      <LikeButton 
        secret='like-button'
        numLikes={likes}
        liked={liked}
        // status={liked}
        onSelect={function clickLike(liked) {
          updateLiked(liked => !liked);
        }}
      />
    );
  }