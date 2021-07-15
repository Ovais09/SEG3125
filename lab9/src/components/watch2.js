import ReactStopwatch from 'react-stopwatch';
import React from "react"





const Stopwatch2 = () => (

    

    <ReactStopwatch
      seconds={0}
      minutes={0}
      hours={0}
    //   limit="00:00:10"
      onChange={({ hours, minutes, seconds }) => {
        // do something
      }}
      onCallback={() => console.log('Finish')}
      render={({hours, minutes, seconds }) => {
        return (
          <div>
            <p>
            Les heures: { hours }
            </p>
            <p>
            Minutes: { minutes }
            </p>
            <p>
            Secondes: { seconds }
            </p>
          </div>
        );
      }}
     />
  );
  
   
  export default Stopwatch2;