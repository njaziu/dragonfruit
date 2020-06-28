// import React from 'react'
// import {graphql, useStaticQuery} from 'gatsby'
// import img from '../images/angel-falls.jpg'
// import Img from 'gatsby-image'

// const getImages = graphql`
//     query Images{
//         fixed:file(relativePath:{eq:"angel-falls.jpg"}){
//             childImageSharp{
//                 fixed(width:300, height:190, grayscale:true){
//                     ...GatsbyImageSharpFixed
//                 }
//             }
//         }
//         fluid:file(relativePath:{eq:"slide1.jpg"}){
//             childImageSharp{
//                 fluid(maxWidth:600){
//                     ...GatsbyImageSharpFluid
//                 }
//             }
//         }
//     }
// `

// const Images = () => {
//     const data = useStaticQuery(getImages);
//     return (
//         <div>
//             <article>
//                 <h3>Basic Image</h3>
//                 <img src={img} alt="qa ka"/>    
//             </article>
//             <article>
//             <h3>Fixed Image</h3>
//             <Img fixed={data.fixed.childImageSharp.fixed} />
//             </article>
//             <article>
//             <h3>Fluid Image</h3>
//             <Img fluid={data.fluid.childImageSharp.fluid} />
//             </article>

//         </div>
//     )
// }

// export default Images
