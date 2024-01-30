import Header from "../components/Header/Header"

const MainLayout = ({children}) => {
    return (
        <>
            <Header />
            <main>
                    {children}
            </main>
            <footer>FOOTER</footer>
        </>
    )
}

export default MainLayout