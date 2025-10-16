import React from 'react';
import './User.css';
import HomeIcon from '@mui/icons-material/Home';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function User() {
  return (
    <div className='user'>
      <img src='./images/avatar.jpg' alt='' className='user_avatar'/>
      <h1 className='user_name'>Baptiste Payan</h1>
      <p className='user_profession'>Développeur Web</p>
      <div className='user_infos'>
        <p className='user_info'>
            <HomeIcon /> 47 rue André le Notre 34080, Montpellier</p>
        <p className='user_info'>
          <a href="tel:+33664013724">
            <LocalPhoneIcon /> 06 64 01 37 24</a>
          </p>
        <p className='user_info'>
          <a href="baptiste@payan.fr">
            <EmailIcon /> baptiste@payan.fr</a>
          </p>
        <p className='user_info'>
            <CalendarMonthIcon /> Date de naissance : 24 Novemenbre 1998</p>
        <p className='user_info'>
           <LocationOnIcon /> Lieu de naissance : Amilly</p>
      </div>
    </div>
  )
}
export default User;