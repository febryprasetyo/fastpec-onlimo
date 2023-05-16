import React from "react";
import Firebase from "firebase";
import { getDatabase, ref, onValue } from "firebase/database";

const db = getDatabase();
const starCountRef = ref(db, "WaterMonitoring/");
onValue(starCountRef, (snapshot) => {
  const data = snapshot.val();
});
class CardMonitoring extends React.Component {
  // eslint-disable-next-line react/require-render-return
  render() {
    const { data_iot } = this.state;
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <h1>Firebase Development Team</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              {data_iot.map((data_iot) => (
                <div className="card-body">
                  <h5 className="card-title">{data_iot.BOD}</h5>
                  <p className="card-text">{data_iot.COD}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CardMonitoring;
