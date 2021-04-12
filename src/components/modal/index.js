import React, { Component } from 'react'
import { Modal, Text, View, Alert, TextInput, TouchableOpacity } from 'react-native'
import Constants from "../../utils/Constants"
import styles from "./styles"
import Icons from '../../utils/Icons'


class ModalSearch extends Component {

    render() {
        const { visible, onChangeText, onPressSearch, onPressClose } = this.props
        return (

            <Modal
                transparent={true}
                animationType='slide'
                visible={visible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.')
                }}>

                <View style={styles.modal}>
                    <TextInput
                        placeholder={Constants.Strings.PLACEHOLDER}
                        onChangeText={onChangeText}
                        underlineColorAndroid="transparent"
                        style={styles.inputText}
                        placeholderTextColor='grey'
                    />
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.buttonStyle} onPress={onPressSearch}>
                            <Text style={styles.buttonText}>Search</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.buttonStyle} onPress={onPressClose}>
                            <Text style={styles.buttonText}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

        )
    }
}

export default ModalSearch