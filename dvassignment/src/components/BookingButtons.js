import Button from 'react-bootstrap/Button';

function Buttons(props) {
  return (
    <>
      <Button variant="danger">{props.text}</Button>{' '}
    </>
  );
}

export default Buttons;