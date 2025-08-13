const fs = require('fs')
const path = require('path')

// Discover FAQ images from the public/faq directory
function discoverFaqImages() {
  const faqImageDir = path.join(process.cwd(), 'public', 'faq')

  try {
    const imageFiles = fs
      .readdirSync(faqImageDir)
      .filter((file) => file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg') || file.endsWith('.webp'))
      .map((file) => `/faq/${file}`)

    // Create the output directory if it doesn't exist
    const libDir = path.join(process.cwd(), 'lib')
    if (!fs.existsSync(libDir)) {
      fs.mkdirSync(libDir, { recursive: true })
    }

    // Generate the configuration file
    const configContent = `// Auto-generated file - do not edit manually
// Generated at build time from public/faq directory

export const faqImages = ${JSON.stringify(imageFiles, null, 2)} as const

export function getRandomFaqImage(): string {
  return faqImages[Math.floor(Math.random() * faqImages.length)]
}

export function getFaqImageByIndex(index: number): string {
  return faqImages[index % faqImages.length]
}
`

    fs.writeFileSync(path.join(libDir, 'faq-images.ts'), configContent)
    console.log(`✅ Discovered ${imageFiles.length} FAQ images and generated faq-images.ts`)
  } catch (error) {
    console.error('❌ Error discovering FAQ images:', error)
    throw error
  }
}

discoverFaqImages()
