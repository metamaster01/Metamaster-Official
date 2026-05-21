
// ─────────────────────────────────────────────────────────────────────────────
// app/admin/case-study/[id]/page.tsx
// Save separately as: app/admin/case-study/[id]/page.tsx
// ─────────────────────────────────────────────────────────────────────────────

import { notFound } from 'next/navigation'
import { adminGetWorkById } from '@/lib/admin-works'
import CaseStudyForm from '../components/CaseStudyForm'

type Props = { params: Promise<{ id: string }> }

export async function EditCaseStudyPage({ params }: Props) {
  const { id } = await params
  const data = await adminGetWorkById(id)
  if (!data) notFound()

  return <CaseStudyForm mode="edit" workId={id} initialData={data} />
}

export default EditCaseStudyPage
