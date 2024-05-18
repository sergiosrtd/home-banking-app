import { Text, TextProps } from "./Themed";

export function BlackText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: "Black" }]} />;
}

export function ExtraBoldText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: "ExtraBold" }]} />;
}

export function BoldText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: "Bold" }]} />;
}

export function SemiBoldText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: "SemiBold" }]} />;
}

export function MediumText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: "Medium" }]} />;
}

export function RegularText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: "Regular" }]} />;
}

export function LightText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: "Light" }]} />;
}

export function ExtraLightText(props: TextProps) {
  return (
    <Text {...props} style={[props.style, { fontFamily: "ExtraLight" }]} />
  );
}
