import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import { ThemeProvider, createMuiTheme, makeStyles, Container, CssBaseline } from '@material-ui/core';

const theme = createMuiTheme({
  colors: {
    primary: "#6200EE"
  },
  palette: {
    text: {
      primary: "#ffff"
    }
  }
});


const useStyles = makeStyles({
  root: {
    height: "100vh",
    padding: 0
  },
});

const App = () => {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Container maxWidth="xl" className={classes.root}>
          <BrowserRouter>
            <Switch>
              <Route exact path="">
                <Home />
              </Route>
            </Switch>
          </BrowserRouter>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
