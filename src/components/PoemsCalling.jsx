import { PropTypes } from "prop-types";

export default function PoemsCalling(props) {
  return (
    <div className="poems">
      <div className="poem-heading">{props.heading} </div>
      <div className="description">{props.description}</div>
      <div className="read-poem">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          height="15px"
          width="15px"
          className="icon writting-icon"
        >
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="1.5"
            stroke="#292D32"
            d="M8.91016 19.9201L15.4302 13.4001C16.2002 12.6301 16.2002 11.3701 15.4302 10.6001L8.91016 4.08008"
          ></path>
        </svg>
      </div>
    </div>
  );
}

PoemsCalling.propTypes = {
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
