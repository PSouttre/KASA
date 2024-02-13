import './Home.scss'

import { useData } from '../../provider/DataProvider'

import { Link } from 'react-router-dom'
import MainLayout from "../../layout/MainLayout"
import HomeBanner from '../../components/Banner/HomeBanner'
import Card from '../../components/Card/Card'

const Home = () => {

    const {data} = useData();

    // affichage
    return (
        <MainLayout>
            <HomeBanner/>
            <div className='container'>
                {!data
                    ? <p>Loading...</p> 
                    : data.map((logement) => {
                        return (
                            <Link className="link__container" to={`/housing/${logement.id}`} key={logement.id}>
                                <Card logement={logement} />
                            </Link>
                        )
                    })
                }
            </div>
        </MainLayout>
    )
}

export default Home