import React, { useEffect } from 'react'
import FilterTable from '../../components/Table/FilterTable'
import { FilterContainer } from '../../components/Table/FilterTableStyle'
import Select from '../../components/Select/Select'
import { 
  MainContainer,
  OptionsContainer,
  ButtonsContainer,
  RoomName,
  RoomImg,
  RoomInfo,
  AddRoom,
  OfferPrice,
  Available,
  Booked,
  Price,
  NoData,
  DeleteButton
} from './RoomsStyle'
import Table from '../../components/Table/Table'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { roomDelete, roomsAvailableCall, roomsBookedCall, roomsCall } from '../../features/rooms/roomsSlice'

function Rooms() {

  const dispatch = useDispatch();

  const data = useSelector(state => state.rooms.rooms)

  const isLoading = useSelector(state => state.rooms.isLoading)

  useEffect(() => {
    dispatch(roomsCall())
  },[])

  const handleDeleteRoom = (id) => {
    dispatch(roomDelete(id))
  }

  const handleAllRooms = () => {
    dispatch(roomsCall())
  }

  const handleAvailableRooms = () => {
    dispatch(roomsAvailableCall())
  }

  const handleBookedRooms = () => {
    dispatch(roomsBookedCall())
  }

  const tableFilters = [
    {name: "All Rooms", action: handleAllRooms},
    {name: "Available Rooms", action: (handleAvailableRooms)},
    {name: "Booked Rooms", action: (handleBookedRooms)},
  ]

  const cols = [
    {property: 'image', label: 'Room', display: (row) => (
        <RoomName>
          <RoomImg>
            <img src={row.photo} alt={row.id} />
          </RoomImg>
            <RoomInfo>
              <p>
                #{row.id}
              </p>
              <p>
                {row.number}
              </p>
            </RoomInfo>          
        </RoomName>
      )},
      { property: 'type', label: 'Room Type' },
      { property: 'amenities', label: 'Amenities', display: (row) =>
        row.amenities?
          <p>{row.amenities}</p>
        :  
          <NoData>No amenities</NoData>
      },
      { property: 'price', label: 'Price', display: (row) => 
        <Price>${row.price} <span>/night</span></Price>
      },
      { property: 'offer', label: 'Offer Price', display: (row) => 
          row.offer?
            <OfferPrice>
              <p>{row.offer}%</p>
              <p>{row.price-(row.price*(row.offer/100))}</p>
            </OfferPrice>
          :
            <NoData>
              No offer
            </NoData>
      },
      { property: 'status', label: 'Status', display: (row) => 
        row.status? 
          <Available>Available</Available>
        :
          <Booked>Booked</Booked>  
      },
      { property: 'deleteRoom', label: '', display: (row) =>
        <DeleteButton onClick={()=>handleDeleteRoom(parseInt(row.id))}>Delete</DeleteButton>
      }
  ]

  return (
    <MainContainer>
      {isLoading?
        <></>
        :
        <>
          <OptionsContainer>
            <FilterContainer>
              <FilterTable filters={tableFilters}/>
            </FilterContainer>
            <ButtonsContainer>
              <AddRoom>
                <Link to='/rooms/newRoom'>
                  + New Room
                </Link>
              </AddRoom>
              <Select />          
            </ButtonsContainer>
          </OptionsContainer>
          <Table data={data} cols={cols} />
        </>
      }
    </MainContainer>
  )
}

export default Rooms