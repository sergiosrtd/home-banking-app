import { View, Text } from "react-native";
import React from "react";
import { SvgXml } from "react-native-svg";
const VisaIcon = ({ color = "#fff" }) => {
  const xml = `<svg width="31" height="10" viewBox="0 0 31 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.3095 9.85574H10.8214L12.3776 0.175476H14.8656L13.3095 9.85574Z" fill="${color}"/>
    <path d="M22.3289 0.412127C21.8381 0.216261 21.0598 0 20.0973 0C17.6402 0 15.91 1.31809 15.8994 3.20257C15.879 4.59294 17.1382 5.36518 18.08 5.82877C19.0426 6.30249 19.3698 6.61169 19.3698 7.03394C19.36 7.68245 18.592 7.98138 17.8756 7.98138C16.8823 7.98138 16.35 7.82726 15.5412 7.46646L15.2135 7.3118L14.8654 9.48481C15.4489 9.75226 16.524 9.9896 17.6402 10C20.2509 10 21.9505 8.7023 21.9707 6.69409C21.9806 5.59212 21.3157 4.74774 19.8822 4.05776C19.012 3.61484 18.479 3.31618 18.479 2.86299C18.4892 2.451 18.9298 2.02902 19.9121 2.02902C20.721 2.00835 21.3153 2.20394 21.7655 2.39967L21.9905 2.50246L22.3289 0.412127Z" fill="${color}"/>
    <path d="M25.6358 6.42636C25.8407 5.87024 26.6292 3.71791 26.6292 3.71791C26.6188 3.73857 26.8337 3.15152 26.9565 2.79113L27.1304 3.62524C27.1304 3.62524 27.6016 5.94238 27.7039 6.42636C27.315 6.42636 26.1273 6.42636 25.6358 6.42636ZM28.707 0.175476H26.7825C26.189 0.175476 25.7381 0.350401 25.4821 0.978651L21.7864 9.8556H24.397C24.397 9.8556 24.8268 8.66083 24.9192 8.4035C25.2056 8.4035 27.7452 8.4035 28.1137 8.4035C28.1851 8.74336 28.4106 9.8556 28.4106 9.8556H30.7143L28.707 0.175476Z" fill="${color}"/>
    <path d="M8.74329 0.175476L6.30665 6.77649L6.04039 5.43773C5.5899 3.89297 4.17709 2.21462 2.60046 1.3801L4.83234 9.84548H7.46341L11.3742 0.175476H8.74329Z" fill="${color}"/>
    <path d="M4.04402 0.175476H0.0409529L0 0.371069C3.12264 1.17438 5.1907 3.11073 6.04038 5.43814L5.17016 0.989191C5.02689 0.370932 4.58661 0.19587 4.04402 0.175476Z" fill="${color}"/>
    </svg>`;
  return <SvgXml xml={xml} />;
};

export default VisaIcon;
