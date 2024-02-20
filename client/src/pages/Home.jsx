import { useEffect, useState } from "react";

function Home() {
  const [item1, setItem1] = useState(0);
  const [item2, setItem2] = useState(0);
  const [item3, setItem3] = useState(0);
  const [item4, setItem4] = useState(0);
  const [overallRating, setOverallRating] = useState(0);

  const checkOverallRating = () => {
    let rating = (((item1/10) + (item2/10) + (item3/10) + (item4/10)) / 4) * 10
    setOverallRating(rating.toFixed(1));
  }

  return (
    <div className="flex flex-col">
      <input className="w-20" onChange={(e) => {setItem1(Number(e.target.value))}}></input>
      <input className="w-20" onChange={(e) => {setItem2(Number(e.target.value))}}></input>
      <input className="w-20" onChange={(e) => {setItem3(Number(e.target.value))}}></input>
      <input className="w-20" onChange={(e) => {setItem4(Number(e.target.value))}}></input>
      <button className="w-20" onClick={checkOverallRating}>Check Overall Rating</button>
      <p className="text-4xl">{overallRating}/10</p>
    </div>
  );
}

export default Home;
