import React from "react"
import Layout from '../components/Layout'
import Slider from '../components/Slider'
import Banner from '../components/Banner'
import Countries from '../components/Countries'




export default () => (
    <Layout>
      <Slider />
      <Banner title="Neque porro quisquam" info="Ut varius nibh adipiscing sagittis lobortis. 
      Sed imperdiet risus enim, sit amet tempus nisi lobortis a. Maecenas ut purus rutrum,
      bibendum eros eu, suscipit diam. Praesent semper bibendum gravida.
      Praesent eget leo ac arcu aliquet pellentesque sit amet at tortor.
      Cras sagittis nec tellus nec imperdiet.Maecenas in ipsum pulvinar, dapibus leo ut, adipiscing neque. 
      Phasellus tincidunt arcu eleifend placerat posuere. Nullam nec eros in leo facilisis blandit id in neque. 
      Proin varius, neque in eleifend porta, neque arcu dapibus risus, vel congue ante nibh varius nisi."></Banner>
      <Countries />
    </Layout>
)
