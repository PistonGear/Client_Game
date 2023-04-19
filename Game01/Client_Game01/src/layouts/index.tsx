import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const MainLayout = () => {

    return (
        <>
        <div style={ { width: '100%', height: '100vh', backgroundColor: 'red' }}>
            <Navbar/>
                <div style={{ display: 'flex', height: 'auto' }}>
                    <Sidebar/>
                    <div style={ { width: '100%'}}>
                        <Outlet/>
                    </div>
                </div>
            <Footer/>
        </div>
        </>
    )
}

export default MainLayout;