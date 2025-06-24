'use client'

import { useLocale } from 'next-intl'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function TermsOfServicePage() {
  const locale = useLocale()
  const isEnglish = locale === 'en'

  return (
    <main>
      <Header />
      <div className="relative w-full max-w-2xl mx-auto px-6 py-16 md:py-24 text-[var(--foreground)]">
        {isEnglish ? (
          <>
            <h1 className="text-4xl md:text-5xl font-bold mb-10">Terms of Service</h1>
            <p className="mb-10">These Terms of Service (&quot;Terms&quot;) govern your use of the EchoSurge website and services. By accessing or using our site, you agree to these Terms.</p>
            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6">1. Acceptance of Terms</h2>
              <ul className="list-disc pl-6 space-y-2 text-base">
                <li>By using our website or services, you agree to comply with and be bound by these Terms.</li>
                <li>If you do not agree to these Terms, please do not use our services.</li>
              </ul>
            </section>
            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6">2. Use of Services</h2>
              <ul className="list-disc pl-6 space-y-2 text-base">
                <li>You may use our services only for lawful purposes and in accordance with these Terms.</li>
                <li>We reserve the right to modify, suspend, or discontinue any part of our services at any time.</li>
              </ul>
            </section>
            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6">3. User Responsibilities</h2>
              <ul className="list-disc pl-6 space-y-2 text-base">
                <li>You are responsible for any information you provide and for your use of our services.</li>
                <li>You must not misuse our services or attempt to access them in an unauthorized manner.</li>
              </ul>
            </section>
            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6">4. Intellectual Property</h2>
              <ul className="list-disc pl-6 space-y-2 text-base">
                <li>All content on this website, including text, graphics, logos, and software, is the property of EchoSurge or its licensors and is protected by intellectual property laws.</li>
                <li>You may not use, reproduce, or distribute any content without our prior written permission.</li>
              </ul>
            </section>
            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6">5. Third-Party Links</h2>
              <ul className="list-disc pl-6 space-y-2 text-base">
                <li>Our website may contain links to third-party sites. We are not responsible for the content or practices of these sites.</li>
              </ul>
            </section>
            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6">6. Disclaimers & Limitation of Liability</h2>
              <ul className="list-disc pl-6 space-y-2 text-base">
                <li>Our services are provided &quot;as is&quot; without warranties of any kind.</li>
                <li>To the fullest extent permitted by law, EchoSurge is not liable for any damages arising from your use of our services.</li>
              </ul>
            </section>
            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6">7. Changes to Terms</h2>
              <ul className="list-disc pl-6 space-y-2 text-base">
                <li>We may update these Terms from time to time. Continued use of our services constitutes acceptance of the revised Terms.</li>
              </ul>
            </section>
            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6">8. Contact</h2>
              <ul className="list-disc pl-6 space-y-2 text-base">
                <li>If you have any questions about these Terms, please contact us at <a href="mailto:hello@echosurge.ai" className="underline">hello@echosurge.ai</a>.</li>
              </ul>
            </section>
          </>
        ) : (
          <>
            <h1 className="text-4xl md:text-5xl font-bold mb-10">服务条款</h1>
            <p className="mb-10">本服务条款（&quot;条款&quot;）适用于您对回声谷（EchoSurge）网站及服务的使用。访问或使用本网站即表示您同意遵守本条款。</p>
            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6">1. 条款的接受</h2>
              <ul className="list-disc pl-6 space-y-2 text-base">
                <li>使用本网站或服务即表示您同意遵守本条款。</li>
                <li>如不同意本条款，请勿使用我们的服务。</li>
              </ul>
            </section>
            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6">2. 服务使用</h2>
              <ul className="list-disc pl-6 space-y-2 text-base">
                <li>您仅可为合法目的并依照本条款使用我们的服务。</li>
                <li>我们有权随时修改、暂停或终止部分或全部服务。</li>
              </ul>
            </section>
            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6">3. 用户责任</h2>
              <ul className="list-disc pl-6 space-y-2 text-base">
                <li>您对所提供的信息及对服务的使用负全部责任。</li>
                <li>您不得滥用服务或试图以未经授权的方式访问服务。</li>
              </ul>
            </section>
            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6">4. 知识产权</h2>
              <ul className="list-disc pl-6 space-y-2 text-base">
                <li>本网站所有内容（包括文字、图形、标识、软件等）均归回声谷或其许可方所有，受知识产权法律保护。</li>
                <li>未经书面许可，您不得使用、复制或分发任何内容。</li>
              </ul>
            </section>
            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6">5. 第三方链接</h2>
              <ul className="list-disc pl-6 space-y-2 text-base">
                <li>本网站可能包含第三方网站的链接，我们对这些网站的内容或做法不承担任何责任。</li>
              </ul>
            </section>
            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6">6. 免责声明与责任限制</h2>
              <ul className="list-disc pl-6 space-y-2 text-base">
                <li>我们的服务按&quot;现状&quot;提供，不作任何明示或暗示的保证。</li>
                <li>在法律允许的最大范围内，回声谷不对因您使用服务而产生的任何损失承担责任。</li>
              </ul>
            </section>
            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6">7. 条款变更</h2>
              <ul className="list-disc pl-6 space-y-2 text-base">
                <li>我们可能不时更新本条款。您继续使用服务即视为接受更新后的条款。</li>
              </ul>
            </section>
            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6">8. 联系我们</h2>
              <ul className="list-disc pl-6 space-y-2 text-base">
                <li>如对本条款有任何疑问，请发送邮件至 <a href="mailto:hello@echosurge.ai" className="underline">hello@echosurge.ai</a> 与我们联系。</li>
              </ul>
            </section>
          </>
        )}
      </div>
      <Footer />
    </main>
  )
}
