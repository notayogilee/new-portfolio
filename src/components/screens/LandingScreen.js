import React, { useState } from 'react'
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import {
  Container,
  Typography,
  IconButton,
  Button,
  TextField,
  Paper,
  FormControl,
  InputLabel,
  Input,
  Modal,
  Backdrop,
  Fade,
  Hidden
} from '@material-ui/core'
import {
  Email,
  GitHub,
  LinkedIn
} from '@material-ui/icons'

const theme = createMuiTheme({
  typography: {
    h1: {
      fontSize: '5rem',
      '@media (max-width: 600px)': {
        fontSize: '3rem'
      }
    },
    h2: {
      fontSize: '3rem',
      '@media (max-width: 600px)': {
        fontSize: '2rem'
      }
    }
  }
})

const useStyles = makeStyles((theme) => ({
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '90vh',
    height: 'auto'
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },
  icons: {
    height: '20vh',
    width: '50vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  message: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '50%',
    width: '100%'
  },
}))

const LandingScreen = () => {
  const classes = useStyles()

  const [open, setOpen] = useState(false)

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container className={classes.content}>
        <div className={classes.header}>
          <Typography variant="h1">
            Lee Castelani
        </Typography>
          <Typography variant="h5">
            Fresh Junior Full Stack Developer
          </Typography>
        </div>


        <Container className={classes.icons}>
          <Hidden xsDown>
            <IconButton onClick={handleOpen}>
              <Email style={{ fontSize: '60px' }} />
            </IconButton>
          </Hidden>
          <IconButton href="https://github.com/notayogilee" target="_blank">
            <GitHub style={{ fontSize: '60px' }} />
          </IconButton>
          <IconButton href="https://www.linkedin.com/in/lee-castelani-40bba31a5/" target="_blank">
            <LinkedIn style={{ fontSize: '60px' }} />
          </IconButton>
        </Container>
        <Typography variant="h2" style={{ height: 'auto' }}>
          notayogilee@gmail.com
        </Typography>

        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <Container maxWidth="md" className={classes.message}>
              <Paper style={{ padding: '1rem' }} elevation={5}>

                <form autoComplete="off">
                  <FormControl fullWidth={true} style={{ marginBottom: '0.25rem' }}>
                    <InputLabel htmlFor="name">Name</InputLabel>
                    <Input id="name" value={name} onChange={(e) => setName(e.target.value)} />
                  </FormControl>
                  <FormControl fullWidth={true} style={{ marginBottom: '0.25rem' }}>
                    <InputLabel htmlFor="email">Email</InputLabel>
                    <Input id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                  </FormControl>
                  <FormControl fullWidth={true} style={{ marginBottom: '0.25rem' }}>
                    <InputLabel htmlFor="subject">Subject</InputLabel>
                    <Input id="subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
                  </FormControl>
                  <FormControl fullWidth={true} style={{ marginBottom: '0.5rem' }}>
                    <TextField
                      id="message"
                      multiline
                      label="message"
                      style={{
                        resize: "none",
                        marginBottom: '0.25rem'
                      }}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </FormControl>
                  <Button
                    type="submit"
                    style={{ display: 'block', margin: 'auto' }}
                    variant="contained"
                    color="primary"
                  >
                    <Typography
                      color='secondary'

                    > Send</Typography>
                  </Button>
                </form>
              </Paper>
            </Container>
          </Fade>
        </Modal>
      </Container>
    </ThemeProvider>
  )
}

export default LandingScreen
