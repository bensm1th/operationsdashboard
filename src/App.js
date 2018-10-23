import React, { Component } from 'react';
import TableExample from './dumb/table';
import AddClass from './dumb/addClass';
import EditClass from './dumb/editClass';
import SelectedClassToEdit from './dumb/selectedEditClass';
import Menu from './dumb/menu';
import './App.css';
import 'react-table/react-table.css'
import { Table } from 'semantic-ui-react'
import moment from 'moment';
import { instructors, days, courses, times, types, data, columns, makeCourseOptions } from "./utils/data";

const initialState = { 
  activeItem: 'Classes',
  weekOf: moment(),
  instructor: "Ben Smith",
  instructors,
  days,
  day: "M/W",
  startDate: moment(),
  courses,
  courseType: courses[0].text,
  times,
  time: times[0].text,
  TAs: instructors,
  TA: instructors[0].text,
  subName: "none",
  subs: instructors,
  subDate: moment(),
  addedSubs: [],
  courseNumber: "",
  instructorNotified: "no",
  instructorCalled: "no",
  taIntro: "no",
  testsOrdered: "no",
  roomsReserved: "no",
  payment: "no",
  proctor: "",
  courseOptions: makeCourseOptions(data),
  courseToEdit: "",
  courseSelected: false,
  editedClass: {}
}

const responseGoogle = (response) => {
  console.log(response);
}

class App extends Component {
  state = { 
    activeItem: 'Classes',
    weekOf: moment(),
    instructor: "Ben Smith",
    instructors,
    days,
    day: "M/W",
    startDate: moment(),
    courses,
    courseType: courses[0].text,
    times,
    time: times[0].text,
    TAs: instructors,
    TA: instructors[0].text,
    subName: "none",
    subs: instructors,
    subDate: moment(),
    addedSubs: [],
    courseNumber: "",
    instructorNotified: "no",
    instructorCalled: "no",
    taIntro: "no",
    testsOrdered: "no",
    roomsReserved: "no",
    payment: "no",
    proctor: "",
    data,
    columns,
    courseToEdit: "",
    courseOptions: makeCourseOptions(data),
    courseSelected: false,
    editedClass: {
      subDate: moment()
    },
    message: false
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

  addClass = () => {
    const { weekOf, courseNumber, courseType, startDate, day, instructor, instructorNotified, TA, taIntro, addedSubs, data, instructorCalled } = this.state;
    if (courseNumber.length < 5) {
      this.setState({
        message: true
      });
      return;
    }
    const classProps = {
      week: moment(weekOf).format("MM/DD/YYYY"),
      number: courseNumber,
      type: courseType,
      start: moment(startDate).format("MM/DD/YYYY"),
      days: day,
      instructor: instructor,
      notified: instructorNotified,
      ta: TA,
      taintro: taIntro,
      subs: "10/23: Kevin",
      adobe: "yes",
      called: instructorCalled,
      subs: addedSubs
    }
    this.setState({
      ...initialState,
      data: [...data, classProps],
      courseOptions: makeCourseOptions([...data, classProps])
    })
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  renderSubsTable = () => {
    return this.state.addedSubs.map((row, i) => {
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
    return this.state.editedClass.subs.map((row, i) => {
      return (
        <Table.Row key={i}>
          <Table.Cell><div>{moment(row.date).format("MM/DD/YYYY")}</div></Table.Cell>
          <Table.Cell><div>{row.name}</div></Table.Cell>
      </Table.Row>
      )
    })
  }

  addSubs = () => {
    const { subDate, subName, addedSubs } = this.state;
    this.setState(
      {
        addedSubs:[
          ...addedSubs,
          {
            name:subName,
            date: moment(subDate).format("MM/DD/YYYY")
          } 
        ],
        subDate: moment(),
        subName: "none"
      }
    );
  }

  addSubsEdit = () => {
    const { editedClass, editedClass: { subName, subDate, subs} } = this.state;
    this.setState({
      editedClass: {
        ...editedClass,
        subs: [...subs, { name: subName, date: subDate }],
        subName: "",
        subDate: moment(),
      }
    })
  }

  handleSubChange = (data, type) => {
    if (type === "SUB_DATE") {
      this.setState({
        subDate: data
      })
    }
    if (type === "SUB_NAME") {
      this.setState({
        subName: data
      })
    }
  }

  handleChangeEdit= (payload, type) => {
    const { editedClass } = this.state;
    console.log('incoming course edit');
    console.log(payload);
    switch (type) {
      case types.CANCEL_EDIT:
        this.setState({
          courseSelected: false
        });
      case types.SUB_DATE:
        this.setState({
          editedClass: {
            ...editedClass,
            subDate: moment(payload).format("MM/DD")
          }
        });
        break;
      case types.DELETE_COURSE:
        //go into data
        const { data, courseToEdit } = this.state;
        const courses = data.filter(course => course.number !== courseToEdit);
        this.setState({
          data: courses,
          courseToEdit: "",
          editedClass: {},
          activeItem: "Classes",
          courseSelected: false,
          courseOptions: makeCourseOptions(courses)
        })
      case types.SUB_NAME:

        this.setState({
          editedClass: {
            ...editedClass,
            subName: payload
          }
        });
        break;
      case types.WEEK_OF:
        this.setState({
          editedClass: {
            ...editedClass,
            week: moment(payload).format("MM/DD/YYYY")
          }
        });
        break;
      case types.COURSE_NUMBER:
      //
        this.setState({
          editedClass: {
            ...editedClass,
          number: payload
          }
        });
        break;
      case types.COURSE_TYPE:
      console.log('changing course type');
      console.log(payload);
        this.setState({
          editedClass: {
            ...editedClass,
          type: payload
          }
        });
        break;

      case types.COURSE_TIME:
        this.setState({
          editedClass: {
            ...editedClass,
          time: payload
          }
        });
        break;

      case types.START_DATE:
        this.setState({
          editedClass: {
            ...editedClass,
          start: moment(payload).format("MM/DD/YYYY")
          }
        });
        break;

      case types.DAYS:
        this.setState({
          editedClass: {
            ...editedClass,
          days: payload
          }
        });
        break;

      case types.INSTRUCTOR:
        this.setState({
          editedClass: {
            ...editedClass,
          instructor: payload
          }
        });
        break;

      case types.INSTRUCTOR_NOTIFIED:
        this.setState({
          editedClass: {
            ...editedClass,
          notified: payload
          }
        });
        break;

      case types.INSTRUCTOR_CALLED:
      //
        this.setState({
          editedClass: {
            ...editedClass,
          called: payload
          }
        });
        break;

      case types.TA_NAME:
        this.setState({
          editedClass: {
            ...editedClass,
          ta: payload
          }
        });
        break;

      case types.TA_INTRODUCED:
      //
        this.setState({
          editedClass: {
            ...editedClass,
          taintro: payload,
          }
        });
        break;

      case types.TESTS_ORDERED:
      //
        this.setState({
          editedClass: {
            ...editedClass,
          testsOrdered: payload
          }
        });
        break;

      case types.ROOMS_RESERVED:
      //
        this.setState({
          editedClass: {
            ...editedClass,
          roomsReserved: payload
          }
        });
        break;

      case types.PROCTOR:
        this.setState({
          editedClass: {
            ...editedClass,
          proctor: payload
          }
        });
        break;

      case types.PAYMENT:
        this.setState({
          editedClass: {
            ...editedClass,
          payment: payload
          }
        });
        break;
      default: 
        return;
    }
  }

  handleChange = (payload, type) => {
    switch (type) {
      case types.WEEK_OF:
        this.setState({
          weekOf: payload
        });
        break;
      case types.COURSE_NUMBER:
      //
        if (data.length > 4) {
          this.setState({
            courseNumber: payload,
            message: false
          });
          break;
        }
        this.setState({
          courseNumber: payload
        });
        break;
      case types.COURSE_TYPE:
        this.setState({
          courseType: payload
        });
        break;

      case types.COURSE_TIME:
        this.setState({
          time: payload
        });
        break;

      case types.START_DATE:
        this.setState({
          startDate: payload
        });
        break;

      case types.DAYS:
        this.setState({
          day: payload
        });
        break;

      case types.INSTRUCTOR:
        this.setState({
          instructor: payload
        });
        break;

      case types.INSTRUCTOR_NOTIFIED:
        this.setState({
          instructorNotified: payload
        });
        break;

      case types.INSTRUCTOR_CALLED:
      //
        this.setState({
          instructorCalled: payload
        });
        break;

      case types.TA_NAME:
        this.setState({
          TA: payload
        });
        break;

      case types.TA_INTRODUCED:
      //
        this.setState({
          taIntro: payload
        });
        break;

      case types.TESTS_ORDERED:
      //
        this.setState({
          testsOrdered: payload
        });
        break;

      case types.ROOMS_RESERVED:
      //
        this.setState({
          roomsReserved: payload
        });
        break;

      case types.PROCTOR:
        this.setState({
          proctor: payload
        });
        break;

      case types.PAYMENT:
        this.setState({
          payment: payload
        });
        break;
      case types.SELECT_CLASS_EDIT:
        this.setState({
          courseToEdit: payload
        });
        break;
      case types.COURSE_SELECTED:
        const selectedCourse = this.state.data.filter((course, i) => {
          return course.number === this.state.courseToEdit;
        });
        this.setState({
          courseSelected: true,
          editedClass: {...selectedCourse[0], subDate: moment()}
        })
      default: 
        return;
    }
  }

  editClass = () => {
    //put "editedClass" into the "data" prop in the correct courses place
      //search through "data"
    const { data, editedClass } = this.state;
    const classes = data.filter((course, i) => {
      return course.number !== editedClass.number;
    });
    this.setState({
      data: [...classes, editedClass],
      courseSelected: false,
      courseToEdit: "",
      activeItem: "Classes"
    })
    //toggle off "courseSelected"
    //disable changing course number
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <div>
        <Menu 
          {...this.state}
          handleItemClick={this.handleItemClick}
        />

        </div>

        {this.state.activeItem === "Classes" &&
        <div>
          <TableExample 
            {...this.state}
          />
        </div>
        }
        {this.state.activeItem === "Add Class" &&
        <div>
          <AddClass 
            addClass={this.addClass}
            handleChange={this.handleChange}
            handleDateChange={this.handleDateChange}
            changeTime={this.changeTime}
            changeTA={this.changeTA}
            handleSubChange={this.handleSubChange}
            renderSubsTable={this.renderSubsTable}
            addSubs={this.addSubs}
            {...this.state}
          />
        </div>
        }
        {this.state.activeItem === "Edit Class" &&
        <div>
          <EditClass 
            handleChangeEdit={this.handleChange}
            renderSelectedEditCourse={this.renderSelectedEditCourse}
            renderSubsTable={this.renderSubsTable}
            addSubs={this.addSubs}
            handleChange={this.handleChange}
            {...this.state}
          />
        </div>
        }
      </div>
    );
  }
}

export default App;
