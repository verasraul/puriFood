import Nav from './Nav';
import Footer from './Footer';


const Layout = (props) => {
    return (
        <div className='layout'>
            {/* <Header /> */}
            <h1 className='app-title'> Purifood </h1>
            <Nav />

            {props.children}

            <Footer />
        </div>
    )
};

export default Layout;