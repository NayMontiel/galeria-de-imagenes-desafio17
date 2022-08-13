import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col} from 'react-bootstrap';


const Cards = (props) => {
    return (
        <>
            <Container className=' d-flex'>
                <Row className=' justify-content-center px-4'>

                    <Col className='g-2 p-1'>
                        <Card className='cards mb-1'>
                            <Card.Img className='card-img' variant="top" src={props.img} />
                            <Card.Body>
                                <Card.Title>{props.title}</Card.Title>
                                <Card.Text>{props.text}</Card.Text>
                                <Button variant="secondary">Info</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </>

    )
}

export default Cards