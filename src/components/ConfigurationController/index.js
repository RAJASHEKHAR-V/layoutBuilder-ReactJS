import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const ConfiguartionController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      return (
        <div className="configuration-controller">
          <h1 className="layout-heading">Layout</h1>
          <div className="content-checkbox-card">
            <input
              type="checkbox"
              id="content-id"
              defaultChecked={showContent}
              className="content-checkbox-input"
              onChange={onToggleShowContent}
            />
            <label htmlFor="content-id" className="content-check-box-label">
              Content
            </label>
          </div>
          <div className="left-navbar-checkbox-card">
            <input
              type="checkbox"
              id="left-navbar-content-id"
              defaultChecked={showLeftNavbar}
              className="left-navbar-content-checkbox-input"
              onChange={onToggleShowLeftNavbar}
            />
            <label
              htmlFor="left-navbar-content-id"
              className="left-navbar-content-check-box-label"
            >
              Left Navbar
            </label>
          </div>
          <div className="right-navbar-checkbox-card">
            <input
              type="checkbox"
              id="right-navbar-content-id"
              defaultChecked={showRightNavbar}
              className="right-navbar-content-checkbox-input"
              onChange={onToggleShowRightNavbar}
            />
            <label
              htmlFor="right-navbar-content-id"
              className="right-navbar-content-check-box-label"
            >
              Right Navbar
            </label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfiguartionController
