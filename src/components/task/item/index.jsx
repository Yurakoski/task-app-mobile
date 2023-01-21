import React from "react";
import { TouchableOpacity, Text, View } from 'react-native';
import { styles } from "./styles";

const TaskItem = ({ item, onHandlerModal }) => {
    return(
        <View style={styles.itemContainer}>
            <TouchableOpacity onPress={ ()=>onHandlerModal(item) }>
                <Text>{item.value}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default TaskItem;