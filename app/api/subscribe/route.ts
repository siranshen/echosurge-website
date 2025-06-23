import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export const runtime = 'edge'

export async function POST(req: NextRequest) {
  const data = await req.json()
  const { email } = data

  // Check if empty
  if (!email) {
    return NextResponse.json({ success: false, error: 'Email is required' }, { status: 400 })
  }
  // Check if email is valid
  if (!email.includes('@')) {
    return NextResponse.json({ success: false, error: 'Invalid email' }, { status: 400 })
  }

  const { error } = await supabase.from('subscriber').insert([{ email, created_at: new Date().toISOString() }])

  if (error) {
    console.error(error)
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
