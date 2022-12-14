import { createGlobalState } from "react-hooks-global-state";

export const { setGlobalState, getGlobalState, useGlobalState } =
  createGlobalState({
    alert: { show: false, msg: "", color: "" },
    loading: { show: false, msg: "" },
    contractBank: null,
    contractToken: null,
    contractTokenAdmin : null,
    contractBankAdmin : null,
    tempVal : {
      isLoggedIn : false
    }
    // contractBankForUsers : null,
    // contractTokenForUsers : null
  });

// set alert func
export const setAlert = (msg, color = "green") => {
  setGlobalState("alert", { show: true, msg, color });
  setTimeout(() => {
    setGlobalState("alert", { show: false, msg: "", color });
    setGlobalState("loading", false);
  }, 8000);
  // after 8 seconds, make alert and loading icon unvisible
};
// set loading msg
export const setLoadingMsg = (msg) => {
  const loading = getGlobalState("loading");
  setGlobalState("loading", { ...loading, msg });
};


export const setTempVal = (val) => {
  const tempVal = getGlobalState("tempVal");
  setGlobalState("tempVal",{isLoggedIn : val})
}