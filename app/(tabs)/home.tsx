import { View } from "react-native";
import Ticker from "./ticker";



export default function Home() {


  return (


    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      
     <Ticker fontSize={50} />
      
    </View>
  );
}