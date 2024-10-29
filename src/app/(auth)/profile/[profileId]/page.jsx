'use client';
import { useRouter } from 'next/navigation';
import ProfileDesc from  "@/components/custom/profile-desc"
export default function Page() {
  const router = useRouter()
  return (
    <>
    <ProfileDesc />
    </>
  )
}
