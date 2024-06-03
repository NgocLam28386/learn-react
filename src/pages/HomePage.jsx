import React from 'react'
function Homepage() {
  const [count, setCount] = useState(0);
  let count = 0;
  function tang() {
    setCount(count + 1) ;
  }
  console.log(count);

  return(
  <div>
    <button className="btn btn-primary" onclick={()=> tang()}>Tang</button>
    {count}
  </div>
  );
}

export default Homepage;
