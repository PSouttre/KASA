import { Link } from "react-router-dom"
import MainLayout from "../../layout/MainLayout"
import Dropdown from "../../components/Dropdown/Dropdown"


const Home = () => {
    return (
        <MainLayout>
            <h1>HOME</h1>
            <Dropdown title="Equipements" content="Lorem ipsum dolor sit amet..." />
            <Dropdown title="Information" content="Maitre corbeau sur un arbre perché...." />
            <p>ma page home</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae reiciendis a, dignissimos numquam natus deserunt perspiciatis quos officia? Sint officia numquam, officiis aliquam nobis obcaecati quisquam? Veritatis incidunt dolores ipsam.</p>
            <Link to="/a-propos">à propos</Link>
        </MainLayout>
    )
}

export default Home