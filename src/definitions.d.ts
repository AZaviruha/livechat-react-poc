module '@livechat/customer-sdk' {
  export interface Chat {
    access: any
    active: boolean
    id: string
    lastEvent: any // Event
    lastThreadCreatedAt: string
    lastThreadId: string
    properties: any
    users: any[] // User[]
  }

  export interface ChatsInfo {
    chatsSummary: Chat[]
    totalChats: number
  }

  export interface ChatResumeConfig {
    chat: {
      id: string,
      thread: { events: any[] }
    }
  }

  export interface SDK {
    on: (message: string, callback: Function) => void
    off: (message: string, callback?: Function) => void
    listChats: () => Promise<ChatsInfo>
    resumeChat: (config:ChatResumeConfig ) => Promise<ChatsInfo>
    startChat: () => Promise<ChatsInfo>
  }

  declare function init (config: any): SDK

  declare function debug (SDK): SDK

  export {
    init,
    debug
  }
}