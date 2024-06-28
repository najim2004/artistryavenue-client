import { useContext, useEffect, useState } from "react";
import { AuthData } from "../Context/AuthProvider";
import axios from "axios";
import { MdDelete } from "react-icons/md";
import toast, { Toaster } from "react-hot-toast";
import PropTypes from "prop-types";
const Comment = ({ id }) => {
  const { user } = useContext(AuthData);
  const [comments, setComments] = useState([]);
  const [reFetch, setReFetch] = useState(true);

  useEffect(() => {
    const getComments = async () => {
      try {
        const { data } = await axios.get(
          `https://artistryavenue-sever.vercel.app/comments/${id}`
        );
        setComments(data);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };
    getComments();
  }, [reFetch, id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const commentData = {
      name: user?.displayName,
      postId: id,
      email: user?.email,
      comment: form.comment.value,
      time: new Date(),
    };
    try {
      const { data } = await axios.post(
        "https://artistryavenue-sever.vercel.app/comments",
        commentData
      );
      if (data?.insertedId) {
        toast.success("Comment added successfully");
        setReFetch(!reFetch); // Trigger comments reload
      }
    } catch (error) {
      toast.error("Error posting comment:", error);
    } finally {
      form.reset();
    }
  };

  const handleDelete = async (commentId) => {
    try {
      const { data } = await axios.delete(
        `https://artistryavenue-sever.vercel.app/comments/${commentId}`
      );
      if (data.deletedCount > 0) {
        toast.success("Successfully Deleted!");
        setReFetch(!reFetch); // Trigger comments reload
      }
    } catch (error) {
      toast.error("Error deleting comment:", error);
    }
  };

  return (
    <div className="mx-auto p-4 rounded-md mt-6 max-w-[1000px]">
      <h2 className="text-xl font-semibold mb-4">Comments</h2>
      <div className="flex flex-col lg:flex-row gap-x-10">
        <form onSubmit={handleSubmit} className="mb-4 flex-1">
          <textarea
            className="w-full p-2 border border-gray-300 rounded-md bg-transparent h-[200px] resize-none"
            placeholder="Write a comment..."
            required
            name="comment"
          ></textarea>
          <button
            type="submit"
            className="mt-2 px-4 py-2 bg-cRed text-white rounded-md hover:bg-cRed/70"
          >
            Post Comment
          </button>
        </form>

        <div className="flex-1 overflow-y-scroll max-h-[500px] p-3">
          <ul>
            {comments?.map((comment) => (
              <li
                key={comment?._id}
                className="border-b py-2 flex justify-between"
              >
                <div>
                  <p>{comment.comment}</p>
                  <small>
                    By {comment?.name} on{" "}
                    {new Date(comment?.time).toLocaleString()}
                  </small>
                </div>
                {user?.email == comment?.email && ( // Show delete button only if user is logged in
                  <button
                    onClick={() => handleDelete(comment._id)}
                    className="text-red-600 hover:text-red-800 ml-2"
                  >
                    <MdDelete />
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Toaster />
    </div>
  );
};
Comment.propTypes = {
  id: PropTypes.string, // Post ID to fetch comments for
};
export default Comment;
