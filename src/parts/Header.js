import React, { useEffect, useState } from 'react'
import axios from 'axios';

import Logo from "components/Logo"
import Input from "../components/Input";
import Menu from "../components/Menu";

import ICSearch from "../img/icons/ic_search.svg";
import ICMenu from "../img/icons/ic_home.svg";
import ICMessenger from "../img/icons/ic_messenger.svg";
import ICAdd from "../img/icons/ic_add.svg";
import ICExplore from "../img/icons/ic_explore.svg";
import ICLike from "../img/icons/ic_like.svg";
import ProfileBadge from "components/ProfileBadge";
import { render } from '@testing-library/react';

export default function Header(props) {

  const [people, setPeople] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect (() => {
    getPeople();
  }, []);

  useEffect (() => {
    if (people.length !== 0) {
      setIsLoading(false);
    }
    console.log(people[0]);
  }, [people])

  const getPeople = () => {
    const url = "https://randomuser.me/api/?results=15";
    fetch(url)
    .then((res) => res.json())
    .then((json) => setPeople(json['results']))
    .catch(err => console.error(err));
  }
  
    return (
      <div>
        
        { isLoading ? (
          <div>Loading..</div>
        ) : (
          <header>
            <div className="header-logo">
              <Logo />
            </div>
            <div className="header-search">
              <Input
                id="a"
                type="text"
                icon={ICSearch}
                data={people}
                placeholder={people[0].name.first}
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
        )
      }

      </div>

    )
}
