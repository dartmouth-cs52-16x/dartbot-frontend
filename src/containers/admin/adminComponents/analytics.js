import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BarChart } from 'react-d3';
import { Table } from 'reactable';

import { fetchLocData, fetchIntentData, fetchSurveyData } from '../../../actions';

class Analytics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      surveyQ: '',
    };
    this.renderLocationGraph = this.renderLocationGraph.bind(this);
    this.renderIntentGraph = this.renderIntentGraph.bind(this);
    this.renderSurveyGraphs = this.renderSurveyGraphs.bind(this);
  }

  componentWillMount() {
    this.props.fetchLocData();
    this.props.fetchIntentData();
    this.props.fetchSurveyData();
  }

  renderLocationGraph = () => {
    let count = 0;
    let refTable = [];
    const values = this.props.locData.map((loc) => {
      count++;
      refTable.push({ Number: count, Location: loc.title });
      return {
        x: count,
        y: loc.hits,
      };
    });
    const data = [{
      name: 'Location Data',
      values,
    }];
    return (
      <div id="locGraph">
        <Table data={refTable} />
        <BarChart
          title="Location Hits"
          yAxisLabel="Hits"
          xAxisLabel="Location"
          height={300}
          width={30 * values.length + (5 * (values.length + 1)) + 73}
          data={data}
        />
      </div>
    );
  }

  renderIntentGraph = () => {
    let count = 0;
    let refTable = [];
    const values = this.props.intentData.map((intent) => {
      count++;
      refTable.push({ Number: count, Query: intent.query });
      return {
        x: count,
        y: intent.hits,
      };
    });
    const data = [{
      name: 'Intent Data',
      values,
    }];
    return (
      <div id="intentGraph">
        <Table data={refTable} />
        <BarChart
          title="Query Hits"
          yAxisLabel="Hits"
          xAxisLabel="Query"
          height={300}
          width={30 * values.length + (5 * (values.length + 1)) + 73}
          data={data}
        />
      </div>
    );
  }

  renderSurveyGraphs() {
    let count = 0;
    let refTable = [];
    let avgResponse = [];
    const hits = this.props.surveyData.map((survey) => {
      count++;
      refTable.push({ Number: count, 'Survey Question': survey.question });
      avgResponse.push({ x: count, y: survey.meanResponse });
      return {
        x: count,
        y: survey.numResponses,
      };
    });

    const numData = [{
      name: 'Number of Responses Data',
      values: hits,
    }];

    const avgData = [{
      name: 'Mean Response Data',
      values: avgResponse,
    }];

    return (
      <div id="surveyGraphs">
        <Table data={refTable} />
        <BarChart
          title="Survey Question Hits"
          yAxisLabel="Hits"
          xAxisLabel="Question"
          height={300}
          width={30 * numData[0].values.length + (5 * (numData.values.length + 1)) + 73}
          data={numData}
        />
        <BarChart
          title="Survey Question Responses"
          yAxisLabel="Mean Response"
          xAxisLabel="Question"
          height={300}
          width={30 * avgData[0].values.length + (5 * (avgData.values.length + 1)) + 73}
          data={avgData}
        />
      </div>
    );
  }

  render() {
    return (
      <div className="analytics">
        <h1>Tour Analytics</h1>
        <div className="graphs">
          {this.renderLocationGraph()}
          {this.renderIntentGraph()}
          {this.renderSurveyGraphs()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  locData: state.analytics.locData,
  intentData: state.analytics.intentData,
  surveyData: state.analytics.surveyData,
});

const mapDispatchToProps = {
  fetchLocData,
  fetchIntentData,
  fetchSurveyData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Analytics);
