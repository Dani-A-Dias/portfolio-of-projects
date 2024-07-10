import React from 'react'

const Footer = () => {
  return (
     <footer className="bg-light text-center text-lg-start">
        <div className="container p-4">
          <div className="row">
            <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
              <h5 className="text-uppercase"></h5>
              <p>
                
              </p>
            </div>
  
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              
            </div>
  
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Find me on</h5>
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-dark">GitHub</a>
                </li>
                <li>
                  <a href="#!" className="text-dark">LinkedIn</a>
                </li>
                <li>
                  <a href="#!" className="text-dark">Instagram</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
  
        <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          © 2024 Copyright:
          <a className="text-dark" href="https://mdbootstrap.com/">YourWebsite.com</a>
        </div>
      </footer>
  )
}

export default Footer