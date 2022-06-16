import React from "react";

import profile from "img/profile.png";

export default function ProfileBadge(props) {
  return (
        <div className="profileBadge">
      <div className="profile-circle">
        <img src={profile} />
      </div>
    </div>
  )
}
