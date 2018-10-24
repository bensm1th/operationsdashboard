
import moment from 'moment';
import types from './types';

import { instructors, days, courses, times, data, columns, makeCourseOptions } from "../utils/data";


export const turnOffMessage = () => {
    return {
        type: types.TURN_OFF_MESSAGE
    }
}
export const addClass = props => {
    return {
        type: types.ADD_CLASS,
    }
  }

export const handleItemClick = (e, { name }) => {
    return {
        type: types.HANDLE_CLICK,
        payload: name
    }
    //this.setState({ activeItem: name })
};


export const addSubs = () => {
    return {
        type: types.ADD_SUBS,
    }
  }

export const addSubsEdit = (props) => {
    const { editedClass, editedClass: { subName, subDate, subs} } = props;
    this.setState({
      editedClass: {
        ...editedClass,
        subs: [...subs, { name: subName, date: subDate }],
        subName: "",
        subDate: moment(),
      }
    })
  }

export const handleSubChange = (data, type) => {
    if (type === types.SUB_DATE) {
        return {
            type: types.SUB_DATE,
            payload: data
        }
    //   this.setState({
    //     subDate: data
    //   })
    }
    if (type === types.SUB_NAME) {
        return {
            type: types.SUB_NAME,
            payload: data
        }
    //   this.setState({
    //     subName: data
    //   })
    }
  }

export const handleChangeEdit= (payload, type) => {
    //const { editedClass } = this.state;
    return {
        type,
        payload
    }
  }

export const handleChange = (payload, type) => {
    console.log(type);
    console.log(payload)
    return {
        type,
        payload
    }
  }

export const editClass = () => {
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

export const responseGoogle = (response) => {
  
    console.log('google response --------------------------------------------------')
    console.log(response);
    console.log(this.state);
    this.setState({
      googleId: response.profileObj.googleId, 
      authed: true,
      profileObj: response.profileObj
    });
    localStorage.setItem("googleId", response.profileObj.googleId,);

  }

export const logOutGoogle = (response) => {
    localStorage.removeItem("googleId");
    this.setState({
      googleId: "", 
      authed: false,
      profileObj: {}
    })
  }