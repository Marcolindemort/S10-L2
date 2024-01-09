import SingleBook from "./SingleBook";
import { Col, Form, Row } from "react-bootstrap";
import CommentArea from "./CommentArea";
import { useState } from "react";

const BookList = (props) => {
	/*state = {
		searchQuery: "",
		libroSelezionato: null,
	};*/

	const [searchQuery, setSearchQuery] = useState("");
	const [libroSelezionato, setLibroSelezionato] = useState(null);

	const changeLibroSelezionato = (asin) => {
		setLibroSelezionato(asin);
	};

	return (
		<>
			<Row className="justify-content-center mt-5">
				<Col xs={12} md={4} className="text-center">
					<Form.Group>
						<Form.Control
							type="search"
							placeholder="Cerca un libro"
							value={searchQuery}
							onChange={(e) => {
								setSearchQuery(e.target.value);
							}}
						/>
					</Form.Group>
				</Col>
			</Row>
			<Row>
				<Col md={8}>
					<Row className="g-2 mt-3">
						{props.books
							.filter((b) => b.title.toLowerCase().includes(searchQuery))
							.map((b) => (
								<Col xs={12} md={6} key={b.asin}>
									<SingleBook
										book={b}
										libroSelezionato={libroSelezionato}
										changeLibroSelezionato={changeLibroSelezionato}
									/>
								</Col>
							))}
					</Row>
				</Col>
				<Col md={4}>
					<CommentArea asin={libroSelezionato} />
				</Col>
			</Row>
		</>
	);
};

export default BookList;
