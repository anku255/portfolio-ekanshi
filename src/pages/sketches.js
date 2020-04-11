import React, { Component } from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import Masonry from 'react-masonry-component'

class Sketches extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const categories = this.props.data.categories.edges

    console.log("categories", categories)

    return (
      <Layout>
        <Helmet>
          <title>Projects</title>
        </Helmet>
        <div className="sketches-container">
          <h1 className="heading-primary">Projects</h1>
    {/* <pre>{JSON.stringify(categories, null, 2)}</pre> */}
          {
            categories.map(({node: category}) => {
              return (
                <Masonry className="showcase">
                  {category.projects.map(project => (
                    <div key={project.id} className="showcase__item">
                      <Link to={`/image/${project.slug}`}>
                        <Img fluid={project.coverImage.fluid} />
                        {/* <h4 className="showcase__title">
                          <span className="showcase__title-span">{project.title}</span>
                        </h4> */}
                      </Link>
                    </div>
                  ))}
                </Masonry>
              )
            })
          }
        </div>
      </Layout>
    )
  }
}

export default Sketches

export const pageQuery = graphql`
  query {
    categories: allContentfulCategory(sort: { fields: [createdAt], order: DESC }) {
      totalCount
      edges {
        node {
          id
          name
          projects {
            id
            slug
            title
            coverImage {
              fluid(maxWidth: 200) {
              ...GatsbyContentfulFluid_tracedSVG
              }
            }
          }
        }
      }
    }
  }
`
