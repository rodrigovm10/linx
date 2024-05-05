import { db } from '@/server/db/db'
import { redirect } from 'next/navigation'

export default async function PageShortLink({ params }: { params: { shortLink: string } }) {
  const { shortLink } = params
  const data = await db.links.findFirst({
    where: {
      shortLink
    }
  })

  if (!data) {
    return redirect('/')
  }

  redirect(data.url.toString())
}
