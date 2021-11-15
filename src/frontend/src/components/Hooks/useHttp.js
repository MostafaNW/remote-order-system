import axios from "axios";
import { useState } from "react";
import { useEffect } from "react/cjs/react.development";

const useHttp = (action) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);
  const fetchData = async () => {
    try {
      //console.log(`url: ${action.url}`);
      const response = await axios.get(action.url);
      //console.log(`response: ${response}`);
      setData(response.data);
      setLoading(false);
    } catch (err) {
      setError(true);
    }
  };

  const sendData = async () => {
    try {
      const response = await axios.post(action.url, action.data);
    } catch (err) {
      setError(true);
    }
  };
  useEffect(() => {
    console.log("haha hi");
    setError(false);
    switch (action.type) {
      case "GET":
        console.log("HELLO");
        fetchData();
        // fetchData();
        break;
      case "POST":
        sendData();
        break;
      default:
        break;
    }
    //console.log("HERE WE ARE HYUK")
  }, []);

  console.log(`DONE MAN HAHA loading: ${loading}`);
  //setLoading(false);
  return { loading, error, data };
};

export default useHttp;
