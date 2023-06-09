import styled from 'styled-components';

const NavbarMain = styled.div`
    min-height: 100%;
    position: relative;
    background-color: white;
    text-align: center;
    padding: 30px;
    font-family: var(--font-Poppins);
`;

const LogoContainer = styled.div`
    display: flex;
    font-family: 'Archivo';
    align-content: center;
    gap: 20px;

`

const TitleLogo = styled.div`
    font-size: 30px;
    align-self: center;
    font-weight: 400;
    text-align: start;
    p:first-child{
        font-weight: 700;
    }

`

const LogoLetter = styled.div`
    font-size: 50px;
    font-weight: 700;
    padding: 10px 20px;
    box-shadow: 0px 14px 24px rgba(139, 139, 139, 0.25);
`

const ListLinks = styled.ul`
    padding-left: 50px;
    padding-top: 80px;
    list-style: none;
    text-align: start;
    li{
        position: relative;
        a{
            display: flex;
            align-items: center;
            color: #799283;
            text-decoration: none;
            gap: 20px;
            font-size: 20px;
            margin-bottom: 40px;

            &.active{
                color: red;
            }
        }
    }
`
const CircleLink = styled.span`
    
    ${props => {
        if(props.location===props.currentLocation){
            return{
                overflow: "visible",
                position: "absolute",
                left: "-110px",
                top: "-17px",
                borderRadius: "10px",
                display: "inline-block",
                height: "60px",
                width: "40px",
                backgroundColor: "red",        
            }
        }
    }}
`;

const CompanyName = styled.p`
    color: #212121;
    font-size: 16px;
    font-family: var(--font-Poppins);
    font-weight: 600;
    margin-top: 60px;
`

const Copyright = styled.p`
    color: #799283;
    font-size: 14px;
    margin-top: 5px;
`

const MadeBy = styled.p`
    color: #799283;
    font-size: 14px;
    margin-top: 15px;
`


export {
    NavbarMain,
    TitleLogo,
    LogoContainer,
    LogoLetter,
    ListLinks,
    CircleLink,
    CompanyName,
    Copyright,
    MadeBy
}