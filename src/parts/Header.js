import React from "react";
import Logo from "../components/Logo";
import Input from "../components/Input";
import Menu from "../components/Menu";
import ICSearch from "../img/icons/ic_search.svg";
import ICMenu from "../img/icons/ic_home.svg";
import ICMessenger from "../img/icons/ic_messenger.svg";
import ICAdd from "../img/icons/ic_add.svg";
import ICExplore from "../img/icons/ic_explore.svg";
import ICLike from "../img/icons/ic_like.svg";
import ProfileBadge from "components/ProfileBadge";

function Header() {
  const style = {
    padding: "8px 400px",
    backgroundColor: "red",
    display: "flex",
    alignContent: "center",
    alignItem: "center",
    justifyContent: "center",
  };

  return (
    <header>
      <div className="header-logo">
        <Logo />
      </div>
      <div className="header-search">
        <Input
          id="a"
          type="text"
          imagePlaceholder={ICSearch}
          textPlaceholder="Search"
          name="search"
        />
      </div>
      <div className="header-menu">
        <div>
          <Menu id="home" name="home" src={ICMenu} srcType="svg" />
          <Menu id="messenger" name="messenger" src={ICMessenger} />
          <Menu id="add" name="add" src={ICAdd} srcType="svg" />
          <Menu id="explore" name="explore" src={ICExplore} srcType="svg" />
          <Menu id="like" name="like" src={ICLike} srcType="svg" />
          <ProfileBadge link="profile.png" />
        </div>
      </div>
    </header>
  );
}

export default Header;
