import React from 'react'
import {
  AragonApp,
  Button,
  Text,

  observe
} from '@aragon/ui'
import Aragon, { providers } from '@aragon/client'
import styled from 'styled-components'

const AppContainer = styled(AragonApp)`
  display: flex;
  align-items: center;
  justify-content: center;
`

export default class App extends React.Component {
  state = { sender: '' }

  getSender = () => {
    this.props.app.call('getSender')
    .subscribe(response => {
      this.setState({ sender: response })
    })
  }

  render () {
    return (
      <AppContainer>
        <div>
          <span>Sender address: {this.state.sender}</span><br />
          <Button onClick={this.getSender}>Get sender address</Button>
        </div>
      </AppContainer>
    )
  }
}

