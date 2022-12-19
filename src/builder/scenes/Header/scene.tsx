
import React from 'react';
import Header from '../../../widgets/components/organisms/Header';

interface Props {

};

export default function Scene({ }: Props) {

    return (
        <>
            <Header
                navItems={[
                    {
                        text: 'Products',
                        type: 'megaMenu',
                        subItems: []
                    },
                    {
                        text: 'Customer Service',
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
                            }
                        ]
                    },
                    {
                        text: 'Blog',
                        path: 'https://www.sevencorners.com/blog'
                    },
                ]}
            />
        </>
    )
}
