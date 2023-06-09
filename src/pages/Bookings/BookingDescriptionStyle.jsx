import styled from 'styled-components';

const MainContainer = styled.div`
    padding: 50px;
`
const BookingContainer = styled.div`
    display: flex;
    background-color: white;
    border-radius: 12px;
    overflow: hidden;
    min-width: 800px;
`

const DataContainer = styled.div`
    width: 50%;
    padding: 40px;
`;

const UserContainer = styled.div`
    display: flex;
`

const UserPhoto = styled.div`
    width: 156px;
    height: 156;
    border-radius: 12px;
    overflow: hidden;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const UserData = styled.div`
    flex-grow: 1;
    padding-left: 20px;
    h2{
        font-size: 32px;
    }

    p{
        color: #799283;
        font-size: 14px;
        margin-top: 10px;
    }
`
const UserContact = styled.div`
    display: flex;
    margin-top: 20px;
    gap: 10px;
`

const TelephoneButton = styled.button`
    cursor: pointer;
    background: none;
    color: #135846;
    border: 1px solid #E8F2EF;
    padding: 10px 10px 5px 10px;
    font-size: 20px;
    border-radius: 12px;
    svg{
        margin-top:2px;
    }
`

const MessageButton = styled.button`
    cursor: pointer;
    color: white;
    padding: 5px 10px;
    background-color: #135846;
    border-radius: 12px;
    border: none;
    font-size: 16px;
    display: flex;
    align-items: center;
    gap: 15px;
    svg{
        font-size: 30px;
    }
`

const UserOptions = styled.p`
    color: #6E6E6E;
    margin-top: 10px;
    svg{
        cursor: pointer;
    }
   
`

const PhotoContainer = styled.div`
    width: 50%;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const DateContainer = styled.div`
    display: flex;
    margin-top: 20px;
    gap: 50px;
    border-bottom: 1px solid #C5C5C5;
`

const DateDiv = styled.div`

    margin-bottom: 30px;

    p:first-child{
        font-size: 14px;
        color: #6E6E6E;
    }

    p:nth-child(2n){
        font-size: 16px;
        color: #212121;
        font-weight: 500;
    }
`

const InfoContainer = styled.div`
    
`

const RoomInfo = styled.div`
    display: flex;
    gap: 50px;
    margin-top: 20px;
`

const Info = styled.div`
    color: #212121;
    font-size: 24px;
    font-weight: 500;

    p:first-child{
        font-size: 14px;
        color: #6E6E6E;
        font-weight: 400;
    }

    span{
        font-size: 14px;
        color: #799283;
        font-weight: 400;
    }
`

const RoomDescription = styled.p`
    font-size: 14px;
    color: #363636;
    margin-top: 30px;
`

const RoomFacilities = styled.div`
    margin-top: 20px;
    p:first-child{
        font-size: 14px;
        color: #6E6E6E;
        font-weight: 400;
        margin-bottom: 10px;
    }
`

const Facilitie = styled.span`
    padding: 5px 20px;
    background-color: #EEF9F2;
    color: #119240;
    margin: 0 10px;
    border-radius: 12px;
`

export {
    MainContainer,
    BookingContainer,
    DataContainer,
    UserContainer,
    UserPhoto,
    UserData,
    UserContact,
    TelephoneButton,
    MessageButton,
    UserOptions,
    DateContainer,
    DateDiv,
    InfoContainer,
    RoomInfo,
    Info,
    RoomDescription,
    RoomFacilities,
    Facilitie,
    PhotoContainer
}