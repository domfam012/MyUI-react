import React, {useState} from 'react';
import {useRouter} from "next/router";
import Link from "next/link";
import cookie from "js-cookie";

// Header
const Header = props => {
    const router = useRouter();

    return (
        <header className="header">
            <div className="bg-header">
                <nav className="navbar navbar-expand navbar-dark">
                    <a className="navbar-brand" href="#"><img src="../img/common/logo.png" alt="MyUI"/></a>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link href={"/"}>
                                <a className="nav-link" href="#">Home<span className="sr-only">(current)</span></a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href={"/doc/document"}>
                                <a className="nav-link" href="#">Documentation</a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
