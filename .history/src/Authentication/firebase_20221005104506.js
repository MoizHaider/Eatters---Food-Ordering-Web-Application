import {initializeApp} from "firebase/app";
import {getAuth, connectAuthEmulator} from "firebase/auth";

const app = initializeApp({
    apiKey: process.env.REACT_APP_Api_Key,
  authDomain: process.env.REACT_APP_AuthDomain,
  projectId: process.env.REACT_APP_ProjectId,
  storageBucket: process.env.REACT_APP_StorageBucket,
  messagingSenderId: process.env.React_APP_MessagingSenderId,
  appId: process.env.React_APP_AppId
});

export const auth = getAuth(app);
connectAuthEmulator(auth, "http://localhost:9099");
export default app;