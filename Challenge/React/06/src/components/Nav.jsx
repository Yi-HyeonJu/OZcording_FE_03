import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components'


const Nav = () => {
    
    const [searchValue, setSearchValue] = useState('')

    const handleChange = (e) => {
        setSearchValue(e.target.value)
        navigate(`/search?q=${e.target.value}`)
    }

    const navigate = useNavigate()

    return (
        <NavWrapper>
            <Logo>
                <img
                    alt="logo"
                    src="/images/apple-logo.png"
                    onClick={() => { window.location.href = "/" }}/>
            </Logo>
        <Input
        className='nav_inut'
        type="text"
        value={searchValue}
        onChange={handleChange}
        placeholder='영화를 검색해주세요'
        />
        <Login>로그인</Login>
        </NavWrapper>
    );
};

const NavWrapper = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 70px;
    background-color: #000000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 36px;
    letter-spacing:16px;
    z-index: 3;
`

const Logo = styled.a`
    padding: 0;
    width: 70px;
    font-size: 0;
    display: inline-block;
    margin-bottom: 10px;

    img {
        display: block;
        width: 100%;
    }
`

const Input = styled.input`
position: fixed;
left: 50%;
transform: translate(-50%, 0);
background-color: rgba(0,0,0,0.5);
border-radius: 5px;
color: white;
padding: 5px;
border: 1px solid lightgray
`

const Login = styled.a`
background-color: rgba(0,0,0,0.6);
padding: 8px 16px;
text-transform: uppercase;
letter-spacing: 1.5px;
border: 1px solid #f9f9f9;
border-radius: 4px;
transition: all 0.2s ease;


&:hover{
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
}
`

export default Nav;