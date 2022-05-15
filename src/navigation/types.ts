import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {NavigationProp, NavigatorScreenParams} from "@react-navigation/native"

export type RootTabParamList = {   // типизация  Stack, чтобы не ошибиться с экранами
    Home: undefined;
    Users: NavigatorScreenParams<RootStackParamList>;
    Details: undefined;
};

export type RootStackParamList = {
    Stack1: undefined
    Stack2: undefined
    Stack3: undefined
}

export type HomeProps = NativeStackScreenProps<RootTabParamList, 'Home'>;  // типизация самого экрана Home
export type UsersProps = NativeStackScreenProps<RootTabParamList, 'Users'>;
export type DetailsProps = NativeStackScreenProps<RootTabParamList, 'Details'>;


export type NavigationUseType = NavigationProp<RootTabParamList>

