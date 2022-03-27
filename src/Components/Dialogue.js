import * as React from 'react';
import { View } from 'react-native';
import { Button, Paragraph, Dialog, Portal, Provider } from 'react-native-paper';

const Dialogue = ({vis}) => {
  const [visible, setVisible] = React.useState(vis);
  const [show , setShow] = React.useState(true)

  const hideDialog = () => setVisible(false);
 if( vis == true && show == true){
    return (
        <Provider>
          <View>
           
            <Portal>
              <Dialog visible={vis} onDismiss={hideDialog}>
                <Dialog.Title>Alert</Dialog.Title>
                <Dialog.Content>
                  <Paragraph>This is simple dialog</Paragraph>
                </Dialog.Content>
                <Dialog.Actions>
                  <Button onPress={()=>{
                      setShow(false)
                  }}>Done</Button>
                </Dialog.Actions>
              </Dialog>
            </Portal>
          </View>
        </Provider>
      );
    }else{
        return null
    }
 }
  

export default Dialogue;