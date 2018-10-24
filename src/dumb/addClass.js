import React from 'react';
import { Container, Segment, Form, Divider, Dropdown, Header, Table, Input, Message } from 'semantic-ui-react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import { types } from "../utils/data";


const AddClass = props => (
    <Container>
        <Segment color="blue" attached="top">
            <Header as="h1">Add Class</Header>
        </Segment>
        <Segment attached>
            <Form>
                <Form.Group>
                    <Form.Field required>
                        <label>Course Number</label>
                        <Input 
                            type="number"
                            value={props.courseNumber}
                            onChange={event => props.handleChange(event.target.value, types.COURSE_NUMBER)}
                            placeholder="Number" 
                        />
                        {props.message &&
                        <Message 
                            color="red"
                            header="Required Data Missing"
                            list={["Course Number is Required", "Course Number Must be at Least Five Numbers Long"]}
                        />
                        }
                    </Form.Field>
                    <Form.Field>
                        <label>Week of (Starting Monday)</label>
                        <DatePicker
                            selected={moment(props.weekOf)}
                            onChange={value => props.handleChange(value, types.WEEK_OF)}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Course Type</label>
                        <Dropdown 
                            placeholder={props.courseType}
                            value={props.courseType}
                            options={props.courses}
                            onChange={(e, data) => props.handleChange(data.value, types.COURSE_TYPE)}
                        />
                    </Form.Field>

                    <Form.Field>
                        <label>Course Time (PST)</label>
                        <Dropdown 
                            placeholder={props.time}
                            options={props.times}
                            onChange={(e, data) => props.handleChange(data.value, types.COURSE_TIME)}
                        />
                    </Form.Field>

                    <Form.Field>
                        <label>Start Date</label>
                        <DatePicker
                            selected={moment(props.startDate)}
                            onChange={value => props.handleChange(value, types.START_DATE)}
                        />
                    </Form.Field>

                    <Form.Field>
                    <label>Days</label>
                        <Dropdown 
                            placeholder="M/W"
                            options={props.days}
                            onChange={(e, data) => props.handleChange(data.value, types.DAYS)}
                        />
                    </Form.Field>
                </Form.Group>
                <Divider section/>
                <Form.Group>
                    <Form.Field>
                        <label>Instructor</label>
                        <Dropdown 
                            placeholder="Instructor"
                            options={props.instructors}
                            onChange={(e, data) => props.handleChange(data.value, types.INSTRUCTOR)}
                        />
                    </Form.Field>

                    <Form.Field 
                        label='Instructor Notified' 
                        control='select'
                        onChange={event => props.handleChange(event.target.value, types.INSTRUCTOR_NOTIFIED)}
                    >
                        <option value='No'>No</option>
                        <option value='Yes'>Yes</option>
                    </Form.Field>
                    
                    <Form.Field 
                        onChange={event => props.handleChange(event.target.value, types.INSTRUCTOR_CALLED)}
                        label='Instructor Called' 
                        control='select'
                    >
                        <option value='No'>No</option>
                        <option value='Yes'>Yes</option>
                    </Form.Field>

                    <Form.Field>
                        <label>TA Name</label>
                        <Dropdown 
                            placeholder="TA Name"
                            options={props.TAs}
                            onChange={(e, data) => props.handleChange(data.value, types.TA_NAME)}
                        />
                    </Form.Field>
                    
                    <Form.Field 
                        onChange={event => props.handleChange(event.target.value, types.TA_INTRODUCED)}
                        label='TA Introduced' 
                        control='select'
                    >
                        <option value='No'>No</option>
                        <option value='Yes'>Yes</option>
                    </Form.Field>
                </Form.Group>
                <Divider section/>
                <Form.Group inline>
                    <Form.Field>
                        <label>Subs</label>
                        <Dropdown 
                            placeholder="Sub Name"
                            options={props.TAs}
                            onChange={(e, data) => props.handleSubChange(data.value, types.SUB_NAME)}
                            value={props.subName}
                        />                    
                    </Form.Field>
                    <Form.Field>
                        <DatePicker
                            selected={props.subDate}
                            onChange={value => props.handleSubChange(value, types.SUB_DATE)}
                        />
                    </Form.Field>
                    <Form.Button color="green" onClick={props.addSubs}>Add Sub</Form.Button>
                </Form.Group>
                {props.addedSubs.length > 0 &&
                <Segment>
                    <Table celled>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Date</Table.HeaderCell>
                                <Table.HeaderCell>Sub Name</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            {props.renderSubsTable()}
                        </Table.Body>
                    </Table>
                </Segment>
                }
                <Divider section/>
                <Form.Group>
                    <Form.Field 
                        onChange={event => props.handleChange(event.target.value, types.TESTS_ORDERED)}
                        label='Tests Ordered' 
                        control='select'
                    >
                        <option value='No'>No</option>
                        <option value='Yes'>Yes</option>
                    </Form.Field>

                    <Form.Field 
                        label='Rooms Reserved' 
                        control='select'
                        onChange={event => props.handleChange(event.target.value, types.ROOMS_RESERVED)}
                    >
                        <option value='No'>No</option>
                        <option value='Yes'>Yes</option>
                    </Form.Field>

                    <Form.Field>    
                        <Form.Input 
                            onChange={event => props.handleChange(event.target.value, types.PROCTOR)}
                            label="Proctor" 
                            placeholder="Proctor" 
                        />
                    </Form.Field>
                    
                    <Form.Field 
                        onChange={event => props.handleChange(event.target.value, types.PAYMENT)}
                        label='Payment' 
                        control='select'
                    >
                        <option value='No'>No</option>
                        <option value='Yes'>Yes</option>
                    </Form.Field>
                </Form.Group>
                <Form.Group>
                    <Form.Button
                        color="green"
                        onClick={props.addClass}
                    >Save Class</Form.Button>
                </Form.Group>
            </Form>
        </Segment>
        </Container>
);

export default AddClass;

