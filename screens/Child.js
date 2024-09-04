import react from "react";
import { Button } from "react-native";

export default function Child({ onClick }) {
    return (
        <Button onClick={onClick} title="+" />
    )
}
