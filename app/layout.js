import './globals.css'

export const metadata = {
  title: 'Ridge Marketing Wordpress Monitor',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-white`}>
        {children}
        <div className='bg-black h-5 w-full'></div>
      </body>
    </html>
  )
}
