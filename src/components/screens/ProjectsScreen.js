import React, { useContext } from 'react'
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
  title: {
    margin: '4rem 0 1rem 0'
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

  // Separate projects into groups
  const personalProjects = myProjects.filter((project) => project.type === 'Personal Project')
  const lighthouseProjects = myProjects.filter((project) => project.type === 'Lighthouse Labs Project')
  const udemyProjects = myProjects.filter((project) => project.type === 'Udemy Project')

  return (
    <Container className={classes.root} maxWidth="lg" disableGutters>
      {loading && 'Loading...'}
      <Typography
        variant="h1"
        className={classes.title}
      >
        Personal Projects
          </Typography>
      <Grid container spacing={5} className={classes.container}>
        {personalProjects.length > 0 && personalProjects.map((project) => {
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

      <Typography
        variant="h1"
        className={classes.title}
      >
        Udemy Projects
        </Typography>
      <Grid container spacing={5} className={classes.container}>
        {udemyProjects.length > 0 && udemyProjects.map((project) => {
          return (
            <Grid item key={project._id} xs={12} md={12} lg={6} >
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
      <Typography
        variant="h1"
        className={classes.title}
      >
        Lighthouse Labs Projects
        </Typography>
      <Grid container spacing={5} className={classes.container}>
        {lighthouseProjects.length > 0 && lighthouseProjects.map((project) => {
          return (
            <Grid item key={project._id} xs={12} md={12} lg={6} >
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
      <TopButton />
    </Container>
  )
}

export default ProjectsScreen;
