import React from 'react' //sempre importar o react no começo de cada página

import Layout from "../components/Layout"
import SEO from "../components/seo"

//camelcase e colocar a palavra Page no final para melhor organização
const AboutPage = () => (
    <Layout>
        <SEO title="About" />
        <h1>About Page</h1>
    </Layout>
)

export default AboutPage