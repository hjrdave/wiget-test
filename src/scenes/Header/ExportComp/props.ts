import { Props } from './Header';
export const props: Props = {
    logoPath: '/',
    logoAlt: 'Seven Corners',
    navItems: [
        {
            text: 'Customer Service',
            path: '',
            subItems: [
                {
                    text: 'Self Service Center',
                    path: 'https://www.sevencorners.com/about/self-service'
                },
                {
                    text: 'Medical Assistance',
                    path: 'https://www.sevencorners.com/about/assist'
                },
                {
                    text: 'Find a Doctor',
                    path: 'https://www.sevencorners.com/about/assist/find-providers'
                },
                {
                    text: 'Cancel or Change Plan',
                    path: 'https://www.sevencorners.com/about/contact'
                },
                {
                    text: 'Extend Coverage',
                    path: 'https://renewal.sevencorners.com/'
                },
                {
                    text: 'Plan Documents',
                    path: 'https://www.sevencorners.com/about/documents'
                },
                {
                    text: 'File a Claim',
                    path: 'https://www.sevencorners.com/about/self-service/claims'
                },
            ]
        },
        {
            text: 'Travel Center',
            path: '',
            subItems: [
                {
                    text: 'Travel Alerts and Safety Tips',
                    path: 'https://www.sevencorners.com/about/travel-alerts',
                },
                {
                    text: 'What Is Travel Insurance',
                    path: 'https://www.sevencorners.com/faq/what-is-travel-insurance',
                }
            ]
        },
        {
            text: 'Blog',
            path: 'https://www.sevencorners.com/blog'
        }
    ]
}