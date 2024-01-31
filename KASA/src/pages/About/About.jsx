import MainLayout from "../../layout/MainLayout"
import img from '../../assets/images/image_source_2.png'
import Dropdown from "../../components/Dropdown/Dropdown"

const About = () => {
    return (
        <MainLayout>
            <img src={img} alt="Paysage de montagnes" />
            <Dropdown title="Equipements" content="Lorem ipsum dolor sit amet..." />
            <Dropdown title="Information" content="Maitre corbeau sur un arbre perché...." />
        </MainLayout>
        
    )
}

export default About