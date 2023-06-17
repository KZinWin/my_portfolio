import ExtLink from '../components/ext-link'
import Header from '../components/header'
import sharedStyles from '../styles/shared.module.css'
import Features from '../components/features'

export default function Index() {
  return (
    <>
      <Header titlePre="Home" />
      <div className={sharedStyles.layout}>
        <img
          src="/images/balance.png"
          height="85"
          width="250"
          alt="Vercel + Notion"
        />
        <h1>Welcome to my portfolio!!</h1>
        <h2>
          I'm thrilled to have you here.here is my {' '}
          <a
            href="/resume/cv.pdf"
            className="dotted"
            download='cv'
            style={{ color: 'inherit' }}
          >
            RESUME
          </a>
        </h2>

        <div className="explanation">
          <p>
            Hi!   I'm Kay Zin Win . A fullstack Developer based in Yangon.Previously worked as an senior mid-level fullstack developer .

          </p>
        </div>
      </div>
    </>
  )
}
