import { Link } from "react-router-dom"
import Button from "../../components/Button/Button"

const Home = () => {
    return (
        <div>
            <h1>HOME</h1>
            <p>ma page home</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae reiciendis a, dignissimos numquam natus deserunt perspiciatis quos officia? Sint officia numquam, officiis aliquam nobis obcaecati quisquam? Veritatis incidunt dolores ipsam.</p>
            <Link to="/a-propos">à propos</Link>
        </div>
    )
}

export default Home