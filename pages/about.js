import Link from 'next/link'
export default () => (
  <div>
    <style jsx>{`
      h1 {
        color: green;
      }
    `}</style>
    <h1>About us</h1>
    <Link href='/'><a>Home</a></Link>
    <br />
    <Link href='/slidebean'><a>Slidebean</a></Link>
    <br />
    <Link href='/cowsay'><a>Cowsay</a></Link>
  </div>
)
