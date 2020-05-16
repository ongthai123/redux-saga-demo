import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button,
    Image,
    Platform
} from 'react-native';

export default class DogComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            dog: {}
        }
    }

    componentDidMount() {
        // console.log("Hit Dog Component")
    }

    componentDidUpdate(prevProps) {
        if (prevProps.dog !== this.props.dog) {
            this.setState({ dog: this.props.dog });
        }
    }

    render() {
        console.log("Props: ", this.props)
        return (
            <View style={{ flex: 1, marginTop: Platform.OS === "ios" ? 34 : 0 }}>
                <Button

                    onPress={() => { this.props.onFetchDog() }}
                    title="Fetch API"
                >
                    Fetch API
                </Button>
                <Image
                    style={style.image}
                    source={{
                        uri: this.state.dog != undefined ?
                            this.state.dog.message ?
                                this.state.dog.message
                                : "https://images.dog.ceo/breeds/terrier-russell/iguet2.jpeg"
                            : "https://images.dog.ceo/breeds/terrier-russell/iguet2.jpeg"
                    }}
                />
            </View>
        )
    }
}

const style = StyleSheet.create({
    image: {
        width: 500,
        height: 500
    }
})