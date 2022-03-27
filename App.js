import { NavigationContainer } from '@react-navigation/native';
import React,{Component} from 'react';
import Root from './src/root';
import Home from './src/Screens/Home';

export default class App extends Component {

    componentDidMount() {
        AsyncStorage.getItem('id_token').then((token) => {
          this.setState({ hasToken: token !== null, isLoaded: true })
        });
      }

    render(){
        if (condition) {
            return <Home/>
        } else {
            return <Root />;
        }
    }
    
}
