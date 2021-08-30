


function Info({plantsStatus}) {
console.log(plantsStatus)
  let maxDaily = {dailyLe:0};
  let lessDaysRecover = {};
  plantsStatus.forEach(plantStatus =>{
    if (plantStatus.dailyLe > maxDaily.dailyLe) {
      maxDaily = plantStatus;
     
    }
    if (!lessDaysRecover.price ||( plantStatus.price *100/plantStatus.dailyLe) < (lessDaysRecover.price *100/lessDaysRecover.dailyLe)) {
      console.log("he entrado aquí porque" );
      console.log(plantsStatus)
      console.log(lessDaysRecover)
      console.log( plantsStatus.price *100/plantsStatus.dailyLe);
      console.log(`plant status price ${plantsStatus.price} plant status daily ${plantsStatus.dailyLe}. `)
      console.log(`lessDaysRecover price ${lessDaysRecover.price} lessDaysRecover daily ${lessDaysRecover.dailyLe}. `)
      console.log("es mayor que ");
      console.log(lessDaysRecover.price *100/lessDaysRecover.dailyLe)
      console.log("---------------");
      lessDaysRecover = plantStatus;

    }

  });

  return (
      <div>
         <h2> He analizado <b> {plantsStatus.length} plantas</b>  </h2>
          <h3> Planta con más LE generados por día:  </h3>
          <p> ID : <b> {maxDaily.id}</b></p>
          <p>Ganando <b> {maxDaily.dailyLe}</b> LE cada día </p>
          <h3> Planta con menos días para recuperar tu inversión </h3>
          <p> ID : <b> {lessDaysRecover.id}</b></p>
          <p> En sólo <b> {  lessDaysRecover.price *100/lessDaysRecover.dailyLe}</b> días has recuperado tu inversión </p>
          <p>Ganando <b> {lessDaysRecover.dailyLe}</b> LE cada día </p>
          <p className="message">*Esta información se genera sin macetas, cuervos ni nada, sólo calculado con los datos copiados 
          LE cada hora:  *24 *30</p>
      </div>
  );
}

export default Info;
