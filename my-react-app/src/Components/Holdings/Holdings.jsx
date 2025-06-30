import React from 'react';
import BasicTable from '../Table/BasicTable';

export default function Holdings() {
    const holdingData=[{
        "Instrument":"ADANIREET",
        "avg_cost":2319.75,
        "day_chg":0,
        "net_chg":320
    },{
        "Instrument":"ADANIREET",
        "avg_cost":2319.75,
        "day_chg":0,
        "net_chg":320
    },{
        "Instrument":"ADANIREET",
        "avg_cost":2319.75,
        "day_chg":0,
        "net_chg":320
    }]
    holdingData.map(function(index,newArray){
        return{
            
        }
    })
  return (
    // Component content
    <div>
        <BasicTable />
    </div>
  );
}
