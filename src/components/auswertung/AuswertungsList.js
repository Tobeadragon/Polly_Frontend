import React from "react";
import "./Auswertung.css";
import { PieChart, Pie, Tooltip, Cell } from "recharts";
import "./AuswertungsList.css";


const AuswertungsList = (props) => {

  // console.log(props.ant)
 
  const antworten = props.ant
  console.log(props.ant)
  // const antworten = ["gut", "schrecht"]
  
  const questions = props.que
  console.log(props.que)
  // const questions = "Was?"
  
  
  let count = {};
  antworten.forEach((i) => {
    count[i] = (count[i] || 0) + 1;
  });

  // console.log(count);
  
  let dataNumber = Number(Object.keys(count).length);
  // console.log(dataNumber);

  let auswahl1 = Object.keys(count)[0];
  let result1 = Number(Object.values(count)[0]);

  let auswahl2 = Object.keys(count)[1];
  let result2 = Number(Object.values(count)[1]);

  let auswahl3 = Object.keys(count)[2];
  let result3 = Number(Object.values(count)[2]);
  

  let auswahl4 = Object.keys(count)[3];
  let result4 = Number(Object.values(count)[3]);

  

  const data0 = [
    { index: 0, name: auswahl1, value: result1 },
    { index: 1, name: auswahl2, value: result2 },
    { index: 2, name: auswahl3, value: result3 },
    { index: 3, name: auswahl4, value: result4 },
  ];

  // console.log(data0);

  let data = data0.slice(0, dataNumber);
  // console.log(data);

  const auswahl0 = [
    auswahl1, result1, auswahl2, result2, auswahl3, result3, auswahl4, result4
  ]

  let auswahl = auswahl0.slice(0,dataNumber*2)
  // console.log(auswahl)

  
  
  

  const totalvoter = antworten.length;

  //Pie chart
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  //

  return (
    <div className="">
     
      <h3>{questions}</h3>
      <div className="AuswertungsContainer">
        <div>
        <h4>Total voter für diese Frage {totalvoter}</h4>   
      <ul className="liststyle">
        
      {auswahl.map((answer, i)=><li key={i}>{answer}</li>)}
      
        
        

        
        </ul>
        </div> 

        <div className="PieChart">
          <PieChart width={250} height={250}>
            <Pie
              isAnimationActive={false}
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              startAngle={90}
              endAngle={-270}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>
      </div>
    </div>
  );
};

export default AuswertungsList;
