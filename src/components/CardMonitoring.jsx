import React from "react";
import { Card, CardBody } from "@material-tailwind/react";
import { db } from "../utils/firebase";
import { onValue, ref } from "firebase/database";
import ReactSpeedometer from "react-d3-speedometer";
import Moment from "react-moment";

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
        <div className="ss">
          {this.state.tableData.map((row) => {
            return (
              <>
                <div class="bg-gray-100 py-[-30px]">
                  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    {" "}
                    <div class="mx-auto max-w-2xl sm:py-4 lg:max-w-none lg:py-4 mt-4 justify-center items-center flex ">
                      <div class="lg:grid lg:grid-cols-4 lg:gap-x-6 lg:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:space-y-0 sm:gap-y-5 grid gap-4 ">
                        {/* ----- TEMP ----- */}
                        <div class="group relative ">
                          <Card className="w-72 h-64 rounded-xl ">
                            <CardBody className="flex justify-center pt-4">
                              <div className=" items-center justify-between">
                                <div className="">
                                  <div className=" font-thin text-m">
                                    Parameter
                                  </div>
                                  <div className=" font-bold text-lg -mt-1 mb-2">
                                    Suhu
                                  </div>
                                </div>
                                <hr className="mb-4"></hr>
                                <div className=" justify-center items-center relative">
                                  <ReactSpeedometer
                                    maxValue={50}
                                    value={row.data.Temperature}
                                    currentValueText={
                                      row.data.Temperature + " \u00B0C"
                                    }
                                    needleColor="red"
                                    startColor="green"
                                    maxSegmentLabels={10}
                                    segments={5}
                                    endColor="blue"
                                    width={250}
                                    height={160}
                                  />
                                </div>
                              </div>
                            </CardBody>
                          </Card>
                        </div>
                        {/* ----- pH ----- */}
                        <div class="group relative">
                          <Card className="w-72 h-64 rounded-xl ">
                            <CardBody className="flex justify-center pt-4">
                              <div className=" items-center justify-between">
                                <div className="">
                                  <div className=" font-thin text-m">
                                    Parameter
                                  </div>
                                  <div className=" font-bold text-lg -mt-1 mb-2">
                                    BOD
                                  </div>
                                </div>
                                <hr className="mb-4"></hr>
                                <div className=" justify-center items-center relative">
                                  <ReactSpeedometer
                                    maxValue={14}
                                    value={row.data.PH}
                                    currentValueText={row.data.PH + " pH"}
                                    needleColor="red"
                                    startColor="green"
                                    maxSegmentLabels={10}
                                    segments={5}
                                    endColor="blue"
                                    width={250}
                                    height={160}
                                  />
                                </div>
                              </div>
                            </CardBody>
                          </Card>
                        </div>
                        {/* ----- TDS ----- */}
                        <div class="group relative">
                          <Card className="w-72 h-64 rounded-xl ">
                            <CardBody className="flex justify-center pt-4">
                              <div className=" items-center justify-between">
                                <div className="">
                                  <div className=" font-thin text-m">
                                    Parameter
                                  </div>
                                  <div className=" font-bold text-lg -mt-1 mb-2">
                                    TDS
                                  </div>
                                </div>
                                <hr className="mb-4"></hr>
                                <div className=" justify-center items-center relative">
                                  <ReactSpeedometer
                                    maxValue={1000}
                                    value={row.data.TDS}
                                    currentValueText={row.data.TDS + " mg/L"}
                                    needleColor="red"
                                    startColor="green"
                                    maxSegmentLabels={10}
                                    segments={5}
                                    endColor="blue"
                                    width={250}
                                    height={160}
                                  />
                                </div>
                              </div>
                            </CardBody>
                          </Card>
                        </div>
                        {/* ----- NH3-N ----- */}
                        <div class="group relative">
                          <Card className="w-72 h-64 rounded-xl ">
                            <CardBody className="flex justify-center pt-4">
                              <div className=" items-center justify-between">
                                <div className="">
                                  <div className=" font-thin text-m">
                                    Parameter
                                  </div>
                                  <div className=" font-bold text-lg -mt-1 mb-2">
                                    Ammonia
                                  </div>
                                </div>
                                <hr className="mb-4"></hr>
                                <div className=" justify-center items-center relative">
                                  <ReactSpeedometer
                                    maxValue={100}
                                    value={row.data.NH3N}
                                    currentValueText={row.data.NH3N + " mg/L"}
                                    needleColor="red"
                                    startColor="green"
                                    maxSegmentLabels={10}
                                    segments={5}
                                    endColor="blue"
                                    width={250}
                                    height={160}
                                  />
                                </div>
                              </div>
                            </CardBody>
                          </Card>
                        </div>
                        {/* ----- TSS ----- */}
                        <div class="group relative ">
                          <Card className="w-72 h-64 rounded-xl ">
                            <CardBody className="flex justify-center pt-4">
                              <div className=" items-center justify-between">
                                <div className="">
                                  <div className=" font-thin text-m">
                                    Parameter
                                  </div>
                                  <div className=" font-bold text-lg -mt-1 mb-2">
                                    TSS
                                  </div>
                                </div>
                                <hr className="mb-4"></hr>
                                <div className=" justify-center items-center relative">
                                  <ReactSpeedometer
                                    maxValue={500}
                                    value={row.data.TSS}
                                    currentValueText={row.data.TSS + " mg/L"}
                                    needleColor="red"
                                    startColor="green"
                                    maxSegmentLabels={10}
                                    segments={5}
                                    endColor="blue"
                                    width={250}
                                    height={160}
                                  />
                                </div>
                              </div>
                            </CardBody>
                          </Card>
                        </div>
                        {/* ----- Turbidity ----- */}
                        <div class="group relative">
                          <Card className="w-72 h-64 rounded-xl ">
                            <CardBody className="flex justify-center pt-4">
                              <div className=" items-center justify-between">
                                <div className="">
                                  <div className=" font-thin text-m">
                                    Parameter
                                  </div>
                                  <div className=" font-bold text-lg -mt-1 mb-2">
                                    Turbidity
                                  </div>
                                </div>
                                <hr className="mb-4"></hr>
                                <div className=" justify-center items-center relative">
                                  <ReactSpeedometer
                                    maxValue={1000}
                                    value={row.data.Turbidity}
                                    currentValueText={
                                      row.data.Turbidity + " NTU"
                                    }
                                    needleColor="red"
                                    startColor="green"
                                    maxSegmentLabels={10}
                                    segments={5}
                                    endColor="blue"
                                    width={250}
                                    height={160}
                                  />
                                </div>
                              </div>
                            </CardBody>
                          </Card>
                        </div>
                        {/* ----- DO ----- */}
                        <div class="group relative">
                          <Card className="w-72 h-64 rounded-xl ">
                            <CardBody className="flex justify-center pt-4">
                              <div className=" items-center justify-between">
                                <div className="">
                                  <div className=" font-thin text-m">
                                    Parameter
                                  </div>
                                  <div className=" font-bold text-lg -mt-1 mb-2">
                                    DO
                                  </div>
                                </div>
                                <hr className="mb-4"></hr>
                                <div className=" justify-center items-center relative">
                                  <ReactSpeedometer
                                    maxValue={15}
                                    value={row.data.DO}
                                    currentValueText={row.data.DO + " mg/L"}
                                    needleColor="red"
                                    startColor="green"
                                    maxSegmentLabels={10}
                                    segments={5}
                                    endColor="blue"
                                    width={250}
                                    height={160}
                                  />
                                </div>
                              </div>
                            </CardBody>
                          </Card>
                        </div>
                        {/* ----- NO3 ----- */}
                        <div class="group relative">
                          <Card className="w-72 h-64 rounded-xl ">
                            <CardBody className="flex justify-center pt-4">
                              <div className=" items-center justify-between">
                                <div className="">
                                  <div className=" font-thin text-m">
                                    Parameter
                                  </div>
                                  <div className=" font-bold text-lg -mt-1 mb-2">
                                    Nitrat
                                  </div>
                                </div>
                                <hr className="mb-4"></hr>
                                <div className=" justify-center items-center relative">
                                  <ReactSpeedometer
                                    maxValue={50}
                                    value={row.data.NO3}
                                    currentValueText={row.data.NO3 + " mg/L"}
                                    needleColor="red"
                                    startColor="green"
                                    maxSegmentLabels={10}
                                    segments={5}
                                    endColor="blue"
                                    width={250}
                                    height={160}
                                  />
                                </div>
                              </div>
                            </CardBody>
                          </Card>
                        </div>
                        {/* ----- COD ----- */}
                        <div class="group relative ">
                          <Card className="w-72 h-64 rounded-xl ">
                            <CardBody className="flex justify-center pt-4">
                              <div className=" items-center justify-between">
                                <div className="">
                                  <div className=" font-thin text-m">
                                    Parameter
                                  </div>
                                  <div className=" font-bold text-lg -mt-1 mb-2">
                                    COD
                                  </div>
                                </div>
                                <hr className="mb-4"></hr>
                                <div className=" justify-center items-center relative">
                                  <ReactSpeedometer
                                    maxValue={500}
                                    value={row.data.COD}
                                    currentValueText={row.data.COD + " mg/L"}
                                    needleColor="red"
                                    startColor="green"
                                    maxSegmentLabels={10}
                                    segments={5}
                                    endColor="blue"
                                    width={250}
                                    height={160}
                                  />
                                </div>
                              </div>
                            </CardBody>
                          </Card>
                        </div>
                        {/* ----- BOD ----- */}
                        <div class="group relative">
                          <Card className="w-72 h-64 rounded-xl ">
                            <CardBody className="flex justify-center pt-4">
                              <div className=" items-center justify-between">
                                <div className="">
                                  <div className=" font-thin text-m">
                                    Parameter
                                  </div>
                                  <div className=" font-bold text-lg -mt-1 mb-2">
                                    BOD
                                  </div>
                                </div>
                                <hr className="mb-4"></hr>
                                <div className=" justify-center items-center relative">
                                  <ReactSpeedometer
                                    maxValue={60}
                                    value={row.data.BOD}
                                    currentValueText={row.data.BOD + " mg/L"}
                                    needleColor="red"
                                    startColor="green"
                                    maxSegmentLabels={10}
                                    segments={5}
                                    endColor="blue"
                                    width={250}
                                    height={160}
                                  />
                                </div>
                              </div>
                            </CardBody>
                          </Card>
                        </div>
                        {/* ----- Level ----- */}
                        <div class="group relative">
                          <Card className="w-72 h-64 rounded-xl ">
                            <CardBody className="flex justify-center pt-4">
                              <div className=" items-center justify-between">
                                <div className="">
                                  <div className=" font-thin text-m">
                                    Parameter
                                  </div>
                                  <div className=" font-bold text-lg -mt-1 mb-2">
                                    Kedalaman
                                  </div>
                                </div>
                                <hr className="mb-4"></hr>
                                <div className=" justify-center items-center relative">
                                  <ReactSpeedometer
                                    maxValue={1}
                                    value={row.data.waterLevel}
                                    currentValueText={
                                      row.data.waterLevel + " m"
                                    }
                                    needleColor="red"
                                    startColor="green"
                                    maxSegmentLabels={10}
                                    segments={5}
                                    endColor="blue"
                                    width={250}
                                    height={160}
                                  />
                                </div>
                              </div>
                            </CardBody>
                          </Card>
                        </div>
                        {/* ----- Total Phosphorus ----- */}
                        <div class="group relative">
                          <Card className="w-72 h-64 rounded-xl ">
                            <CardBody className="flex justify-center pt-4">
                              <div className=" items-center justify-between">
                                <div className="">
                                  <div className=" font-thin text-m">
                                    Parameter
                                  </div>
                                  <div className=" font-bold text-lg -mt-1 mb-2">
                                    Total Phosphorus
                                  </div>
                                </div>
                                <hr className="mb-4"></hr>
                                <div className=" justify-center items-center relative">
                                  <ReactSpeedometer
                                    maxValue={50}
                                    value={0}
                                    currentValueText={"0 mg/L"}
                                    needleColor="red"
                                    startColor="green"
                                    maxSegmentLabels={10}
                                    segments={5}
                                    endColor="blue"
                                    width={250}
                                    height={160}
                                  />
                                </div>
                              </div>
                            </CardBody>
                          </Card>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </>
    );
  }
}
