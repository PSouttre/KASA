const MainLayout = (children) => {
    return (
        <div className='main'>
            <h1>HEADER</h1>
                {children}
            <h1>FOOTER</h1>
        </div>
    )
}

export default MainLayout