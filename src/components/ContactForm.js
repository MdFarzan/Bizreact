import { FloatingLabel } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function ContactForm() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="name">
        <Form.Control type="name" placeholder="Enter Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="email">
        <Form.Control type="email" placeholder="Email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="contact">
        <Form.Control type="tel" placeholder="Contact no." />
      </Form.Group>

      <Form.Group className="mb-3" controlId="subject">
        <Form.Control type="text" placeholder="We will talk about ..." />
      </Form.Group>
        
      <FloatingLabel controlId="message" label="Message">
        <Form.Control
          as="textarea"
          placeholder="Any message"
          style={{ height: '100px' }}
        />
      </FloatingLabel>
      
      <Button variant="primary" className="mt-3" type="submit">
        Submit
      </Button>
    </Form>
  );
}

