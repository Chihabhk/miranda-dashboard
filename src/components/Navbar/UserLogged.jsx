import React from 'react'
import { UserCard, UserEdit, UserEmail, UserImg, UserName } from './UserLoggedStyle'

function UserLogged() {
  return (
    <UserCard>
        <UserImg>
            <img src={require('../../assets/header/user_photo.jpg')} alt="userPhoto" />
        </UserImg>
        <UserName>
            Guest
        </UserName>
        <UserEmail>
            chihabhk@gmail.com
        </UserEmail>
        <UserEdit>
            Edit
        </UserEdit>
    </UserCard>
  )
}

export default UserLogged