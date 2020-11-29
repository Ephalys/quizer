import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { editUsername } from 'actions/username';
import Input from "components/input/input";
import history from 'config/history';
import { EntrySubtitle, EntryTitle, EntryWrapper, BlackSpan } from './entryStyles'
import { EntryWrapperVariants, EntryItemVariants } from './entryVariants'
const Entry = () => {
    const { t } = useTranslation();
    const username = useSelector(state => state.username)
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        history.push('/')
        localStorage.setItem("username", username.username);
    }
    return (
        <EntryWrapper initial="hidden" animate="visible" exit="hidden" variants={EntryWrapperVariants}>
            <EntryTitle variants={EntryItemVariants}>
                {t("Welcome")} <BlackSpan>Quizer</BlackSpan> 👋🏻
                </EntryTitle>
            <EntrySubtitle variants={EntryItemVariants}>
                {t("EnterUsername")}
            </EntrySubtitle>
            <motion.form variants={EntryItemVariants} onSubmit={handleSubmit}>
                <Input placeholder="John Doe" value={username.tmpUsername} arrow={true} onChange={(e) => dispatch(editUsername(e))} />
            </motion.form>
        </EntryWrapper>
    );
}

export default Entry;