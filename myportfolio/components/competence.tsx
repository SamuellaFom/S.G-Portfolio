import Image from 'next/image'
import logo1 from '../public/logo1.png'

export default function CompetencePage() {
  return (
    <>
      <section>
        <h3 className="title">Competences</h3>
        <div className="body_competence">
          <div className="tabs">
            <input type="radio" name="tabs" id="tabone" defaultChecked />
            <label htmlFor="tabone">Langages de programmation</label>
            <div className="tab">
              <li>HTML</li>
              <li>CSS</li>
              <li>TypeScript</li>
              <li>PHP</li>
              <li>C++</li>
              <li>SQL</li>
            </div>

            <input type="radio" name="tabs" id="tabtwo" />
            <label htmlFor="tabtwo">Framework</label>
            <div className="tab">
              <li>React.JS</li>
              <li>Next.js</li>
              <li>Node.js</li>
              <li>ExpressJS</li>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
