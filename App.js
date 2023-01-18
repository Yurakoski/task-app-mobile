import React , {useState} from 'react';
import { StyleSheet, Text, Button, TextInput, View , FlatList, TouchableOpacity, Modal} from 'react-native';

export default function App() {

  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);


  const onHandlerChange = (text) => {
    setTask(text);
  }

  const onHandlerSubmit = () => {
    setTasks([...tasks, {
      id: Math.random().toString(),
      value: task
    }])
    setTask('');
  }

  const onHandlerModal = (item) => {
    setIsModalVisible(!isModalVisible);
    setSelectedTask(item);
  }

  const onHandlerCancel = (item) => {
    setIsModalVisible(!isModalVisible);
    setSelectedTask(null);
  }

  const onHandlerDelete = (item) => {
    setTasks((prevTaskList)=>prevTaskList.filter((task)=> task.id!==selectedTask.id));
    setIsModalVisible(!isModalVisible);
  }

  const renderItem = ({item}) => (
    <TouchableOpacity onPress={ ()=>onHandlerModal(item) }>
      <Text>{item.value}</Text>
    </TouchableOpacity>
  )

  const keyExtractor = (item) => item.id;

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.input} 
          placeholder='agregar tarea'
          autoComplete='off'
          autoCorrect= {false}
          autoCapitalize='none'
          value={task}
          onChangeText = {onHandlerChange}
        />
        <Button onPress={onHandlerSubmit} title='add' color='#626893'/>
      </View>
      <FlatList 
        data= {tasks}
        renderItem= {renderItem}
        keyExtractor= {keyExtractor}
      />
      <Modal visible={isModalVisible} animationType='slide'>
        <Text>Item detail</Text>
        <Button
          title= 'cancel'  
          onPress={onHandlerCancel}
        />
        <Button
          title= 'delete'  
          onPress={onHandlerDelete}
        />
      </Modal> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 50,
    marginHorizontal: 20,
  },
  input: {
    borderBottomColor: '#626893',
    borderBottomWidth: 1,
    height: 40,
    width: '75%',
    color: '#212121',
  },
  listContainer: {
    marginHorizontal: 20,
    marginTop: 40
  }
});
