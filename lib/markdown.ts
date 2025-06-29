export async function getMarkdownContent(locale: string, pageName: string): Promise<string> {
  try {
    const fs = await import('fs/promises')
    const path = await import('path')

    const filePath = path.join(process.cwd(), 'messages', pageName, `${locale}.md`)
    const content = await fs.readFile(filePath, 'utf-8')
    return content
  } catch (error) {
    console.error(`Failed to load ${pageName} content for locale ${locale}:`, error)
    throw error
  }
}
