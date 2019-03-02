import React, {Component} from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'
import { connect } from 'react-redux'
import { checkLogin } from './actions/AuthActions'

export class Home extends Component{

    static navigationOptions = {
        title: '',
        header: null
    }

    constructor(props){
        super(props)
        this.state={}

        this.signInButton = this.signInButton.bind(this)
        this.signUpButton = this.signUpButton.bind(this)

    }

    signInButton(){
        this.props.navigation.navigate('SignIn')
    }

    signUpButton(){
        this.props.navigation.navigate('SignUp')
    }

    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.h1}>Devzap 1.0</Text>

                <View style={styles.buttonArea}>
                    <Button onPress={this.signInButton} title='Login' />
                    <Button onPress={this.signUpButton} title='Cadastrar' />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    h1: {
        fontSize: 30,
        marginBottom: 50
    },
    buttonArea: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around'
    }
})

const mapStateToProps = (state)=>{
    return {
        status: state.auth.status
    }
}

const HomeConnect = connect(mapStateToProps, {checkLogin})(Home)

export default HomeConnect