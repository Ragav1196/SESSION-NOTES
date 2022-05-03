import "./App.css";
import { MoviesListData } from "./SESSIONS LIST/SESSION 32/MoviesListData";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useState} from "react"
import Paper from '@mui/material/Paper';

export default function App() {
  const [mode, setMode] = useState("dark")
  console.log(setMode)

  // TO ADD THEME
  const Theme = createTheme({
    // "createTheme" is internally used for creating the context
    palette: {
      mode: mode,
    },
  });

  return (
    // PROVIDER
    <ThemeProvider theme={Theme}>
      <Paper elevation={6} style={{borderRadius: "0px", minHeight: "100vh"}}>
        <MoviesListData setMode={setMode} mode={mode} />
      </Paper>
    </ThemeProvider>
  );
}

// PROPS DRILLING:

// USING CONTEXT:

// TO ADD THEME

// TIC-TAC-TOE GAME

// ADDING CONFETTI