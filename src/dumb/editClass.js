import React from 'react';
import { Segment, Header, Container, Form, Dropdown } from 'semantic-ui-react';
import { types } from "../utils/data";


const EditClass = props => {
    return (
        <Container>
            <Segment attached="top" color="blue">
                <Header as="h1">
                    Edit Class
                </Header>
            </Segment>
            <Segment attached>
            {!props.courseSelected &&
                <Form>
                    <Form.Field>
                        <label>Select a Class to Edit</label>
                        <Dropdown 
                            placeholder={props.courseOptions[0].text.toString()}
                            value={props.courseToEdit}
                            options={props.courseOptions}
                            onChange={(e, data) => props.handleChange(data.value, types.SELECT_CLASS_EDIT)}
                        />
                    </Form.Field>
                    <Form.Button
                        onClick={() => props.handleChange("", types.COURSE_SELECTED)}
                    >
                        Choose Class
                    </Form.Button>
                </Form>
            }
            {props.courseSelected &&
                <div>
                {props.renderSelectedEditCourse()}
                </div>
            }
            </Segment>
        </Container>
    );
}

export default EditClass;