import { View, Text, TextProps, Button } from "react-native";
import { MotiView } from "moti";
import { useState } from "react";
const numbersToFun = [...Array(10).keys()];

type tickerListProps = {
  number: number;
  fontSize: number;
};

const Tick = ({ children, style, ...rest }: TextProps) => {
  return (
    <Text {...rest} style={style}>
      {children}
    </Text>
  );
};

const TickerList = ({ number, fontSize }: tickerListProps) => {
  return (
    <View
      style={{
        height: 50,
       

        overflow: "hidden"
      }}
    >
      <MotiView
        style={{}}
        animate={{
          translateY: -fontSize * 1.1 * number,
        }}
      >
        {numbersToFun.map((num) => {
          return (
            <Tick
              key={num}
              style={{
                fontSize,
                lineHeight: fontSize * 1.1,
                fontVariant: ["tabular-nums"],
              }}
            >
              {num}
            </Tick>
          );
        })}
      </MotiView>
    </View>
  );
};

export default function Ticker({
  fontSize = 50,
}: {
  fontSize?: number;
}) {

  const [value, setValue] = useState(0);
  const splitValue = value.toString().split("");

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={{ flexDirection: "row", gap: 10 }}>
        {splitValue.map((number, index) => (
          <TickerList
            number={parseInt(number)}
            key={index}
            fontSize={fontSize}
          />
        ))}
      </View>
      <Button title="Random" onPress={() => setValue(Math.floor(Math.random() * 1000000))} />
    </View>
  );
}
