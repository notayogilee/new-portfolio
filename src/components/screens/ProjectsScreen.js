import React, { useContext, useState } from 'react'
import imageUrlBuilder from '@sanity/image-url'
import sanityClient from '../../client'
import moment from 'moment'
import ProjectsContext from '../../context/projects/projectsContext'
import BlockContent from '@sanity/block-content-to-react';
import { makeStyles } from '@material-ui/core/styles'
import {
  Container,
  Typography,
  Grid
} from '@material-ui/core'
import ProjectItem from '../utils/ProjectItem'
import TopButton from '../utils/TopButton'
import Spinner from '../utils/Spinner'

// image builder tailored for the image in the response from sanity backend
const builder = imageUrlBuilder(sanityClient)

function urlFor (source) {
  return builder.image(source)
}

const useStyles = makeStyles({
  root: {
    height: 'auto',
    minHeight: '92.5vh',
    width: '100%',
    paddingBottom: '5rem',
    overflow: 'hidden',
    margin: 'auto'
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    padding: '1rem',
    '@media (max-width: 600px)': {
      padding: 0
    }
  },
  header: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingTop: '4rem'
  },
  image: {
    width: '125px',
    height: '125px',
    borderRadius: '50%',
    background: '#fff',
    '@media (max-width: 600px)': {
      width: '60px',
      height: '60px'
    }
  }
})

const ProjectsScreen = () => {
  const projectsContext = useContext(ProjectsContext)

  const [showTopButton, setShowTopButton] = useState(false)

  window.addEventListener("scroll", (e) => {
    if (window.scrollY === 0) {
      setShowTopButton(false)
    } else {
      setShowTopButton(true)
    }
  })

  const classes = useStyles();

  const { projects, loading } = projectsContext

  return (
    <Container className={classes.root} maxWidth="lg" disableGutters>
      {loading &&
        <div>
          <Spinner />
        </div>
      }
      {projects && projects.length > 0 && projects.map((projectType) => {
        return (
          <>
            <div className={classes.header}>
              <div>
                <img src={urlFor(projectType[0].typeImage).url()} alt="Personal projects" className={classes.image} />
              </div>

              <Typography
                variant="h1"
                component="div"
                style={{ textAlign: 'center' }}
              >
                {projectType[0].type}
              </Typography>
            </div>

            <Grid container spacing={5} className={classes.container}>

              {projectType.map((project) => {
                return (
                  <Grid item key={project._id} xs={12} md={12} lg={6}>
                    <ProjectItem
                      image={project.mainImage}
                      gitHubLink={project.gitHubLink}
                      // deployedLink={project.deployedLink}
                      isCompleted={project.isCompleted}
                      dateCompleted={project.dateCompleted ? moment(project.dateCompleted).format("MMM YYYY") : ""}
                      title={project.title}
                      description={<BlockContent blocks={project.body} projectId="kd4r1s4u" dataset="production" />}
                      type={project.type}
                      typeImage={project.typeImage}
                    />
                  </Grid>
                )
              })}
            </Grid>
          </>
        )
      }
      )
      }
      {showTopButton &&
        <TopButton />
      }
    </Container>
  )
}

export default ProjectsScreen;
