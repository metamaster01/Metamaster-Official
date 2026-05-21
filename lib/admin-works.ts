// lib/supabase/admin-works.ts
// All admin-side Supabase operations for case studies / work items

import { createBrowserClient } from '@supabase/ssr'

function getClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
}

// ─── Types ────────────────────────────────────────────────────────────────────

export type AdminWorkRow = {
  id: string
  slug: string
  title: string
  category: string | null
  tagline: string | null
  cover_image_url: string | null
  tags: string[]
  status: 'draft' | 'published' | 'archived'
  is_featured: boolean
  display_order: number
  published_at: string | null
  created_at: string
}

export type WorkFormData = {
  slug: string
  title: string
  category: string
  tagline: string
  cover_image_url: string
  brand_logo_url: string
  hero_image_url: string
  subtitle: string
  about: string
  tags: string[]
  objectives_title: string
  objectives_intro: string
  objectives: string[]
  key_outcomes: { label: string; value: string }[]
  outcome_graph: {
    metric: string
    labels: string[]
    values: number[]
  } | null
  challenge_intro: string
  challenge: string[]
  results_intro: string
  results: string[]
  client_testimonial: {
    text: string
    author: string
    role: string
  } | null
  is_featured: boolean
  display_order: number
  status: 'draft' | 'published' | 'archived'
}

const EMPTY_FORM: WorkFormData = {
  slug: '',
  title: '',
  category: '',
  tagline: '',
  cover_image_url: '',
  brand_logo_url: '',
  hero_image_url: '',
  subtitle: '',
  about: '',
  tags: [],
  objectives_title: 'Project Objectives',
  objectives_intro: 'Clear strategic goals defined to drive measurable digital growth.',
  objectives: [''],
  key_outcomes: [
    { label: 'Traffic Growth', value: '' },
    { label: 'Leads Generated', value: '' },
    { label: 'Conversion Rate', value: '' },
    { label: 'Ad Spend ROI', value: '' },
  ],
  outcome_graph: {
    metric: 'Monthly Growth',
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    values: [0, 0, 0, 0, 0, 0],
  },
  challenge_intro: '',
  challenge: [''],
  results_intro: '',
  results: [''],
  client_testimonial: { text: '', author: '', role: '' },
  is_featured: false,
  display_order: 0,
  status: 'draft',
}

export { EMPTY_FORM }

// ─── List all works ───────────────────────────────────────────────────────────

export async function adminGetAllWorks(): Promise<AdminWorkRow[]> {
  const supabase = getClient()
  const { data, error } = await supabase
    .from('work_items')
    .select('id,slug,title,category,tagline,cover_image_url,tags,status,is_featured,display_order,published_at,created_at')
    .order('display_order', { ascending: true })

  if (error) { console.error('[adminGetAllWorks]', error.message); return [] }
  return (data ?? []) as AdminWorkRow[]
}

// ─── Get single work for edit ─────────────────────────────────────────────────

export async function adminGetWorkById(id: string): Promise<WorkFormData | null> {
  const supabase = getClient()
  const { data, error } = await supabase
    .from('work_items')
    .select('*')
    .eq('id', id)
    .single()

  if (error || !data) return null

  return {
    slug:               data.slug ?? '',
    title:              data.title ?? '',
    category:           data.category ?? '',
    tagline:            data.tagline ?? '',
    cover_image_url:    data.cover_image_url ?? '',
    brand_logo_url:     data.brand_logo_url ?? '',
    hero_image_url:     data.hero_image_url ?? '',
    subtitle:           data.subtitle ?? '',
    about:              data.about ?? '',
    tags:               data.tags ?? [],
    objectives_title:   data.objectives_title ?? 'Project Objectives',
    objectives_intro:   data.objectives_intro ?? '',
    objectives:         data.objectives?.length ? data.objectives : [''],
    key_outcomes:       data.key_outcomes ?? [],
    outcome_graph:      data.outcome_graph ?? null,
    challenge_intro:    data.challenge_intro ?? '',
    challenge:          data.challenge?.length ? data.challenge : [''],
    results_intro:      data.results_intro ?? '',
    results:            data.results?.length ? data.results : [''],
    client_testimonial: data.client_testimonial ?? { text: '', author: '', role: '' },
    is_featured:        data.is_featured ?? false,
    display_order:      data.display_order ?? 0,
    status:             data.status ?? 'draft',
  }
}

// ─── Create ───────────────────────────────────────────────────────────────────

export async function adminCreateWork(form: WorkFormData): Promise<string> {
  const supabase = getClient()
  const payload  = buildPayload(form)

  const { data, error } = await supabase
    .from('work_items')
    .insert(payload)
    .select('id')
    .single()

  if (error || !data) throw new Error(error?.message ?? 'Failed to create case study')
  return data.id
}

// ─── Update ───────────────────────────────────────────────────────────────────

export async function adminUpdateWork(id: string, form: WorkFormData): Promise<void> {
  const supabase = getClient()
  const payload  = buildPayload(form)
  const { error } = await supabase.from('work_items').update(payload).eq('id', id)
  if (error) throw new Error(error.message)
}

// ─── Archive ──────────────────────────────────────────────────────────────────

export async function adminArchiveWork(id: string): Promise<void> {
  const supabase = getClient()
  const { error } = await supabase
    .from('work_items')
    .update({ status: 'archived' })
    .eq('id', id)
  if (error) throw new Error(error.message)
}

// ─── Delete ───────────────────────────────────────────────────────────────────

export async function adminDeleteWork(id: string): Promise<void> {
  const supabase = getClient()
  const { error } = await supabase.from('work_items').delete().eq('id', id)
  if (error) throw new Error(error.message)
}

// ─── Image upload ─────────────────────────────────────────────────────────────

export async function uploadWorkImage(file: File, folder: 'covers' | 'heroes' | 'logos'): Promise<string> {
  const supabase = getClient()
  const ext  = file.name.split('.').pop()
  const path = `${folder}/${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`

  const { error } = await supabase.storage
    .from('work-images')
    .upload(path, file, { upsert: false })

  if (error) throw new Error(error.message)

  const { data } = supabase.storage.from('work-images').getPublicUrl(path)
  return data.publicUrl
}

// ─── Internal: build DB payload ──────────────────────────────────────────────

function buildPayload(form: WorkFormData) {
  // Strip empty strings from arrays
  const clean = (arr: string[]) => arr.filter((s) => s.trim() !== '')

  // Strip empty testimonial
  const testimonial =
    form.client_testimonial?.text?.trim()
      ? form.client_testimonial
      : null

  return {
    slug:               form.slug,
    title:              form.title,
    category:           form.category || null,
    tagline:            form.tagline || null,
    cover_image_url:    form.cover_image_url || null,
    brand_logo_url:     form.brand_logo_url || null,
    hero_image_url:     form.hero_image_url || null,
    subtitle:           form.subtitle || null,
    about:              form.about || null,
    tags:               form.tags,
    objectives_title:   form.objectives_title,
    objectives_intro:   form.objectives_intro,
    objectives:         clean(form.objectives),
    key_outcomes:       form.key_outcomes.filter((o) => o.value.trim()),
    outcome_graph:      form.outcome_graph,
    challenge_intro:    form.challenge_intro || null,
    challenge:          clean(form.challenge),
    results_intro:      form.results_intro || null,
    results:            clean(form.results),
    client_testimonial: testimonial,
    is_featured:        form.is_featured,
    display_order:      form.display_order,
    status:             form.status,
    published_at:       form.status === 'published' ? new Date().toISOString() : null,
  }
}
