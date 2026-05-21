// app/admin/blogs/new/page.tsx
// Add new blog — server component loads tags, renders BlogForm

import { adminGetAllTags } from '@/lib/admin-blogs'
import BlogForm from '../components/BlogForm'

export default async function NewBlogPage() {
  const allTags = await adminGetAllTags()

  return <BlogForm mode="new" allTags={allTags} />
}

