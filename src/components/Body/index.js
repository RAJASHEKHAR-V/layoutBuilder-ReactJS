import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      return (
        <>
          {showContent || showLeftNavbar || showRightNavbar ? (
            <div className="body-card">
              {showLeftNavbar && (
                <div className="show-left-navbar-card">
                  <h1 className="left-navbar-menue-heading">
                    Left Navbar Menu
                  </h1>
                  <ul className="item-card">
                    <li className="item-para">Item 1</li>
                    <li className="item-para">Item 2</li>
                    <li className="item-para">Item 3</li>
                    <li className="item-para">Item 4</li>
                  </ul>
                </div>
              )}
              {showContent && (
                <div className="show-content-card">
                  <h1 className="content-heading">Content</h1>
                  <p className="content-para">
                    Lorem ipsum dolor sit amet, consectetur adipscing elit, sed
                    do eisumod tempor incididunt ut labor et dolor magna aliqua.
                    Ut enim ad minim veniam.
                  </p>
                </div>
              )}
              {showRightNavbar && (
                <div className="right-navbar-card">
                  <h1 className="right-navbar-heading">Right Navbar Menu</h1>
                  <div className="ad-card">
                    <p className="ad1-card">Ad 1</p>
                    <p className="ad2-card">Ad 2</p>
                  </div>
                </div>
              )}
            </div>
          ) : (
            ''
          )}
        </>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
