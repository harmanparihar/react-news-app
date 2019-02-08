import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';


const styles = (theme) => ({
  root: {
    flex: 1,
  },
  paper: {
    height: 80,
    border: '2px solid rgb(10,10,100)',
  },
  label: {
    padding: '1rem 0',
    fontSize: '18px',
  },
})
class Menu extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction classes={{ root: this.props.classes.paper, label: this.props.classes.label, selected: this.props.classes.selected }} value="ca" label="Canada"  />
        <BottomNavigationAction classes={{ root: this.props.classes.paper, label: this.props.classes.label, selected: this.props.classes.selected }} value="us" label="USA"  />
        <BottomNavigationAction classes={{ root: this.props.classes.paper, label: this.props.classes.label, selected: this.props.classes.selected }} value="search" label="Search Results"  />
        <BottomNavigationAction classes={{ root: this.props.classes.paper, label: this.props.classes.label, selected: this.props.classes.selected }} value="in" label="India"  />
        <BottomNavigationAction classes={{ root: this.props.classes.paper, label: this.props.classes.label, selected: this.props.classes.selected }} value="au" label="Australia"/>
      </BottomNavigation>
    );
  }
}

Menu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Menu);