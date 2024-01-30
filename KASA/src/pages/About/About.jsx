import { Link } from "react-router-dom"
import MainLayout from "../../layout/MainLayout"

const About = () => {
    return (
        <MainLayout>
            <h1>A Propos</h1>
            <Link to="/">Page d'accueil</Link>
        </MainLayout>
        
    )
}

export default About