'use client'
import { MainScreen, PanelContainer, LeftPanel, ProjectRightPanel, TopLeftContainer } from "@/components/qube/layout";
import { NavMenu } from "@/components/qube/home";
import { DynamicBarTitle } from "@/components/qube/proj-left-panel";
import { ProjItem, ProjItemLong, ItemGap, FullList } from "@/components/qube/proj-item";
import { useState, useEffect } from "react";
import data from '../../project/data.json';

export default function Project() {
    const [year, setYear] = useState(2021);

    useEffect(() => {
        const handleScroll = (event) => {
            const scrollDirection = event.deltaY > 0 ? 'down' : 'up';

            if (scrollDirection === 'down') {
                setYear((prevState) => (prevState === 2023 ? 2021 : prevState + 1));
            } else if (scrollDirection === 'up') {
                setYear((prevState) => (prevState === 2021 ? 2023 : prevState - 1));
            }
        };
        window.addEventListener('wheel', handleScroll);
        return () => window.removeEventListener('wheel', handleScroll);
    }, []); // Only re-run effect when prevScrollY changes

    return (
        <main className="flex h-screen justify-center items-center">
            <MainScreen>
                <PanelContainer>
                    <LeftPanel>
                        <TopLeftContainer>
                            <DynamicBarTitle height={(year - 2020) * 50} year={year} />
                            <NavMenu />
                        </TopLeftContainer>
                    </LeftPanel>
                    <ProjectRightPanel>
                        <div style={{ position: "absolute", top: 0, right: 0 }}>
                            <FullList />
                        </div>
                        <div className="w-[206.17px] h-full flex-col justify-start items-start inline-flex">
                            <ProjItem title={data[year][0]["title"]} date={data[year][0]["date"]} src={data[year][0]["src"]} />
                            <ItemGap />
                            <ProjItem title={data[year][1]["title"]} date={data[year][1]["date"]} src={data[year][1]["src"]} />
                        </div>
                        <div className="w-[206.17px] h-full flex-col justify-start items-start inline-flex">
                            <ItemGap />
                            <ProjItem title={data[year][2]["title"]} date={data[year][2]["date"]} src={data[year][2]["src"]} />
                            <ItemGap />
                            <ProjItem title={data[year][3]["title"]} date={data[year][3]["date"]} src={data[year][3]["src"]} />
                        </div>
                        <div className="w-[206.17px] h-full flex-col justify-start items-start inline-flex">
                            <ItemGap />
                            <ProjItemLong title={data[year][4]["title"]} date={data[year][4]["date"]} src={data[year][4]["src"]} />
                        </div>
                    </ProjectRightPanel>
                </PanelContainer>
            </MainScreen>
        </main>
    );
}