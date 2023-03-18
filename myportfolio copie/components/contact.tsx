import { AiFillGithub } from 'react-icons/ai'
import { FiMail } from 'react-icons/fi'
import { ImLinkedin } from 'react-icons/im'

export default function Contactpage() {
  return (
    <>
      <section>
        <h3 className="title">Contact</h3>
        <div className="direct-contact-container contact-wrapper">
          <ul className="contact-list">
            <li className="list-item">
              <i>
                <span className="contact-text place">Paris, France</span>
              </i>
            </li>
            <li className="list-item">
              <i>
                <span className="contact-text gmail">
                  <a href="mailto:samuellafom@gmail.com" title="Send me an email">
                    samuellafom@gmail.com
                  </a>
                </span>
              </i>
            </li>
          </ul>

          <hr />
          <ul className="social-media-list">
            <li>
              <a href="https://github.com/SamuellaFom" target="_blank" className="contact-icon">
                <i>
                  <AiFillGithub />
                </i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/samuella-fom-nenkam-a24884257/"
                target="_blank"
                className="contact-icon"
              >
                <i>
                  <ImLinkedin />
                </i>
              </a>
            </li>
          </ul>
          <hr />
        </div>
      </section>
    </>
  )
}
