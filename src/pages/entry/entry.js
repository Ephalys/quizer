import React from 'react';
import { EntrySubtitle, EntryTitle, EntryWrapper, BlackSpan } from './entryStyles'
import Input from "../../components/input/input";
import { useDispatch, useSelector } from 'react-redux';
import { setUsername, editUsername } from '../../actions/username';

const Entry = () => {
    const username = useSelector(state => state.username)
    const dispatch = useDispatch();
    return (
        <EntryWrapper>
            <EntryTitle>
                Welcome to <BlackSpan>Quizer</BlackSpan> 👋🏻
            </EntryTitle>
            <EntrySubtitle>
                Please write down your username to enjoy our fantastic game !
            </EntrySubtitle>
            <Input placeholder="John Doe" value={username.tmpUsername} arrow={true} onChange={(e) => dispatch(editUsername(e))} onClick={dispatch(setUsername())} />
        </EntryWrapper>
    );
}


export default Entry;