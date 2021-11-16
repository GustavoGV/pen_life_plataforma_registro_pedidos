import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

class Checkboxes extends React.Component {
  state = {
    checkedA: true,
    checkedB: true,
    checkedF: true,
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    return (
      <div>
        
        
        <Checkbox value="checkedC" 
        onChange={this.handleChange('checkedF')}/>
        
        
      </div>
    );
  }
}

export default Checkboxes;