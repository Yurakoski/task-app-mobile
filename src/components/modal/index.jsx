import React from "react";
import { Modal, Text, Button} from "react-native";
import { styles } from "./styles";

const CustomModal = ({isModalVisible, onHandlerCancel, onHandlerDelete }) => {

    return(
        <Modal visible={isModalVisible} animationType='slide'>
          <Text style={styles.textDetail}>Item detail</Text>
          <Button
            title= 'cancel'  
            onPress={onHandlerCancel}
          />
          <Button
            title= 'delete'  
            onPress={onHandlerDelete}
          />
        </Modal>
    )
}

export default CustomModal;