import { createRoot } from 'react-dom/client'

import App from './app'

const rootElement = document.querySelector('#root')

if (!rootElement) {
  throw new Error('root element not found')
}

const root = createRoot(rootElement)

root.render(<App />)
