import { useEffect, useState } from "react";
import { RESTAURANT_MENU_URL } from "./constants";

const useResMenu = (resId) => {
  const [resData, setResData] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(RESTAURANT_MENU_URL + resId);
    const json = await data.json();
    setResData(json);
  };
  return resData;
};
export default useResMenu;
