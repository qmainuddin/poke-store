import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    contentPadding: {
        padding: 10,
    },

    row: {
        flexDirection: 'row',
    },

    main: {
        flex: 1,
    },

    normalText: {
        fontSize: 14,
        color: '#333',
    },

    centerAlign: {
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonContainer: {
        flexDirection: 'row',
        marginHorizontal: 10,
        justifyContent: 'space-between',
    },

    button: {
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
        height: 30,
        width: 80,
        borderRadius: 10,
        margin: 5,
    },
    disabled: {
        opacity: .4,
    },
    buttonText: {
        color: '#fff',
        fontSize: 14,
    }
});

export default styles;