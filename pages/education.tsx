import Header from '../components/header'

import sharedStyles from '../styles/shared.module.css'
import blogStyles from '../styles/blog.module.css'

export default function Education() {
  return (
    <>
      <Header titlePre="Education" />
      <div className={`${sharedStyles.layout} ${blogStyles.blogIndex}`}>
        <h1>Education</h1>

        <div className={blogStyles.postPreview} >
          <h3>
            <span className={blogStyles.titleContainer}>
              <a>• BA In Myanmar</a>
            </span>
          </h3>
          <div className="authors">University of Maubin</div>
          <div className="posted">From 2013-09-01 to 2017-09-01</div>
        </div>

        <div className={blogStyles.postPreview} >
          <h3>
            <span className={blogStyles.titleContainer}>
              <a>• Diploma In Computer Science</a>
            </span>
          </h3>
          <div className="authors">University of Computer Studies Yangon</div>
          <div className="posted">From 2019-09-01 to 2021-03-01</div>
        </div>

        <div className={blogStyles.postPreview} >
          <h3>
            <span className={blogStyles.titleContainer}>
              <a>• Certificate of Intermediate Level English Course</a>
            </span>
          </h3>
          <div className="authors">Lasalle English Center (Yangon) </div>
          <div className="posted">From 2017 to 2018</div>
        </div>
      </div>
    </>
  )
}