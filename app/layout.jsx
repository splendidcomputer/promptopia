import '@styles/globals.css'

export const metadata = {
    title: "Promptopia",
    description: "Discover & Share AI prompts"
}

const RootLayout = ({children}) => {
  return (
    <html lang='en'><body>
        <div className="name">
            <div className="gradient"/>
        </div>
        <main className="app">{children}</main>
    </body></html>
  )
}

export default RootLayout