import React from "react";
import profile from "../img/profile.png";

function ProfileBadge(props) {
  const { link } = props;
  return (
    <div className="profileBadge">
      <div className="profile-circle">
        <img src={profile} />
      </div>
    </div>
  );
}

export default ProfileBadge;
