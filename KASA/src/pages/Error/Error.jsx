import { Link } from "react-router-dom"
import MainLayout from "../../layout/MainLayout"

const Error = () => {
    return (
        <MainLayout>
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas</p>
            <Link to="/">Retourner sur la page d'accueil</Link>
        </MainLayout>
    )
}

export default Error