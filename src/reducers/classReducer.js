
import types from '../actions/types';
import moment from 'moment';
import { instructors, days, courses, times, data, columns, makeCourseOptions } from "../utils/data";


const initialState = { 
    authed: true,  
    activeItem: 'Classes',
    addedSubs: [],
    courseNumber: "",
    courseOptions: makeCourseOptions(data),
    courseToEdit: "",
    courseSelected: false,
    courses,
    courseType: courses[0].text,
    columns,
    data,
    days,
    day: "M/W",
    editedClass: {},
    instructor: "Ben Smith",
    instructors,
    instructorNotified: "no",
    instructorCalled: "no",
    payment: "no",
    proctor: "",
    roomsReserved: "no",
    startDate: moment(),
    subName: "none",
    subs: instructors,
    subDate: moment(),
    times,
    time: times[0].text,
    TAs: instructors,
    TA: instructors[0].text,
    taIntro: "no",
    testsOrdered: "no",
    weekOf: moment(),

}

const selectorAddClass = state => {
    const { weekOf, courseNumber, courseType, startDate, day, instructor, addedSubs, data, instructorNotified, TA, taIntro, instructorCalled } = state;
    if (courseNumber.length < 5) {
        return;
    }
    const classProps = {
      week: moment(weekOf).format("MM/DD/YYYY"),
      number: courseNumber,
      type: courseType,
      start: moment(startDate).format("MM/DD/YYYY"),
      day,
      instructor: instructor,
      notified: instructorNotified,
      ta: TA,
      taintro: taIntro,
      adobe: "yes",
      called: instructorCalled,
      subs: addedSubs
    }
    return classProps;
}

const classReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case types.TURN_OFF_MESSAGE:
            return {
                ...state,
                message: false
            }
        case types.ADD_CLASS:
            if (state.courseNumber.length < 5) {
                return {
                    ...state,
                    message: true
                }
            }
            const classProps = selectorAddClass(state);
            return {
                ...initialState,
                data: [...state.data, classProps],
                courseOptions: makeCourseOptions([...state.data, classProps])
                
            }
        case types.ADD_CLASS_SHORT: 
            return {
                ...state
            }
        case types.HANDLE_CLICK:
            return {
                ...state,
                activeItem: action.payload
            }
        case types.ADD_SUBS: 
            const { subDate, subName, addedSubs } = state;

            return {
                ...state,
                addedSubs:[
                    ...state.addedSubs,
                    {
                        name: subName,
                        date: moment(subDate).format("MM/DD/YYYY")
                    } 
                ],
                subDate: moment(),
                subName: "none"
            }
        case types.CANCEL_EDIT:
            return {
                ...state,
                courseSelected: false
            }
        case types.SUB_DATE_EDIT:
            return {
                ...state,
                editedClass: {
                    ...state.editedClass,
                    subDate: moment(action.payload).format("MM/DD")
                }
            }
        case types.SUB_DATE:
            return {
                ...state,
                subDate: action.payload
            }
        case types.SUB_NAME:
            return {
                ...state,
                subName: action.payload
            }
        case types.DELETE_COURSE_EDIT:
            //go into data
            const { data, courseToEdit } = state;
            const courses = data.filter(course => course.number !== courseToEdit);
            return {
                ...state,
                data: courses,
                courseToEdit: "",
                editedClass: {},
                activeItem: "Classes",
                courseSelected: false,
                courseOptions: makeCourseOptions(courses)
            }
        case types.SUB_NAME_EDIT:
            return {
                ...state,
                editedClass: {
                    ...state.editedClass,
                    subName: action.payload
                }
            }
        case types.WEEK_OF_EDIT:
            return {
                ...state,
                editedClass: {
                    ...state.editedClass,
                    week: moment(action.payload).format("MM/DD/YYYY")
                }
            }
        case types.COURSE_NUMBER_EDIT:
        //
            return {
                ...state,
                editedClass: {
                    ...state.editedClass,
                number: action.payload
                }
            }
            
        case types.COURSE_TYPE_EDIT:
    
            return {
                ...state,
                editedClass: {
                    ...state.editedClass,
                type: action.payload
                }
            }
            

        case types.COURSE_TIME_EDIT:
            return {
                ...state,
                editedClass: {
                    ...state.editedClass,
                time: action.payload
                }
            }
            

        case types.START_DATE_EDIT:
            return {
                ...state,
                editedClass: {
                    ...state.editedClass,
                start: moment(action.payload).format("MM/DD/YYYY")
                }
            }
            

        case types.DAYS_EDIT:
            return {
                ...state,
                editedClass: {
                    ...state.editedClass,
                days: action.payload
                }
            }
            

        case types.INSTRUCTOR_EDIT:
            return {
                ...state,
                editedClass: {
                    ...state.editedClass,
                instructor: action.payload
                }
            }
            

        case types.INSTRUCTOR_NOTIFIED_EDIT:
            return {
                ...state,
                editedClass: {
                    ...state.editedClass,
                notified: action.payload
                }
            }
            

        case types.INSTRUCTOR_CALLED_EDIT:
        //
            return {
                ...state,
                editedClass: {
                    ...state.editedClass,
                called: action.payload
                }
            }
            

        case types.TA_NAME_EDIT:
            return {
                ...state,
                editedClass: {
                    ...state.editedClass,
                ta: action.payload
                }
            }
            

        case types.TA_INTRODUCED_EDIT:
        //
            return {
                ...state,
                editedClass: {
                    ...state.editedClass,
                taintro: action.payload,
                }
            }
            

        case types.TESTS_ORDERED_EDIT:
        //
            return {
                ...state,
                editedClass: {
                    ...state.editedClass,
                testsOrdered: action.payload
                }
            }
            

        case types.ROOMS_RESERVED_EDIT:
        //
            return {
                ...state,
                editedClass: {
                    ...state.editedClass,
                roomsReserved: action.payload
                }
            }
            

        case types.PROCTOR_EDIT:
            return {
                ...state,
                editedClass: {
                    ...state.editedClass,
                proctor: action.payload
                }
            }
            

        case types.PAYMENT_EDIT:
            return {
                ...state,
                editedClass: {
                    ...state.editedClass,
                payment: action.payload
                }
            }

    //  case types.SUB_NAME_EDIT:
    //         return {
    //             ...state,
    //             editedClass: {
    //                 ...state.editedClass,
    //                 subName: action.payload
    //             }
    //         }
        case types.WEEK_OF:
                        console.log('----- payload -----');
            console.log(action)
            return {
                ...state,
                weekOf: moment(action.payload).format("MM/DD/YYYY")
            }
        case types.COURSE_NUMBER:

            return {
                ...state,
                courseNumber: action.payload
            }
            
        case types.COURSE_TYPE:
    
            return {
                ...state,
                courseType: action.payload
            }
            

        case types.COURSE_TIME:
            return {
                ...state,
                time: action.payload
            }
            

        case types.START_DATE:
            return {
                ...state,
                start: moment(action.payload).format("MM/DD/YYYY")
            }
            

        case types.DAYS:
            return {
                ...state,
                day: action.payload
            }
            
        case types.INSTRUCTOR:
            return {
                ...state,
                instructor: action.payload
            }
            

        case types.INSTRUCTOR_NOTIFIED:
            return {
                ...state,
                notified: action.payload
            }
            

        case types.INSTRUCTOR_CALLED:
        //
            return {
                ...state,
                called: action.payload
            }
            

        case types.TA_NAME:
            return {
                ...state,
                ta: action.payload
            }
            

        case types.TA_INTRODUCED:
        //
            return {
                ...state,
                taintro: action.payload,
            }
            

        case types.TESTS_ORDERED:
        //
            return {
                ...state,
                testsOrdered: action.payload
            }
            

        case types.ROOMS_RESERVED:
        //
            return {
                ...state,
                roomsReserved: action.payload
            }
            

        case types.PROCTOR:
            return {
                ...state,
                proctor: action.payload
            }
            

        case types.PAYMENT:
            return {
                ...state,
                payment: action.payload
            }
            
            default:
                return state;
    }
};

export default classReducer;