import './globals.css'

export const metadata = {
  title: 'Ridge Marketing Wordpress Monitor',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-[#F3F9F9]`}>
        {children}
      </body>
    </html>
  )
}
