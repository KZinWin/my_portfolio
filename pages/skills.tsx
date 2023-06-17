import Image from "next/image"
import Header from "../components/header"
import sharedStyles from '../styles/shared.module.css'


const skills = [
  {
    text: 'LARAVEL',
    icon: '/svgs/laravel.svg',
  },
  {
    text: 'REACT NATVIE',
    icon: '/svgs/react-logo.svg',
  },
  {
    text: 'REACT',
    icon: '/svgs/react-logo.svg',
  },
  {
    text: 'ANGULAR',
    icon: '/svgs/angular-svgrepo-com.svg',
  },
  {
    text: 'MYSQL',
    icon: '/svgs/mysql-wordmark.svg',
  },
  {
    text: 'REST APIS',
    icon: '/svgs/api.svg',
  },
  {
    text: 'VERTION CONTROL GIT',
    icon: '/svgs/git.svg',
  },
  {
    text: 'LINUX',
    icon: '/svgs/linux-light.svg',
  },
  {
    text: 'AWS',
    icon: '/svgs/aws-dark.svg',
  },
  {
    text: 'PYTHON',
    icon: '/svgs/python-wordmark.svg',
  },
]

export default function Skills() {
  return (
    <>
      <Header titlePre="Language and Skills" />
      <div className={sharedStyles.layout}>
        <h1 style={{ marginTop: 0 }}>Language and Skills</h1>
        <div className="features">
          {skills.map(({ text, icon }) => (
            <div className="feature" key={text}>
              {icon && <Image src={icon} alt="icon" height={32} width={32}/>}
              <h4>{text}</h4>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

