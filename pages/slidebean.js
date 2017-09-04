import Link from 'next/link'
export default () => (
  <div>
    <style jsx>{`
      h1 {
        color: blue;
      }
    `}</style>
    <h1>Slidebean</h1>
    <Link href='/'><a>Home</a></Link>
    <br />
    <Link href='/about'><a>About</a></Link>
    <br />
    <Link href='/cowsay'><a>Cowsay</a></Link>
  </div>
)
