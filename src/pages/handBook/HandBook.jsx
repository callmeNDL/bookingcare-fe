function HandBook() {
  return (
    <div className="container">
      <div className="user-detail">
        <ol className="list-link">
          <li>
            <a className="link" href="/">Trang chủ</a>
            <span className="separator">/</span>
          </li>
          <li>
            <span className="link--active">
              <a>Cẩm nang</a>
            </span>
          </li>
        </ol>
      </div>
      <div className="handbook">
        <div className="handbook__title">Cẩm nang y tế</div>
        <div className="handbook__list">
          <div className="item">
            <div></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HandBook