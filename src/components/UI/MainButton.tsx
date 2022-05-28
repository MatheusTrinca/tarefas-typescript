import React from 'react';
import {StyleSheet, View, Pressable} from 'react-native';
import {COLORS} from '../../constants';

interface IProps {
  props?: any;
  onPress: () => void;
  children?: any;
}

export const MainButton: React.FC<IProps> = ({children, onPress}) => {
  return (
    <View style={styles.buttonOutline}>
      <Pressable
        onPress={onPress}
        android_ripple={{color: COLORS.secondary}}
        style={({pressed}) => [styles.button, pressed && styles.pressed]}>
        {children}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonOutline: {
    borderRadius: 6,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: COLORS.primary,
    marginTop: 30,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressed: {
    opacity: 0.7,
  },
});
