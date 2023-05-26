import React from "react";
import { Card, CardBody } from "@material-tailwind/react";
import { db } from "../utils/firebase";
import { onValue, ref } from "firebase/database";
import ReactSpeedometer from "react-d3-speedometer";

export default class CardMonitoring extends React.Component {
  constructor() {
    super();
    this.state = {
      tableData: [],
    };
  }

  componentDidMount() {
    const dbRef = ref(db, "/WaterMonitoring/stastions/");

    onValue(dbRef, (snapshot) => {
      let records = [];
      snapshot.forEach((childSnapshot) => {
        let keyname = childSnapshot.key;
        let data = childSnapshot.val();
        records.push({ key: keyname, data: data });
      });
      this.setState({ tableData: records });
    });
  }

  render() {
    return (
      <>
        <div className="pt-4 pb-4">
          {this.state.tableData.map((row) => {
            return (
              <div className="flex flex-row justify-center ">
                <div className="m-4">
                  <Card className="w-72 h-64 rounded-xl ">
                    <CardBody className="flex justify-center pt-4">
                      <div className=" items-center justify-between">
                        <div className="">
                          <div className=" font-thin text-m">Parameter</div>
                          <div className=" font-bold text-lg -mt-1 mb-2">
                            BOD
                          </div>
                        </div>
                        <hr className="mb-4"></hr>
                        <div
                          className=" justify-center items-center relative"
                          // style={{
                          //   display: "flex",
                          //   justifyContent: "center",
                          //   alignItems: "center",
                          //   position: "relative",
                          // }}
                        >
                          <ReactSpeedometer
                            maxValue={50}
                            value={row.data.BOD}
                            currentValueText={row.data.BOD + " mg/l"}
                            needleColor="red"
                            startColor="green"
                            maxSegmentLabels={10}
                            segments={5}
                            endColor="blue"
                            width={250}
                            height={150}
                          />
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </div>
                <div className="m-4">
                  <Card className="w-72 h-64 rounded-xl ">
                    <CardBody className="flex justify-center pt-4">
                      <div className=" items-center justify-between">
                        <div className="">
                          <div className=" font-thin text-m">Parameter</div>
                          <div className=" font-bold text-lg -mt-1 mb-2">
                            BOD
                          </div>
                        </div>
                        <hr className="mb-4"></hr>
                        <div
                          className=" justify-center items-center relative"
                          // style={{
                          //   display: "flex",
                          //   justifyContent: "center",
                          //   alignItems: "center",
                          //   position: "relative",
                          // }}
                        >
                          <ReactSpeedometer
                            maxValue={50}
                            value={row.data.BOD}
                            currentValueText={row.data.BOD + " mg/l"}
                            needleColor="red"
                            startColor="green"
                            maxSegmentLabels={10}
                            segments={5}
                            endColor="blue"
                            width={250}
                            height={150}
                          />
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </div>
                <div className="m-4">
                  <Card className="w-72 h-64 rounded-xl ">
                    <CardBody className="flex justify-center pt-4">
                      <div className=" items-center justify-between">
                        <div className="">
                          <div className=" font-thin text-m">Parameter</div>
                          <div className=" font-bold text-lg -mt-1 mb-2">
                            BOD
                          </div>
                        </div>
                        <hr className="mb-4"></hr>
                        <div
                          className=" justify-center items-center relative"
                          // style={{
                          //   display: "flex",
                          //   justifyContent: "center",
                          //   alignItems: "center",
                          //   position: "relative",
                          // }}
                        >
                          <ReactSpeedometer
                            maxValue={50}
                            value={row.data.BOD}
                            currentValueText={row.data.BOD + " mg/l"}
                            needleColor="red"
                            startColor="green"
                            maxSegmentLabels={10}
                            segments={5}
                            endColor="blue"
                            width={250}
                            height={150}
                          />
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}
