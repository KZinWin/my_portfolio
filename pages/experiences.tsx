import Header from '../components/header'
import ExtLink from '../components/ext-link'

import sharedStyles from '../styles/shared.module.css'
import contactStyles from '../styles/contact.module.css'
import blogStyles from '../styles/blog.module.css'

import GitHub from '../components/svgs/github'
import Twitter from '../components/svgs/twitter'
import Envelope from '../components/svgs/envelope'
import LinkedIn from '../components/svgs/linkedin'


export default function Experiences() {
  return (
    <>
      <Header titlePre="Experiences" />
      <div className={`${sharedStyles.layout} ${blogStyles.blogIndex}`}>
        <h1>My Experiences</h1>

        <div className={blogStyles.postPreview} >
          <h3>
            <span className={blogStyles.titleContainer}>
              <span className={blogStyles.draftBadge}>Previous</span>

            </span>
          </h3>
          <div className="authors">Junior Full-Stack Developer/ Trifinity Software & Education</div>
          <div className="posted">• From 2019-03-1 to 2022-07-31</div>
          <p>
            
            I started off as an intern where I implemented job seeker group project.

            When I promoted as an junior full-stack developer I implemented various projects like laravel , react , react native (mobile project ) and also took responsibility for DBMS and Ubuntu server deployment.
          </p>
        </div>
      </div>
    </>
  )
}