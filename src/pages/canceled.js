import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const Canceled = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Purchase was cancelled</h1>
    <p>Boo</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Canceled
