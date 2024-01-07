import '@/globals.css';
import Navbar from '@/lib/components/navbar';
import type { ReactNode } from 'react';

interface Props {
  children: ReactNode[] | ReactNode;
  direction?: 'rtl' | 'ltr';
}

export default function WebsiteScreen({ direction = 'ltr', children }: Props) {
  return (
    <div dir={direction}>
      <div id="main">
        <div className="container">
          {children}
        </div>
      </div>
    </div>
  )
}
