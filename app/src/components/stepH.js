import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepConnector from '@material-ui/core/StepConnector';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Select_departamento from './select_departamento';
import Add_button from './add_button';
import { Grid } from '@material-ui/core';
import Add_item from './add_item';
import Paper from './paper';

const styles = theme => ({
  root: {
    width: '90%',
  },
  button: {
    marginRight: theme.spacing.unit,
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
  connectorActive: {
    '& $connectorLine': {
      borderColor: theme.palette.secondary.main,
    },
  },
  connectorCompleted: {
    '& $connectorLine': {
      borderColor: theme.palette.primary.main,
    },
  },
  connectorDisabled: {
    '& $connectorLine': {
      borderColor: theme.palette.grey[100],
    },
  },
  connectorLine: {
    transition: theme.transitions.create('border-color'),
  },
});

function getSteps() {
  return ['Selecione seu departamento', 'Selecione os itens desejados', 'Enviar o pedido'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return 'Informe seu departamento';
    case 1:
      return 'Crie seu pedido';
    case 2:
      return 'Envie o pedido';
    default:
      return 'Unknown step';
  }
}

class CustomizedStepper extends React.Component {
  state = {
    activeStep: 0,
  };

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

  render() {
    const { classes } = this.props;
    const { activeStep } = this.state;
    const steps = getSteps();
    const connector = (
      <StepConnector
        classes={{
          active: classes.connectorActive,
          completed: classes.connectorCompleted,
          disabled: classes.connectorDisabled,
          line: classes.connectorLine,
        }}
      />
    );

    return (
      <div className={classes.root}>
          <Grid container
  direction="column"
  alignItems="center"
  spacing={0}>
    <Grid item xs={12}>
        <Stepper activeStep={activeStep} connector={connector}>
          {steps.map(label => (
            <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
          ))}
        </Stepper>
        <Stepper alternativeLabel activeStep={activeStep} connector={connector}>
            <Step>
              <StepLabel></StepLabel>
              <Select_departamento></Select_departamento>
            </Step>
            <Step>
            
              <StepLabel>Caso o item desejado não esteja na lista clique para adiciona-lo:</StepLabel>
              <Grid container
                direction="column"
                alignItems="center"
                >
                <Add_item></Add_item>
            </Grid>
    
            </Step>
            <Step>
              <StepLabel>Confira se as informações estão corretas e envie o pedido</StepLabel>
            </Step>
        </Stepper>
        <div>
          {activeStep === steps.length ? (
            <div>
              <Typography className={classes.instructions}>
                Pedido enviado com sucesso
              </Typography>
              <Button onClick={this.handleReset} className={classes.button}>
                Realizar outro pedido
              </Button>
            </div>
          ) : (
            <div>
              <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
              <div>
                <Button
                  disabled={activeStep === 0}
                  onClick={this.handleBack}
                  className={classes.button}
                >
                  Voltar
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.handleNext}
                  className={classes.button}
                >
                  {activeStep === steps.length - 1 ? 'Enviar' : 'Proximo'}
                </Button>
              </div>
            </div>
          )}
        </div>
        </Grid>
        <Grid item xs={12} md={5} >
        { activeStep !== 3 ? <Paper step={activeStep} /> : null }
        </Grid>
        </Grid>
      </div>
    );
  }
}

CustomizedStepper.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(CustomizedStepper);