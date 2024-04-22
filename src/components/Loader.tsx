import { ActivityIndicator, View } from "react-native";

type Props = {
    loading?: boolean,

}

const Loader = (props: Props) => {
    const { loading } = props;

    return (
        loading &&
        <View>
            <ActivityIndicator size="large" color="#00ff00" />
        </View>
    )
}

export default Loader;
