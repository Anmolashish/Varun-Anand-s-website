import { PropTypes } from "prop-types";

export default function PoemsCalling(props) {
  return (
    <div className="poems">
      <div className="poem-heading">{props.heading} </div>
      <div className="description">{props.description}</div>
    </div>
  );
}

PoemsCalling.propTypes = {
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
