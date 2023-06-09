import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { 
  BookingContainer, 
  DataContainer, 
  DateContainer, 
  DateDiv, 
  Facilitie, 
  Info, 
  InfoContainer, 
  MessageButton, 
  PhotoContainer, 
  RoomDescription, 
  RoomFacilities, 
  RoomInfo, 
  TelephoneButton, 
  UserContact, 
  UserContainer, 
  UserData, 
  UserOptions, 
  UserPhoto 
} from './BookingDescriptionStyle';
import { MainContainer } from './BookingsStyle';
import {
  BsFillTelephoneFill
} from 'react-icons/bs'
import {
  AiOutlineMessage
} from 'react-icons/ai'
import {
  SlOptionsVertical
} from 'react-icons/sl'
import { useDispatch, useSelector } from 'react-redux';
import { bookingCall, bookingDelete } from '../../features/bookings/bookingsSlice';


function BookingDescription() {

  const navigate = useNavigate()

  const bookingId = useParams();

  const dispatch = useDispatch();

  let booking = useSelector(state => state.bookings.booking);

  let isLoading = useSelector(state => state.bookings.isLoading)
  
  useEffect(()=>{
    dispatch(bookingCall(parseInt(bookingId.bookingId)));
  },[])

  const handleDeleteRoom = (id) => {
    dispatch(bookingDelete(id))
    navigate('/bookings')
  }

  return (
    <MainContainer>
      <BookingContainer>
        <DataContainer>
          <UserContainer>
            <UserPhoto>
            </UserPhoto>
            <UserData>
              {isLoading?
                <>
                  
                </>
              :
                <>
                  <p>ID {booking?.id}</p>                
                </>
              }
              <UserContact>
              <TelephoneButton>
                <BsFillTelephoneFill />
              </TelephoneButton>
              <MessageButton>
                <AiOutlineMessage />
                Send Message
              </MessageButton>
            </UserContact>
            </UserData>
            
            <UserOptions>
            <SlOptionsVertical onClick={() => handleDeleteRoom(booking.id)} />
            </UserOptions>
          </UserContainer>

          <DateContainer>
            <DateDiv>
              <p>Check In</p>
              <p>{booking.checkin?.date} | {booking.checkin?.hour}</p>
            </DateDiv>

            <DateDiv>
              <p>Check Out</p>
              <p>{booking.checkout?.date} | {booking.checkout?.hour}</p>  
            </DateDiv>
          </DateContainer>

          <InfoContainer>
            <RoomInfo>
              <Info>
                <p>Room Info</p>
                <p>{booking?.typeRoom}</p>
              </Info>

              <Info>
                <p>Price</p>                  
                <p>$ {booking?.price} <span>/night</span></p>  
              </Info>
            </RoomInfo>
            
            <RoomDescription>
              {isLoading?
                <>
                </>
                :
                booking?.description
              }
            </RoomDescription>
            <RoomFacilities>
              <p>Facilities</p>
              {
                booking.amenities?.map((item, index)=>{
                  return <Facilitie key={index}>{item}</Facilitie>
                })
              }
            </RoomFacilities>
          </InfoContainer>
        </DataContainer>
        
        <PhotoContainer>
            <img src={booking.photo} alt="roomPhoto" />
        </PhotoContainer>
      </BookingContainer>
      </MainContainer>
  )
}

export default BookingDescription