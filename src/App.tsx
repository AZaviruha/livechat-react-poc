import type { FC } from 'react'
import { ThemeProvider } from '@mui/material'

import theme from './theme'
import ChatButton from './components/ChatButton'
import Chat from './components/Chat'
import useChatApp from './hook'

import './App.css'

const App: FC = () => {
  const {
    isChatOpen,
    isConnected,
    handleOpenChat,
    handleCloseChat
  } = useChatApp()

  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        {isChatOpen && (
          <Chat
            loading={false}
            messages={[]}
            onSendMessage={() => {}}
            onCloseChat={handleCloseChat}
          />
        )}

        {!isChatOpen && (
          <ChatButton
            disabled={!isConnected}
            onClick={handleOpenChat}
          />
        )}
      </div>
    </ThemeProvider>
  )
}

export default App
