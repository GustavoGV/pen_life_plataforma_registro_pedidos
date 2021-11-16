import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

class SwitchLabels extends React.Component {
  state = {
    checkedCor: false,
    checkedTamanho: false,
    checkedLargura: false,
    checkedComprimento: false,


  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    return (
      <FormGroup row>
        <FormControlLabel
          control={
            <Switch
              checked={this.state.checkedCor}
              onChange={this.handleChange('checkedCor')}
              value="checkedCor"
            />
          }
          label="Cor"
        />
        <FormControlLabel
          control={
            <Switch
              checked={this.state.checkedTamanho}
              onChange={this.handleChange('checkedTamanho')}
              value="checkedTamanho"
            />
          }
          label="Tamanho"
        />
        <FormControlLabel
          control={
            <Switch
              checked={this.state.checkedLargura}
              onChange={this.handleChange('checkedLargura')}
              value="checkedLargura"
            />
          }
          label="Largura"
        />
        <FormControlLabel
          control={
            <Switch
              checked={this.state.checkedComprimento}
              onChange={this.handleChange('checkedComprimento')}
              value="checkedComprimento"
            />
          }
          label="Comprimento"
        />
        
        
        
      </FormGroup>
    );
  }
}

export default SwitchLabels;