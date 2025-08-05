import { View, Text, TextInput, Button, StyleSheet } from "react-native"

const Homepage = () => {

    return (<View>
        <Text style={styles.label}>Username</Text>
        <TextInput />
        <Text style={styles.label}>Password</Text>
        <TextInput />
        <Button title={"Login"} />
    </View>)
}

const styles = StyleSheet.create({
    label: { fontSize: 24 },
    input: { paddingBlock: 2 }
})


export default Homepage
