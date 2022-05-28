import React from 'react';
import {StyleSheet, Image, TouchableOpacity} from 'react-native';

interface IProps {
  style?: any;
  color: string;
  icon: HTMLImageElement;
  onPress: () => void;
}

export const IconButton: React.FC<IProps> = ({style, color, icon, onPress}) => {
  const iconStyle = {
    width: '100%',
    height: '100%',
    tintColor: color,
  };

  return (
    <TouchableOpacity
      style={[style && {...style}, styles.container]}
      onPress={onPress}>
      <Image style={iconStyle} source={icon} resizeMode="contain" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
