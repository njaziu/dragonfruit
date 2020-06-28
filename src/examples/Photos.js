import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import Img from 'gatsby-image'

const Photos = () => {

    const data = useStaticQuery(graphql`
        query Images{
            images: allFile(filter: { relativeDirectory: {eq: "gallery"}}){
                nodes {
                    id
                    childImageSharp {
                        fixed(width: 200){
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
            }
            image: file(relativePath: {eq: "angel-falls.jpg"}) 
            {
                id
                childImageSharp {
                fixed(
                    width: 400
                    duotone: {highlight: "#ff0000", shadow: "#ffffff"}
                ) {
                    ...GatsbyImageSharpFixed
                }
                fluid {
                    ...GatsbyImageSharpFluid

                }
                }
            }
              
        }
    `)
    console.log(data);
    return (
      
        <div>  
            <Img fixed={data.image.childImageSharp.fixed} alt="angle"/>

            <Img fluid={data.image.childImageSharp.fluid} alt="angle"/>
            <div className="gallery">
                {data.images.nodes.map(image => (
                    <Img key={image.id} fixed={image.childImageSharp.fixed} />
                ))}
            </div>
        </div>
    )
}

export default Photos
