import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

const Header = () => {

    const [{basket, user}, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if(user) {
            auth.signOut();
        }
    };

    return (
        <div className = 'header'>
            <Link to = "/">
                <img src = "http://pngimg.com/uploads/amazon/amazon_PNG11.png" className = "header__logo"></img>
            </Link>
            <div className = "header__search">
                <input className = "header__searchInput" type = "text"/>
                <SearchIcon className = "header__searchIcon" />
            </div>
            <div className = "header__nav">
                <Link to = {!user && "/login"}>
                    <div className = "header__option" onClick = {handleAuthentication}>
                        <div className = 'header__optionLineOne'>
                            Hello {user ? user.email: 'Guest'}
                        </div>
                        <div className = 'header__optionLineTwo'>
                            {user ? 'Sign Out': 'Sign In'}
                        </div>
                    </div>
                </Link>
               
                <div className = "header__option">
                    <div className = 'header__optionLineOne'>
                        Returns
                    </div>
                    <div className = 'header__optionLineTwo'>
                        & Orders
                    </div>
                </div>
                <div className = "header__option">
                    <div className = 'header__optionLineOne'>
                        Your
                    </div>
                    <div className = 'header__optionLineTwo'>
                        Prime
                    </div>
                </div>
                <Link to = "/checkout">
                    <div className = "header__optionBasket">
                        <ShoppingBasketIcon />
                        <span className = "header__optionLineTwo header__basketCount">
                            {basket?.length}
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Header;