import './Home.scss'
import { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'
import MainLayout from "../../layout/MainLayout"
import HomeBanner from '../../components/Banner/HomeBanner'
import Card from '../../components/Card/Card'

const Home = () => {

    const [data, setData] = useState(null)

    useEffect(() => {
        fetch('./src/datas/logements.json')
            .then(data => data.json())
            .then(result => setData(result))
    }, [])

    return (
        <MainLayout>
            <HomeBanner/>
            {!data
                ? <p>Loading...</p> 
                : data.map((logement) => {
                    return (
                        <Link to={`/housing/${logement.id}`} key={logement.id}>
                            <Card logement={logement} />
                        </Link>
                    )
                })
            }
        </MainLayout>
    )
}

export default Home