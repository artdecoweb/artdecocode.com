const Pages = ({ splendid: { pages, page } }) =>
  <ul>
    {pages.map(({
      title, menu = title, url, menuUrl = url, file, redirect,
    }) => {
      if (!redirect) return
      const active = page.file == file
      return <li className={active ? 'Active' : ''}>
        <a data-file={file} href={redirect}>{menu}</a>
      </li>
    }
    )}
  </ul>

export default Pages