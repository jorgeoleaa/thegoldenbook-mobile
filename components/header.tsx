import { Image, ImageStyle, Text, View, ViewStyle } from 'react-native';

const containerStyle: ViewStyle = {
  height: 32,
  width: 64,
  justifyContent: 'center',
  alignItems: 'center',
};

const logoStyle: ImageStyle = {
  height: 16,
  width: 64,
};

export default function Header() {
  return (
    <View style={containerStyle}>
      <Image
        source={require('../assets/images/logo.jpg')}
        style={logoStyle}
        resizeMode="contain"
      />
      <Text>Header</Text>
    </View>
  );
}

