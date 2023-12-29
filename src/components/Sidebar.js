import React from 'react';
import { IoHomeOutline } from "react-icons/io5";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { LuUserSquare2 } from "react-icons/lu";
import { MdHistory } from "react-icons/md";
import { BiSolidVideos } from "react-icons/bi";
import { GoLightBulb } from "react-icons/go";
import { BsClock } from "react-icons/bs";
import { ImFire } from "react-icons/im";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { BsMusicNote } from "react-icons/bs";
import { PiFilmSlate } from "react-icons/pi";
import { useSelector } from 'react-redux';

const Sidebar = () => {

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if(!isMenuOpen) return null;

  return (
    <div className='bg-gray-100'>
      <ul className='w-52'>
        <li className='flex'><IoHomeOutline />Home</li>
        <li className='flex'><SiYoutubeshorts />Shorts</li>
        <li className='flex'><MdOutlineSubscriptions />Subscriptions</li>
      </ul>
      <h1>You</h1>
      <ul>
        <li className='flex'><LuUserSquare2 />Your Channel</li>
        <li className='flex'><MdHistory />History</li>
        <li className='flex'><BiSolidVideos />Your Videos</li>
        <li className='flex'><GoLightBulb />Your Courses</li>
        <li className='flex'><BsClock />Watch Later</li>
      </ul>
      <h1>Explore</h1>
      {/* <div className='flex'>
      <ImFire />
      <h1>Trending</h1>
      </div>
      <div className='flex'>
      <HiOutlineShoppingBag />
      <h1>Shopping</h1>
      </div>
      <div className='flex'>
      <BsMusicNote />
      <h1>Music</h1>
      </div>
      <div className='flex'>
      <PiFilmSlate />
      <h1>Films</h1>
      </div>
      <div className='flex'>
      <MdOutlineSubscriptions />
      <h1>Live</h1>
      </div>
      <div className='flex'>
      <MdOutlineSubscriptions />
      <h1>Gaming</h1>
      </div>
      <div className='flex'>
      <MdOutlineSubscriptions />
      <h1>News</h1>
      </div>
      <div className='flex'>
      <MdOutlineSubscriptions />
      <h1>Sport</h1>
      </div>
      <div className='flex'>
      <MdOutlineSubscriptions />
      <h1>Learning</h1>
      </div>
      <div className='flex'>
      <MdOutlineSubscriptions />
      <h1>Podcasts</h1>
      </div> */}
      <ul>
        <li><ImFire />Trending</li>
        <li><HiOutlineShoppingBag />Shopping</li>
        <li><BsMusicNote />Music</li>
        <li><PiFilmSlate />Films</li>
        <li><MdOutlineSubscriptions />Live</li>
        <li> <MdOutlineSubscriptions />Gaming</li>
        <li>News</li>
        <li>Sport</li>
        <li>Learning</li>
        <li>Podcasts</li>
      </ul>
    </div>
  )
}

export default Sidebar;
