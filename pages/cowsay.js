import Link from 'next/link';
import cowsay from 'cowsay-browser'
export default () => (
  <div>
    <style jsx>{`
      pre {
        color: fuchsia;
      }
      `}</style>
      <pre>{ cowsay.say({ text: 'meow' }) }</pre>
      <Link href='/'><a>Home</a></Link>
      <br />
      <Link href='/about'><a>About</a></Link>
      <br />
      <Link href='/slidebean'><a>Slidebean</a></Link>
  </div>
)
