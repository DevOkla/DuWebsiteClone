// src/cardData.js

// price,
// powerPlan,
// datatype,
// dataAmount,
// minutes,
// minutesType,

const cardData = [
    [
        {
            price: 125,
            powerPlan: "125",
            datatype: "National Data",
            olderDataAmmount: false,
            dataAmount: "4 GB",
            minutes: "100 ",
            minutesType: "Flexi Minutes",
            perks: ["No activation fee. Save AED 125", "4 GB free data on WiFi UAE"],
            offer: false,
            isPopular: false,
        },
        {
            price: 200,
            powerPlan: "200",
            datatype: "Double national Data",
            olderDataAmmount: 13,
            dataAmount: "26 GB",
            minutes: "400 ",
            minutesType: "Flexi Minutes",
            perks: [
                "No activation fee. Save AED 125",
                "15 GB free data on WiFi UAE",
                "Carry over data to next month",
            ],
            offer: true,
            isPopular: true,
        },
        {
            price: 300,
            powerPlan: "120",
            datatype: "Double national Data",
            olderDataAmmount: 25,
            dataAmount: "50 GB",
            minutes: "1020 ",
            minutesType: "Flexi Minutes",
            perks: [
                "No activation fee. Save AED 125",
                "25 GB free data on WiFi UAE",
                "Carry over data to next month",
                "Amazon Prime on us",
                "Free Internet Calling Pack",
            ],
            offer: true,
            isPopular: false,
        },
        {
            price: 500,
            powerPlan: "500",
            datatype: "Double national Data",
            olderDataAmmount: 50,
            dataAmount: "100 GB",
            minutes: "100 ",
            minutesType: "Flexi Minutes",
            perks: [
                "No activation fee. Save AED 125",
                "100 GB free data on WiFi UAE",
                "Carry over data to next month",
                "Amazon Prime on us",
                "Free Internet Calling Pack",
                "Roaming 2 GB",
            ],
            offer: true,
            isPopular: false,
        },
        {
            price: 1000,
            powerPlan: "1000",
            datatype: "Double national Data",
            olderDataAmmount: 120,
            dataAmount: "Unlimited",
            olderMinutes: 2500,
            minutes: "unlimited ",
            minutesType: "Flexi Minutes",
            perks: [
                "No activation fee. Save AED 125",
                "120 GB free data on WiFi UAE",
                "Amazon Prime on us",
                "Carry over data to next month",
                "Free Internet Calling Pack",
                "Roaming 5 GB",
            ],
            offer: true,
            isPopular: false,
        },
    ],
];

export default cardData;
