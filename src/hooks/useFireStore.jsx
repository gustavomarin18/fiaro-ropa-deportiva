import { collection, addDoc } from "firebase/firestore";

import db from "../service/firebase";

const useFireStore = () => {
  const generateOrder = async ({ datos }) => {
    try {
      const col = collection(db, "orders");
      const order = await addDoc(col, datos);
      alert("tu orden de compra es:" + order.id);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    generateOrder,
  };
};

export default useFireStore;
