import React from 'react'

function Footer() {
  return (
    <>
      <footer>
        <div className="footer_container">
          {[
            {
              title: "CATEGORIES",
              links: ["Clothing", "Grocery", "Beauty", "Gift Cards"]
            },
            {
              title: "HELP & SUPPORT",
              links: ["Contact Us", "Track Order", "Return Policy", "FAQ", "Shipping"]
            },
            {
              title: "POLICIES",
              links: ["Privacy Policy", "Terms of Use", "Security", "Sitemap", "E-Waste Policy"]
            },
            {
              title: "ABOUT US",
              links: ["Company Information", "Careers", "Press", "Investor Relations"]
            }
          ].map((section, index) => (
            <div className="footer_column" key={index}>
              <h3>{section.title}</h3>
              {section.links.map((link, i) => (
                <a href="#" key={i}>{link}</a>
              ))}
            </div>
          ))}
        </div>
        <hr />
        <div className="copyright">
          © 2023 www.example.com. All rights reserved.
        </div>

      </footer>
    </>
  )
}

export default Footer