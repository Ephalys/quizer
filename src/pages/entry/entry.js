import React from 'react';
import { EntrySubtitle, EntryTitle, EntryWrapper, BlackSpan } from './entryStyles'
import Input from "components/input/input";
import { useDispatch, useSelector } from 'react-redux';
import { editUsername } from 'actions/username';
import history from '../../config/history';

const Entry = () => {
    const username = useSelector(state => state.username)
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        history.push('/')
        localStorage.setItem("username", username.username);
    }
    return (
        <EntryWrapper>
            <EntryTitle>
                Welcome to <BlackSpan>Quizer</BlackSpan> 👋🏻
            </EntryTitle>
            <EntrySubtitle>
                Please write down your username to enjoy our fantastic game !
            </EntrySubtitle>
            <form onSubmit={handleSubmit}>
                <Input placeholder="John Doe" value={username.tmpUsername} arrow={true} onChange={(e) => dispatch(editUsername(e))} />
            </form>
        </EntryWrapper>
    );
}


export default Entry;