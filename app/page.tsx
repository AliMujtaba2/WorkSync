'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    router.push('/auth/Login');
  }, [router]);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0a0f1c', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
      <p>Redirecting to Login...</p>
    </div>
  );
}