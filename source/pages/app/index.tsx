import { createFileRoute } from '@tanstack/react-router'

function RouteComponent() {
  return <h1>Welcome to Sync!</h1>
}

export const Route = createFileRoute('/app/')({
  component: RouteComponent
})
