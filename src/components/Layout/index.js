// Write your code here
import Header from '../Header'
import Body from '../Body'
import Footer from '../Footer'

import './index.css'

const LayOut = () => (
  <div className="layout-container">
    <div className="responsive-container">
      <Header />
      <Body />
      <Footer />
    </div>
  </div>
)

export default LayOut
