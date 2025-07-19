import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { dataUpdate } from "../../redux/slices/updateDataSlice";
const DataUpdation = () => {
  const count = useSelector((state) => state.updateData.dataSet);
  console.log(count);
  const dispatch = useDispatch();
  async function updateData() {
    const url = await axios.get("https://jsonplaceholder.typicode.com/posts");
    const res = url.data;
    //console.log(res);
    dispatch(dataUpdate(res));
  }
  return (
    <div>
      <div>
        <button onClick={updateData}>Reset</button>
        {count.map((e) => {
          return <>{e.title}</>;
        })}
      </div>
    </div>
  );
};

export default DataUpdation;
