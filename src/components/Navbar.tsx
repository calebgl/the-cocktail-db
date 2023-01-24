import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav>
      <div>
        <Link to="/">logo</Link>
      </div>
      <div>
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
