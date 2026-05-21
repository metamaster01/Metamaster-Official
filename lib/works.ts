// lib/supabase/works.ts
// All Supabase query functions for Our Works / Case Studies

import { supabase } from '@/lib/supabase'

// ─── Types ────────────────────────────────────────────────────────────────────

export type KeyOutcome = {
  label: string
  value: string
}

export type OutcomeGraph = {
  metric: string
  labels: string[]
  values: number[]
}

export type ClientTestimonial = {
  text: string
  author: string
  role: string
}

export type WorkCard = {
  id: string
  slug: string
  title: string
  category: string | null
  tagline: string | null
  cover_image_url: string | null
  tags: string[]
  is_featured: boolean
  display_order: number
  published_at: string | null
}

export type WorkDetail = WorkCard & {
  brand_logo_url: string | null
  hero_image_url: string | null
  subtitle: string | null
  about: string | null
  objectives_title: string
  objectives_intro: string
  objectives: string[]
  key_outcomes: KeyOutcome[]
  outcome_graph: OutcomeGraph | null
  challenge_intro: string | null
  challenge: string[]
  results_intro: string | null
  results: string[]
  client_testimonial: ClientTestimonial | null
}

// ─── Listing ──────────────────────────────────────────────────────────────────

export async function getPublishedWorks(): Promise<WorkCard[]> {
  const { data, error } = await supabase
    .from('work_items')
    .select(`
      id, slug, title, category, tagline,
      cover_image_url, tags, is_featured,
      display_order, published_at
    `)
    .eq('status', 'published')
    .order('display_order', { ascending: true })

  if (error) {
    console.error('[getPublishedWorks]', error.message)
    return []
  }

  return data ?? []
}

// ─── Detail ───────────────────────────────────────────────────────────────────

export async function getWorkBySlug(slug: string): Promise<WorkDetail | null> {
  const { data, error } = await supabase
    .from('work_items')
    .select('*')
    .eq('slug', slug)
    .eq('status', 'published')
    .single()

  if (error || !data) {
    console.error('[getWorkBySlug]', error?.message)
    return null
  }

  return {
    ...data,
    key_outcomes: (data.key_outcomes as KeyOutcome[]) ?? [],
    outcome_graph: (data.outcome_graph as OutcomeGraph) ?? null,
    client_testimonial: (data.client_testimonial as ClientTestimonial) ?? null,
    objectives: data.objectives ?? [],
    challenge: data.challenge ?? [],
    results: data.results ?? [],
    tags: data.tags ?? [],
  }
}

// ─── Static Params ────────────────────────────────────────────────────────────

export async function getAllWorkSlugs(): Promise<string[]> {
  const { data, error } = await supabase
    .from('work_items')
    .select('slug')
    .eq('status', 'published')

  if (error || !data) return []
  return data.map((w) => w.slug)
}
