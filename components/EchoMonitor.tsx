import Image from 'next/image'
import { useLocale, useTranslations } from 'next-intl'

const listPlatforms = [
  { name: 'Gemini', logo: '/gemini-logo.svg', change: '+158%', changeColor: 'text-emerald-500' },
  { name: 'Copilot', logo: '/copilot-logo.svg', change: '+51%', changeColor: 'text-emerald-500' },
  { name: 'Claude', logo: '/claude-logo.svg', change: '+11%', changeColor: 'text-emerald-500' },
  { name: 'Perplexity', logo: '/perplexity-logo.svg', change: '+67%', changeColor: 'text-emerald-500' },
  { name: '豆包', logo: '/doubao-logo.png', change: '+21%', changeColor: 'text-emerald-500' },
]

const floatingPlatforms = [
  {
    name: 'ChatGPT',
    logo: '/chatgpt-logo.svg',
    change: '+201%',
    changeColor: 'text-blue-500',
    positionClasses: 'top-[32%] -left-8 md:-left-16',
  },
  {
    name: 'DeepSeek',
    logo: '/deepseek-logo.svg',
    change: '+102%',
    changeColor: 'text-pink-500',
    positionClasses: 'bottom-[18%] -right-8 md:-right-16',
  },
]

const chinesePlatforms = [listPlatforms[0], listPlatforms[1], listPlatforms[3], listPlatforms[4]]
const globalPlatforms = [listPlatforms[0], listPlatforms[1], listPlatforms[2], listPlatforms[3]]

export const EchoMonitor = () => {
  const t = useTranslations('EchoMonitor')
  const locale = useLocale()
  const platforms = locale === 'zh' ? chinesePlatforms : globalPlatforms

  return (
    <div className='relative w-full max-w-[280px] md:max-w-[320px] lg:max-w-[400px] mx-auto'>
      <div
        className='relative p-5 flex flex-col items-center justify-center gap-5 rounded-[10px] bg-[var(--background-secondary)]'
        style={{
          boxShadow: '0px 4px 20px 5px rgba(127, 189, 255, 0.20)',
        }}
      >
        {/* Header */}
        <div className='flex justify-between items-center self-stretch text-base md:text-lg lg:text-xl'>
          <div className='flex items-center gap-[10px]'>
            <Image
              src='/graphic-logo.svg'
              alt='EchoMonitor Logo'
              width={16}
              height={26}
              className='w-auto h-6 md:h-8 lg:h-10'
            />
            <h3 className='font-medium text-[var(--foreground)]'>{t('EchoMonitor')}</h3>
          </div>
          <span className='font-light text-[var(--foreground-secondary)]'>{t('brandA')}</span>
        </div>

        {/* AI Platform List */}
        <div className='flex flex-col gap-[10px] self-stretch'>
          {platforms.map((platform) => (
            <div
              key={platform.name}
              className='bg-white rounded-md flex items-center justify-between p-[10px] text-base md:text-lg lg:text-xl'
            >
              <div className='flex items-center gap-3'>
                <div className='w-7 h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 flex items-center justify-center'>
                  <Image src={platform.logo} alt={`${platform.name} logo`} width={24} height={24} className='opacity-70' />
                </div>
                <span className='font-medium text-[var(--foreground)]'>{platform.name}</span>
              </div>
              <span className={`font-medium text-[var(--branded-green)]`}>{platform.change}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Platforms */}
      {floatingPlatforms.map((platform) => (
        <div
          key={platform.name}
          className={`rounded-md absolute flex items-center justify-between p-[10px] text-base md:text-lg lg:text-xl w-[240px] md:w-[280px] lg:w-[360px] ${platform.positionClasses}`}
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.50)',
            boxShadow: '0px 0px 10px 0px rgba(127, 189, 255, 0.20)',
            backdropFilter: 'blur(10px)',
          }}
        >
          <div className='flex items-center gap-3'>
            <div className='w-7 h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 flex items-center justify-center'>
              <Image src={platform.logo} alt={`${platform.name} logo`} width={28} height={28} />
            </div>
            <span className='font-medium text-[var(--foreground)]'>{platform.name}</span>
          </div>
          <span className={`font-medium ${platform.changeColor}`}>{platform.change}</span>
        </div>
      ))}
    </div>
  )
}
