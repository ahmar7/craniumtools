import React from 'react';
import Auction from '../components/Services/ConfigureAuction/Auction';
import Raffle from '../components/Services/ConfigureRaffle/Raffle';
import Staking from '../components/Services/ConfigureStaking/Staking';
import Token from '../components/Services/ConfigureToken/Token';
import Project from '../components/Services/NftProjects/Project';
import ProjectName from '../components/Services/Project/ProjectName';
import Header from '../layout/dashboardHeader/header';

const Services = () => {
    return (
        <div>
            <Header/>
            <Project/>
            <ProjectName/>
            <Staking/>
            <Token/>
            <Raffle/>
            <Auction/>
        </div>
    );
}

export default Services;
