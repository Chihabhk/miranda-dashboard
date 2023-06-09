import styled from 'styled-components';

const MainContainer = styled.div`
    padding: 50px;
    font-family: var(--font-Poppins);
`

const OptionsContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

const BookingRoom = styled.div`
    display: flex;
    gap: 20px;
`

const BookingRoomImg = styled.div`
    width: 50px;
    height: 50px;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const GuestInfo = styled.div`

    p:nth-child(2n){
        font-size: 14px;
        color: #799283;
    }
`

const RequestButtonEmpty = styled.button`
    background: none;
    color: #799283;
    border: 1px solid #799283;
    font-family: var(--font-Poppins);
    font-weight: 600;
    width: 90%;
    border-radius: 12px;
    padding: 10px 0;
`

const RequestButton = styled.button`
    background-color: #EEF9F2;
    border: none;
    width: 90%;
    border-radius: 12px;
    padding: 10px 0;
    font-family: var(--font-Poppins);
    font-weight: 600;
    cursor: pointer;
`

const CheckIn = styled.p`
    text-align: center;
    background-color: #E8FFEE;
    color: #5AD07A;
    border: none;
    width: 90%;
    border-radius: 12px;
    font-family: var(--font-Poppins);
    font-weight: 400;
    padding: 10px 0;
`

const CheckOut = styled.p`
    text-align: center;
    background-color: #FFEDEC;
    color: #E23428;
    border: none;
    width: 90%;
    border-radius: 12px;
    font-family: var(--font-Poppins);
    font-weight: 400;
    padding: 10px 0;
`

const InProgress = styled.p`
    text-align: center;
    background-color: #feffec;
    color: #e2df28;
    border: none;
    width: 90%;
    border-radius: 12px;
    font-family: var(--font-Poppins);
    font-weight: 400;
    padding: 10px 0;
`

const HourMini = styled.p`
    font-size: 14px;
    font-weight: 300;
`

const DeleteButton = styled.button`
    padding: 5px 10px;
    color: red;
    background-color: #FFEDEC;
    border-radius: 8px;
    border: none;
    cursor: pointer;
`

export {
    MainContainer,
    OptionsContainer,
    BookingRoom,
    BookingRoomImg,
    GuestInfo,
    RequestButtonEmpty,
    RequestButton,
    CheckIn,
    CheckOut,
    InProgress,
    HourMini,
    DeleteButton
}