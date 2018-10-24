import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import 'react-table/react-table.css'
import { Table } from 'semantic-ui-react'
import moment from 'moment';

import * as actions from './actions';

import TableExample from './dumb/table';
import AddClass from './dumb/addClass';
import EditClass from './dumb/editClass';
import SelectedClassToEdit from './dumb/selectedEditClass';
import Menu from './dumb/menu';

import { instructors, days, courses, times, types, data, columns, makeCourseOptions } from "./utils/data";



class Main extends Component {

  componentDidMount = () => {
    const googleId = localStorage.getItem("googleId");
    if (googleId) {
      this.setState({
        authed: true
      })
    }
  }

  componentDidUpdate = (prevProps, prevState) => {
      if (this.props.classes.courseNumber.length >= 5 && prevProps.classes.courseNumber.length < 5  && this.props.classes.message === true) {
          //change to message: false
          console.log('hello world');
          this.props.turnOffMessage();
      }
  }

  renderSelectedEditCourse = () => {
    return (
      <SelectedClassToEdit
        handleChangeEdit={this.handleChangeEdit}
        editClass={this.editClass}
        renderEditedSubsTable={this.renderEditedSubsTable}
        addSubsEdit={this.addSubsEdit}
        {...this.state}
      />
    )
  }

  renderSubsTable = () => {
    return this.props.classes.addedSubs.map((row, i) => {
      console.log(row.date)
      return (
        <Table.Row key={i}>
          <Table.Cell><div>{row.date}</div></Table.Cell>
          <Table.Cell><div>{row.name}</div></Table.Cell>
      </Table.Row>
      )
    })
  }

  renderEditedSubsTable = () => {
    return this.props.classes.editedClass.subs.map((row, i) => {
      return (
        <Table.Row key={i}>
          <Table.Cell><div>{moment(row.date).format("MM/DD/YYYY")}</div></Table.Cell>
          <Table.Cell><div>{row.name}</div></Table.Cell>
      </Table.Row>
      )
    })
  }

  render() {
      console.log(this.props.classes)
    return (
      <div className="App">
        <div>
        <Menu 
          logOutGoogle={this.props.logOutGoogle}
          repsonseGoogle={this.props.responseGoogle}
          {...this.props.classes}
          handleItemClick={this.props.handleItemClick}
        />

        </div>
        {this.props.classes.authed &&
          <div>
          {this.props.classes.activeItem === "Classes" &&
          <div className="mainClasses">
            <TableExample 
              {...this.props.classes}
            />
          </div>
          }
          {this.props.classes.activeItem === "Add Class" &&
          <div>
            <AddClass 
              addClass={this.props.addClass}
              handleChange={this.props.handleChange}
              handleDateChange={this.props.handleDateChange}
              changeTime={this.props.changeTime}
              changeTA={this.props.changeTA}
              handleSubChange={this.props.handleSubChange}
              renderSubsTable={this.renderSubsTable}
              addSubs={this.props.addSubs}
              {...this.props.classes}
            />
          </div>
          }
          {this.props.classes.activeItem === "Edit Class" &&
          <div>
            <EditClass 
              handleChangeEdit={this.props.handleChange}
              renderSelectedEditCourse={this.renderSelectedEditCourse}
              renderSubsTable={this.renderSubsTable}
              addSubs={this.props.addSubs}
              handleChange={this.props.handleChange}
              {...this.props.classes}
            />
          </div>
          }
        </div>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    const { banana, classes } = state;
    return {
        banana, classes
    };
};

Main = connect(mapStateToProps, actions)(Main);

export default Main;
