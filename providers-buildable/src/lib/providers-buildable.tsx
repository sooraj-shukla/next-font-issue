import { Inter } from 'next/font/google';
import { PropsWithChildren } from 'react';
const inter = Inter({ subsets: ['latin'] });

export const Providers = ({ children }: PropsWithChildren) => (
  <div className={inter.className}>{children}</div>
);

export default Providers;
