import { Link } from "react-router-dom";

const Go = ({ url, title }) => {
    return (
        <div>
            <Link to={url}>{title}</Link>
        </div>
    )
}
export default Go;