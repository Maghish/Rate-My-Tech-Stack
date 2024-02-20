import { useEffect, useState } from "react";

function Home() {
  const [item1, setItem1] = useState(1);
  const [item2, setItem2] = useState(2);
  const [item3, setItem3] = useState(3);
  const [item4, setItem4] = useState(10);
  const [overallRating, setOverallRating] = useState(0);

  const checkOverallRating = () => {
    let rating = (((item1/10) + (item2/10) + (item3/10) + (item4/10)) / 4) * 10
    setOverallRating(rating.toFixed(1));
  }

  useEffect(() => checkOverallRating, [])

  return (
    <>
      <p className="text-6xl">{item1}/10</p>
      <p className="text-6xl">{item2}/10</p>
      <p className="text-6xl">{item3}/10</p>
      <p className="text-6xl">{item4}/10</p>
      <p className="text-9xl">{overallRating}/10</p>
    </>
  );
}

export default Home;
