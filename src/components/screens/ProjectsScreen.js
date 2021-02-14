import React, { useContext } from 'react'
import imageUrlBuilder from '@sanity/image-url'
import sanityClient from '../../client'
import CircleNavContext from '../../context/circleNav/circleNavContext'
import moment from 'moment'
import ScreenContext from '../../context/screen/screenContext'
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

// image builder tailored for the image in the response from sanity backend
const builder = imageUrlBuilder(sanityClient)

function urlFor(source) {
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
  const circleNavContext = useContext(CircleNavContext)
  const screenContext = useContext(ScreenContext)
  const projectsContext = useContext(ProjectsContext)

  const classes = useStyles();

  const bodyId = circleNavContext.bodyId
  const { projects } = screenContext
  const { projects: myProjects, loading } = projectsContext

  // Separate projects into groups to map out details of projects
  const personalProjects = myProjects.filter((project) => project.type === 'Personal Project')
  const lighthouseProjects = myProjects.filter((project) => project.type === 'Lighthouse Labs Project')
  const udemyProjects = myProjects.filter((project) => project.type === 'Udemy Project')

  // create array to map out grouped projects for title and image of groups
  const allProjects = [personalProjects, udemyProjects, lighthouseProjects]

  return (
    <Container className={classes.root} maxWidth="lg" disableGutters>
      {loading && 'Loading...'}

      {allProjects && allProjects.map((projectType) => {
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
                      deployedLink={project.deployedLink}
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
      })}

      <TopButton />
    </Container>
  )
}

export default ProjectsScreen;
