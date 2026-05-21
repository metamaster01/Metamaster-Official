'use client'

// app/admin/case-study/page.tsx
// Case study list — same pattern as blogs list

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  Plus, Pencil, Archive, Trash2,
  Loader2, AlertCircle, Star,
} from 'lucide-react'
import {
  adminGetAllWorks, adminArchiveWork,
  adminDeleteWork, type AdminWorkRow,
} from '@/lib/admin-works'

const STATUS_STYLES: Record<string, string> = {
  published: 'bg-green-50 text-green-700 border-green-200',
  draft:     'bg-yellow-50 text-yellow-700 border-yellow-200',
  archived:  'bg-gray-100 text-gray-500 border-gray-200',
}

export default function AdminCaseStudyPage() {
  const [works,    setWorks]    = useState<AdminWorkRow[]>([])
  const [loading,  setLoading]  = useState(true)
  const [error,    setError]    = useState<string | null>(null)
  const [deleting, setDeleting] = useState<string | null>(null)
  const [confirm,  setConfirm]  = useState<string | null>(null)

  async function load() {
    setLoading(true)
    const data = await adminGetAllWorks()
    setWorks(data)
    setLoading(false)
  }

  useEffect(() => { load() }, [])

  async function handleArchive(id: string) {
    try {
      await adminArchiveWork(id)
      setWorks((prev) => prev.map((w) => w.id === id ? { ...w, status: 'archived' } : w))
    } catch (e: any) { setError(e.message) }
  }

  async function handleDelete(id: string) {
    setDeleting(id)
    try {
      await adminDeleteWork(id)
      setWorks((prev) => prev.filter((w) => w.id !== id))
    } catch (e: any) { setError(e.message) }
    finally { setDeleting(null); setConfirm(null) }
  }

  return (
    <div className="p-8">

      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Case Studies</h1>
          <p className="mt-1 text-sm text-gray-500">
            {works.length} total · {works.filter((w) => w.status === 'published').length} published
          </p>
        </div>
        <Link
          href="/admin/case-study/new"
          className="flex items-center gap-2 rounded-xl bg-purple-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-purple-700 transition-colors"
        >
          <Plus className="h-4 w-4" /> Add New Case Study
        </Link>
      </div>

      {error && (
        <div className="mb-6 flex items-center gap-3 rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-600">
          <AlertCircle className="h-4 w-4 shrink-0" /> {error}
        </div>
      )}

      <div className="rounded-2xl border border-gray-200 bg-white overflow-hidden">
        {loading ? (
          <div className="flex items-center justify-center py-24 text-gray-400">
            <Loader2 className="h-6 w-6 animate-spin" />
          </div>
        ) : works.length === 0 ? (
          <div className="py-24 text-center">
            <p className="text-sm text-gray-400 mb-4">No case studies yet</p>
            <Link
              href="/admin/case-study/new"
              className="inline-flex items-center gap-2 rounded-xl bg-purple-600 px-4 py-2 text-sm font-semibold text-white hover:bg-purple-700 transition-colors"
            >
              <Plus className="h-4 w-4" /> Create your first case study
            </Link>
          </div>
        ) : (
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50">
                <th className="px-5 py-3.5 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Project</th>
                <th className="px-4 py-3.5 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-4 py-3.5 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider hidden md:table-cell">Category</th>
                <th className="px-4 py-3.5 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider hidden lg:table-cell">Tags</th>
                <th className="px-4 py-3.5 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider hidden lg:table-cell">Order</th>
                <th className="px-4 py-3.5 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {works.map((work) => (
                <tr key={work.id} className="hover:bg-gray-50 transition-colors">

                  {/* Project info */}
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="relative h-11 w-16 shrink-0 overflow-hidden rounded-lg bg-purple-50">
                        {work.cover_image_url ? (
                          <Image src={work.cover_image_url} alt={work.title} fill className="object-cover" unoptimized />
                        ) : (
                          <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-pink-100" />
                        )}
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <p className="font-medium text-gray-900 truncate max-w-[240px]">{work.title}</p>
                          {work.is_featured && (
                            <Star className="h-3.5 w-3.5 shrink-0 text-amber-400 fill-amber-400" />
                          )}
                        </div>
                        <p className="text-xs text-gray-400 mt-0.5">/{work.slug}</p>
                      </div>
                    </div>
                  </td>

                  {/* Status */}
                  <td className="px-4 py-4">
                    <span className={`inline-block rounded-full border px-2.5 py-0.5 text-xs font-medium capitalize ${STATUS_STYLES[work.status]}`}>
                      {work.status}
                    </span>
                  </td>

                  {/* Category */}
                  <td className="px-4 py-4 hidden md:table-cell">
                    <span className="text-gray-600">{work.category ?? '—'}</span>
                  </td>

                  {/* Tags */}
                  <td className="px-4 py-4 hidden lg:table-cell">
                    <div className="flex flex-wrap gap-1">
                      {(work.tags ?? []).slice(0, 2).map((tag, i) => (
                        <span key={i} className="rounded-full bg-purple-50 px-2 py-0.5 text-xs text-purple-600">{tag}</span>
                      ))}
                      {(work.tags ?? []).length > 2 && (
                        <span className="text-xs text-gray-400">+{work.tags.length - 2}</span>
                      )}
                    </div>
                  </td>

                  {/* Display order */}
                  <td className="px-4 py-4 hidden lg:table-cell">
                    <span className="text-gray-500">#{work.display_order}</span>
                  </td>

                  {/* Actions */}
                  <td className="px-4 py-4">
                    <div className="flex items-center justify-end gap-1">
                      <Link
                        href={`/admin/case-study/${work.id}`}
                        className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-400 hover:bg-purple-50 hover:text-purple-600 transition-colors"
                        title="Edit"
                      >
                        <Pencil className="h-3.5 w-3.5" />
                      </Link>

                      {work.status !== 'archived' && (
                        <button
                          onClick={() => handleArchive(work.id)}
                          className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-400 hover:bg-amber-50 hover:text-amber-600 transition-colors"
                          title="Archive"
                        >
                          <Archive className="h-3.5 w-3.5" />
                        </button>
                      )}

                      {confirm === work.id ? (
                        <div className="flex items-center gap-1">
                          <button
                            onClick={() => handleDelete(work.id)}
                            disabled={deleting === work.id}
                            className="rounded-lg bg-red-600 px-2.5 py-1 text-xs font-semibold text-white hover:bg-red-700 disabled:opacity-60"
                          >
                            {deleting === work.id ? <Loader2 className="h-3 w-3 animate-spin" /> : 'Confirm'}
                          </button>
                          <button
                            onClick={() => setConfirm(null)}
                            className="rounded-lg border border-gray-200 px-2.5 py-1 text-xs text-gray-500 hover:bg-gray-50"
                          >
                            Cancel
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => setConfirm(work.id)}
                          className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-400 hover:bg-red-50 hover:text-red-600 transition-colors"
                          title="Delete"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}
