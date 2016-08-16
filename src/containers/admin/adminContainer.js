import React, { Component } from 'react';
import { connect } from 'react-redux';
import BarChart from 'react-bar-chart';
import { Link } from 'react-router';

import { getData } from '../../actions';

class AdminContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
    this.renderGraphs = this.renderGraphs.bind(this);
  }

  componentWillMount() {
    this.setState({
      data: this.props.data,
      authenticated: this.props.authenticated,
    });
  }

  renderGraphs = () => {
    this.state.data.forEach((dataSet) => {
      return (
        <div className="graph">
          <BarChart ylabel="Word frequencey"
            width={500}
            height={500}
            data={dataSet}
          />
        </div>
      );
    });
  }

  render() {
    return (
      <div className="admin">
        <h1>Analytics</h1>
        <div className="analytics">
        {this.renderGraphs()}
        </div>
        <Link to="/admin/update" > Edit Tour Guide Profiles </Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.admin.data,
});


export default connect(mapStateToProps, { getData })(AdminContainer);
