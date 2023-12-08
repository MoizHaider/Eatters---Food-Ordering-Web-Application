import {initializeApp} from "firebase/app";
import {getAuth, connectAuthEmulator} from "firebase/auth";

const app = initializeApp({
    apiKey: process.env._Api_Key,
  authDomain: process.env._AuthDomain,
  projectId: process.env._ProjectId,
  storageBucket: process.env._StorageBucket,
  messagingSenderId: process.env.React_APP_MessagingSenderId,
  appId: process.env.React_APP_AppId
});

export const auth = getAuth(app);
connectAuthEmulator(auth, "http://localhost:9099");
export default app;