import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const SignupView = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      Username: username,
      Password: password,
      Email: email,
      Birthday: birthday,
    };

    fetch("https://thawing-shore-57130-3839bdb5f582.herokuapp.com/users", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {"Content-Type": "application/json"}
    }).then((response) => {
      if (response.ok) {
        alert("Signup successful");
        window.location.reload();
      } else {
        alert("Signup failed");
      }
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="signupFormUsername">
        <Form.Label>Username:</Form.Label>
        <Form.Control
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
        minLength="3"
        />
      </Form.Group>
      <Form.Group contorlId="signupFormPassword">
      <Form.Label>Password:</Form.Label>
        <Form.Control 
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        />
      </Form.Group>
      
      <Form.Group controlId="signupFormEmail">
      <Form.Label>Email:</Form.Label>
        <Form.Control 
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required 
        />
      </Form.Group>
      
      <Form.Group controlId="signupFormBirthday">
      <Form.Label>Birthday:</Form.Label>
        <Form.Control 
        type="date"
        value={birthday}
        onChange={(e) => setBirthday(e.target.value)}
        required 
        />
      </Form.Group>
  
  <Button variant="primary" type="submit">Submit</Button>
</Form>
  );
};