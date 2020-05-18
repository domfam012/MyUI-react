import React, {useState} from 'react';
import Link from "next/link";

// Header
const DocHeader = props => {

    return (
        <header className="doc-header">
            <nav className="navbar navbar-expand">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="index.html">MyUI Home<span
                            className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="document.html">Documentation</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default DocHeader;
