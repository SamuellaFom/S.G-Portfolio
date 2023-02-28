import { useEffect } from 'react'
import TagCloud from 'TagCloud'
import Head from 'next/head'
export default function Propospage() {
  // Animation settings for text cloud
  useEffect(() => {
    return () => {
      const texts = [
        'JavaScript',
        'CSS',
        'HTML',
        'C',
        'C++',
        'React',
        'Python',
        'Java',
        'git',
        'Node.js',
        'Next.JS',
        'Express JS',
        'Nest JS',
        'TypeScript',
        'PHP',
        'Python',
        'Vuetify',
        'Electron',
        'Drupal',
        'Web2Py',
        'Sinatra'
      ]

      TagCloud('.tagcloud', texts, {
        // radius in px
        radius: 350,

        // animation speed
        // slow, normal, fast
        maxSpeed: 'normal',
        initSpeed: 'normal',

        // 0 = top
        // 90 = left
        // 135 = right-bottom
        direction: 135,

        // interact with cursor move on mouse out
        keep: true
      })
    }
  }, [])

  return (
    <>
      <section className='apropos'>
          <h2 className="title">A PROPOS</h2>
          <div className="proposection">
            <div>
              <span className="tagcloud"></span>
            </div>
            <div className="text-position">
              <p>
                Je suis un développeur Fullstack situé en France. J'ai une véritable passion pour les effets d'interface
                utilisateur, les animations et la création d'expériences utilisateur intuitives et dynamiques. Personne
                bien organisée, résolveur de problèmes, employé indépendant avec une grande attention aux détails. Fan de
                Badmiton, d'activités de plein air, de séries télévisées et de littérature. Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Amet fugit totam deserunt, adipisci voluptatibus harum esse. Earum
                quibusdam, deserunt aliquam tenetur explicabo modi deleniti provident cum voluptas dolore reiciendis
                expedita! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet fugit totam deserunt, adipisci
                voluptatibus harum esse. Earum quibusdam, deserunt aliquam tenetur explicabo modi deleniti provident cum
                voluptas dolore reiciendis expedita!
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet fugit totam deserunt, adipisci voluptatibus
                harum esse. Earum quibusdam, deserunt aliquam tenetur explicabo modi deleniti provident cum voluptas
                dolore reiciendis expedita!
              </p>
            </div>
          </div>
      </section>
    </>
  )
}
