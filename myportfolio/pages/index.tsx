import Head from 'next/head'
import { HiHome } from 'react-icons/hi'
import { AiOutlineProject } from 'react-icons/ai'
import { GiStairsGoal } from 'react-icons/gi'
import { FaKeyboard } from 'react-icons/fa'
import { useRef } from 'react'
import Homepage from '../components/home'
import Propospage from '../components/propos'
import Projectpage from '../components/project'
import CompetencePage from '../components/competence'
import { ImLinkedin } from 'react-icons/im'
import { FiMail } from 'react-icons/fi'

export default function homepage() {
  /* It's a way to get the position of the element in the page. */
  const home = useRef(null)
  const propos = useRef(null)
  const competences = useRef(null)
  const project = useRef(null)

  /**
   * It takes a ref as an argument and scrolls to the top of the element that the ref is attached to
   * @param {any} elementRef - any - this is the reference to the element you want to scroll to.
   */
  const scrollToSection = (elementRef: any) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth'
    })
  }

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="google-site-verification" content="+nxGUDJ4QpAZ5l9Bsjdi102tLVC21AIh5d1Nl23908vVuFHs34="></meta>
        <title>F.N.S.G - Home</title>
        <meta name="robots" content="noindex,nofollow"></meta>
      </Head>
      <header>
        <nav className="navbar">
          <ul className="navbar-menu">
            <li className="nav-logo">
              <a onClick={() => scrollToSection(home)} className="logo">
                <h2>F.N.S.G</h2>
                <h6 className="h6">développeuse web</h6>
              </a>
            </li>
            <li className="navbar-item">
              <a onClick={() => scrollToSection(home)} className="navbar-link">
                <i>
                  <HiHome className="navbar-icon" />
                </i>
                <span className="navbar-title">Home</span>
              </a>
            </li>
            <li className="navbar-item">
              <a onClick={() => scrollToSection(propos)} className="navbar-link">
                <i>
                  <GiStairsGoal className="navbar-icon" />
                </i>
                <span className="navbar-title">A Propos</span>
              </a>
            </li>
            <li className="navbar-item">
              <a onClick={() => scrollToSection(competences)} className="navbar-link">
                <i>
                  <FaKeyboard className="navbar-icon" />
                </i>
                <span className="navbar-title">Competences</span>
              </a>
            </li>
            <li className="navbar-item">
              <a onClick={() => scrollToSection(project)} className="navbar-link">
                <i>
                  <AiOutlineProject className="navbar-icon" />
                </i>
                <span className="navbar-title">Projets</span>
              </a>
            </li>
            <li className="navbar-item">
              <i className="navbar-link">
                <a href="https://www.linkedin.com/in/samuella-fom-nenkam-a24884257/" target="_blank">
                  <ImLinkedin className="navbar-icon"></ImLinkedin>
                </a>
                <a href="mailto:samuellafom@gmail.com">
                <FiMail className="navbar-icon" />
                </a>
              </i>
              <span className="navbar-title"></span>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section ref={home} className="home">
          <Homepage />
        </section>
        <section ref={propos} className="propos">
          <Propospage />
        </section>
        <section ref={competences} className="competences">
          <CompetencePage />
        </section>
        <section ref={project} className="project">
          <Projectpage />
        </section>
      </main>
    </>
  )
}
