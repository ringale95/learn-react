import { useState } from "react";
import { FcLike } from "react-icons/fc";
import { CiHeart } from "react-icons/ci";

interface LikeProps {
    onClick: () => void
}
const Like = ({ onClick }: LikeProps) => {
    const [state, setState] = useState(false);
    const handleClick = () => {
        setState(!state);
        onClick();
    }


    if (state) return <FcLike onClick={handleClick} />;
    return <CiHeart onClick={handleClick} />;
};

export default Like;
