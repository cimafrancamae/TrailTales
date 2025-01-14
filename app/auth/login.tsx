import React, { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { View, TextInput, Button, StyleSheet, Alert } from "react-native";
import { useRouter } from "expo-router";

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();
    const router = useRouter();

    const handleLogin = async () => {
        try {
            await login(email, password);
            Alert.alert("Success", "Login successful!");
            router.replace('/');
        } catch (error) {
            console.error(error);
            Alert.alert("Error", "Login failed. Please try again.");
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Button title="Login" onPress={handleLogin} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
    },
    input: {
        width: "100%",
        padding: 10,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        marginBottom: 16,
    },
});

export default Login;
