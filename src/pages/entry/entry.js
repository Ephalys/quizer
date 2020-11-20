import React from 'react';
import { EntrySubtitle, EntryTitle, EntryWrapper, BlackSpan } from './entryStyles'
import Input from "../../components/input/input";
import { useDispatch, useSelector } from 'react-redux';
import { editUsername } from '../../actions/username';

const Entry = () => {
    const username = useSelector(state => state.username)
    const dispatch = useDispatch();
    const handleClick = () => {
        console.log(username);
    }
    return (
        <EntryWrapper>
            <EntryTitle>
                Welcome to <BlackSpan>Quizer</BlackSpan> 👋🏻
            </EntryTitle>
            <EntrySubtitle>
                Please write down your username to enjoy our fantastic game !
            </EntrySubtitle>
            <Input placeholder="John Doe" value={username.tmpUsername} arrow={true} onChange={(e) => dispatch(editUsername(e))} onClick={() => handleClick} />
        </EntryWrapper>
    );
}


export default Entry;