import styled from "styled-components";
import logo from "./../images/logo.svg";
import {Link} from "react-router-dom";

function Header() {
    return (
        <Container>
            <Link to="/">
                <Logo src={logo} alt="logo" />
            </Link>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 100px 0;
`;

const Logo = styled.img`
`;

export default Header;