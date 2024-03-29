import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

import teste_apagador from './teste_apagador.jpg';
import Checkboxes from './check';
import Item from './item';
import Select_item from './select_item';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});

const tileData = 
    [
        {
            img: teste_apagador,
            title: 'Apagador',
            author: '0',
        },
        {
            img: teste_apagador,
            title: 'Apagador',
            author: '2',
        },
        {
          img: teste_apagador,
          title: 'Apagador',
          author: '34',
        },
        {
          img: teste_apagador,
          title: 'Apagador',
          author: '32',
        },
        {
          img: teste_apagador,
          title: 'Apagador',
          author: '65',
        },
    ];
function TitlebarGridList(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">Administrativo</ListSubheader>
        </GridListTile>
        {tileData.map(tile => (
          
          
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>Quantidade em estoque: {tile.author}</span>}
              actionIcon={
                <IconButton className={classes.icon}>
                  <Select_item/>
                </IconButton>
                
              }
            />
          </GridListTile>
         
        ))}
      </GridList>
    </div>
  );
}

TitlebarGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TitlebarGridList);