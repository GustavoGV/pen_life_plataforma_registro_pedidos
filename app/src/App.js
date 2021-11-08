import Steps from './components/steps';
import { Grid } from '@material-ui/core';
import Card_lista from './components/card_lista'


function App() {
  return (
    <div className="App">
      
      
<Grid container spacing={2}>
  <Grid item xs={4}>
    <Steps></Steps>
  </Grid>
  
  
  
    <Grid item xs={2}> <Card_lista></Card_lista> </Grid>
    <Grid item xs={2}> <Card_lista></Card_lista> </Grid>
    <Grid item xs={2}> <Card_lista></Card_lista> </Grid>
    <Grid item xs={2}> <Card_lista></Card_lista> </Grid>

    


 
  
    


</Grid>
      
      
    </div>
  );
}

export default App;
