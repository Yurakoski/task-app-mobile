import React from "react";
import { View, TextInput, Button  } from "react-native";
import { styles } from "./styles";

const AddItem = ({ onHandlerChange, onHandlerSubmit, task}) => {

    return(
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
        <Button disabled={!task} onPress={onHandlerSubmit} title='add' color='#626893'/>
      </View>
    )
}

export default AddItem;