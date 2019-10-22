export const users = [
    {
        id: 1,
        userAccountId: 1,
        email: "fractured2k@gmail.com",
        firstName: "Skyelar",
        lastName: "Carrol",
        handle: "@Skyelar",
        profileImage: "https://res.cloudinary.com/revitalize/image/upload/v1569861721/user%20dashboard/Skyelar_Carrol_PROFILE_PICTURE_left_side_yjinm3.png",
        city: "Grand Haven",
        zip: "",
        address: "",
        state: "MI",
        aptNumber: "",
        projects: [],
        phoneNumber: "889-214-8971",
        zoom: "SkyfiCrole",
        certifications: 2,
        hoursLogged: 396,
        creditHours: 22,
        achievements: [
            {
                name: "Master Key Award",
                image: "https://res.cloudinary.com/revitalize/image/upload/v1569861718/user%20dashboard/Master_Key_Award_rq39jb.svg",
                number: 2
            },
            {
                name: "Thanos Grip Award",
                image: "https://res.cloudinary.com/revitalize/image/upload/v1569861722/user%20dashboard/Thanos_Grip_Award_bk41rq.svg",
                number: 1
            },
            {
                name: "Magic Wand",
                image: "https://res.cloudinary.com/revitalize/image/upload/v1569861718/user%20dashboard/Magic_Wand_ixlwzs.svg",
                number: 12
            },
            {
                name: "Rupee Award",
                image: "https://res.cloudinary.com/revitalize/image/upload/v1569861720/user%20dashboard/Rupee_Award_xupbpz.svg",
                number: 36
            }
        ],
        apprentice: true,
        master: false
    },
    {
        id: 2,
        userAccountId: 2,
        email: "Maleescha Mclarin@gmail.com",
        firstName: "Maleescha",
        lastName: "Mclarin",
        handle: "@TheeMclarin ",
        profileImage: "https://res.cloudinary.com/revitalize/image/upload/v1569861718/user%20dashboard/Maleescha_Mclarin_qsafnt.png",
        city: "Detroit",
        zip: "",
        address: "",
        state: "MI",
        aptNumber: "",
        projects: [],
        phoneNumber: "356-230-9971",
        zoom: "TheeMclarin",
        certifications: 2,
        hoursLogged: 396,            
        creditHours: 22,
        achievements: [],
        apprentice: false,
        master: true
    }
];
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
export const apprenticeTabs = ['New Tasks', 'Tasks In Progress', 'Completed Tasks', 'Activity Feed'];
export const defaultApprenticeTab = 'New Tasks';
export const apprenticeList = [
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


export const nearList = [
    {
        id: 1,

        name: "Railway Dreams",
        description: "The subway system in St Joseph needs help revamping the transit to meet expansion deadline.",
        state: "MI",
        city: "St. Joseph",
        goalAmount: 0.00,
        amountFunded: 0.00,
        images: ["https://res.cloudinary.com/revitalize/image/upload/v1569451131/start%20page/Railway_Dreams_zhwuff.svg"],
        featuredImage: "https://res.cloudinary.com/revitalize/image/upload/v1569451131/start%20page/Railway_Dreams_zhwuff.svg",
        liked: false,
    },
    {
        id: 2,
        name: "Grey-Red Matter",
        description: "Reclaim is a non profit that partners with the city to mentor trade students.",
        state: "MI",
        city: "Grand Rapids",
        goalAmount: 0.00, 
        amountFunded: 0.00,
        images: ["https://res.cloudinary.com/revitalize/image/upload/v1569451120/start%20page/Red_Grey_Matter_zwdfbs.svg"],
        featuredImage: "https://res.cloudinary.com/revitalize/image/upload/v1569451120/start%20page/Red_Grey_Matter_zwdfbs.svg",
        liked: false,
    },
    {
        id: 3,
        name: "Iron Syde Shop",
        description: "Apprentices learn next to expert welders on how to sharpen blades for industrial machines.  ",
        state: "MI",
        city: "Ann Arbor",
        goalAmount: 0.00,
        amountFunded: 0.00,
        images: ["https://res.cloudinary.com/revitalize/image/upload/v1569451126/start%20page/Iron_Syde_Shop_ickfun.svg"],
        featuredImage: "https://res.cloudinary.com/revitalize/image/upload/v1569451126/start%20page/Iron_Syde_Shop_ickfun.svg",
        liked: false,
    },
    {
        id: 4,
        name: "Mission Zero",
        description: "Javontay investigates the construction rubble of a collapsed building after tornado strikes.",
        state: "MI",
        city: "Flint",
        goalAmount: 0.00,
        amountFunded: 0.00,
        images: ["https://res.cloudinary.com/revitalize/image/upload/v1569451129/start%20page/Mission_Zero_image_xs2wtv.svg"],
        featuredImage: "https://res.cloudinary.com/revitalize/image/upload/v1569451129/start%20page/Mission_Zero_image_xs2wtv.svg",
        liked: false,
    },
    {
        id: 5,
        name: "Team Rubicon",
        description: "Restoring ancient warehouse to careers training high school in the heart of Detroit.",
        state: "MI",
        city: "Detroit",
        goalAmount: 0.00,
        amountFunded: 0.00,
        images: ["https://res.cloudinary.com/revitalize/image/upload/v1569451138/start%20page/Team_Rubicon_xlxh6r.svg"],
        featuredImage: "https://res.cloudinary.com/revitalize/image/upload/v1569451138/start%20page/Team_Rubicon_xlxh6r.svg",
        liked: false,
    },
    {
        id: 6,
        name: "Camp Crystal Lake",
        description: "Park Rangers mentor and explain nature’s complexities regarding its interactions with humans.",
        state: "MI",
        city: "Grand Haven",
        goalAmount: 0.00,
        amountFunded: 0.00,
        images: ["https://res.cloudinary.com/revitalize/image/upload/v1569451117/start%20page/Camp_Crystal_Lake_jqewaz.svg"],
        featuredImage: "https://res.cloudinary.com/revitalize/image/upload/v1569451117/start%20page/Camp_Crystal_Lake_jqewaz.svg",
        liked: false,
    },
    {
        id: 7,
        name: "Rustic Road Brewery",
        description: "Apprentices learn behind the scenes of the process of making one of finest chilled drink of Kalamazoo.",
        state: "MI",
        city: "Kalamazoo",
        goalAmount: 0.00,
        amountFunded: 0.00,
        images: ["https://res.cloudinary.com/revitalize/image/upload/q_38/v1569451133/start%20page/Rustic_Road_Brewery_tulxbq.png"],
        featuredImage: "https://res.cloudinary.com/revitalize/image/upload/q_38/v1569451133/start%20page/Rustic_Road_Brewery_tulxbq.png",
        liked: false,
    },
    {
        id: 8,
        name: "Velvet Thread",
        description: "Amber continues to teach the family tradition of sewing handmade garments with a modern twist.",
        state: "MI",
        city: "Royal Oak",
        goalAmount: 0.00,
        amountFunded: 0.00,
        images: ["https://res.cloudinary.com/revitalize/image/upload/v1569451138/start%20page/Velvet_Thread_e2e8u3.svg"],
        featuredImage: "https://res.cloudinary.com/revitalize/image/upload/v1569451138/start%20page/Velvet_Thread_e2e8u3.svg",
        liked: false
    },
    {
        id: 9,
        name: "Cup of Joe’s Cafe",
        description: "Implement blueprint including working with construction manager, interior design and final inspection.",
        state: "MI",
        city: "Detroit",
        goalAmount: 0.00,
        amountFunded: 0.00,
        images: ["https://res.cloudinary.com/revitalize/image/upload/v1569516054/start%20page/Cup_of_Joe_s_Cafe_gbkrft.png"],
        featuredImage: "https://res.cloudinary.com/revitalize/image/upload/v1569516054/start%20page/Cup_of_Joe_s_Cafe_gbkrft.png",
        liked: false
    }
]