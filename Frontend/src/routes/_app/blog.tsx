import { BlogPage } from '#/features/blog/BlogPage';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/blog')({
  component: BlogPage,
});