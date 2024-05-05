import { z } from 'zod'

export const createLinkSchema = z.object({
  link: z
    .string()
    .min(1, { message: 'Link must not be empty.' })
    .regex(/^(http|https):\/\/[^\s/$.?#].[^\s]*$/, { message: 'Invalid link.' }),
  shortLink: z
    .string()
    .regex(/^[a-zA-Z]+$/, { message: 'The short link must be an alphabetic character.' })
    .min(5, { message: 'The short link must be 5 characteres long' })
})
