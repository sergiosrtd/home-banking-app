import {
  Dimensions,
  ScrollView,
  StyleSheet,
  View,
  Animated,
  Image,
  ImageBackground,
} from "react-native";

import {
  BoldText,
  MediumText,
  RegularText,
  SemiBoldText,
} from "@/components/StyledText";
import { AntDesign } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import ReAnimated, { FadeInUp } from "react-native-reanimated";
import { useRef } from "react";
import { LinearGradient } from "expo-linear-gradient";
import VisaIcon from "@/components/Icons/VisaIcon";
const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;
const imagenes = [
  {
    id: Math.random(),
    background: require("@/assets/images/card-blue.png"),
    simIcon: require("@/assets/images/sim-gradient.png"),
    textColor: "#fff",
    amount: "₲ 89.201",
    last4Numbers: "3882",
  },
  {
    id: Math.random(),
    background: require("@/assets/images/card-gray.png"),
    simIcon: require("@/assets/images/sim.png"),
    textColor: "#606677",
    amount: "₲ 1.209.000",
    last4Numbers: "0904",
  },
];
const ANCHO_CONTENEDOR = width * 0.6;
const CARD_WIDTH = ANCHO_CONTENEDOR * 0.9;
const CARD_HEIGHT = ANCHO_CONTENEDOR * 1.2;

export default function TabOneScreen() {
  const scrollX = useRef(new Animated.Value(0)).current;
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ReAnimated.View
        entering={FadeInUp}
        style={[
          {
            height: 100,
            backgroundColor: "#3BB6BE",
            width: "100%",
            borderTopLeftRadius: 30,
          },
          styles.link,
        ]}
      >
        <MediumText style={styles.linkText}>Ingresar</MediumText>
        <MediumText style={styles.linkText}>
          + ₲ 7.025.058 <AntDesign name="right" size={12} color="white" />
        </MediumText>
      </ReAnimated.View>
      <ReAnimated.View
        entering={FadeInUp}
        style={[
          {
            height: 100,
            backgroundColor: "#61259F",
            width: "100%",
            borderTopLeftRadius: 30,
            marginTop: -35,
          },
          styles.link,
        ]}
      >
        <MediumText style={styles.linkText}>Gastos</MediumText>
        <MediumText style={styles.linkText}>
          - ₲ 5.903.213 <AntDesign name="right" size={12} color="white" />
        </MediumText>
      </ReAnimated.View>
      <ReAnimated.View
        entering={FadeInUp}
        style={[
          {
            height: 100,
            backgroundColor: "#E2066D",
            width: "100%",
            borderTopLeftRadius: 30,
            marginTop: -35,
          },
          styles.link,
        ]}
      >
        <MediumText style={styles.linkText}>Préstamos</MediumText>
        <MediumText style={styles.linkText}>
          ₲ 2.300.000 <AntDesign name="right" size={12} color="white" />
        </MediumText>
      </ReAnimated.View>
      <ReAnimated.View
        entering={FadeInUp}
        style={{
          flex: 1,
          backgroundColor: "#fff",
          width: "100%",
          borderTopLeftRadius: 30,
          flexDirection: "column",
          gap: 10,
          marginTop: -35,
          paddingTop: 38,
          paddingBottom: 100,
        }}
      >
        <View style={{ width: "100%", paddingHorizontal: 38 }}>
          <MediumText style={{ color: "#60708F", fontSize: 16 }}>
            CUENTAS
          </MediumText>

          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View style={{ flexDirection: "column", gap: 10 }}>
              <MediumText
                style={{
                  fontSize: 16,
                  color: Colors.light.tint,
                }}
              >
                Cuenta de ahorro
              </MediumText>
              <RegularText
                style={{
                  fontSize: 16,
                  color: "#60708F",
                }}
              >
                487112311
              </RegularText>
            </View>
            <View style={{ flexDirection: "column", gap: 10 }}>
              <MediumText
                style={{
                  fontSize: 16,
                  color: "#222222",
                }}
              >
                ₲ 3.079.210
              </MediumText>
              <RegularText
                style={{
                  fontSize: 12,
                  color: "#60708F",
                }}
              >
                Saldo disponible
              </RegularText>
            </View>
          </View>
          <View
            style={{
              marginVertical: 20,
              width: "100%",
              height: 0.5,
              backgroundColor: "#60708F",
            }}
          ></View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <MediumText style={{ color: "#60708F", fontSize: 16 }}>
              MIS TARJETAS
            </MediumText>
            <AntDesign name="right" size={16} color="#60708F" />
          </View>
        </View>
        <Animated.FlatList
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: true }
          )}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          contentContainerStyle={{
            paddingLeft: 38,
            paddingRight: ANCHO_CONTENEDOR / 1.8,
          }}
          snapToInterval={ANCHO_CONTENEDOR}
          decelerationRate={0}
          data={imagenes}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => {
            const inputRange = [
              (index - 1) * ANCHO_CONTENEDOR,
              index * ANCHO_CONTENEDOR,
              (index + 1) * ANCHO_CONTENEDOR,
            ];

            const cardScale = scrollX.interpolate({
              inputRange,
              outputRange: [0.8, 1, 0.8],
            });
            const titleOpacity = scrollX.interpolate({
              inputRange,
              outputRange: [0, 1, 0],
            });

            const cardMargin = scrollX.interpolate({
              inputRange,
              outputRange: [
                -(CARD_HEIGHT * 0.25) / 2,
                0,
                -(CARD_HEIGHT * 0.25) / 2,
              ],
            });
            return (
              <View
                style={{
                  width: ANCHO_CONTENEDOR,
                }}
              >
                <Animated.View
                  style={{
                    flexDirection: "column",
                    opacity: titleOpacity,
                    marginBottom: 10,
                    transform: [{ scaleY: titleOpacity }],
                  }}
                >
                  <RegularText
                    style={{
                      color: "#121212",
                      fontSize: 12,
                    }}
                  >
                    Línea de crédito
                  </RegularText>
                  <SemiBoldText
                    style={{
                      color: "#121212",
                      fontSize: 24,
                    }}
                  >
                    ₲ 2.000.000
                  </SemiBoldText>
                </Animated.View>
                <Animated.View
                  style={[
                    styles.card,
                    {
                      transform: [
                        { scale: cardScale },
                        { translateY: cardMargin },
                      ],
                    },
                  ]}
                >
                  <ImageBackground
                    style={{
                      flex: 1,
                      padding: 30,
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                    resizeMode="cover"
                    source={item.background}
                  >
                    <Image style={{ height: 30 }} source={item.simIcon} />
                    <View style={{ flexDirection: "column", gap: 10 }}>
                      <RegularText
                        style={{ color: item.textColor, fontSize: 12 }}
                      >
                        Disponible
                      </RegularText>
                      <SemiBoldText
                        style={{ color: item.textColor, fontSize: 24 }}
                      >
                        {item.amount}
                      </SemiBoldText>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <VisaIcon color={item.textColor} />
                      <MediumText
                        style={{ fontSize: 14, color: item.textColor }}
                      >
                        ...{item.last4Numbers}
                      </MediumText>
                    </View>
                  </ImageBackground>
                </Animated.View>
              </View>
            );
          }}
        />
      </ReAnimated.View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light.background,
  },
  link: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 20,
    paddingHorizontal: 38,
  },
  linkText: {
    color: "white",
    fontSize: 16,
  },
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    overflow: "hidden",
    resizeMode: "cover",
    borderRadius: 24,
  },
});
