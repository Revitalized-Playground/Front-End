import React, { useState } from 'react';
import Skeleton from 'react-loading-skeleton';

import Tabs from './TabComponent/Tabs';
import Lists from './TabComponent/Lists';

const Main = () => {
    

    const [state, setState] = useState({
        selected: "1",
        tabs: ["1", "2", "3", "4"],
        lists: [
            {
                left: "will be #f38c01",
                image: "https://res.cloudinary.com/revitalize/image/upload/v1569861716/user%20dashboard/Electric_qssium.svg",
                name: "Change and Adjust the Light Fixtures",
                description: "Replace current light fixtures with tungsten bulbs and sleek fixtures. Arrange sconces spaced out in the dining hall.",
                comment: "Priority level: Mid-priority",
                right: [
                    {
                        img: "https://res.cloudinary.com/revitalize/image/upload/v1569861720/user%20dashboard/OliverCut_jsjnmx.png"
                    },
                    {
                        img: "https://res.cloudinary.com/revitalize/image/upload/v1569861721/user%20dashboard/Selena_p2ndem.png"
                    }
                ],
                tab: "1"
            },
            {
                left: "will be $ruby-enchantment",
                image: "https://res.cloudinary.com/revitalize/image/upload/v1569861717/user%20dashboard/HVAC_so27i2.svg",
                name: "Repair the Heating System",
                description: "Replace current light fixtures with tungsten bulbs and sleek fixtures. Arrange sconces spaced out in the dining hall.",
                comment: "Priority level: High-priority",
                right: [
                    {
                        img: "https://res.cloudinary.com/revitalize/image/upload/v1569861720/user%20dashboard/OliverCut_jsjnmx.png"
                    },
                    {
                        img: "https://res.cloudinary.com/revitalize/image/upload/v1569861715/user%20dashboard/Cliff_rkxqq5.png"
                    },
                    {
                        img: "https://res.cloudinary.com/revitalize/image/upload/v1569861719/user%20dashboard/Mya_vrdanh.png"
                    }
                ],
                tab: "1"
            },
            {
                left: "$pikachu",
                image: "https://res.cloudinary.com/revitalize/image/upload/v1569861720/user%20dashboard/Plumbing_fxedhz.svg",
                name: "Work on the Plumbing Fixtures For the Sinks and Toilets",
                description: "Mount sink piece and adjust nozzle on tap. Check and adjust pipes for toilets.",
                comment: "Priority level: High-priority",
                right: [
                    {
                        img: "https://res.cloudinary.com/revitalize/image/upload/v1569861717/user%20dashboard/Greg_zvzyrc.png"
                    }
                ],
                tab: "1"
            },
            {
                left: "chillFi-purple",
                image: "https://res.cloudinary.com/revitalize/image/upload/v1569861718/user%20dashboard/Maintenance_q9et8e.svg",
                name: "Remove and Replace Doors to Restroom and Cafe Entrance",
                description: "Measure door heights and replace door handles with sleek handles. Leave space to hand exit signs.",
                comment: "Priority level: Not a priority",
                right: [
                    {
                        img: "https://res.cloudinary.com/revitalize/image/upload/v1569861720/user%20dashboard/OliverCut_jsjnmx.png"
                    },
                    {
                        img: "https://res.cloudinary.com/revitalize/image/upload/v1569861718/user%20dashboard/Milo_netcid.png"
                    }
                ],
                tab: "1"
            },
            {
                left: "$pikachu",
                image: "https://res.cloudinary.com/revitalize/image/upload/v1569861718/user%20dashboard/Maintenance_q9et8e.svg",
                name: "Fix Ventilation Systems",
                description: "Replace current light fixtures with tungsten bulbs and sleek fixtures. Arrange sconces spaced out in the dining hall.",
                comment: "Priority level: High-priority",
                right: [
                    {
                        img: ""
                    },
                    {
                        img: "https://res.cloudinary.com/revitalize/image/upload/v1569861715/user%20dashboard/Cliff_rkxqq5.png"
                    }
                ],
                tab: "2"
            },
            {
                left: "$ruby-enchantment",
                image: "https://res.cloudinary.com/revitalize/image/upload/v1569861718/user%20dashboard/Meetings_g7lgfb.svg",
                name: "Briefing with Master Trainer/Engineer",
                description: "Replace current light fixtures with tungsten bulbs and sleek fixtures. Arrange sconces spaced out in the dining hall.",
                comment: "Priority level: Super high-priority",
                right: [
                    {
                        img: "https://res.cloudinary.com/revitalize/image/upload/v1569861718/user%20dashboard/Milo_netcid.png"
                    },
                    {
                        img: "https://res.cloudinary.com/revitalize/image/upload/v1569861721/user%20dashboard/Selena_p2ndem.png"
                    },
                    {
                        img: "https://res.cloudinary.com/revitalize/image/upload/v1569861715/user%20dashboard/Cliff_rkxqq5.png"
                    }
                ],
                tab: "2"
            },
            {
                left: "$pikachu",
                image: "https://res.cloudinary.com/revitalize/image/upload/v1569861720/user%20dashboard/Plumbing_fxedhz.svg",
                name: "Check and Observe Plumbing Fixtures, Pipes, and Drains",
                description: "Mount sink piece and adjust nozzle on tap. Check and adjust pipes for toilets.",
                comment: "Priority level: High-priority",
                right: [
                    {
                        img: "https://res.cloudinary.com/revitalize/image/upload/v1569861717/user%20dashboard/Greg_zvzyrc.png"
                    },
                    {
                        img: "https://res.cloudinary.com/revitalize/image/upload/v1569861719/user%20dashboard/Mya_vrdanh.png"
                    },
                    {
                        img: "https://res.cloudinary.com/revitalize/image/upload/v1569861721/user%20dashboard/Selena_p2ndem.png"
                    }
                ],
                tab: "2"
            },
            {
                left: "$ruby-enchantment",
                image: "https://res.cloudinary.com/revitalize/image/upload/v1569861716/user%20dashboard/Electric_qssium.svg",
                name: "Connect Wires to Various Components Within The Shops Electrical Systems",
                description: "Measure door heights and replace door handles with sleek handles. Leave space to hand exit signs. ",
                comment: "Priority level: Super high-priority",
                right: [
                    {
                        img: "https://res.cloudinary.com/revitalize/image/upload/v1569861720/user%20dashboard/OliverCut_jsjnmx.png"
                    },
                    {
                        img: ""
                    }
                ],
                tab: "2"
            },
            {
                left: "#00a164",
                image: "https://res.cloudinary.com/revitalize/image/upload/v1569861715/user%20dashboard/Completed_rhwabs.svg",
                name: "Clean Up Scraps In The Store",
                description: "Replace current light fixtures with tungsten bulbs and sleek fixtures. Arrange sconces spaced out in the dining hall.",
                comment: "Priority level: Mid-priority",
                right: [
                    {
                        img: "https://res.cloudinary.com/revitalize/image/upload/v1569861720/user%20dashboard/OliverCut_jsjnmx.png"
                    },
                    {
                        img: "https://res.cloudinary.com/revitalize/image/upload/v1569861717/user%20dashboard/Greg_zvzyrc.png"
                    }
                ],
                tab: "3"
            },
            {
                left: "#00a164",
                image: "https://res.cloudinary.com/revitalize/image/upload/v1569861715/user%20dashboard/Completed_rhwabs.svg",
                name: "Replace Windows",
                description: "Replace current light fixtures with tungsten bulbs and sleek fixtures. Arrange sconces spaced out in the dining hall.",
                comment: "Priority level: Super high-priority",
                right: [
                    {
                        img: "https://res.cloudinary.com/revitalize/image/upload/v1569861721/user%20dashboard/Selena_p2ndem.png"
                    },
                    {
                        img: "https://res.cloudinary.com/revitalize/image/upload/v1569861715/user%20dashboard/Cliff_rkxqq5.png"
                    }
                ],
                tab: "3"
            },
            {
                left: "#00a164",
                image: "https://res.cloudinary.com/revitalize/image/upload/v1569861715/user%20dashboard/Completed_rhwabs.svg",
                name: "Replace Floor Tiles",
                description: "Mount sink piece and adjust nozzle on tap. Check and adjust pipes for toilets.",
                comment: "Priority level: High-priority",
                right: [
                    {
                        img: ""
                    }
                ],
                tab: "3" 
            },
            {
                left: "Announcements",
                image: "https://res.cloudinary.com/revitalize/image/upload/v1569861718/user%20dashboard/Maleescha_Mclarin_qsafnt.png",
                name: "Mark your calendar for briefing with Joe Reagan",
                description: "Please download and print the updated skills form and checklist. The updated forms include seal of certificate and can used to submit hours to be approved to recieve licensure. ",
                comment: "Reply",
                comment2: "View 3 replies",
                right: "09/25/19",
                tab: "4"
            },
            {
                left: "DISCUSSION",
                image: "https://res.cloudinary.com/revitalize/image/upload/v1569861715/user%20dashboard/Dakota_Six_yip35k.png",
                name: "Phillips or Flathead",
                description: "Which tool do you prefer when you are pulling out floor boards? Please share your thought below on the comment thread.",
                comment: "Reply",
                comment2: "View 3 replies",
                right: "09/20/19",
                tab: "4"
            },
            {
                left: "FORMS",
                image: "",
                name: "Skills sign-off forms and checklist",
                description: "Please download and print the updated skills form and checklist. The updated forms include seal of certificate and can used to submit hours to be approved to recieve licensure. ",
                comment: "",
                right: "Added 09/12/19",
                tab: "4"
            }
        ]
    })

    const changeSelected = tab => {
        setState({
            ...state,
            selected: tab
        })
    }

    return (
        <div className="user-dashboard-main section">
            <div className="user-dashboard-title">
                {
                    <Tabs tabs={state.tabs} selected={state.selected} changeSelected={changeSelected}/>
                    ||
                    <>
                        <Skeleton count={1} height={25} width={200} />
                        <Skeleton count={1} height={25} width={200} />
                        <Skeleton count={1} height={25} width={200} />
                        <Skeleton count={1} height={25} width={200} />
                    </>
                }
            </div>

            <hr />
            <div className="user-dashboard-main-body">
                {
                    <Lists lists={
                        state.lists.filter(list => list.tab === state.selected)
                    }/>
                    ||
                    <Skeleton count={5} height={125} />
                }
            </div>
        </div>
    );
};

export default Main;