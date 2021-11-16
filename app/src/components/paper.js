import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';

import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import classNames from 'classnames';


import { Grid } from '@material-ui/core';
import Grid_list from './grid_list';
import Select_item from './select_item';
import Select_categoria from './select_categoria';



const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

function PaperSheet(props) {
  const { classes } = props;
  const { step } = props;

  const [pesquisar, setPesquisar] = useState(0)

  return (
    <div>
        { step ? <Paper className={classes.root} elevation={9}>
      <Grid container
        spacing={2}>
        <Grid item xs={6}>
      <TextField
          id="outlined-simple-start-adornment"
          className={classNames(classes.margin, classes.textField)}
          variant="outlined"
          label="Nome de quem pediu o material"
          InputProps={{
            startAdornment: <InputAdornment position="start">Nome</InputAdornment>,
          }}
        />
        </Grid>
        <Grid item xs={6}>
        <TextField
          id="outlined-simple-start-adornment"
          className={classNames(classes.margin, classes.textField)}
          variant="outlined"
          label="Sobrenome"
        />
        </Grid>
        <Grid item xs={12}>
        <TextField
          id="outlined-simple-start-adornment"
          className={classNames(classes.margin, classes.textField)}
          variant="outlined"
          label="E-mail"
        />
        </Grid>
        <Grid item xs={8}>
        <TextField
          id="outlined-simple-start-adornment"
          className={classNames(classes.margin, classes.textField)}
          variant="outlined"
          label="Pesquisar material"
        />
        <Button variant="contained" color="primary"  >Pesquisar</Button>
        <Button variant="contained" color="primary"  >Limpar pesquisa</Button>
        </Grid>
        <Grid item xs={4}>
        <Select_categoria/>
        </Grid>
        </Grid>
        <Grid_list></Grid_list>
        <Button variant="contained" color="primary"  >Checar informações do pedido</Button>
        
        
      </Paper> : null }
      

    </div>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);