import { Card } from "react-bootstrap";
/*import CommentArea from "./CommentArea";*/

const SingleBook = (props) => {
	return (
		<>
			<Card
				onClick={() => props.changeLibroSelezionato(props.book.asin)}
				style={{ border: props.libroSelezionato === props.book.asin ? "3px solid red" : "none" }}>
				<Card.Img variant="top" src={props.book.img} />
				<Card.Body>
					<Card.Title style={{ color: "black" }}>{props.book.title}</Card.Title>
				</Card.Body>
			</Card>
		</>
	);
};

export default SingleBook;
