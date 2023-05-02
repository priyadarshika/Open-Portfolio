import TypeMe, { Delete, Delay } from "react-typeme";

export default function Salutation() {
    return (
        <TypeMe
            loop="True"
            typingSpeed="200"
            cursorCharacter=""
            strings={[
                "Web Developer",
                <Delay ms={2000} />,
                <Delete characters={13} />,
                "ML Enthusiast",
                <Delay ms={2000} />,
                <Delete characters={13} />,
                "Problem Solver",
                <Delay ms={2000} />,
                <Delete characters={14} />,
                "Senior",
                <Delay ms={2000} />,
                <Delete characters={6} />,
            ]}
        />
    );
}
