import React from 'react'
import { Segment, Image, Header } from 'semantic-ui-react'
import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
`

const showPage = (user) => {
  return (
    <StyledContainer>

      <div>
        <Image style={{ 'font-size': 42 }} avatar src={user.image === null || user.image === '' ? 'data:image/png;base64,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' : user.image} />
        <Header style={{textShadow:"2px 2px 5px gray"}} as='span'>{user.nickname === null || user.image === '' ? user.email : user.nickname}</Header>
      </div>

    </StyledContainer>
  ) 
}

const ProfilePage = (user) => {

  return(
    <Segment>
      {showPage(user.user)}
    </Segment>
  )
  
}

export default ProfilePage
