"use client"
import { useState } from 'react';
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { IconContext } from "react-icons";

export default function CustomLike({ iconStatus, onClick, color }) {
  let [status, setStatus] = useState(iconStatus)

  let handleClick = () => {
    setStatus(!status)
  }

  return (
    <div onClick={handleClick}>
      {status ?
        <IconContext.Provider value={{ color }}>
          <div>
            <FaHeart />
          </div>
        </IconContext.Provider> :
        <IconContext.Provider value={{ color }}>
          <div>
            <FaRegHeart />
          </div>
        </IconContext.Provider>
      }
    </div>
  )
}
