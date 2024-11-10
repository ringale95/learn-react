import { useState } from "react";

const Bugs = () => {
  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1" },
    { id: 2, title: "Bug 2" },
    { id: 3, title: "Bug 3" },
  ]);

    const handleClick = () => {
        console.log(bugs);
      setBugs(bugs.map((bug) => bug.id === 1 ? { ...bug, title: 'Bug 1 updated' } : bug));
      console.log(bugs);
  };
    return (
      <div>
        <button onClick={handleClick}>Click Me!</button>
      </div>
    );
};

export default Bugs;
