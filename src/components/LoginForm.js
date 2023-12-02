import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

function SignInForm({ errores, callback }) {
  
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    callback({username, password})
  };

  return (
    <div>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-4" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          name="username"
          value={username}
          onChange={e=>setUsername(e.target.value)}
          placeholder="Ingrese su username"
          isInvalid={errores.username}
        />
        {errores.username && <span className="text-danger">{errores.username}</span>}
      </Form.Group>

      <Form.Group className="mb-5" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control
          type="password"          
          value={password}
          onChange={e=>setPassword(e.target.value)}
          placeholder="Ingrese su contraseña"
          isInvalid={errores.password}
        />
        {errores.password && <span className="text-danger">{errores.password}</span>}
      </Form.Group>

      <Button className="SignIn-Button" type='submit' >
        Ingresar
      </Button>
    </Form>    
  </div>
  );
}

export { SignInForm };