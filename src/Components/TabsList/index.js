import './index.css'

const TabsList = props => {
  const {details, isActive, setActiveTab} = props
  const {tabId, displayText} = details
  const tabBtnStyle = isActive ? 'tab-button active' : 'tab-button'

  const activeTabBtn = () => {
    setActiveTab(tabId)
  }

  return (
    <li className="tab-list-style">
      <button type="button" className={tabBtnStyle} onClick={activeTabBtn}>
        {displayText}
      </button>
    </li>
  )
}

export default TabsList
