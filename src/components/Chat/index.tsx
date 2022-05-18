import type { FC } from 'react'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'

import styles from './styles.module.css'

export interface ChatProps {
  loading?: boolean
  messages: any[]
  onSendMessage: (text: string) => void
  onCloseChat: () => void
}

const Chat: FC<ChatProps> = (props) => {
  const { messages, onCloseChat } = props

  return (
    <div className={styles.chat}>
      <div className={styles.header}>
        <div className={styles.textWelcome}>
          Talk to us!
        </div>

        <IconButton className={styles.btnClose} onClick={onCloseChat}>
          <CloseIcon />
        </IconButton>
      </div>

      <div className={styles.content}>
        {messages.map((msg: any) => (<div key={msg.id}>{msg.title}</div>))}
      </div>

      <div className={styles.footer}>
        {' '}
      </div>
    </div>
  )
}

export default Chat
