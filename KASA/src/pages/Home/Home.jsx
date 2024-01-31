import MainLayout from "../../layout/MainLayout"
import img from '../../assets/images/image_source_1.png'



const Home = () => {
    return (
        <MainLayout>
            <img src={img} alt="Paysage de falaise et océan" />
        </MainLayout>
    )
}

export default Home