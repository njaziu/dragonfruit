import React from "react"
import Layout from '../components/Layout'
import CountriesFilter from '../components/CountriesFilter'
import Banner from '../components/Banner'



export default () => (
    <Layout>
        <Banner title="Sed ut perspiciatis" info="Ut varius nibh adipiscing sagittis lobortis. 
        Sed imperdiet risus enim, sit amet tempus nisi lobortis. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."></Banner>
        <CountriesFilter/>
    </Layout>
)