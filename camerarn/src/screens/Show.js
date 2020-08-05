import React from 'react';
import {StyleSheet, View,ImageBackground, TouchableOpacity} from 'react-native';
import {
  Button,
  Text,
  Container,
  Icon,
  connectStyle
} from "native-base";

import {Content} from 'src/baseComponents/Content';
import MainHeader from 'src/baseComponents/MainHeader';

class Show extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        };    
    }    
    render(){
        let  imageUri  =  this.props.navigation.state.params.url;
        console.log(imageUri);
        return(
            <Container>
                <View style={styles.container}>
                    <MainHeader
                        transparent
                        back={true}
                        title={"Camera"}
                        navigation={this.props.navigation}
                        />
                    <ImageBackground source={{uri: imageUri}} style={styles.image}/> 
                    {/* <Icon name="delete" type="AntDesign" fontSize={35} style={styles.btn} onPress={() => this.props.navigation.navigate("Camera",{deleteUrl: imageUri})}/> */}
                </View>
            </Container>
        );                    
    }
}
// Different header, no back
Show.navigationOptions = ({ navigation }) => {
    return {
      header: props => null
    }
  }
  
Show = connectStyle("Branding")(Show);
  
export default Show;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 10,
      backgroundColor: '#000',
    },    
    capture: {
      color: '#fff',
      fontSize: 35,
      padding: 10,
    },
    image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center"
    },
    smallImage: {
      width: 70, 
      height: 70, 
      alignSelf: "flex-end",
      position: 'absolute' , 
      bottom: 20, 
      right: 10,
    },
    btn: {
        flex: 0,
        color: 'red',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        position: "absolute",
        bottom: 20,
      },
  });