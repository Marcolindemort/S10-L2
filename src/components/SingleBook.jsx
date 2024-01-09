import { Card } from "react-bootstrap";
/*import CommentArea from "./CommentArea";*/

const SingleBook = ({ changeLibroSelezionato, book, libroSelezionato }) => {
	return (
		<>
			<Card
				onClick={() => changeLibroSelezionato(book.asin)}
				style={{ border: libroSelezionato === book.asin ? "3px solid red" : "none" }}>
				<Card.Img variant="top" src={book.img} />
				<Card.Body>
					<Card.Title style={{ color: "black" }}>{book.title}</Card.Title>
				</Card.Body>
			</Card>
		</>
	);
};

export default SingleBook;
