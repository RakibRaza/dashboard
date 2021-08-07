import { Box, CssBaseline, ThemeProvider } from "@material-ui/core";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Sidebar />
      <Box sx={{ marginLeft: '269px' }}>
        <Header />
      </Box>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
