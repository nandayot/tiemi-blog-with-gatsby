import React from 'react'

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Newsletter from "../components/Newsletter"

const NewsletterLink = () => (
    <Layout>
        <SEO title="Newsletter" />
        <Newsletter />
    </Layout>
)

export default NewsletterLink