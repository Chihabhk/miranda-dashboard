import React from 'react'
import { MessagesCard, MessageText, OptionsContainer, PhotoContainer, UserContainer, UserData, Actions } from './MessageStyle'

function Message({ props }) {

  return (
    <MessagesCard>
      <MessageText>
        {props.text}
      </MessageText>
      <OptionsContainer>
        <UserContainer>
          <PhotoContainer>
            <img src={require('../../assets/header/user_photo.jpg')} alt="userPhoto" />
          </PhotoContainer>
          <UserData>
            <p>{props.user.name}</p>
            <p>{props.user.time}</p>
          </UserData>
        </UserContainer>
        <Actions>
          <button>✓</button>
          <button>x</button>
        </Actions>
      </OptionsContainer>
    </MessagesCard>
  )
}

export default Message