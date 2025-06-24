'use client'

import { useLocale, useTranslations } from 'next-intl'
import { Button } from '@/components/ui/button'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { useState } from 'react'
import { ContactModal } from '@/components/ContactModal'

export default function AboutPage() {
  const [isContactModalOpen, setContactModalOpen] = useState(false)
  const locale = useLocale()

  const isEnglish = locale === 'en'

  return (
    <main>
      <Header />
      <ContactModal open={isContactModalOpen} onClose={() => setContactModalOpen(false)} />
      <div className="relative w-full max-w-2xl mx-auto px-6 py-16 md:py-24 text-[var(--foreground)]">
        {isEnglish ? (
          <>
            <h1 className="text-4xl md:text-5xl font-bold mb-10">About Us</h1>
            <p className="mb-10">EchoSurge is a pioneering technology startup focused globally on GEO services and one of the first movers in this field. We have brought together a group of like-minded partners with exceptional professional and academic backgrounds, all dedicated to building a new paradigm of communication technology for the AI era.<br/>We are an innovative company and a professional team, uniting diverse expertise in digital marketing, technology products, and brand strategy.</p>
            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6">Our Team</h2>
              <ul className="list-disc pl-6 space-y-2 text-base">
                <li><b>Forged at World-Class Platforms:</b> Our team members come from world-class advertising and technology giants, including WPP, GroupM, Dentsu, Baidu, ByteDance, Google, AWS, and Microsoft.</li>
                <li><b>Cross-Disciplinary Integration:</b> We foster highly effective, complementary collaboration across digital marketing, traffic growth, performance optimization, brand strategy, and product design, giving us a powerful capacity for cross-functional integration and innovation.</li>
                <li><b>Global Service Experience:</b> We have extensive experience serving a global clientele across key industries, including consumer goods, automotive, luxury, technology, and international SaaS.</li>
              </ul>
            </section>
            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6">Our Experience & Methodology</h2>
              <ul className="list-disc pl-6 space-y-2 text-base">
                <li><b>Validated by Top-Tier Clients:</b> Our core members have led strategy and execution for many of the world's most iconic brands. Our experience includes:
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>World-leading beverage corporations</li>
                    <li>Top-tier French luxury fashion houses</li>
                    <li>Renowned British luxury automotive manufacturers</li>
                    <li>World-leading athletic apparel brands</li>
                    <li>The world's largest coffeehouse chains</li>
                    <li>Leading Asian coatings manufacturers</li>
                    <li>Large multinational retail groups</li>
                  </ul>
                </li>
                <li><b>Empowered by AI Technology:</b> We fully empower our process with data, proprietary tools, and AI, allowing us to continuously build our methodologies, validate our results, and refine our products.</li>
                <li><b>Focused on Business Value:</b> Internally, our team combines deep professional specialization with a vibrant, collaborative atmosphere, all aimed at delivering tangible and perceptible business value to our clients.</li>
              </ul>
            </section>
            <p className="text-base mb-10">We believe our expertise and passion can help you seize the opportunities of the AI era and achieve remarkable growth.</p>
            <div className="flex justify-center">
              <Button size="lg" onClick={() => setContactModalOpen(true)}>
                Contact Us
              </Button>
            </div>
          </>
        ) : (
          <>
            <h1 className="text-4xl md:text-5xl font-bold mb-10">关于我们</h1>
            <p className="mb-10">回声谷 (EchoSurge) 是全球范围内率先专注GEO方向服务的科技创业公司，也是这个领域最早的"吃螃蟹的人"。我们汇聚了一批拥有优秀工作及学术背景、志同道合的伙伴，共同致力于打造AI时代的传播科技新范式。我们是一支创新型公司，一支汇聚了数字营销、技术产品、品牌战略等多元背景的专业团队。</p>
            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6">我们的团队</h2>
              <ul className="list-disc pl-6 space-y-2 text-base">
                <li><b>世界级平台出身：</b>团队成员来自 WPP、群邑、电通、百度、字节跳动、Google、AWS、Microsoft 等世界级广告与科技巨头。</li>
                <li><b>跨界整合能力：</b>我们在数字营销、流量增长、效果优化、品牌战略、产品设计等领域形成了高效的互补协作，具备强大的跨界整合与创新能力。</li>
                <li><b>全球服务经验：</b>我们拥有丰富的全球化客户服务经验，业务涵盖消费品、汽车、奢侈品、科技、出海SaaS等多个核心行业。</li>
              </ul>
            </section>
            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6">我们的经验与方法论</h2>
              <ul className="list-disc pl-6 space-y-2 text-base">
                <li><b>顶级客户验证：</b>团队核心成员曾为众多全球最具代表性的品牌主导战略与执行，服务经验涵盖：
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>全球领先的饮料集团</li>
                    <li>法国顶级的奢侈时尚品牌</li>
                    <li>英国知名的豪华汽车制造商</li>
                    <li>世界领先的运动服饰品牌</li>
                    <li>全球最大的咖啡连锁品牌</li>
                    <li>亚洲领先的涂料制造商</li>
                    <li>大型跨国零售集团</li>
                  </ul>
                </li>
                <li><b>AI技术赋能：</b>我们借助数据、工具与AI全面赋能，持续积累方法论、验证成果、打磨产品。</li>
                <li><b>追求商业价值：</b>团队内部既有扎实的专业分工，也有充满活力的协作氛围，旨在为客户带来切实可感的商业价值。</li>
              </ul>
            </section>
            <p className="text-base mb-10">我们相信，通过我们的专业与热情，能够帮助您在AI时代抓住先机，实现卓越增长。</p>
            <div className="flex justify-center">
              <Button size="lg" onClick={() => setContactModalOpen(true)}>
                联系我们
              </Button>
            </div>
          </>
        )}
      </div>
      <Footer />
    </main>
  )
} 