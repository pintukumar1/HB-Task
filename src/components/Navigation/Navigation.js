import React from 'react'
import { Link } from 'react-router-dom';
import Button from '../UI/Button';
import MainHeader from './MainHeader';
import Navlinks from './Navlinks';

const Navigation = () => {

    return (
        <MainHeader>
            <Link to="/products">
                <Button>Products</Button>
            </Link>
            <nav>
                <Navlinks />
            </nav>
        </MainHeader>
    )
}

export default Navigation
