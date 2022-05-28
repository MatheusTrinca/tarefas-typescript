import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS, icons} from '../../constants';
import {IconButton} from '../UI/IconButton';
import {useTasksContext, ITask} from '../../contexts/TasksContext';

interface IProps {
  task: ITask;
}

export const TaskItem: React.FC<IProps> = ({task}) => {
  const {deleteTask, handleEditMode} = useTasksContext();

  const handleEditItem = () => {
    handleEditMode(task);
  };

  const handleDeleteItem = () => {
    deleteTask(task.id);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{task.title}</Text>
      <View style={styles.buttons}>
        <IconButton
          onPress={handleEditItem}
          style={styles.iconButton}
          color={COLORS.green}
          icon={icons.editIcon}
        />
        <IconButton
          onPress={handleDeleteItem}
          style={styles.iconButton}
          color={COLORS.red}
          icon={icons.deleteIcon}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: COLORS.grey,
    padding: 10,
  },
  title: {
    fontSize: 20,
    color: COLORS.white,
  },
  iconButton: {
    width: 25,
    height: 25,
    marginLeft: 10,
  },
  buttons: {
    flexDirection: 'row',
    width: 70,
  },
});
