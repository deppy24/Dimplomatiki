//Access via path /Json
//For charts: npm install Recharts

import React,{useState,useEffect} from "react";
import JsonData from './JSON FILES/JsonData.json';
import './JSON FILES/NumericJson.json';
import 'bootstrap';
import { Link } from "react-router-dom";
import './CSS FILES/tabletry.css';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    ScatterChart, Scatter,ZAxis,
    AreaChart, 
    Area,
    ReferenceArea,
    ComposedChart,
    Line
} from "recharts";




function Tabletry() {
    const DisplayData=JsonData.map(
        (info)=>{
            return(
                <tr>
                    <td>{info.id}</td>
                    <td>{info.name}</td>
                    <td>{info.date}</td>
                </tr>
            )
        }
    )
    
    const [data, setdata] = useState();

    useEffect(() => {
        const fetchDatas = async () => {
          const res = await fetch("https://api.coincap.io/v2/assets/?limit=20");
          const data = await res.json();
          console.log(data);
          setdata(data?.data);
        };
        fetchDatas();
    }, []);
    
    const DisplayData56=JsonData;
    
    return(
        <div>
            <h1 className="h1">Json Data parse and perform in table view</h1>
            <table className="jsontable">
                <thead>
                    <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {DisplayData}
                </tbody>
            </table> 

            <br/><h1 className="h1">Api Data parse convert to json and perform in charts </h1>
            <ResponsiveContainer width="100%" height={400}>
                <BarChart
                    data={data}
                    margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                    }}
                    
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="name" fill="#8884d8" />
                    <Bar dataKey="priceUsd" fill="#82ca9d" />
                </BarChart>
            
                <br /><h1 className="h1">Json Data parse perform in Area Chart</h1>
                <AreaChart
                    data={DisplayData56}
                    margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="age" stroke="#8884d8" fill="#8884d8" />
                </AreaChart>
                <br /><h1 className="h1">Json Data parse perform in Scatter Chart</h1>
                <ScatterChart 
                    width={730} 
                    height={250}
                    margin={{ top: 20, right: 20, bottom: 10, left: 10 }}
                >
                    <XAxis dataKey="age" type="number" name="AGE" unit="cm" />
                    <YAxis dataKey="id" type="number" name="ID" unit="kg" />
                    <ZAxis dataKey="name" type="string"  name="NAME" unit="km" />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                    <Legend />
                    <Scatter name="AGE" data={DisplayData56} fill="#8884d8" />
                    <Scatter name="ID" data={DisplayData56} fill="#82ca9d" />
                    <ReferenceArea x1={150} x2={180} y1={200} y2={300} stroke="red" strokeOpacity={0.3} />
                </ScatterChart>

                <br /><h1 className="h1">Json Data parse perform in Vertical Composed Chart</h1>
                <ComposedChart
                    layout="vertical"
                    width={500}
                    height={400}
                    data={DisplayData56}
                    margin={{
                        top: 20,
                        right: 20,
                        bottom: 20,
                        left: 20,
                    }}
                    >
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis type="number" />
                    <YAxis dataKey="name" type="category" scale="band" />
                    <Tooltip />
                    <Legend />
                    <Area dataKey="age" fill="#8884d8" stroke="#8884d8" />
                    <Bar dataKey="id" barSize={20} fill="#413ea0" />
                    <Line dataKey="id" stroke="#ff7300" />
                </ComposedChart>


            </ResponsiveContainer>


        </div>
     
    )
}

export default Tabletry


//https://recharts.org/en-US/examples/SimpleScatterChart
