import React, {useState} from 'react';
import Link from "next/link";
import {useRouter} from "next/router";

// Header
const DocHeader = props => {

    // TODO: nav-item document.html component.html 구분 필요한지

    // const router = useRouter();
    // const path = router.pathname.split('/')[2];

    // switch(path) {
    //     case 'document':
    //         break;
    //     case 'component':
    //         break;
    //     default:
    //         console.log(404);
    //         break;
    // }

    return (
        <header className="doc-header">
            <nav className="navbar navbar-expand">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link href={"/"}>
                            <a className="nav-link">MyUI Home<span className="sr-only">(current)</span></a>
                        </Link>
                    </li>
                    <li className="nav-item active">
                        <Link href={"/doc/document"}>
                            <a className="nav-link">Documentation</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default DocHeader;
