'use client';

import AuthPage from '@/components/ui/AuthPage';
import { redirect } from 'next/navigation';

export default function CreatePage() {
  redirect('/authentication');
}
