import React from "react";
import Navigator from "../../components/Navigator";
import { Form, Button } from "react-bootstrap";
const AddTeams = () => {
  return (
    <>
      <Navigator></Navigator>
      <p className="title">Use This form to Add a New Team</p>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Team Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Team Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCoach">
          <Form.Label>Coach</Form.Label>
          <Form.Control type="text" placeholder="Enter Coah Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicChampionships">
          <Form.Label>Championships</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Number of championships"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicFlag">
          <Form.Label>Flag</Form.Label>
          <Form.Control type="file" placeholder="Select File" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Add Team
        </Button>
      </Form>
    </>
  );
};

export default AddTeams;
