import TypeMe, { Delete, Delay } from "react-typeme";

export default function Salutation() {
    return (
        <TypeMe
            loop="True"
            typingSpeed="200"
            cursorCharacter=""
            strings={[
                "Position 1",
                <Delay ms={2000} />,
                <Delete characters={10} />,
                "Position 2",
                <Delay ms={2000} />,
                <Delete characters={10} />,
                "Position 3",
                <Delay ms={2000} />,
                <Delete characters={10} />,
                "Position 4",
                <Delay ms={2000} />,
                <Delete characters={10} />,
            ]}
        />
    );
}
