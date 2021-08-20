


function Info({plantsStatus}) {
console.log(plantsStatus)
  let maxDaily = {dailyLe:0};
  let lessDaysRecover = {};
  plantsStatus.forEach(plantStatus =>{
    if (plantStatus.dailyLe > maxDaily.dailyLe) {
      maxDaily = plantStatus;
     
    }
    if (!lessDaysRecover.price ||( plantsStatus.price *100/plantsStatus.dailyLe) > (lessDaysRecover.price *100/lessDaysRecover.dailyLe)) {
      lessDaysRecover = plantStatus;

    }

  });

  return (
      <div>
         <h2> I've analyzed <b> {plantsStatus.length} plants</b>  </h2>
          <h3> Plant with Maximum LE per day:  </h3>
          <p> ID : <b> {maxDaily.id}</b></p>
          <p>Wining <b> {maxDaily.dailyLe}</b> per day </p>
          <h3> Plant with less days to return your invest:  </h3>
          <p> ID : <b> {lessDaysRecover.id}</b></p>
          <p> In only <b> {  lessDaysRecover.price *100/lessDaysRecover.dailyLe}</b> days you've got your investment returned </p>
          <p className="message">*This info has being calculated without pots, crows or anything, only the data copied, 
          Le /hour *24 *30</p>
      </div>
  );
}

export default Info;
