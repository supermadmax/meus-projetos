import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { connect } from 'react-redux'

export class ConversasList extends Component{

    static navigationOptions = {
        title: '',
        header: null,
        tabBarLabel: 'Conversas'
    }

    constructor(props){
        super(props)
        this.state={}

    }

    render(){
        return (
            <View style={styles.container}>
                <Text>PAGINA CONVERSAS</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

const mapStateToProps = (state)=>{
    return {
        status: state.auth.status,
        uid: state.auth.uid
    }
}

const ConversasListConnect = connect(mapStateToProps, {})(ConversasList)

export default ConversasListConnect