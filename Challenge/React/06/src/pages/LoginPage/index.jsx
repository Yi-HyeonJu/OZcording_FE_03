import styled from "styled-components"

const LoginPage = () => {
    return (
        <Container>
            <Center>
                <Logo src="/images/apple-gray-logo.svg" alt="로고"/>
                <HeadingText>로그인이 필요합니다.</HeadingText>
                <Description>로그인 이후 Apple TV 사용이 가능합니다.</Description>
                <Button>아이디</Button>
                <LinkText>회원가입</LinkText>
                <LinkText>아이디나 비밀번호를 잊으셨나요?</LinkText>
            </Center>
        </Container>
    );
};

const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

const Center = styled.div`
    max-width: 650px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Logo = styled.img`
    margin-bottom: 1.3rem;
    width: 50px;
`;

const HeadingText = styled.h1`
    font-size: 1.9rem;
`;

const Description = styled.p`
    margin: 0;
    font-size: 1.3rem;
`;

const LinkText = styled.p`
    font-size: 1.2rem;
    color: #2997ff;
    margin: 1rem 0;
`;

const Button = styled.a`
    margin-top: 2.5rem;
    margin-bottom: 8rem;
    font-size: 18px;
    padding: 1rem;
    border: 1px solid transparent;
    border-radius: 12px;
    border-color: #424245;
    background-color: hsla(0, 0%, 100%,.04);
    width: 310px;
    font-weight: 400;
    cursor: pointer;

    &:hover {
        background-color: hsla(0, 0%, 100%,.08);
    }
`;

export default LoginPage;