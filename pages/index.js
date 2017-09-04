import Link from 'next/link'
export default () => (
  <div>
    <style jsx>{`
      h1 {
        color: red;
      }
    `}</style>
    <h1>Hello World.</h1>
    <Link href='/about'><a>About</a></Link>
    <br />
    <Link href='/slidebean'><a>Slidebean</a></Link>
    <br />
    <Link href='/cowsay'><a>Cowsay</a></Link>
  </div>
)
