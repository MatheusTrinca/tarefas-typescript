import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {TaskList} from '../components/Tasks/TaskList';
import {MainButton} from '../components/UI/MainButton';
import {COLORS} from '../constants';
import {useTasksContext} from '../contexts/TasksContext';

export const Home: React.FC = () => {
  const {tasks, addNewTask, editModeTask, editTask} = useTasksContext();

  const [newTaskText, setNewTaskText] = React.useState('');

  const handleAddTask = () => {
    const data = {
      id: editModeTask?.id || String(new Date().getTime()),
      title: newTaskText,
    };

    editModeTask ? editTask(data.id, data.title) : addNewTask(data);
    setNewTaskText('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gerenciador de Tarefas</Text>
      <View style={styles.taskForm}>
        <TextInput
          value={newTaskText || editModeTask?.title}
          onChangeText={setNewTaskText}
          style={styles.textInput}
          placeholder="Insira uma tarefa..."
        />
        <MainButton onPress={handleAddTask}>
          <Text style={styles.textButton}>Adicionar</Text>
        </MainButton>
      </View>
      <View style={styles.taskList}>
        <TaskList tasks={tasks} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    color: COLORS.primary,
    fontSize: 24,
    marginTop: 50,
  },
  taskForm: {
    width: '80%',
    marginVertical: 50,
  },
  textInput: {
    width: '100%',
    height: 50,
    backgroundColor: COLORS.white,
    fontSize: 20,
  },
  textButton: {
    fontSize: 20,
    color: COLORS.white,
  },
  taskList: {
    flex: 1,
    width: '80%',
  },
});
