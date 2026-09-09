import { SessionProvider } from './providers'
import { AppRouter } from './router'

export default function App() {
  return (
    <SessionProvider>
      <AppRouter />
    </SessionProvider>
  )
}
