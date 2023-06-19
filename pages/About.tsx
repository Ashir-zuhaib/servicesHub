import { useRouter } from 'next/router'

export default function About() {
  const router = useRouter()

  return (
    <button type="button" onClick={() => router.push('/components')}>
      Click me
    </button>
  )
}