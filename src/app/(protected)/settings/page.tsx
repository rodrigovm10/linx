import { auth } from '@/auth'
import { AccountCard } from '@/components/settings/account-card'
import { GeneralCard } from '@/components/settings/general-card'
import { getUserById } from '@/server/data/users'

export default async function SettingsPage() {
  const session = await auth()
  const currentUser = await getUserById({ id: session?.user.id })

  return (
    <div className='w-full flex flex-col gap-y-4'>
      <section>
        <GeneralCard user={currentUser} />
      </section>
      <section>
        <AccountCard />
      </section>
    </div>
  )
}
