import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/')({
  component: Index,
})

function Index() {
  return (
    <div className="p-2">
      <h1 className="text-3xl font-bold underline">Welcome Home!</h1>
    </div>
  )
}
