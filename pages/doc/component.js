import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Layout from "../../components/Layout";

// Component
const Component = props => {
    return (
        <Layout>
            component.html 페이지

            <Link href={"./document"}>
                <a>
                    document
                </a>
            </Link>
        </Layout>
    );
};

export default Component;
