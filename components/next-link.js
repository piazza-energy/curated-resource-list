// check this out https://github.com/zeit/next.js/issues/9753#issue-538009953
import Link from 'next/link'

// Fixes links by prepending linkPrefix when in deployed on Github
const PrefixedLink = ({ href, as = href, children }) => (
  <Link
    href={`${process.env.linkPrefix}${href}`}
    as={`${process.env.linkPrefix}${as}`}>
    {children}
  </Link>
)

export default PrefixedLink
