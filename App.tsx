import {StatusBar} from 'expo-status-bar';
import {Button, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer, useNavigation} from "@react-navigation/native";
import {NavigationUseType, RootStackParamList, RootTabParamList} from "./src/navigation/types";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Entypo from "@expo/vector-icons/Entypo";
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const useAppNavigation = () => useNavigation<NavigationUseType>()


// const HomeScreen = ({route, navigation}: HomeProps) => {
const HomeScreen = () => {
    const navigation = useAppNavigation()
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Home Screen</Text>
            {/*<Button title={"Users"} onPress={() => {*/}
            {/*    navigation.navigate("Home")*/}
            {/*}}/>*/}
            <Button title={'Jump to Users screen Stack2'} onPress={() => {
                navigation.navigate('Users', {screen: "Stack2"})
            }}/>

        </View>
    );
}


// const Users = ({route, navigation}: UsersProps) => {
const Users = () => {
    // const {id, name, age} = route.params
    const navigation = useAppNavigation()

    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Users Screen</Text>
            <Button title={"Jump to Details"} onPress={() => {
                navigation.navigate("Details")
            }}/>
        </View>
    );
}

// const Details = ({route, navigation}: DetailsProps) => {
const Details = () => {
    const navigation = useAppNavigation()

    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Details Screen</Text>

            <Button title={"Jump to Home"} onPress={() => {
                navigation.navigate("Home")
            }}/>
        </View>
    );
}


const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<RootTabParamList>();
// const Stack = createDrawerNavigator<RootStackParamList>();

const Stack1 = () => {
    const navigation = useAppNavigation()
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Stack1</Text>
            <Button title={"Jump to Stack3"} onPress={() => {
                navigation.navigate('Users', {screen: "Stack3"})
            }}/>
        </View>
    )
}
const Stack2 = () => {
    const navigation = useAppNavigation()
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Stack2</Text>
            <Button title={'Jump to Stack1'} onPress={() => {
                navigation.navigate('Users', {screen: "Stack1"})
            }}/>
        </View>
    )
}
const Stack3 = () => {
    const navigation = useAppNavigation()
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Stack3</Text>
            <Button title={"Jump to Details"} onPress={() => {
                navigation.navigate('Details')
            }}/>
        </View>
    )
}


const RootStackNavigation = () => {
    return <Stack.Navigator screenOptions={{headerTitleAlign: "center"}}>
        <Stack.Screen name={"Stack1"} component={Stack1}/>
        <Stack.Screen name={"Stack2"} component={Stack2}/>
        <Stack.Screen name={"Stack3"} component={Stack3}/>
    </Stack.Navigator>
}


// headerTitleAlign: "center",
export default function App() {
    return (
        <NavigationContainer>
            <StatusBar style="auto"/>
            <Tab.Navigator screenOptions={({route, navigation}) => {
                return {
                    tabBarIcon: ({focused}) => {
                        let iconName
                        if (route.name === "Home") {
                            iconName = "home"
                        }
                        if (route.name === "Users") {
                            iconName = "users"
                        }
                        if (route.name === "Details") {
                            iconName = "cog"
                        }
                        return <Entypo name={iconName as any} size={focused ? 28 : 22}
                                       color={focused ? "yellow" : "black"}/>
                    }
                }
            }}>
                {/*<Stack.Navigator>*/}
                {/*<Stack.Navigator initialRouteName={"Users"}> // делает юзерс главным экраном*/}
                {/*<Stack.Navigator>*/}
                <Tab.Screen name="Home" component={HomeScreen}/>
                <Tab.Screen name="Users" component={RootStackNavigation}/>
                <Tab.Screen name="Details" component={Details}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#b27070',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
