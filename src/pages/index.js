import { MainPresentation } from '@/components/Landing/MainPresentation'
import { Project } from '@/components/Landing/Project'
import { Seo } from '@/components/Seo'

export default function Home() {
  return (
    <>
      <Seo/>
      <main>
        <MainPresentation/>
        <Project/>
      </main>
    </>
  )
}
