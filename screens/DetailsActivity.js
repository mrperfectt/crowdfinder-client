import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  Pressable,
  StyleSheet
} from 'react-native';

const DetailsActivity = ({ navigation }) => {
  const [edit, setEdit] = useState(false);
  const toggleEdit = () => setEdit(!edit);
  const [menuVisible, setMenuVisible] = useState(false);
  const openMenu = () => setMenuVisible(true);
  const closeMenu = () => setMenuVisible(false);

  return (
    <View>
      <View style={styles.container}>
            <Text style={styles.header}>Your Activity</Text>
            <Image
              style={styles.profile}
              source={require('../assets/activity.png')} />
            <View style={styles.boxA}>
              <Text style={styles.data}>Activity Name</Text>
              <TextInput style={styles.boxB}
                underlineColorAndroid="transparent"
                placeholder="@xijinping"
                placeholderTextColor="black"
                autoCapitalize="none"
                editable={edit} />
            </View>
            <View style={styles.boxA}>
              <Text style={styles.data}>Description</Text>
              <TextInput style={styles.boxB}
                underlineColorAndroid="transparent"
                placeholder="xi@cpc.cn"
                placeholderTextColor="black"
                autoCapitalize="none"
                editable={edit} />
            </View>
            <View style={styles.boxA}>
              <Text style={styles.data}>Location</Text>
              <TextInput style={styles.boxB}
                underlineColorAndroid="transparent"
                placeholder="Skudai"
                placeholderTextColor="black"
                autoCapitalize="none"
                editable={edit} />
            </View>
            <View style={styles.boxA}>
              <Text style={styles.data}>Bio</Text>
              <TextInput style={styles.boxB2}
                multiline={true}
                underlineColorAndroid="transparent"
                placeholder="President of the People's Republic of China & General Secretary of the Communist Party of China."
                placeholderTextColor="black"
                autoCapitalize="none"
                editable={edit} />
            </View>
            {
              edit?(
                <View style={styles.row}>
                  <Pressable
                    style={styles.buttonSplit}
                    onPress={toggleEdit}
                  >
                    <Text style={styles.ButtonText}>Confirm</Text>
                  </Pressable>
                  <Pressable
                    style={styles.buttonSplit}
                    onPress={toggleEdit}
                  >
                    <Text style={styles.ButtonText}>Cancel</Text>
                  </Pressable>
                </View>
              )
              :<Pressable
                style={styles.button}
                onPress={toggleEdit}
                >
                <Text style={styles.ButtonText}>Edit Activity</Text>
              </Pressable>
            }
            <Pressable
                  style={styles.button}
                  >
                  <Text style={styles.ButtonText}>Delete Activity</Text>
                </Pressable>
          </View>
    </View>
  );
};

export default ProfileScreen;
const styles = StyleSheet.create({
  rightmenu: {
    top: 19,
    left: 258
  },
  color: {
    backgroundColor: 'white',
  },
  container: {
    paddingTop: 100,
    backgroundColor: 'white'
  },
  header: {
    marginTop: 20,
    marginBottom: 5,
    marginLeft: 15,
    fontSize: 40
  },
  data: {
    fontSize: 16
  },
  profile: {
    width: 120,
    height: 120,
    borderRadius: 120 / 2,
    position: 'absolute',
    right: 10,
    top: 5
  },
  box: {
    paddingHorizontal: 8,
    paddingVertical: 10,
    marginTop: 15,
    marginRight: 15,
    marginLeft: 15,
    marginBottom: 0,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  boxA: {
    paddingHorizontal: 8,
    paddingVertical: 10,
    marginTop: 15,
    marginRight: 15,
    marginLeft: 15,
    marginBottom: 0,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  boxB: {
    marginTop: -5,
    justifyContent: 'space-between',
    color: "black",
    fontSize: 16
  },
  boxB2: {
    marginTop: -5,
    marginRight: 9,
    paddingTop: 28,
    justifyContent: 'space-between',
    color: "black",
    fontSize: 16
  },
  button: {
    backgroundColor: 'black',
    padding: 10,
    paddingRight: 40,
    paddingLeft: 40,
    margin: 15,
    height: 40,
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: '#3F5EFB',
    borderRadius: 10,
    textAlign: 'center',
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  buttonSplit: {
    padding: 10,
    marginTop: 30,
    marginLeft: 15,
    marginRight: 15,
    height: 40,
    backgroundColor: 'black',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width:176,
    justifyContent: 'space-between'
  },
  ButtonText: {
    color: 'white',
    fontSize: 16
  },
  row: {
    flexDirection: 'row',
  }
});
