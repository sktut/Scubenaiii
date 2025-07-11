import '../globals.css';
export const metadata = {
  title: 'ScubenAI - Next-Gen Certifications',
  description: 'Advance your career with industry-leading certifications from ScubenAI.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}