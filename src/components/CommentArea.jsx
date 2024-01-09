import CommentList from "./CommentList";
import Loading from "./Loading";
import Error from "./Error";
import { useEffect, useState } from "react";
import AddComment from "./AddComment";

const CommentArea = ({ asin }) => {
	/*state = {
		comments: [],
		isLoading: true,
		isError: false,
	};*/

	const [comments, setComments] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		if (asin) {
			myFetch();
		}
	}, [asin]);

	const myFetch = async () => {
		setIsLoading(true);
		try {
			let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + asin, {
				headers: {
					Authorization:
						"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTcxZDgwNzBkOGEyMDAwMThhNDhhNjIiLCJpYXQiOjE3MDQ3Mjc1MjksImV4cCI6MTcwNTkzNzEyOX0.UXY0SfVSXPUogf5KXEBRkoh-xEjKIfCnDPhSgLEpTFs",
				},
			});
			console.log(response);
			console.log(asin);
			if (response.ok) {
				let comments = await response.json();
				/*this.setState({
						comments: comments,
						isLoading: false,
						isError: false,
					});*/
				setComments(comments);
				setIsLoading(false);
				setIsError(false);
			} else {
				/*this.setState({ isLoading: false, isError: true });*/
				setIsLoading(false);
				setIsError(true);
			}
		} catch (error) {
			console.log(error);
			/*this.setState({ isLoading: false, isError: true });*/
			setIsLoading(false);
			setIsError(false);
		}
	};

	return (
		<div className="text-center">
			{isLoading && <Loading />}
			{isError && <Error />}
			<AddComment asin={asin} />
			<CommentList commentsToShow={comments} />
		</div>
	);
};

export default CommentArea;
