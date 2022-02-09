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

// *************************************************************

// Second tab of the application: GROUP CHATS.
const GroupChatsTab = ({ navigation }) => {
    const [chats, setChats] = useState([]);

    const signOutUser = () => {
        auth.signOut().then(() => {
            // This SHOULD be replace, instead of '.navigate()'.
            navigation.replace('UserAuth');
        });
    };

    const goToTestingGround = () => {
        navigation.navigate('FrontEndTestSpace');
    };

    useEffect(() => {
        const unsubscribe = db.collection('chats').onSnapshot((snapshot) => (
            setChats(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
            )
        ));
        return unsubscribe;
    }, [])

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Group Chats',
            headerStyle: { backgroundColor: '#fff' },
            headerTitleStyle: { color: 'black' },
            headerTintColor: 'black',
            headerLeft: () => (
                <View style={{ marginLeft: 20 }}>
                    <TouchableOpacity activeOpacity={0.5} onPress={signOutUser}>
                        {/* <Avatar rounded source={{ uri: auth?.currentUser?.photoURL }}/> */}
                        <Icon
                            name='logout'
                            type='simple-line-icon'
                            color='black'
                        />
                    </TouchableOpacity>
                </View>
            ),
            headerRight: () => (
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        width: 80,
                        marginRight: 20,
                    }}
                >
                    <TouchableOpacity activeOpacity={0.5} onPress={goToTestingGround}>
                        <Icon
                            name='alert-triangle'
                            type='feather'
                            color='orange'
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('AddChat')}
                        activeOpacity={0.5}>
                        <Icon
                            name='pencil'
                            type='simple-line-icon'
                            color='black'
                        />
                    </TouchableOpacity>
                </View>
            )
        });
    }, [navigation]);

    const enterChat = (id, chatName) => {
        navigation.navigate('Chat', { id, chatName });
    };

    return (
        <SafeAreaView>
            <ScrollView style={styles.container}>
                {chats.map(({ id, data: { chatName } }) => (
                    <CustomListItem
                        key={id}
                        id={id}
                        chatName={chatName}
                        enterChat={enterChat}
                    />
                ))}
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        height: '100%'
    }
});

export default GroupChatsTab;