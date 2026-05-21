'use client'

// app/admin/case-study/_components/CaseStudyForm.tsx
// Full form for creating and editing case studies

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Plus, Trash2, Loader2, Upload, X } from 'lucide-react'
import {
  adminCreateWork, adminUpdateWork,
  uploadWorkImage, EMPTY_FORM,
  type WorkFormData,
} from '@/lib/admin-works'

type Props = {
  mode: 'new' | 'edit'
  workId?: string
  initialData?: WorkFormData
}

export default function CaseStudyForm({ mode, workId, initialData }: Props) {
  const router = useRouter()
  const [form,     setForm]     = useState<WorkFormData>(initialData ?? EMPTY_FORM)
  const [saving,   setSaving]   = useState(false)
  const [error,    setError]    = useState<string | null>(null)
  const [uploading,setUploading]= useState<string | null>(null)
  const [tagInput, setTagInput] = useState('')

  // ── Field helpers ────────────────────────────────────────────────────────────

  function setField<K extends keyof WorkFormData>(key: K, value: WorkFormData[K]) {
    setForm((p) => ({ ...p, [key]: value }))
  }

  function autoSlug(title: string) {
    return title.toLowerCase().trim()
      .replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-')
  }

  // ── Array field helpers (objectives / challenge / results) ───────────────────

  function updateArrayItem(key: 'objectives' | 'challenge' | 'results', index: number, value: string) {
    setForm((p) => {
      const arr = [...p[key]]
      arr[index] = value
      return { ...p, [key]: arr }
    })
  }

  function addArrayItem(key: 'objectives' | 'challenge' | 'results') {
    setForm((p) => ({ ...p, [key]: [...p[key], ''] }))
  }

  function removeArrayItem(key: 'objectives' | 'challenge' | 'results', index: number) {
    setForm((p) => ({ ...p, [key]: p[key].filter((_, i) => i !== index) }))
  }

  // ── Tags ─────────────────────────────────────────────────────────────────────

  function addTag() {
    if (!tagInput.trim()) return
    const tag = tagInput.trim()
    if (!form.tags.includes(tag)) setField('tags', [...form.tags, tag])
    setTagInput('')
  }

  function removeTag(tag: string) {
    setField('tags', form.tags.filter((t) => t !== tag))
  }

  // ── Key outcomes ─────────────────────────────────────────────────────────────

  function updateOutcome(index: number, key: 'label' | 'value', val: string) {
    const outcomes = [...form.key_outcomes]
    outcomes[index] = { ...outcomes[index], [key]: val }
    setField('key_outcomes', outcomes)
  }

  function addOutcome() {
    setField('key_outcomes', [...form.key_outcomes, { label: '', value: '' }])
  }

  function removeOutcome(index: number) {
    setField('key_outcomes', form.key_outcomes.filter((_, i) => i !== index))
  }

  // ── Graph ────────────────────────────────────────────────────────────────────

  function updateGraph(key: 'metric' | 'labels' | 'values', val: any) {
    setField('outcome_graph', { ...(form.outcome_graph ?? { metric: '', labels: [], values: [] }), [key]: val })
  }

  function parseGraphLabels(raw: string) {
    updateGraph('labels', raw.split(',').map((s) => s.trim()).filter(Boolean))
  }

  function parseGraphValues(raw: string) {
    updateGraph('values', raw.split(',').map((s) => parseFloat(s.trim())).filter((n) => !isNaN(n)))
  }

  // ── Image upload ─────────────────────────────────────────────────────────────

  async function handleUpload(
    file: File,
    folder: 'covers' | 'heroes' | 'logos',
    onSuccess: (url: string) => void,
    key: string
  ) {
    setUploading(key)
    try {
      const url = await uploadWorkImage(file, folder)
      onSuccess(url)
    } catch (e: any) {
      setError(`Upload failed: ${e.message}`)
    } finally {
      setUploading(null)
    }
  }

  // ── Submit ───────────────────────────────────────────────────────────────────

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSaving(true)
    setError(null)
    try {
      if (mode === 'new') {
        await adminCreateWork(form)
      } else if (workId) {
        await adminUpdateWork(workId, form)
      }
      router.push('/admin/case-study')
      router.refresh()
    } catch (e: any) {
      setError(e.message)
      setSaving(false)
    }
  }

  // ── Render ───────────────────────────────────────────────────────────────────

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-8 space-y-10">

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">
            {mode === 'new' ? 'New Case Study' : 'Edit Case Study'}
          </h1>
          <p className="mt-1 text-sm text-gray-500">Fill in all sections for the best result</p>
        </div>
        <div className="flex items-center gap-3">
          <button type="button" onClick={() => router.back()}
            className="rounded-xl border border-gray-200 px-4 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50">
            Cancel
          </button>
          <button type="submit" disabled={saving}
            className="flex items-center gap-2 rounded-xl bg-purple-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-purple-700 disabled:opacity-60">
            {saving && <Loader2 className="h-4 w-4 animate-spin" />}
            {saving ? 'Saving…' : mode === 'new' ? 'Create' : 'Save Changes'}
          </button>
        </div>
      </div>

      {error && (
        <div className="rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-600">
          {error}
        </div>
      )}

      {/* ── CORE DETAILS ── */}
      <Card title="Project Details">
        <div className="grid gap-5">

          <div className="grid grid-cols-2 gap-4">
            <Field label="Title" required>
              <input type="text" required value={form.title}
                onChange={(e) => {
                  setField('title', e.target.value)
                  if (mode === 'new') setField('slug', autoSlug(e.target.value))
                }}
                placeholder="Zaina Collection – Fashion eCommerce"
                className={inp} />
            </Field>
            <Field label="Category">
              <input type="text" value={form.category}
                onChange={(e) => setField('category', e.target.value)}
                placeholder="Fashion eCommerce"
                className={inp} />
            </Field>
          </div>

          <Field label="Slug">
            <div className="flex items-center rounded-xl border border-gray-200 bg-gray-50 overflow-hidden focus-within:border-purple-400 focus-within:ring-2 focus-within:ring-purple-100">
              <span className="px-3 text-sm text-gray-400 shrink-0">/our-works/</span>
              <input type="text" value={form.slug}
                onChange={(e) => setField('slug', e.target.value)}
                placeholder="zaina-collection"
                className="flex-1 bg-transparent py-3 pr-4 text-sm text-gray-900 outline-none" />
            </div>
          </Field>

          <Field label="Card Tagline" hint="Short line shown on the project card">
            <input type="text" value={form.tagline}
              onChange={(e) => setField('tagline', e.target.value)}
              placeholder="A digital store that feels like luxury."
              className={inp} />
          </Field>

          <Field label="Hero Subtitle" hint="Paragraph shown under the title in the case study hero">
            <textarea rows={3} value={form.subtitle}
              onChange={(e) => setField('subtitle', e.target.value)}
              placeholder="How MetaMaster built a full-funnel digital presence…"
              className={`${inp} resize-none`} />
          </Field>

          <Field label="About the Brand">
            <textarea rows={4} value={form.about}
              onChange={(e) => setField('about', e.target.value)}
              placeholder="Short brand description paragraph…"
              className={`${inp} resize-none`} />
          </Field>

          <div className="grid grid-cols-3 gap-4">
            <Field label="Status">
              <select value={form.status}
                onChange={(e) => setField('status', e.target.value as any)}
                className={inp}>
                <option value="draft">Draft</option>
                <option value="published">Published</option>
                <option value="archived">Archived</option>
              </select>
            </Field>
            <Field label="Display Order" hint="Lower = first">
              <input type="number" min={0} value={form.display_order}
                onChange={(e) => setField('display_order', Number(e.target.value))}
                className={inp} />
            </Field>
            <Field label="Featured">
              <div className="flex items-center h-full pt-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" checked={form.is_featured}
                    onChange={(e) => setField('is_featured', e.target.checked)}
                    className="h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500" />
                  <span className="text-sm text-gray-700">Mark as featured</span>
                </label>
              </div>
            </Field>
          </div>
        </div>
      </Card>

      {/* ── IMAGES ── */}
      <Card title="Images">
        <div className="grid gap-5">
          {([
            { key: 'cover_image_url', label: 'Cover Image', folder: 'covers', hint: 'Shown on project cards' },
            { key: 'hero_image_url',  label: 'Hero Image',  folder: 'heroes', hint: 'Large image in About Brand section' },
            { key: 'brand_logo_url',  label: 'Brand Logo',  folder: 'logos',  hint: 'Shown in the logo card' },
          ] as const).map(({ key, label, folder, hint }) => (
            <Field key={key} label={label} hint={hint}>
              <div className="space-y-2">
                <input type="url" value={(form as any)[key]}
                  onChange={(e) => setField(key, e.target.value)}
                  placeholder="https://… or upload"
                  className={inp} />
                <label className="flex items-center gap-2 w-fit cursor-pointer rounded-lg border border-dashed border-gray-300 px-4 py-2 text-sm text-gray-500 hover:border-purple-400 hover:text-purple-600 transition-colors">
                  {uploading === key ? <Loader2 className="h-4 w-4 animate-spin" /> : <Upload className="h-4 w-4" />}
                  Upload
                  <input type="file" accept="image/*" className="hidden"
                    onChange={(e) => {
                      const file = e.target.files?.[0]
                      if (file) handleUpload(file, folder, (url) => setField(key, url), key)
                    }} />
                </label>
              </div>
            </Field>
          ))}
        </div>
      </Card>

      {/* ── TAGS ── */}
      <Card title="Tags">
        <div className="flex flex-wrap gap-2 mb-3">
          {form.tags.map((tag) => (
            <span key={tag}
              className="flex items-center gap-1.5 rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-700">
              {tag}
              <button type="button" onClick={() => removeTag(tag)}
                className="hover:text-purple-900">
                <X className="h-3 w-3" />
              </button>
            </span>
          ))}
        </div>
        <div className="flex gap-2">
          <input type="text" value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); addTag() } }}
            placeholder="Performance Marketing…"
            className="flex-1 rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-sm outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100" />
          <button type="button" onClick={addTag}
            className="rounded-xl border border-gray-200 px-3 py-2 text-sm text-gray-600 hover:border-purple-400 hover:text-purple-600 transition-colors">
            + Add
          </button>
        </div>
      </Card>

      {/* ── OBJECTIVES ── */}
      <Card title="Project Objectives">
        <div className="grid gap-4 mb-4">
          <Field label="Section Title">
            <input type="text" value={form.objectives_title}
              onChange={(e) => setField('objectives_title', e.target.value)}
              className={inp} />
          </Field>
          <Field label="Section Intro">
            <textarea rows={2} value={form.objectives_intro}
              onChange={(e) => setField('objectives_intro', e.target.value)}
              className={`${inp} resize-none`} />
          </Field>
        </div>
        <ArrayEditor
          label="Objective"
          items={form.objectives}
          onChange={(i, v) => updateArrayItem('objectives', i, v)}
          onAdd={() => addArrayItem('objectives')}
          onRemove={(i) => removeArrayItem('objectives', i)}
          placeholder="Build a conversion-optimised eCommerce website…"
        />
      </Card>

      {/* ── KEY OUTCOMES ── */}
      <Card title="Key Outcomes (Stat Cards)">
        <div className="space-y-3">
          {form.key_outcomes.map((outcome, i) => (
            <div key={i} className="grid grid-cols-[1fr_1fr_auto] gap-3 items-center">
              <input type="text" value={outcome.label}
                onChange={(e) => updateOutcome(i, 'label', e.target.value)}
                placeholder="Traffic Growth"
                className={inp} />
              <input type="text" value={outcome.value}
                onChange={(e) => updateOutcome(i, 'value', e.target.value)}
                placeholder="+340%"
                className={inp} />
              <button type="button" onClick={() => removeOutcome(i)}
                className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-400 hover:bg-red-50 hover:text-red-500">
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          ))}
          <button type="button" onClick={addOutcome}
            className="flex items-center gap-2 text-sm text-purple-600 hover:text-purple-700 transition-colors">
            <Plus className="h-4 w-4" /> Add Outcome
          </button>
        </div>
      </Card>

      {/* ── OUTCOME GRAPH ── */}
      <Card title="Growth Chart" hint="Comma-separated values for the line chart">
        <div className="grid gap-4">
          <Field label="Metric Label">
            <input type="text" value={form.outcome_graph?.metric ?? ''}
              onChange={(e) => updateGraph('metric', e.target.value)}
              placeholder="Monthly Revenue (₹ Lakhs)"
              className={inp} />
          </Field>
          <div className="grid grid-cols-2 gap-4">
            <Field label="Labels" hint="e.g. Jan, Feb, Mar">
              <input type="text"
                defaultValue={(form.outcome_graph?.labels ?? []).join(', ')}
                onBlur={(e) => parseGraphLabels(e.target.value)}
                placeholder="Jan, Feb, Mar, Apr, May, Jun"
                className={inp} />
            </Field>
            <Field label="Values" hint="e.g. 1.2, 1.8, 2.6">
              <input type="text"
                defaultValue={(form.outcome_graph?.values ?? []).join(', ')}
                onBlur={(e) => parseGraphValues(e.target.value)}
                placeholder="1.2, 1.8, 2.6, 3.4, 4.1, 4.9"
                className={inp} />
            </Field>
          </div>
        </div>
      </Card>

      {/* ── CHALLENGE ── */}
      <Card title="The Challenge">
        <div className="mb-4">
          <Field label="Intro paragraph">
            <textarea rows={2} value={form.challenge_intro}
              onChange={(e) => setField('challenge_intro', e.target.value)}
              placeholder="Describe the main challenges the brand faced…"
              className={`${inp} resize-none`} />
          </Field>
        </div>
        <ArrayEditor
          label="Challenge point"
          items={form.challenge}
          onChange={(i, v) => updateArrayItem('challenge', i, v)}
          onAdd={() => addArrayItem('challenge')}
          onRemove={(i) => removeArrayItem('challenge', i)}
          placeholder="No existing website or eCommerce infrastructure…"
        />
      </Card>

      {/* ── RESULTS ── */}
      <Card title="The Results">
        <div className="mb-4">
          <Field label="Intro paragraph">
            <textarea rows={2} value={form.results_intro}
              onChange={(e) => setField('results_intro', e.target.value)}
              placeholder="Describe the overall results achieved…"
              className={`${inp} resize-none`} />
          </Field>
        </div>
        <ArrayEditor
          label="Result point"
          items={form.results}
          onChange={(i, v) => updateArrayItem('results', i, v)}
          onAdd={() => addArrayItem('results')}
          onRemove={(i) => removeArrayItem('results', i)}
          placeholder="Achieved 4.8× ROAS on Meta ads within 90 days…"
        />
      </Card>

      {/* ── TESTIMONIAL ── */}
      <Card title="Client Testimonial">
        <div className="grid gap-4">
          <Field label="Quote">
            <textarea rows={4} value={form.client_testimonial?.text ?? ''}
              onChange={(e) => setField('client_testimonial', { ...form.client_testimonial!, text: e.target.value })}
              placeholder="MetaMaster did not just build us a website…"
              className={`${inp} resize-none`} />
          </Field>
          <div className="grid grid-cols-2 gap-4">
            <Field label="Author name">
              <input type="text" value={form.client_testimonial?.author ?? ''}
                onChange={(e) => setField('client_testimonial', { ...form.client_testimonial!, author: e.target.value })}
                placeholder="Zainab Sheikh"
                className={inp} />
            </Field>
            <Field label="Author role">
              <input type="text" value={form.client_testimonial?.role ?? ''}
                onChange={(e) => setField('client_testimonial', { ...form.client_testimonial!, role: e.target.value })}
                placeholder="Founder, Zaina Collection"
                className={inp} />
            </Field>
          </div>
        </div>
      </Card>

      {/* Bottom save */}
      <div className="flex justify-end gap-3 pt-2">
        <button type="button" onClick={() => router.back()}
          className="rounded-xl border border-gray-200 px-5 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50">
          Cancel
        </button>
        <button type="submit" disabled={saving}
          className="flex items-center gap-2 rounded-xl bg-purple-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-purple-700 disabled:opacity-60">
          {saving && <Loader2 className="h-4 w-4 animate-spin" />}
          {saving ? 'Saving…' : mode === 'new' ? 'Create Case Study' : 'Save Changes'}
        </button>
      </div>
    </form>
  )
}

// ── Array Editor ──────────────────────────────────────────────────────────────

function ArrayEditor({ label, items, placeholder, onChange, onAdd, onRemove }: {
  label: string
  items: string[]
  placeholder?: string
  onChange: (i: number, v: string) => void
  onAdd: () => void
  onRemove: (i: number) => void
}) {
  return (
    <div className="space-y-2">
      {items.map((item, i) => (
        <div key={i} className="flex gap-2 items-start">
          <textarea rows={2} value={item}
            onChange={(e) => onChange(i, e.target.value)}
            placeholder={placeholder}
            className={`${inp} resize-none flex-1`} />
          <button type="button" onClick={() => onRemove(i)}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-gray-400 hover:bg-red-50 hover:text-red-500 transition-colors mt-1">
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      ))}
      <button type="button" onClick={onAdd}
        className="flex items-center gap-2 text-sm text-purple-600 hover:text-purple-700 transition-colors">
        <Plus className="h-4 w-4" /> Add {label}
      </button>
    </div>
  )
}

// ── Shared UI ─────────────────────────────────────────────────────────────────

function Card({ title, hint, children }: { title: string; hint?: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white overflow-hidden">
      <div className="border-b border-gray-100 px-6 py-4">
        <h2 className="text-sm font-semibold text-gray-900">{title}</h2>
        {hint && <p className="mt-0.5 text-xs text-gray-400">{hint}</p>}
      </div>
      <div className="px-6 py-5">{children}</div>
    </div>
  )
}

function Field({ label, hint, required, children }: {
  label: string; hint?: string; required?: boolean; children: React.ReactNode
}) {
  return (
    <div>
      <label className="block mb-1.5 text-sm font-medium text-gray-700">
        {label}
        {required && <span className="ml-0.5 text-red-500">*</span>}
        {hint && <span className="ml-1.5 text-xs font-normal text-gray-400">{hint}</span>}
      </label>
      {children}
    </div>
  )
}

const inp = 'w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none transition focus:border-purple-400 focus:bg-white focus:ring-2 focus:ring-purple-100'
