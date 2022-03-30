import React, { useContext } from 'react'
import MainHeader from './MainHeader';
import Navlinks from './Navlinks';

const Navigation = () => {

    return (
        <MainHeader className="">
            <h1>My Products</h1>
            <nav className="center">
               <Navlinks />
            </nav>
        </MainHeader>
    )
}

export default Navigation
