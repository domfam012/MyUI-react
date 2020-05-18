import React from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';

import Layout from "../../components/Layout";

import Document from "../../components/doc/Document";
import Component from "../../components/doc/Component";

// const router = useRouter();

// Document
const Doc = props => {
    const { menu } = props;

    return (
        <Layout>
            {
                menu === 'document'
                    ? <Document/>
                    : <Component/>
            }
        </Layout>
    );
};

// const getServerSideProps = async ctx => {
//     console.log(ctx)
//
//     return {}
// };
export async function getServerSideProps(ctx) {
    const menu = ctx.query.menu;
    return {props: { menu }};
}

export default Doc;
