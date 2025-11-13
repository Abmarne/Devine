
import { Navbar, NavbarButton, NavbarButtons, NavbarLogo } from "./NavbarElements";
import logo from '../../assets/logo.png';
import logged_out_user from '../../assets/logged_out_user.jpg';

const NavbarElement = () => {
    return (
        <>
            <Navbar>
                <NavbarLogo>
                    <img src={logo} alt="Devine" style={{ height: '4rem' }} />
                </NavbarLogo>
                <NavbarButtons>
                    <NavbarButton to="/home">Home</NavbarButton>
                    <NavbarButton to="/connect">Connect</NavbarButton>
                    <NavbarButton to="/games">Games</NavbarButton>
                </NavbarButtons>
                <img src={logged_out_user} alt="Logged Out User"
                style={{ height: '3rem', borderRadius: '50%', margin: '1rem' }} />
            </Navbar>
        </>
    );
};

export default NavbarElement;