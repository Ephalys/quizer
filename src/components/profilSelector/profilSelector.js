import React from 'react'
import { User } from './profilSelectorStyles'
import history from "config/history";

const ProfilSelector = () => {

    const handleClick = () => {
        history.push(`/profil`);
    };

    return (
        <User onClick={handleClick} />
    );
}

export default ProfilSelector;