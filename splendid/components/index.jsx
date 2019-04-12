export { default as Pages } from './Menu'

export const Figure = ({ img, alt, children }) => {
  return <p className="Figure">
    <img src={img} alt={alt}/><br/>
    {children}
  </p>
}

/**
 * The link to the GitHub written as a Badge (`SimpleBadge` class).
 * @param {GitHubBadgeProps} props The properties.
 * @param {string} props.org The GitHub organisation.
 * @param {string} props.name The name of the repository.
 */
const GitHubBadge = (props) => {
  const { org, name } = props
  return (<a href={'https://github.com/' + `${org}/${name}`} className="SimpleBadge">GitHub</a>)
}

/**
 * @param {{ splendid: import('splendid').Splendid }}
 */
const Redirect = ({ splendid }) => {
  if (!splendid.page.redirect) return null
  return <meta http-equiv="refresh"
    content={`0;URL='${splendid.page.redirect}'`} />

}

export default {
  'github-badge': GitHubBadge,
  redirect: Redirect,
}



/**
 * @typedef {Object} GitHubBadgeProps
 * @prop {string} props.org The GitHub organisation.
 * @prop {string} props.name The name of the repository.
 */