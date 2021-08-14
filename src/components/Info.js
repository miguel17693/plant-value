


function Info({price,dailyLE}) {
  return (
      <div>
          <h4> Info about your plant: </h4>
          <p> The selling price is <b> {price}</b> </p>
          <p> It generates<b> {dailyLE}</b> LE daily</p>
          <p> In <b>{price *100/dailyLE}</b> days you have your inversion back.</p>
          <p class="message">*This info has being calculated without pots, crows or anything, only the data copied, 
          Le /hour *24 *30</p>
      </div>
  );
}

export default Info;
