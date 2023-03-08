import React from "react";

export default function FilterVideo (props){
    const {data, component, category} = props;
    const Popular = category[0]
    const New = category[1]
    data['children'] = component;
    if(data.views > 1000){
      return <Popular props={data}/>
    } if (data.views <100){
        return <New props={data}/>
    }





}