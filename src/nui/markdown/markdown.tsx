import MarkdownToJsx from 'markdown-to-jsx'
import { markdownStyle } from './markdown.style'
import { MarkdownProps } from './types'

export default function Markdown({
  size = 'md',
  variant = 'normal',
  children,
}: MarkdownProps) {
  return (
    <div className={markdownStyle({ size, variant })}>
      <MarkdownToJsx>{children}</MarkdownToJsx>
    </div>
  )
}
