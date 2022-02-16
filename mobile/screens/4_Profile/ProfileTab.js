// *************************************************************
// Imports for: React, React Native, & React Native Elements
import React, {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {
  Alert,
  Avatar,
  Button,
  Icon,
  Image,
  Input,
  Tooltip,
} from 'react-native-elements';

// Imports for: Expo
import { StatusBar } from 'expo-status-bar';
import ImagePicker from 'expo-image-picker';
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';

// Imports for: Firebase
import {
  apps,
  auth,
  db,
  firebaseConfig
} from '../../firebase';
import firebase from 'firebase/compat/app';

// Imports for: Components
import CustomListItem from '../../components/CustomListItem';
import LargeButton from '../../components/LargeButton';
import LargeTitle from '../../components/LargeTitle';
import LineDivider from '../../components/LineDivider';
import LoginInput from '../../components/LoginInput';
import LoginText from '../../components/LoginText';
import UserPrompt from '../../components/UserPrompt';

// *************************************************************

// Fourth tab of the application: PROFILE of currently logged in user.
const ProfileTab = ({ navigation }) => {

  const signOutUser = () => {
    auth.signOut().then(() => {
      // This SHOULD be replace, instead of '.navigate()'.
      navigation.replace('UserAuth');
      // navigation.navigate('AuthStackScreen', { screen: 'UserAuth' });
      // navigation.popToTop();
      // navigation.navigate('AuthenticationStack', {
      //     screen: 'AuthStackScreen', params: {
      //         screen: 'UserAuth'
      //     }
      // });


    });
  };

  return (
    <View>
      <TouchableOpacity activeOpacity={0.5} onPress={signOutUser}>
        {/* <Avatar rounded source={{ uri: auth?.currentUser?.photoURL }}/> */}
        <View
        style={{ backgroundColor: 'lightgray', width: 125, height: 50, borderRadius: 10, border: 'black', borderWidth: 2}}
        >

        <Text
        style={{ alignContent: 'center', justifyContent: 'center', position: 'relative',}}
        >
          <Icon
            name='logout'
            type='simple-line-icon'
            color='black'
            style={{ marginRight: 10 }}
          />
          LOGOUT
        </Text>
        </View>

      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({});

export default ProfileTab;