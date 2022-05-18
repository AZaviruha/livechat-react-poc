import type { FC } from 'react'
import IconButton from '@mui/material/IconButton'
import ChatIcon from '@mui/icons-material/Chat'
import { styled } from '@mui/material/styles'

export interface ChatButtonProps {
  disabled?: boolean
  onClick: () => void
}

const StyledButton = styled(IconButton)({
  position: 'absolute',
  bottom: '10px',
  right: '10px',
  fontSize: '48px'
})

const ChatButton: FC<ChatButtonProps> = (props) => {
  const {
    onClick,
    disabled = false
  } = props

  return (
    <StyledButton
      aria-label='chat'
      color='secondary'
      size='large'
      disabled={disabled}
      onClick={onClick}
    >
      <ChatIcon fontSize='inherit' />
    </StyledButton>
  )
}

export default ChatButton
