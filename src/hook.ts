import type { Chat } from '@livechat/customer-sdk'
import { useCallback, useEffect, useState } from 'react'

// export type ChatStatus = 'Starting' | 'Active' | 'Inactive'

export interface UseChatAppReturn {
  isChatOpen: boolean
  isConnected: boolean
  handleOpenChat: () => void
  handleCloseChat: () => void
}

const useChatApp = (): UseChatAppReturn => {
  const sdk = (window as any).sdk
  const [chat, setChat] = useState<Chat | null>(null)
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [isConnected, setIsConnected] = useState(false)

  // ========================================== //
  //                   HANDLERS                 //
  // ========================================== //

  const handleOpenChat = useCallback(async () => {
    if (chat?.active === true) {
      setIsChatOpen(true)
      return
    }

    try {
      // todo: start chat loader
      const hasChat = chat != null

      if (hasChat) {
        const chatConfig = {
          id: chat.id,
          thread: { events: [] }
        }

        const nextChat = await sdk.resumeChat({ chat: chatConfig })

        setChat(nextChat)
        setIsChatOpen(true)
        return
      }

      const nextChat = await sdk.startChat()
      setChat(nextChat)
      setIsChatOpen(true)
    } catch (err) {
      console.info('handleOpenChat :: error :: ', err)
      // process errors
    } finally {
      // todo: stop chat loader
    }
  }, [chat])

  const handleCloseChat = useCallback(() => {
    setIsChatOpen(false)
  }, [])

  // ========================================== //
  //                   EFFECTS                  //
  // ========================================== //

  useEffect(() => {
    const handleConnected = async (): Promise<void> => {
      const { chatsSummary, totalChats } = await sdk.listChats()

      if (totalChats > 0) {
        setChat(chatsSummary[0])
      }

      setIsConnected(true)
    }

    const handleChatDeactivated = (): void => {
      setIsChatOpen(false)
    }

    sdk.on('connected', handleConnected)
    sdk.on('chat_deactivated', handleChatDeactivated)

    return () => {
      sdk.off('connected', handleConnected)
      sdk.off('chat_deactivated', handleChatDeactivated)
    }
  }, [])

  // ========================================== //

  return {
    isChatOpen,
    isConnected,
    handleOpenChat,
    handleCloseChat
  }
}

export default useChatApp

// const noop = (): void => {}
