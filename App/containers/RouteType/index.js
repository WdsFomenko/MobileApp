import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {setTripTypeAction} from '../../actions/formActions';
import {TextInputRouteType} from '../../components';

class RouteType extends PureComponent {

  constructor(props) {
    super(props);
    this.navigation = props.navigation;
  }

  render() {
    return (
      <TextInputRouteType
        tripType={this.props.tripType}
        setTripType={this.props.setTripType}
      />
    );
  }

}


RouteType.propTypes = {
  tripType: PropTypes.string.isRequired,
  setTripType: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  tripType: state.form.get('tripType')
});

const mapDispatchToProps = dispatch => ({
  setTripType: (tripType) => dispatch(setTripTypeAction(tripType))
});

export default connect(mapStateToProps, mapDispatchToProps)(RouteType);
