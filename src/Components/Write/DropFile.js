import React, { useState } from 'react';


function DropFile() {

  const [image, setImage]= useState("");

  const postDetails = (pics) => {		
		if (!pics) {
				alert("PLease upload the image")
				return;
		}
		if (pics.type === "image/jpeg" || pics.type === "image/png") {
			const data = new FormData();
			data.append("file", pics);
			data.append("upload_preset", "Pet app");
			data.append("cloud_name", "dxma3isad");
			fetch("https://api.cloudinary.com/v1_1/dxma3isad/image/upload", {
				method: "POST",
				body: data,
			})
				.then((res) => res.json())
				.then((data) => {					
					console.log(data);
          setImage(data.url.toString())
				})
				.catch((err) => console.log(err))
				
		} else {
			alert("Please upload an image")
		}
	};


  return (
    <div className="App"> 
    {image!==""? <img src={image} alt='dropFiles' width="100%" /> : ""}     
      <input type="file" onChange={(e) => postDetails(e.target.files[0])}/>
    </div>
  );
}

export default DropFile;
