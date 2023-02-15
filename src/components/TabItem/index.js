import './index.css'

const TabItem = props => {
  const {languageDetails, clickTabItem, isActive} = props
  const {id, buttonText} = languageDetails

  const onClickTabItem = () => {
    clickTabItem(id)
  }

  const activeTabBtnClassName = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container">
      <div>
        <button
          className={`tab-btn ${activeTabBtnClassName}`}
          type="button"
          onClick={onClickTabItem}
        >
          {buttonText}
        </button>
      </div>
    </li>
  )
}

export default TabItem
