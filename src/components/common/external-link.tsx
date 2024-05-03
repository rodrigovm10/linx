interface ExternalLinkProps {
  children: React.ReactNode
  href: string
}

export function ExternalLink({ href, children }: ExternalLinkProps) {
  return (
    <a
      href={href}
      target='_blank'
      rel='noreferrer'
    >
      {children}
    </a>
  )
}
