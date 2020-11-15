import React from 'react';
import {EntrySubtitle, EntryTitle, EntryWrapper, BlackSpan} from './entryStyles'
import Input from "../../components/input/input";

const Entry = () => {
    return (
        <EntryWrapper>
            <EntryTitle>
                Welcome to <BlackSpan>Quizer</BlackSpan> 👋🏻
            </EntryTitle>
            <EntrySubtitle>
                Please write down your username to enjoy our fantastic game !
            </EntrySubtitle>
            <Input placeholder="John Doe" arrow={true}/>
        </EntryWrapper>
    );
}


export default Entry;