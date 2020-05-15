import React from 'react';
import Link from 'next/link';

// Document
const Document = props => {
    return (
        <>
            document.html 페이지

            <Link href={"./component"}>
                <a>
                    component
                </a>
            </Link>
        </>
    );
};

export default Document;
