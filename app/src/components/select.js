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
    value: 'amarelo',
    label: 'amarelo',
  },
  {
    value: 'vermelho',
    label: 'vermelho',
  },
  {
    value: 'preto',
    label: 'preto',
  },
  {
    value: 'azul',
    label: 'azul',
  },
  {
    value: 'branco',
    label: 'branco',
  },
];

class OutlinedInputAdornments extends React.Component {
  state = {
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
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

        <TextField
          select
          className={classNames(classes.margin, classes.textField)}
          variant="outlined"
          label="Cor do material"
          value={this.state.weightRange}
          onChange={this.handleChange('weightRange')}
          InputProps={{
            startAdornment: <InputAdornment position="start">Cor</InputAdornment>,
          }}
        >
          {ranges.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="outlined-adornment-amount"
          className={classNames(classes.margin, classes.textField)}
          variant="outlined"
          label="Quantidade"
          value={this.state.amount}
          onChange={this.handleChange('amount')}
          InputProps={{
            startAdornment: <InputAdornment position="start">N</InputAdornment>,
          }}
        />


        
      </div>
    );
  }
}

OutlinedInputAdornments.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OutlinedInputAdornments);