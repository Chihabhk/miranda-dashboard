import styled from 'styled-components';

const MainContainer = styled.div`
    padding: 50px;
    font-family: var(--font-Poppins);
    color: #393939;
`

const OptionsContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
const ButtonsContainer = styled.div`
    display: flex;
    gap: 20px;
`

const AddRoom = styled.button`
    border: none;
    border-radius: 12px;
    background-color: #135846;
    color: white;
    font-family: var(--font-Poppins);
    cursor: pointer;
    a{
        color: white;
        text-decoration: none;
        display: block;
        padding: 10px 35px;
    }
`
const RoomName = styled.div`
    display: flex;
    gap: 20px;
    align-items: flex-end;
`

const RoomImg = styled.div`
    width: 150px;
    height: 77px;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 8px;
    }
`

const RoomInfo = styled.div`
    p{
        font-size: 16px;


        &:first-child{
        font-size: 14px;
        color: #799283;
    }
    }
`

const OfferPrice = styled.div`
    p{
        font-size: 18px;
        color: green;
        &:first-child{
            font-size: 12px;
            color: red;
        }
    }

`

const NoData = styled.p`
    color: #a3a3a3;
`

const Available = styled.p`
    background-color: #5AD07A;
    color: white;
    padding: 10px 7px;
    text-align: center;
    border-radius: 12px;
`

const Booked = styled.p`
    color: white;
    background-color: #E23428;
    padding: 10px 7px;
    text-align: center;
    border-radius: 12px;
`

const Price = styled.p`
    color: #212121;
    font-weight: 600;

    span{
        color: #799283;
        font-size: 14px;
        font-weight: 400;
    }
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
    ButtonsContainer,
    RoomName,
    RoomImg,
    RoomInfo,
    OfferPrice,
    NoData,
    Available,
    Booked,
    Price,
    AddRoom,
    DeleteButton
}