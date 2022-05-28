import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {Text, StyleSheet, Image, View} from 'react-native';
import {Pressable} from 'react-native';
import {StackParamList} from '../navigation/Navigation';
import {COLORS, images} from '../constants';

interface IProps {
  navigation: ScreenNavigationType;
}

type ScreenNavigationType = NativeStackNavigationProp<
  StackParamList,
  'Onboarding'
>;

export const Onboarding: React.FC<IProps> = ({navigation}) => {
  const handleStart = (): void => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Image
        source={images.onBoarding1}
        resizeMode="contain"
        style={styles.image}
      />
      <View style={styles.outlineButton}>
        <Pressable
          onPress={handleStart}
          android_ripple={{color: COLORS.secondary}}
          style={({pressed}) => [styles.button, pressed && styles.pressed]}>
          <Text style={styles.btnText}>Iniciar</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
  outlineButton: {
    overflow: 'hidden',
    borderRadius: 16,
    marginTop: 50,
  },
  button: {
    width: 150,
    height: 50,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  pressed: {
    opacity: 0.7,
  },
});
