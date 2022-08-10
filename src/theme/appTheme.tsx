import { StyleSheet } from 'react-native';

export const TEXT_COLOR = "#292929";
export const BACKGROUND_COLOR = "#F5F5F5";
export const PRIMARY_COLOR = "#42594A";
export const SECONDARY_COLOR = '#AEF2D9';
export const THIRD_COLOR = '#F2EFE9';

export const colorsTheme = StyleSheet.create({
    primaryTextColor: {
        color: TEXT_COLOR,
    },
    secondaryTextColor: {
        color: PRIMARY_COLOR,
    },
    thirdTextColor: {
        color: SECONDARY_COLOR,
    },
    primaryBackgroundColor: {
        backgroundColor: PRIMARY_COLOR
    },
    secondaryBackgroundColor: {
        backgroundColor: SECONDARY_COLOR
    },
    thirdBackgroundColor: {
        backgroundColor: THIRD_COLOR
    }

});

export const globalTheme = StyleSheet.create({
    gloabalHorizontalMargin:{
        marginHorizontal: 25
    },
    formContainer:{
        marginTop: 20
    },
    inputContainer:{
        backgroundColor: BACKGROUND_COLOR,
        color: THIRD_COLOR,
        paddingHorizontal: 5,
        height: 50,
        width: '100%',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: "center",
        flexDirection: "row",
        marginVertical: 10
    },
    inputText: {
        color: TEXT_COLOR,
        flex: 1,
        marginRight: 10
    },
    inputIcon: {
        marginHorizontal: 10,
        fontSize: 20
    },
    inputIconImage: {
        marginLeft: 10,
        marginRight: 5,
        width: 20,
        height: 20
    },
    primaryButtom: {
        height: 50,
        borderRadius: 20,
        backgroundColor: PRIMARY_COLOR,
        width: '100%',
        justifyContent: 'center',
        alignItems: "center",
    },
    primaryLink: {
        width: '100%',
        height: 20,
        justifyContent: 'center',
        alignItems: "center",
    },
    primaryButtomOutLine: {
        height: 50,
        borderRadius: 20,
        borderColor: PRIMARY_COLOR,
        borderWidth: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: "center",
    },
    primaryButtomSmOutLine: {
        height: 25,
        borderRadius: 20,
        borderColor: PRIMARY_COLOR,
        borderWidth: 1,
        width: 125,
        justifyContent: 'center',
        alignItems: "center",
    },
});