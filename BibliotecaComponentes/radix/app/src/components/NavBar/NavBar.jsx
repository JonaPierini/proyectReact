import React from 'react'
import DropdownMenuDemo from '../DropdownMenuDemo/DropdownMenuDemo'
import './styles.css'

export const NavBar = () => {
  return (
    <>
        <ul className='NavBar'>
            <li>Home</li>
            <li>About Us</li>
            <li>ContacMe</li>
            <DropdownMenuDemo></DropdownMenuDemo>
        </ul>
    </>
  )
}
