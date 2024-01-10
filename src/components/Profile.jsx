import React from "react"
import Images  from "../images";

function Profile(){
    return (
    <div id="profile">
    <div className="pic-container">
      <img className="my-profile" src={Images.myProfile} alt="" />
    </div>
    <div className="greeting text-white">
      <p className="text">Hello I'm</p>
      <h1 className="heading">Liladhar Varma</h1>
      <p className="text">Student , Learner , Developer</p>
      <div className="btn-container">
        <a id="btn" href="mailto:liladharvarma29@gmail.com">CONTACT ME</a>
      </div>
    </div>
  </div>);
}


export default Profile ;