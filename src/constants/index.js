import { useState } from "react"
import { useEffect } from "react"

export const dropDownData = [
    {
        id: 1,
        title: 'Deposit Crypto',
        body: 'Receive crypto from other wallets to your Zend wallet instantly'
    },
    {
        id: 2,
        title: 'Withdraw Crypto',
        body: 'send crypto to another Zend user or external wallets seamlessly'
    },
    {
        id: 3,
        title: 'Zend USD',
        body: 'Use Zend wallet to make USD payment to customers'
    },
    {
        id: 4,
        title: 'Swap Crypto',
        body: 'Swap from one coin to another instantly at a very affordable market price'
    },
    {
        id: 5,
        title: 'Zend Prepaid',
        body: 'load your American express and Walmart visa cards instantly thereby side stepping slow middle men'
    },

]

export const changingData = [
    {
        id: 1,
        content: 'The Best Experience for your Crypto ',
        span: "Wallets"
    },
    {
        id: 2,
        content: 'Make USD payments to customers ',
        span: 'Seamlessly'
    },
    {
        id: 3,
        content: 'Complete Experience for your Crypto',
        span: "Wallet"
    },
    {
        id: 4,
        content: 'Covert your gift Cards to crypto',
        span: 'instantly'
    },
]

export const qualities = [
    {
        id: 1,
        img: '/img/24-7.svg',
        title: '24/7 Support',
        body: 'Readily available to help and provide answers to questions as soon as they come up.'
    },
    {
        id: 2,
        img: '/img/safe-secure.svg',
        title: 'Safe & Secure',
        body: 'Using our platform is safe & Secure, your data are safe with us, all data is classified as confidential'
    },
    {
        id: 3,
        img: '/img/authentic.svg',
        title: '100% Authentic',
        body: 'Yes, we are 100% authentic, you have nothing to worry about'
    },

]
export const testimoniesData = [
    {
        id: 1,
        img: "/img/person-1.svg",
        body: "“Omo the speed at which you can swap your coins is very fast, the exchange fee is also cheap Please keep it up”",
        name: "_ Ojuolape Olayinka"
    },
    {
        id: 2,
        img: "/img/person-2.svg",
        body: "The exchange rate for prepaid cards is awesome!!!",
        name: "_ Sheggyz"
    },
    {
        id: 3,
        img: "/img/person-4.svg",
        body: "The mobile app interface is really nice, i wish other application can look like this",
        name: "_ Majestic"
    },
    {
        id: 4,
        img: "/img/person-4.svg",
        body: "Wow!! the Zend prepaid for Zend prepaid cards is easy to use ,it's fast and reliable.",
        name: "_ Alhaji Bello"
    },
    {
        id: 5,
        img: "/img/person-5.svg",
        body: "This is app is really different from crypto app, weldone guys",
        name: "_ Emmanuel"
    },
    {
        id: 6,
        img: "/img/person-6.svg",
        body: "This is fantastic ,I'll tell my friends about Zend wallet",
        name: "_ Halima"
    }

]
export const socialsData = [
    {
        id: 1,
        path: '/img/facebook.svg',
        size: 'w-[10px]',
        link: 'https://web.facebook.com/people/Zend-Wallet/100086942673485/'
    },
    {
        id: 2,
        path: 'img/twitter.svg',
        size: 'w-[14px]',
        link: 'https://twitter.com/zendwallet'
    },
    {
        id: 3,
        path: 'img/instagram.svg',
        size: 'w-[14px]',
        link: 'https://www.instagram.com/zendhq/'
    }
]

export function useScrollDirection() {
    const [scrollDirection, setScrollDirection] = useState(null);

    useEffect(() => {
        let lastScrollY = window.pageYOffset;

        const updateScrollDirection = () => {
            const scrollY = window.pageYOffset;
            const direction = scrollY > lastScrollY ? "down" : "up";
            if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
                setScrollDirection(direction);
            }
            lastScrollY = scrollY > 0 ? scrollY : 0;
        };
        window.addEventListener("scroll", updateScrollDirection); // add event listener
        return () => {
            window.removeEventListener("scroll", updateScrollDirection); // clean up
        }
    }, [scrollDirection]);

    return scrollDirection;
};

