import React from 'react';
import { Container, Segment, Form, Divider, Dropdown, Header, Table, Input } from 'semantic-ui-react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import { types } from "../utils/data";


const SelectedClassToEdit = props => (
    <Container>
            <Form>
                <Form.Group>
                    <Form.Field>
                        <label style={{ color: "red" }}>Course Number</label>
                        <Input 
                            readOnly
                            value={props.editedClass.number}
                            onChange={event => props.handleChangeEdit(event.target.value, types.COURSE_NUMBER)}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Week of (Starting Monday)</label>
                        <DatePicker
                            selected={moment(props.editedClass.week)}
                            onChange={value => props.handleChangeEdit(value, types.WEEK_OF)}
                        />
                    </Form.Field>


                    <Form.Field>
                        <label>Course Type</label>
                        <Dropdown 
                            placeholder={props.editedClass.type}
                            options={props.courses}
                            onChange={(e, data) => props.handleChangeEdit(data.value, types.COURSE_TYPE)}
                        />
                    </Form.Field>

                    <Form.Field>
                        <label>Course Time (PST)</label>
                        <Dropdown 
                            placeholder={props.editedClass.time}
                            options={props.times}
                            onChange={(e, data) => props.handleChangeEdit(data.value, types.COURSE_TIME)}
                        />
                    </Form.Field>

                    <Form.Field>
                        <label>Start Date</label>
                        <DatePicker
                            selected={moment(props.editedClass.start)}
                            onChange={value => props.handleChangeEdit(value, types.START_DATE)}
                        />
                    </Form.Field>

                    <Form.Field>
                    <label>Days</label>
                        <Dropdown 
                            placeholder="M/W"
                            options={props.days}
                            onChange={(e, data) => props.handleChangeEdit(data.value, types.DAYS)}
                        />
                    </Form.Field>
                </Form.Group>
                <Divider section/>
                <Form.Group>
                    <Form.Field>
                        <label>Instructor</label>
                        <Dropdown 
                            placeholder={props.editedClass.instructor}
                            options={props.instructors}
                            onChange={(e, data) => props.handleChangeEdit(data.value, types.INSTRUCTOR)}
                        />
                    </Form.Field>

                    <Form.Field 
                        label='Instructor Notified' 
                        control='select'
                        onChange={event => props.handleChangeEdit(event.target.value, types.INSTRUCTOR_NOTIFIED)}
                    >
                        <option value='No'>No</option>
                        <option value='Yes'>Yes</option>
                    </Form.Field>
                    
                    <Form.Field 
                        onChange={event => props.handleChangeEdit(event.target.value, types.INSTRUCTOR_CALLED)}
                        label='Instructor Called' 
                        control='select'
                    >
                        <option value='No'>No</option>
                        <option value='Yes'>Yes</option>
                    </Form.Field>

                    <Form.Field>
                        <label>TA Name</label>
                        <Dropdown 
                            placeholder={props.editedClass.ta}
                            options={props.TAs}
                            onChange={(e, data) => props.handleChangeEdit(data.value, types.TA_NAME)}
                        />
                    </Form.Field>
                    
                    <Form.Field 
                        onChange={event => props.handleChangeEdit(event.target.value, types.TA_INTRODUCED)}
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
                            options={props.TAs}
                            onChange={(e, data) => props.handleChangeEdit(data.value, "SUB_NAME")}
                            value={props.editedClass.subName}
                        />                    
                    </Form.Field>
                    <Form.Field>
                        <DatePicker
                            selected={moment(props.editedClass.subDate)}
                            onChange={value => props.handleChangeEdit(value, "SUB_DATE")}
                        />
                    </Form.Field>
                    <Form.Button color="green" onClick={props.addSubsEdit}>Add Sub</Form.Button>
                </Form.Group>
                {props.editedClass.subs.length > 0 &&
                <Segment>
                    <Table celled>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Date</Table.HeaderCell>
                                <Table.HeaderCell>Sub Name</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            {props.renderEditedSubsTable()}
                        </Table.Body>
                    </Table>
                </Segment>
                }
                <Divider section/>
                <Form.Group>
                    <Form.Field 
                        onChange={event => props.handleChangeEdit(event.target.value, types.TESTS_ORDERED)}
                        label='Tests Ordered' 
                        control='select'
                    >
                        <option value='No'>No</option>
                        <option value='Yes'>Yes</option>
                    </Form.Field>

                    <Form.Field 
                        label='Rooms Reserved' 
                        control='select'
                        onChange={event => props.handleChangeEdit(event.target.value, types.ROOMS_RESERVED)}
                    >
                        <option value='No'>No</option>
                        <option value='Yes'>Yes</option>
                    </Form.Field>

                    <Form.Field>    
                        <Form.Input 
                            onChange={event => props.handleChangeEdit(event.target.value, types.PROCTOR)}
                            label="Proctor" 
                            placeholder="Proctor" 
                        />
                    </Form.Field>
                    
                    <Form.Field 
                        onChange={event => props.handleChangeEdit(event.target.value, types.PAYMENT)}
                        label='Payment' 
                        control='select'
                    >
                        <option value='No'>No</option>
                        <option value='Yes'>Yes</option>
                    </Form.Field>
                </Form.Group>
                <Divider />
                <Form.Group inline>
                    <Form.Button
                        onClick={props.editClass}
                        color="blue"
                    >Update Class</Form.Button>
                    <Form.Button
                        color="grey"
                        onClick={event => props.handleChangeEdit("", types.CANCEL_EDIT)}
                    >
                        Cancel Update
                    </Form.Button>
                    <Form.Button
                        color="red"
                        onClick={event => props.handleChangeEdit("", types.DELETE_COURSE)}
                    >
                        Delete Class
                    </Form.Button>
                </Form.Group>
            </Form>
        </Container>
);

export default SelectedClassToEdit;

