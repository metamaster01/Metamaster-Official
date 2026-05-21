'use client'

// app/admin/contact/page.tsx
// Read-only contact submissions table
// Features: search, service filter, CSV export, click row to view full message

import { useEffect, useState, useMemo } from 'react'
import { createBrowserClient } from '@supabase/ssr'
import {
  Search, Download, X, Loader2,
  AlertCircle, Mail, Phone, Building2, MessageSquare,
} from 'lucide-react'

type Contact = {
  id: number
  created_at: string
  first_name: string | null
  last_name: string | null
  email: string | null
  phone: string | null
  company: string | null
  service: string | null
  message: string | null
}

function getClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-IN', {
    day: 'numeric', month: 'short', year: 'numeric',
    hour: '2-digit', minute: '2-digit',
  })
}

function fullName(c: Contact) {
  return [c.first_name, c.last_name].filter(Boolean).join(' ') || '—'
}

export default function AdminContactPage() {
  const [contacts, setContacts] = useState<Contact[]>([])
  const [loading,  setLoading]  = useState(true)
  const [error,    setError]    = useState<string | null>(null)
  const [search,   setSearch]   = useState('')
  const [service,  setService]  = useState('all')
  const [selected, setSelected] = useState<Contact | null>(null)

  useEffect(() => {
    async function load() {
      setLoading(true)
      const supabase = getClient()
      const { data, error } = await supabase
        .from('contact')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) { setError(error.message); setLoading(false); return }
      setContacts(data ?? [])
      setLoading(false)
    }
    load()
  }, [])

  // ── Unique services for filter dropdown ───────────────────────────────────────
  const services = useMemo(() => {
    const all = contacts.map((c) => c.service).filter(Boolean) as string[]
    return ['all', ...Array.from(new Set(all))]
  }, [contacts])

  // ── Filtered list ─────────────────────────────────────────────────────────────
  const filtered = useMemo(() => {
    const q = search.toLowerCase()
    return contacts.filter((c) => {
      const matchSearch =
        !q ||
        fullName(c).toLowerCase().includes(q) ||
        (c.email ?? '').toLowerCase().includes(q) ||
        (c.company ?? '').toLowerCase().includes(q) ||
        (c.service ?? '').toLowerCase().includes(q) ||
        (c.message ?? '').toLowerCase().includes(q)

      const matchService = service === 'all' || c.service === service

      return matchSearch && matchService
    })
  }, [contacts, search, service])

  // ── CSV Export ────────────────────────────────────────────────────────────────
  function exportCSV() {
    const headers = ['ID', 'Name', 'Email', 'Phone', 'Company', 'Service', 'Message', 'Date']
    const rows = filtered.map((c) => [
      c.id,
      fullName(c),
      c.email ?? '',
      c.phone ?? '',
      c.company ?? '',
      c.service ?? '',
      (c.message ?? '').replace(/"/g, '""'),
      formatDate(c.created_at),
    ])

    const csv = [headers, ...rows]
      .map((row) => row.map((v) => `"${v}"`).join(','))
      .join('\n')

    const blob = new Blob([csv], { type: 'text/csv' })
    const url  = URL.createObjectURL(blob)
    const a    = document.createElement('a')
    a.href     = url
    a.download = `contacts-${new Date().toISOString().slice(0, 10)}.csv`
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="p-8">

      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Contact Submissions</h1>
          <p className="mt-1 text-sm text-gray-500">
            {contacts.length} total · {filtered.length} shown
          </p>
        </div>
        <button
          onClick={exportCSV}
          disabled={filtered.length === 0}
          className="flex items-center gap-2 rounded-xl border border-gray-200 px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors disabled:opacity-40"
        >
          <Download className="h-4 w-4" />
          Export CSV
        </button>
      </div>

      {/* Filters */}
      <div className="mb-6 flex flex-wrap items-center gap-3">
        {/* Search */}
        <div className="relative flex-1 min-w-[220px] max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search name, email, company…"
            className="w-full rounded-xl border border-gray-200 bg-white py-2.5 pl-9 pr-4 text-sm text-gray-900 outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100"
          />
          {search && (
            <button onClick={() => setSearch('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </div>

        {/* Service filter */}
        <select
          value={service}
          onChange={(e) => setService(e.target.value)}
          className="rounded-xl border border-gray-200 bg-white py-2.5 px-3 text-sm text-gray-700 outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100"
        >
          {services.map((s) => (
            <option key={s} value={s}>
              {s === 'all' ? 'All Services' : s}
            </option>
          ))}
        </select>
      </div>

      {/* Error */}
      {error && (
        <div className="mb-6 flex items-center gap-3 rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-600">
          <AlertCircle className="h-4 w-4 shrink-0" /> {error}
        </div>
      )}

      {/* Table */}
      <div className="rounded-2xl border border-gray-200 bg-white overflow-hidden">
        {loading ? (
          <div className="flex items-center justify-center py-24 text-gray-400">
            <Loader2 className="h-6 w-6 animate-spin" />
          </div>
        ) : filtered.length === 0 ? (
          <div className="py-24 text-center text-sm text-gray-400">
            {contacts.length === 0 ? 'No contact submissions yet.' : 'No results match your filter.'}
          </div>
        ) : (
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50">
                <th className="px-5 py-3.5 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-4 py-3.5 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider hidden md:table-cell">Email</th>
                <th className="px-4 py-3.5 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider hidden lg:table-cell">Company</th>
                <th className="px-4 py-3.5 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Service</th>
                <th className="px-4 py-3.5 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider hidden lg:table-cell">Date</th>
                <th className="px-4 py-3.5 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Message</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filtered.map((c) => (
                <tr
                  key={c.id}
                  onClick={() => setSelected(c)}
                  className="hover:bg-purple-50/50 cursor-pointer transition-colors"
                >
                  {/* Name + phone */}
                  <td className="px-5 py-4">
                    <p className="font-medium text-gray-900">{fullName(c)}</p>
                    {c.phone && (
                      <p className="text-xs text-gray-400 mt-0.5 flex items-center gap-1">
                        <Phone className="h-3 w-3" /> {c.phone}
                      </p>
                    )}
                  </td>

                  {/* Email */}
                  <td className="px-4 py-4 hidden md:table-cell">
                    <a
                      href={`mailto:${c.email}`}
                      onClick={(e) => e.stopPropagation()}
                      className="text-purple-600 hover:underline flex items-center gap-1"
                    >
                      <Mail className="h-3.5 w-3.5 shrink-0" />
                      {c.email ?? '—'}
                    </a>
                  </td>

                  {/* Company */}
                  <td className="px-4 py-4 hidden lg:table-cell">
                    <span className="flex items-center gap-1.5 text-gray-600">
                      {c.company
                        ? <><Building2 className="h-3.5 w-3.5 text-gray-400" />{c.company}</>
                        : '—'
                      }
                    </span>
                  </td>

                  {/* Service */}
                  <td className="px-4 py-4">
                    {c.service ? (
                      <span className="inline-block rounded-full bg-purple-50 border border-purple-100 px-2.5 py-0.5 text-xs font-medium text-purple-700">
                        {c.service}
                      </span>
                    ) : (
                      <span className="text-gray-400">—</span>
                    )}
                  </td>

                  {/* Date */}
                  <td className="px-4 py-4 hidden lg:table-cell text-gray-500 text-xs">
                    {formatDate(c.created_at)}
                  </td>

                  {/* Message preview */}
                  <td className="px-4 py-4 max-w-[220px]">
                    <p className="text-gray-500 text-xs line-clamp-2 flex items-start gap-1">
                      <MessageSquare className="h-3.5 w-3.5 shrink-0 mt-0.5 text-gray-400" />
                      {c.message ?? '—'}
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* ── Detail Drawer ── */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex justify-end"
          onClick={() => setSelected(null)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />

          {/* Panel */}
          <div
            className="relative z-10 w-full max-w-md bg-white shadow-2xl overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
              <h2 className="text-base font-semibold text-gray-900">Submission Detail</h2>
              <button onClick={() => setSelected(null)}
                className="rounded-lg p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors">
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="px-6 py-6 space-y-6">
              {/* Name */}
              <DetailRow icon={<span className="text-lg">👤</span>} label="Name" value={fullName(selected)} />

              {/* Email */}
              {selected.email && (
                <DetailRow icon={<Mail className="h-4 w-4" />} label="Email">
                  <a href={`mailto:${selected.email}`}
                    className="text-purple-600 hover:underline text-sm">
                    {selected.email}
                  </a>
                </DetailRow>
              )}

              {/* Phone */}
              {selected.phone && (
                <DetailRow icon={<Phone className="h-4 w-4" />} label="Phone" value={selected.phone} />
              )}

              {/* Company */}
              {selected.company && (
                <DetailRow icon={<Building2 className="h-4 w-4" />} label="Company" value={selected.company} />
              )}

              {/* Service */}
              {selected.service && (
                <DetailRow icon={<span className="text-sm">🎯</span>} label="Service Interested In">
                  <span className="inline-block rounded-full bg-purple-50 border border-purple-100 px-3 py-1 text-xs font-medium text-purple-700">
                    {selected.service}
                  </span>
                </DetailRow>
              )}

              {/* Date */}
              <DetailRow icon={<span className="text-sm">📅</span>} label="Submitted On"
                value={formatDate(selected.created_at)} />

              {/* Message */}
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <MessageSquare className="h-3.5 w-3.5" /> Message
                </p>
                <div className="rounded-xl border border-gray-100 bg-gray-50 px-4 py-4 text-sm text-gray-700 leading-relaxed whitespace-pre-wrap">
                  {selected.message ?? '—'}
                </div>
              </div>

              {/* Quick reply button */}
              {selected.email && (
                <a
                  href={`mailto:${selected.email}?subject=Re: Your enquiry with MetaMaster`}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-purple-600 px-4 py-3 text-sm font-semibold text-white hover:bg-purple-700 transition-colors"
                >
                  <Mail className="h-4 w-4" /> Reply via Email
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

// ── Detail Row ────────────────────────────────────────────────────────────────

function DetailRow({ icon, label, value, children }: {
  icon: React.ReactNode
  label: string
  value?: string
  children?: React.ReactNode
}) {
  return (
    <div>
      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1 flex items-center gap-1.5">
        {icon} {label}
      </p>
      {children ?? <p className="text-sm text-gray-800">{value ?? '—'}</p>}
    </div>
  )
}
