import ReactTable from 'react-table'
import React from 'react';
import { Segment, Header, Container } from 'semantic-ui-react'


const ClassesTable = props => {

        return (
                <Container fluid>
                    <Segment color="blue" attached="top">
                        <Header as="h1">Current Classes</Header>
                    </Segment>
                    <Segment attached>
                        <ReactTable
                            className="-striped"
                            data={props.data}
                            columns={props.columns}
                        />
                    </Segment>
                </Container>
            )
}

export default ClassesTable;
