import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { Typography } from '@material-ui/core';
import SwitchLabels from './selecionar_caracteristicas';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing.unit,
  },
  textField: {
    flexBasis: 200,
  },
});

const ranges = [
  {
    value: 'Administrativo',
    label: 'Administrativo',
  },
  {
    value: 'Pedagogico',
    label: 'Pedagogico',
  },
  {
    value: 'Faxina',
    label: 'Faxina',
  },
];
const rangesCategoria = [
  {
    value: 'Material de escritório',
    label: 'Material de escritório',
  },
  {
    value: 'Pereciveis',
    label: 'Pereciveis',
  },
  {
    value: 'Bens duraveis',
    label: 'Bens duraveis',
  },
];

class OutlinedInputAdornments extends React.Component {
  state = {
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    categoria: '',
    showPassword: false,
  };

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <TextField
          id="outlined-simple-start-adornment"
          className={classNames(classes.margin, classes.textField)}
          variant="outlined"
          label="Nome do material"
          InputProps={{
            startAdornment: <InputAdornment position="start">Nome</InputAdornment>,
          }}
        />
        <Typography component="p">
            Adicione as especificações necessárias
          </Typography>
        <TextField
          select
          className={classNames(classes.margin, classes.textField)}
          variant="outlined"
          label="Departamento"
          value={this.state.weightRange}
          onChange={this.handleChange('weightRange')}
          
          
        >
          {ranges.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          className={classNames(classes.margin, classes.textField)}
          variant="outlined"
          label="Categoria"
          value={this.state.categoria}
          onChange={this.handleChange('categoria')}
          
          
        >
          {rangesCategoria.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <SwitchLabels/>


        
      </div>
    );
  }
}

OutlinedInputAdornments.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OutlinedInputAdornments);