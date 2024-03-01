import { Typography } from '@material-ui/core';
import React from 'react';
import './Profile.css';
import Timeline from '../Timeline';

const Profile = () => {
    return (
        <div className="profile container_shadow">
            <div className="profile_name">
                <Typography className="name">Sam</Typography>
                <Typography className="title">Java Developer</Typography>
            </div>
            <figure className="profile_image">
                <img src={require('../../assets/images/nonla.jpg')} alt="VoHoangDung_Avata" />
            </figure>
            <div className="profile_information">
                <Timeline />
                <br />
                <button>Download CV</button>
            </div>
        </div>
    );
};

export default Profile;
