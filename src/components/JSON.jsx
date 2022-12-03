import React from "react";
import { data } from "../constant/data";

export default function JSONComponent() {
    return <div>{JSON.stringify(data)}</div>;
}
