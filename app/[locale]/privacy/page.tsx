'use client'

import { useLocale, useTranslations } from 'next-intl'
import { Button } from '@/components/ui/button'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { useState } from 'react'
import { ContactModal } from '@/components/ContactModal'

export default function PrivacyPolicyPage() {
  const [isContactModalOpen, setContactModalOpen] = useState(false)
  const locale = useLocale()
  const isEnglish = locale === 'en'

  return (
    <main>
      <Header />
      <div className="relative w-full max-w-2xl mx-auto px-6 py-16 md:py-24 text-[var(--foreground)]">
        {isEnglish ? (
          <>
            <h1 className="text-4xl md:text-5xl font-bold mb-10">Privacy Policy</h1>
            <p className="mb-10">Your privacy is important to us. This Privacy Policy explains how EchoSurge collects, uses, and protects your information when you use our website and services.</p>
            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6">1. Data Collection</h2>
              <ul className="list-disc pl-6 space-y-2 text-base">
                <li>We collect information you provide directly, such as your name, email, and company when you contact us or subscribe to updates.</li>
                <li>We may automatically collect technical data, including your IP address, browser type, and usage patterns, to improve our services.</li>
              </ul>
            </section>
            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6">2. Use of Information</h2>
              <ul className="list-disc pl-6 space-y-2 text-base">
                <li>We use your information to provide, maintain, and improve our services.</li>
                <li>Your contact details may be used to send you updates, respond to inquiries, or provide customer support.</li>
              </ul>
            </section>
            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6">3. Cookies</h2>
              <ul className="list-disc pl-6 space-y-2 text-base">
                <li>We use cookies and similar technologies to enhance your experience and analyze site usage.</li>
                <li>You can control cookies through your browser settings.</li>
              </ul>
            </section>
            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6">4. Third-Party Services</h2>
              <ul className="list-disc pl-6 space-y-2 text-base">
                <li>We may use third-party services (such as analytics or cloud providers) that process data on our behalf. These providers are required to protect your information.</li>
              </ul>
            </section>
            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6">5. Data Security</h2>
              <ul className="list-disc pl-6 space-y-2 text-base">
                <li>We implement reasonable security measures to protect your data from unauthorized access, disclosure, or loss.</li>
              </ul>
            </section>
            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6">6. User Rights</h2>
              <ul className="list-disc pl-6 space-y-2 text-base">
                <li>You may request access to, correction of, or deletion of your personal information by contacting us.</li>
              </ul>
            </section>
            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6">7. Contact</h2>
              <ul className="list-disc pl-6 space-y-2 text-base">
                <li>If you have any questions about this Privacy Policy or your data, please contact us at <a href="mailto:hello@echosurge.ai" className="underline">hello@echosurge.ai</a>.</li>
              </ul>
            </section>
          </>
        ) : (
          <>
            <h1 className="text-4xl md:text-5xl font-bold mb-10">隐私政策</h1>
            <p className="mb-10">您的隐私对我们非常重要。本隐私政策说明了回声谷（EchoSurge）在您使用我们的网站和服务时如何收集、使用和保护您的信息。</p>
            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6">1. 信息收集</h2>
              <ul className="list-disc pl-6 space-y-2 text-base">
                <li>当您联系我们或订阅更新时，我们会收集您主动提供的姓名、邮箱、公司等信息。</li>
                <li>我们可能会自动收集技术信息，包括您的IP地址、浏览器类型和使用模式，以优化我们的服务。</li>
              </ul>
            </section>
            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6">2. 信息使用</h2>
              <ul className="list-disc pl-6 space-y-2 text-base">
                <li>我们会将您的信息用于提供、维护和改进我们的服务。</li>
                <li>您的联系方式可能用于发送更新、回复咨询或提供客户支持。</li>
              </ul>
            </section>
            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6">3. Cookie</h2>
              <ul className="list-disc pl-6 space-y-2 text-base">
                <li>我们使用Cookie及类似技术提升您的体验并分析网站使用情况。</li>
                <li>您可以通过浏览器设置管理Cookie。</li>
              </ul>
            </section>
            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6">4. 第三方服务</h2>
              <ul className="list-disc pl-6 space-y-2 text-base">
                <li>我们可能会使用第三方服务（如分析或云服务），这些服务商会代表我们处理数据，并有义务保护您的信息安全。</li>
              </ul>
            </section>
            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6">5. 数据安全</h2>
              <ul className="list-disc pl-6 space-y-2 text-base">
                <li>我们采取合理的安全措施，防止您的数据被未经授权访问、泄露或丢失。</li>
              </ul>
            </section>
            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6">6. 用户权利</h2>
              <ul className="list-disc pl-6 space-y-2 text-base">
                <li>您可以联系我们，申请访问、更正或删除您的个人信息。</li>
              </ul>
            </section>
            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6">7. 联系我们</h2>
              <ul className="list-disc pl-6 space-y-2 text-base">
                <li>如对本隐私政策或您的数据有任何疑问，请发送邮件至 <a href="mailto:hello@echosurge.ai" className="underline">hello@echosurge.ai</a> 与我们联系。</li>
              </ul>
            </section>
          </>
        )}
      </div>
      <Footer />
    </main>
  )
} 