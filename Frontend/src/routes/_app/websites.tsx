import { WebsitesPage } from '#/features/websites/WebsitesPage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/websites')({
  component: WebsitesPage,
})