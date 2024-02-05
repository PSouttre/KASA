import './Home.scss'

import MainLayout from "../../layout/MainLayout"
import HomeBanner from '../../components/Banner/HomeBanner'
import Card from '../../components/Card/Card'



const Home = () => {
    return (
        <MainLayout>
            <HomeBanner/>
            <Card image = "" title= "" content=""/>
        </MainLayout>
    )
}

export default Home