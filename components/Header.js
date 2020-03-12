import React, {useState} from 'react';
import {useRouter} from "next/router";
import cookie from "js-cookie";

// Header
const Header = props => {
    const router = useRouter();
    const [menuActive, setMenuState] = useState(false);

    //로그아웃
    const logout = async (e) => {
        e.preventDefault();
        const check = confirm("로그아웃 하시겠습니까?");
        cookie.remove('token');
    }

    return (
        <header>
            header
        </header>
    );
};

export default Header;
