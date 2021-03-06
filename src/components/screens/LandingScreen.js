import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
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
  Slide,
  Fade,
  Hidden
} from '@material-ui/core'
import {
  Email,
  GitHub,
  LinkedIn
} from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '90vh',
    height: 'auto',

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
    justifyContent: 'center'
  },
  form: {
    padding: theme.spacing(2, 4, 3),
  },
  message: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '50%',
    width: '100%',
    outline: 'none'
  }
}))

const LandingScreen = ({ home }) => {
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
    <Container className={classes.content}>
      <Slide in={home} direction="left">
        <div className={classes.header}>
          <Typography variant="h1">
            Lee Castelani
        </Typography>
          <Typography variant="h4">
            Fresh Junior Full Stack Developer
          </Typography>
        </div>
      </Slide>

      <Container className={classes.icons}>
        <Hidden xsDown>
          <Slide in={home} direction="up">
            <IconButton onClick={handleOpen} aria-label="Contact form">
              <Email style={{ fontSize: '60px' }} />
            </IconButton>
          </Slide>
        </Hidden>
        <Slide in={home} direction="up">
          <IconButton
            href="https://github.com/notayogilee"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <GitHub style={{ fontSize: '60px' }} />
          </IconButton>
        </Slide>
        <Slide in={home} direction="up">
          <IconButton
            href="https://www.linkedin.com/in/lee-castelani-40bba31a5/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedIn style={{ fontSize: '60px' }} />
          </IconButton>
        </Slide>
      </Container>
      <Slide in={home} direction="right">
        <Typography variant="h3" style={{ height: 'auto' }}>
          notayogilee@gmail.com
        </Typography>
      </Slide>
      <Modal
        aria-labelledby="email-modal"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 200,
        }}
      >
        <Fade in={open}>
          <Container maxWidth="md" className={classes.message}>
            <Paper style={{ padding: '1rem', textAlign: 'center' }}>
              <Typography variant="h4" id="email-modal">
                Send me a message
                </Typography>
              <form
                name="contact"
                method="post"
                data-netlify="true"
                action="/contact/success"
                autoComplete="off"
                className={classes.form}
              >
                <input type="hidden" name="form-name" value="contact" />
                <FormControl fullWidth={true} style={{ marginBottom: '0.25rem' }}>
                  <InputLabel htmlFor="name">Name</InputLabel>
                  <Input id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                </FormControl>
                <FormControl fullWidth={true} style={{ marginBottom: '0.25rem' }}>
                  <InputLabel htmlFor="email">Email</InputLabel>
                  <Input id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </FormControl>
                <FormControl fullWidth={true} style={{ marginBottom: '0.25rem' }}>
                  <InputLabel htmlFor="subject">Subject</InputLabel>
                  <Input id="subject" name="subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
                </FormControl>
                <FormControl fullWidth={true} style={{ marginBottom: '0.5rem' }}>
                  <TextField
                    name="message"
                    id="message"
                    multiline
                    label="Message"
                    style={{
                      resize: "none",
                      marginBottom: '0.25rem',
                      color: '#333'
                    }}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </FormControl>
                <Button
                  type="submit"
                  style={{ display: 'block', margin: 'auto', background: '#d68438' }}
                  variant="contained"
                >
                  <Typography
                    style={{ color: '#333' }}

                  > Send</Typography>
                </Button>
              </form>
            </Paper>
          </Container>
        </Fade>
      </Modal>
    </Container>
  )
}

export default LandingScreen
