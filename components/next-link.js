// check these out
// https://nextjs.org/docs/api-reference/next/link
// https://github.com/zeit/next.js/issues/9753#issue-538009953
// https://github.com/zeit/next.js/discussions/11793?sort_order=relevance#discussioncomment-3953
import Link from 'next/link'

// Fixes links by prepending linkPrefix when in deployed on Github
const PrefixedLink = props => {
  const href = `${process.env.linkPrefix}${props.href}`;
  const as = props.as ? `${process.env.linkPrefix}${props.as}` : href;
  return (
    <Link
      href={href}
      as={as}
      passHref={props.passHref || false}
      prefetch={props.prefetch || false}>
      {props.children}
    </Link>
    )
}

export default PrefixedLink
