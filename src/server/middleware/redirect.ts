import { db } from '@/server/db/db'

interface RedirectUrlProps {
  error: boolean
  message: string
  redirect404?: boolean
  url?: string
}

export const redirectUrl = async ({
  shortLink
}: {
  shortLink: string
}): Promise<RedirectUrlProps> => {
  try {
    const linkToRedirect = await db.links.findUnique({
      where: {
        shortLink
      }
    })

    console.log(linkToRedirect)

    if (!linkToRedirect) {
      return { error: false, message: 'Error shortLink does not exist', redirect404: true }
    }

    await db.links.update({
      where: {
        shortLink
      },
      data: {
        clicks: {
          increment: 1
        }
      }
    })

    return {
      error: false,
      message: 'Success',
      url: linkToRedirect.url
    }
  } catch (error) {
    console.error('Error shortLink: ', error)
    return {
      error: true,
      message: 'Something went wrong.'
    }
  }
}
