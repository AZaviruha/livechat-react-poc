import React from 'react'
import ReactDOM from 'react-dom/client'
import { debug, init } from '@livechat/customer-sdk'

import App from './App'
import './index.css'

(window as any).sdk = debug(init({
  licenseId: 1520,
  clientId: 'f00fe5accb58ae5e9490b70bc1a0fee5'
}))

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
