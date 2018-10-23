import React from 'react';
import moment from 'moment';

const data = [{
    week: '10/15/2018',
    number: 37773,
    type: "SAT",
    start: "10/17",
    days: "M/W",
    instructor: "Miguel Chivira",
    notified: "called",
    ta: "Kevin",
    taintro: "yes",
    subs: [{ name: "Kevin", date: "10/23"}],
    adobe: "yes",
    called: "no"
  },
  {
    week: '10/23/2018',
    number: 34553,
    type: "ACT",
    start: "10/17",
    days: "M/W",
    instructor: "Clay Cooper",
    notified: "called",
    ta: "Kevin",
    taintro: "yes",
    subs: [{ name: "Kevin", date: "10/23"}],
    adobe: "yes",
    called: "no",
    time: "3:00pm-6:00pm"
  },
  {
    week: '10/11/2018',
    number: 38776,
    type: "Princeton",
    start: "10/17",
    days: "T/T",
    instructor: "Nishi Patel",
    notified: "called",
    ta: "Kevin",
    taintro: "yes",
    subs: [{ name: "Kevin", date: "10/23"}],
    adobe: "yes",
    called: "no"
  },
  {
    week: '11/23/2018',
    number: 34451,
    type: "SAT",
    start: "10/17",
    days: "M/W",
    instructor: "Clay Cooper",
    notified: "called",
    ta: "Kevin",
    taintro: "yes",
    subs: [{ name: "Kevin", date: "10/23"}],
    adobe: "yes",
    called: "no"
  },
  {
    week: '12/23/2018',
    number: 34563,
    type: "ACT",
    start: "10/17",
    days: "M/W",
    instructor: "Clay Cooper",
    notified: "called",
    ta: "Kevin",
    taintro: "yes",
    subs: [{ name: "Kevin", date: "10/23"}, { name: "Ben", date: "10/24"}],
    adobe: "yes",    
    called: "no"
  },
]
 
  const columns = [
  {
    Header: 'Week',
    accessor: 'week',
    width: 100
  }, {
    Header: 'Number',
    accessor: 'number',
    width: 80
  }, {
    Header: 'Type',
    accessor: 'type'
  }, {
    Header: 'Start',
    accessor: 'start'
  },
  {
    Header: 'Days',
    accessor: 'days',
    width: 60
  },
  {
    Header: 'Time',
    accessor: 'time'
  },
  {
    Header: 'Instructor',
    accessor: 'instructor'
  },
  {
    Header: 'Notified',
    accessor: 'notified',
    width: 70
  },
  {
      Header: "Called",
      accessor: 'called',
      width: 70
  },
  {
    Header: () => <div><div>Adobe</div><div>Connect</div></div>,
    accessor: "adobe",
    width: 70
    },
  {
    Header: 'TA Assigned',
    accessor: 'ta'
  },
  {
    Header: 'TA Introduced',
    accessor: 'taintro'
  },
  {
    Header: 'Subs',
    id: 'subs',
    accessor: data => {
      const subsJSX = data.subs.map((sub, i) => {
        console.log('--- info ----');
        console.log(moment(sub.date).format("MM/DD"));
        return <div key={i}><div style={{fontWeight: "bold"}}>{sub.name}:</div> <div>{moment(sub.date).format("MM/DD")}</div></div>;
      })
      return subsJSX;
    }
  },
  {
    Header: () => <div><div>Tests</div><div>Ordered</div></div>,
    accessor: 'tests',
    width: 70
  },
  {
    Header: 'Reserved',
    accessor: 'reserved',
    width: 70
  },
  {
    Header: 'Proctor',
    accessor: 'proctor'
  },
  {
    Header: 'Payment',
    accessor: 'payment',
    width: 70
  },
];

const instructorNames = ["none", "Amberly Wang", "Benjamin Smith", "Celina Paudel", "Chelsea Sandridge", "Dan Swanson", "Ben Lundgren", "Hassan Bhatti", "Kevin Parrish", "Nishi Patel",
    "Ryan Fitzgibbons", "William York", "Miguel Chavira", "Nathan Devara", "Davis Zhang", "Akash Samant", "Olivia Owens", "Paarth Shah", "Rachel Langley",
    "Alexander Connors", "Pranav Samineni", "Sofia Lesnewski", "Aditya Arolkar", "Amanda Calhoun"
]

const makeOptions = arr => {
    return arr.reduce((init, curr, i) => {
        const name = {}
        name.key = i;
        name.value = curr;
        name.text = curr;
        init.push(name);
        return init;
    }, []);
};

const makeCourseOptions = data => {
    return data.reduce((init, curr, i) => {
        const option = {};
        option.key = i;
        option.value = curr.number;
        option.text = curr.number;
        init.push(option);
        return init;
    }, [])
}

// const courseOptions = makeCourseOptions(data);

const instructors = makeOptions(instructorNames);

const days = [
    {
        key: "M/W",
        value: "M/W",
        text: "M/W"
    },
    {
        key: "S/S",
        value: "S/S",
        text: "S/S"
    },
    {
        key: "T/T",
        value: "T/T",
        text: "T/T"
    },
];

const courseTypes = ["SAT Online 6-Week", "ACT Online 6-Week", "SAT Princeton", "SAT Orange County", "SAT Washington, DC", "SAT Las Vegas", "ACT Las Vegas", "SAT Online 3-Week",
    "ACT Online 3-Week", "ACT Camp", "SAT Camp"
];

const timeTypes = ["3:00pm-6:00pm", "3:30pm-6:30pm", "9:00am-12:00pm", "12:00pm-3:00pm", "5:30-8:30", "6:00pm-9:00pm"]

const courses = makeOptions(courseTypes);
const times = makeOptions(timeTypes);

const types = {
    WEEK_OF: 'WEEK_OF',
    COURSE_NUMBER: 'COURSE_NUMBER',
    COURSE_TYPE: 'COURSE_TYPE',
    COURSE_TIME: 'COURSE_TIME',
    START_DATE: 'START_DATE',
    DAYS: 'DAYS',
    INSTRUCTOR: 'INSTRUCTOR',
    INSTRUCTOR_NOTIFIED: 'INSTRUCTOR_NOTIFIED',
    INSTRUCTOR_CALLED: 'INSTRUCTOR_CALLED',
    TA_NAME: 'TA_NAME',
    TA_INTRODUCED: 'TA_INTRODUCED',
    TESTS_ORDERED: 'TESTS_ORDERED',
    ROOMS_RESERVED: 'ROOMS_RESERVED',
    PROCTOR: 'PROCTOR',
    PAYMENT: 'PAYMENT',
    SELECT_CLASS_EDIT: 'SELECT_CLASS_EDIT',
    COURSE_SELECTED: 'COURSE_SELECTED',
    CANCEL_EDIT: 'CANCEL_EDIT',
    DELETE_COURSE: 'DELETE_COURSE',
    SUB_NAME: 'SUB_NAME',
    SUB_DATE: 'SUB_DATE'
}

export { data, columns, instructors, days, courses, times, types, makeCourseOptions };