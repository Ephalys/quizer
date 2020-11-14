import React from 'react';
import {EntryWrapper, EntryTitle, EntrySubtitle} from './entryStyles'
import Input from "../../components/input/input";

const Entry = () => {
    return (
        <EntryWrapper>
            <EntryTitle>
                Welcome to Quizer 👋
            </EntryTitle>
            <EntrySubtitle>
                Please write down your username to enjoy our fantastic game !
            </EntrySubtitle>
            <Input placeholder="John Doe"/>
        </EntryWrapper>
    );
}


export default Entry;