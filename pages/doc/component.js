import React from 'react';
import Link from 'next/link';

// Component
const Component = props => {
    return (
        <>
            component.html 페이지

            <Link href={"./document"}>
                <a>
                    document
                </a>
            </Link>
        </>
    );
};

export default Component;
