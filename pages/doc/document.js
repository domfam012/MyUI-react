import React from 'react';
import Link from 'next/link';

import Layout from "../../components/Layout";

// Document
const Document = props => {
    return (
        <Layout>
            document.html 페이지

            <Link href={"./component"}>
                <a>
                    component
                </a>
            </Link>
        </Layout>
    );
};

export default Document;
