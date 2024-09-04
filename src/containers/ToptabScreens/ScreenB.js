import React, { useState } from "react";
import { Keyboard, View, Text, ScrollView, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import TaskInputField from "./Todolist/TaskInputField";
import TaskItem from "./Todolist/TaskItem";
import { useTranslation } from 'react-i18next';

export default function ScreenB() {
  const [tasks, setTasks] = useState([]);
  const { t, i18n } = useTranslation();

  const addTask = (task) => {
    if (task == null) return;
    setTasks([...tasks, task]);
    Keyboard.dismiss();
  }

  const deleteTask = (deleteIndex) => {
    setTasks(tasks.filter((value, index) => index != deleteIndex));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{t('todoList')}</Text>
      <ScrollView style={styles.scrollView}>
        {
          tasks.map((task, index) => {
            return (
              <View key={index} style={styles.taskContainer}>
                <TaskItem index={index + 1} task={task} deleteTask={() => deleteTask(index)} />
              </View>
            );
          })
        }
      </ScrollView>
      <TaskInputField addTask={addTask} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EC8FD0',
  },
  heading: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
    marginTop: 30,
    marginBottom: 10,
    marginLeft: 20,
  },
  scrollView: {
    marginBottom: 70,
  },
  taskContainer: {
    marginTop: 20,
  }
})
