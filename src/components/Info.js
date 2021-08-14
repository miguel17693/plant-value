


function Info({price,dailyLE}) {
  return (
      <div>
          <h4> Info about your plant: </h4>
          <p> The selling price is {price} </p>
          <p> It generates {dailyLE} LE daily</p>
          <p> In {price *100/dailyLE} days you have your inversion back.</p>
      </div>
  );
}

export default Info;
