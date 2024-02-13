import { useEffect, useState, useRef } from "react";
import ky from "ky";

const Home = () => {
  const [change, setChange] = useState({
    toggleee: false,
    people: null,
  });

  const [val, setVal] = useState(false);

  //   const [color, setColor] = useState("Red");
  const divRef = useRef(null);

  useEffect(() => {
    const data = async () => {
      console.log("RUNNING ");
      const randMF = await ky.get("https://randomuser.me/api").json();
      // const jsonData = randMF.json();
      console.log(randMF);
      setChange((prev) => {
        return {
          ...prev,
          people: {
            first: randMF.results[0].name.first,
            last: randMF.results[0].name.last,
          },
        };
      });
    };
    data();
  }, [val]);

  //   useEffect(() => {
  //     divRef.current.style.backgroundColor = color;
  //   }, [color]);

  //   const colorChange = () => {
  //     setColor(() => (color === "Red" ? "Blue" : "Red"));
  //   };

  const valChange = () => {
    setVal(!val);
  };

  return (
    <>
      <div className="card" ref={divRef}>
        <div>
          <button
            onClick={() =>
              setChange((prev) => {
                return { ...prev, toggleee: !prev.toggleee };
              })
            }
          >
            {change.toggleee ? "ON" : "OFF"}
          </button>
        </div>
        <div>{change.toggleee ? <p>ZINDA BANDA HOOOOO</p> : null}</div>
        {change.people && (
          <>
            <div className="">
              <p>First Name: {change.people.first}</p>
              <p>Last Name: {change.people.last}</p>
              <button onClick={valChange}>Random person</button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Home;
