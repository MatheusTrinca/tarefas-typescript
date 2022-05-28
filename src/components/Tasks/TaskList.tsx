import React from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';
import {TaskItem} from './TaskItem';
import {ITask} from '../../contexts/TasksContext';

interface IProps {
  tasks: ITask[];
}

export const TaskList: React.FC<IProps> = ({tasks}) => {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={tasks as unknown as ITask[]}
      keyExtractor={(item: ITask) => item.id}
      renderItem={({item}: ListRenderItemInfo<ITask>) => (
        <TaskItem task={item} />
      )}
    />
  );
};
