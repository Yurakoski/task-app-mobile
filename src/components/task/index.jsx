import React from "react";
import { FlatList } from "react-native";
import TaskItem from "./item";

const TaskList = ({ tasks, onHandlerModal }) => {

    const renderItem = ({item}) => (
        <TaskItem 
            item={item}
            onHandlerModal={onHandlerModal}
        />
      )
    
    const keyExtractor = (item) => item.id;
    
    return(
        <FlatList 
            data= {tasks}
            renderItem= {renderItem}
            keyExtractor= {keyExtractor}
        />
    )
}

export default TaskList;