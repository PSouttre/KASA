import './Home.scss'
import { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'
import MainLayout from "../../layout/MainLayout"
import HomeBanner from '../../components/Banner/HomeBanner'
import Card from '../../components/Card/Card'

const Home = () => {

    // state
    const [data, setData] = useState(null)

    // comportement
    useEffect(() => {
        fetch('./src/datas/logements.json')
            .then(data => data.json())
            .then(result => setData(result))
    }, [])
    
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