import React from 'react';
import Style from './User.module.css';
import Img from 'react-image'
import logo from '../icon/022-press.svg';


const UserItem = ({ user: { avatar_url, username, name } }) => {
 return (

  <div className={Style.user}>
   <Img src={[avatar_url, logo]} alt="avatar_img" className={Style.img} />
   <div className={Style.description}>
    <p> Username: {username}</p>
    <p>Name: {name}</p>
   </div>
  </div>

 );
};

export default UserItem;