import { useState } from 'react'
import { Button } from './ui/button'
import { useTranslations } from 'next-intl'

export function SubscribeForm() {
  const t = useTranslations('SubscribeForm')
  const [subscribeEmail, setSubscribeEmail] = useState('')
  const [subscribeMessage, setSubscribeMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)
  const [subscribeLoading, setSubscribeLoading] = useState(false)

  const handleSubscribe = async () => {
    if (!subscribeEmail) return
    setSubscribeLoading(true)
    setSubscribeMessage(null)
    const res = await fetch('/api/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: subscribeEmail }),
    })
    setSubscribeLoading(false)
    if (res.ok) {
      setSubscribeMessage({ type: 'success', text: t('success') })
      setSubscribeEmail('')
    } else {
      setSubscribeMessage({ type: 'error', text: t('error') })
    }
  }

  return (
    <div className='flex flex-col items-center w-full'>
      {subscribeMessage && (
        <div className={`text-sm mb-2 text-center ${subscribeMessage.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
          {subscribeMessage.text}
        </div>
      )}
      <form
        className='relative flex items-center bg-white rounded-lg max-w-[280px] md:max-w-sm lg:max-w-md text-sm lg:text-base input-shadow'
      >
        <input
          type='email'
          name='email'
          placeholder={t('placeholder')}
          className='bg-transparent border-none focus:outline-none mx-5 text-[var(--foreground)] placeholder-[var(--foreground-secondary)] flex-1 min-w-0'
          value={subscribeEmail}
          onChange={(e) => {
            setSubscribeEmail(e.target.value)
            if (subscribeMessage) setSubscribeMessage(null)
          }}
          required
        />
        <Button
          type='submit'
          size='md'
          className='flex-shrink-0 px-4 py-2'
          onClick={handleSubscribe}
          disabled={subscribeLoading}
        >
          {subscribeLoading ? t('submitting') : t('subscribe')}
        </Button>
      </form>
    </div>
  )
}
