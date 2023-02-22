import React from "react";
import './Profilebar.scss'
import users from "../../assets/user_profiles";
import inner from "../../assets/inner.svg"
import outter from "../../assets/outter.svg"

const Profilebar = () => {
  return (
    <div className="profilebar">
      <div className="avatar">
        <img className="profile-img" src={users[1]} alt="" />
        <img className="" src={inner} alt="" />
        <img className="" src={outter} alt="" />
      </div>
      <div className="profilebar__name">
        <h1>Sophie Fortune</h1>
        <h2>@sophiefortune</h2>
      </div>
      <div className="profilebar__members">
        <div className="new__members-text">
            <h1>New members</h1>
            <h3>see all</h3>
        </div>
        { 
            [0, 2, 3, 4].map((index, item) => 
                <div className="members-block">
                    <div className="block1">
                        <img src={users[index]} alt="" />
                    </div>
                    <div className="block2">
                        <h1>Anne Couture</h1>
                        <h3>5 min ago</h3>
                    </div>
                </div>
            )
        }
        { 
            [0, 2, 3, 4].map((index, item) => 
                <div className="members-block">
                    <div className="block1">
                        <img src={users[index]} alt="" />
                    </div>
                    <div className="block2">
                        <h1>Anne Couture</h1>
                        <h3>5 min ago</h3>
                    </div>
                </div>
            )
        }
      </div>
    </div>
  );
};

export default Profilebar;
