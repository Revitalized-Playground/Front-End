
export const projects = [
    {
        id: 1,
        profile: 1,
        name: "Rennovating Cup of Joe's Cafe",
        description:
        'Work with Joe, the cafe owner to implement blueprint including working with construction manager, interior design and final inspection',
        address: '555 Coffee Drive',
        state: 'MI',
        zip: '48127',
        city: 'Detroit',
        goalAmount: 20000,
        amountFunded: 5000,
        status: 'Upcoming',
        dueDate: 'Oct 25, 2019',
    },
];
// New tasks is a time filter. 
export const tabs = ['New Tasks', 'Tasks In Progress', 'Completed Tasks', 'Activity Feed'];
export const defaultTab = tabs[0];
export const list = [
    {
        left: '#f38c01',
        image:
            'https://res.cloudinary.com/revitalize/image/upload/v1569861716/user%20dashboard/Electric_qssium.svg',
        name: 'Change and Adjust the Light Fixtures',
        description:
            'Replace current light fixtures with tungsten bulbs and sleek fixtures. Arrange sconces spaced out in the dining hall.',
        comment: 'Priority level: Mid-priority',
        right: [
            {
                name: 'a',
                img:
                    'https://res.cloudinary.com/revitalize/image/upload/v1569861720/user%20dashboard/OliverCut_jsjnmx.png',
            },
            {
                name: 'b',
                img:
                    'https://res.cloudinary.com/revitalize/image/upload/v1569861721/user%20dashboard/Selena_p2ndem.png',
            },
        ],
        tab: 'New Tasks',
    },
    {
        left: '#d2405b',
        image:
            'https://res.cloudinary.com/revitalize/image/upload/v1569861717/user%20dashboard/HVAC_so27i2.svg',
        name: 'Repair the Heating System',
        description:
            'Replace current light fixtures with tungsten bulbs and sleek fixtures. Arrange sconces spaced out in the dining hall.',
        comment: 'Priority level: High-priority',
        right: [
            {
                name: 'c',
                img:
                    'https://res.cloudinary.com/revitalize/image/upload/v1569861720/user%20dashboard/OliverCut_jsjnmx.png',
            },
            {
                name: 'd',
                img:
                    'https://res.cloudinary.com/revitalize/image/upload/v1569861715/user%20dashboard/Cliff_rkxqq5.png',
            },
            {
                name: 'e',
                img:
                    'https://res.cloudinary.com/revitalize/image/upload/v1569861719/user%20dashboard/Mya_vrdanh.png',
            },
        ],
        tab: 'New Tasks',
    },
    {
        left: '#ffc100',
        image:
            'https://res.cloudinary.com/revitalize/image/upload/v1569861720/user%20dashboard/Plumbing_fxedhz.svg',
        name: 'Work on the Plumbing Fixtures For the Sinks and Toilets',
        description: 'Mount sink piece and adjust nozzle on tap. Check and adjust pipes for toilets.',
        comment: 'Priority level: High-priority',
        right: [
            {
                name: 'f',
                img:
                    'https://res.cloudinary.com/revitalize/image/upload/v1569861717/user%20dashboard/Greg_zvzyrc.png',
            },
        ],
        tab: 'New Tasks',
    },
    {
        left: '#4840ba',
        image:
            'https://res.cloudinary.com/revitalize/image/upload/v1569861718/user%20dashboard/Maintenance_q9et8e.svg',
        name: 'Remove and Replace Doors to Restroom and Cafe Entrance',
        description:
            'Measure door heights and replace door handles with sleek handles. Leave space to hand exit signs.',
        comment: 'Priority level: Not a priority',
        right: [
            {
                name: 'g',
                img:
                    'https://res.cloudinary.com/revitalize/image/upload/v1569861720/user%20dashboard/OliverCut_jsjnmx.png',
            },
            {
                name: 'h',
                img:
                    'https://res.cloudinary.com/revitalize/image/upload/v1569861718/user%20dashboard/Milo_netcid.png',
            },
        ],
        tab: 'New Tasks',
    },
    {
        left: '#ffc100',
        image:
            'https://res.cloudinary.com/revitalize/image/upload/v1569861718/user%20dashboard/Maintenance_q9et8e.svg',
        name: 'Fix Ventilation Systems',
        description:
            'Replace current light fixtures with tungsten bulbs and sleek fixtures. Arrange sconces spaced out in the dining hall.',
        comment: 'Priority level: High-priority',
        right: [
            {
                name: 'l',
                img: '',
            },
            {
                name: 'm',
                img:
                    'https://res.cloudinary.com/revitalize/image/upload/v1569861715/user%20dashboard/Cliff_rkxqq5.png',
            },
        ],
        tab: 'Tasks In Progress',
    },
    {
        left: '#d2405b',
        image:
            'https://res.cloudinary.com/revitalize/image/upload/v1569861718/user%20dashboard/Meetings_g7lgfb.svg',
        name: 'Briefing with Master Trainer/Engineer',
        description:
            'Replace current light fixtures with tungsten bulbs and sleek fixtures. Arrange sconces spaced out in the dining hall.',
        comment: 'Priority level: Super high-priority',
        right: [
            {
                name: 'n',
                img:
                    'https://res.cloudinary.com/revitalize/image/upload/v1569861718/user%20dashboard/Milo_netcid.png',
            },
            {
                name: 'o',
                img:
                    'https://res.cloudinary.com/revitalize/image/upload/v1569861721/user%20dashboard/Selena_p2ndem.png',
            },
            {
                name: 'p',
                img:
                    'https://res.cloudinary.com/revitalize/image/upload/v1569861715/user%20dashboard/Cliff_rkxqq5.png',
            },
        ],
        tab: 'Tasks In Progress',
    },
    {
        left: '#ffc100',
        image:
            'https://res.cloudinary.com/revitalize/image/upload/v1569861720/user%20dashboard/Plumbing_fxedhz.svg',
        name: 'Check and Observe Plumbing Fixtures, Pipes, and Drains',
        description: 'Mount sink piece and adjust nozzle on tap. Check and adjust pipes for toilets.',
        comment: 'Priority level: High-priority',
        right: [
            {
                name: 'q',
                img:
                    'https://res.cloudinary.com/revitalize/image/upload/v1569861717/user%20dashboard/Greg_zvzyrc.png',
            },
            {
                name: 'r',
                img:
                    'https://res.cloudinary.com/revitalize/image/upload/v1569861719/user%20dashboard/Mya_vrdanh.png',
            },
            {
                name: 's',
                img:
                    'https://res.cloudinary.com/revitalize/image/upload/v1569861721/user%20dashboard/Selena_p2ndem.png',
            },
        ],
        tab: 'Tasks In Progress',
    },
    {
        left: '#d2405b',
        image:
            'https://res.cloudinary.com/revitalize/image/upload/v1569861716/user%20dashboard/Electric_qssium.svg',
        name: 'Connect Wires to Various Components Within The Shops Electrical Systems',
        description:
            'Measure door heights and replace door handles with sleek handles. Leave space to hand exit signs. ',
        comment: 'Priority level: Super high-priority',
        right: [
            {
                name: 't',
                img:
                    'https://res.cloudinary.com/revitalize/image/upload/v1569861720/user%20dashboard/OliverCut_jsjnmx.png',
            },
            {
                name: 'u',
                img: '',
            },
        ],
        tab: 'Tasks In Progress',
    },
    {
        left: '#00a164',
        image:
            'https://res.cloudinary.com/revitalize/image/upload/v1569861715/user%20dashboard/Completed_rhwabs.svg',
        name: 'Clean Up Scraps In The Store',
        description:
            'Replace current light fixtures with tungsten bulbs and sleek fixtures. Arrange sconces spaced out in the dining hall.',
        comment: 'Priority level: Mid-priority',
        right: [
            {
                name: 'v',
                img:
                    'https://res.cloudinary.com/revitalize/image/upload/v1569861720/user%20dashboard/OliverCut_jsjnmx.png',
            },
            {
                name: 'w',
                img:
                    'https://res.cloudinary.com/revitalize/image/upload/v1569861717/user%20dashboard/Greg_zvzyrc.png',
            },
        ],
        tab: 'Completed Tasks',
    },
    {
        left: '#00a164',
        image:
            'https://res.cloudinary.com/revitalize/image/upload/v1569861715/user%20dashboard/Completed_rhwabs.svg',
        name: 'Replace Windows',
        description:
            'Replace current light fixtures with tungsten bulbs and sleek fixtures. Arrange sconces spaced out in the dining hall.',
        comment: 'Priority level: Super high-priority',
        right: [
            {
                name: 'x',
                img:
                    'https://res.cloudinary.com/revitalize/image/upload/v1569861721/user%20dashboard/Selena_p2ndem.png',
            },
            {
                name: 'y',
                img:
                    'https://res.cloudinary.com/revitalize/image/upload/v1569861715/user%20dashboard/Cliff_rkxqq5.png',
            },
        ],
        tab: 'Completed Tasks',
    },
    {
        left: '#00a164',
        image:
            'https://res.cloudinary.com/revitalize/image/upload/v1569861715/user%20dashboard/Completed_rhwabs.svg',
        name: 'Replace Floor Tiles',
        description: 'Mount sink piece and adjust nozzle on tap. Check and adjust pipes for toilets.',
        comment: 'Priority level: High-priority',
        right: [
            {
                name: 'z',
                img: '',
            },
        ],
        tab: 'Completed Tasks',
    },
    {
        left: 'Announcements',
        image:
            'https://res.cloudinary.com/revitalize/image/upload/v1569861718/user%20dashboard/Maleescha_Mclarin_qsafnt.png',
        name: 'Mark your calendar for briefing with Joe Reagan',
        description:
            'Please download and print the updated skills form and checklist. The updated forms include seal of certificate and can used to submit hours to be approved to recieve licensure. ',
        comment: 'Reply',
        comment2: 'View 3 replies',
        right: '09/25/19',
        tab: 'Activity Feed',
    },
    {
        left: 'DISCUSSION',
        image:
            'https://res.cloudinary.com/revitalize/image/upload/v1569861715/user%20dashboard/Dakota_Six_yip35k.png',
        name: 'Phillips or Flathead',
        description:
            'Which tool do you prefer when you are pulling out floor boards? Please share your thought below on the comment thread.',
        comment: 'Reply',
        comment2: 'View 3 replies',
        right: '09/20/19',
        tab: 'Activity Feed',
    },
    {
        left: 'FORMS',
        image: '',
        name: 'Skills sign-off forms and checklist',
        description:
            'Please download and print the updated skills form and checklist. The updated forms include seal of certificate and can used to submit hours to be approved to recieve licensure. ',
        comment: '',
        right: 'Added 09/12/19',
        tab: 'Activity Feed',
    },
];

