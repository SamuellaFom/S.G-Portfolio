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
            <label htmlFor="tabone">Développement Web</label>
            <div className="tab">
              <li>HTML</li>
              <li>CSS</li>
              <li>TypeScript</li>
              <li>PHP</li>
              <li>SQL</li>
              <li>C++</li>
            </div>

            <input type="radio" name="tabs" id="tabtwo" />
            <label htmlFor="tabtwo">Développement Mobile</label>
            <div className="tab">
              <li>KOTLIN</li>
              <li>FLUTTER</li>
            </div>

            <input type="radio" name="tabs" id="tabthree" />
            <label htmlFor="tabthree">FrameWork</label>
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
