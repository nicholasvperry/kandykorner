import React from "react";
import { PropsAndState } from "../PropsAndState";

export const Home = () => (
    <>
        <h2>Saint Nick's Kandies</h2>
        <small>Kandy for you, Kandy for me.</small>

        <address>
            <div>Visit Us at one of our 5 Locations!</div>
            <div>Huntington</div>
            <div>Barboursville</div>
            <div>Barboursville Mall</div>
            <div>Milton</div>
            <div>Hurricaine</div>
        </address>
        <PropsAndState yourName={"Nick"} />
    </>
)
