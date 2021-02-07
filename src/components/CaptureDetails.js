import React from 'react';
import styled from 'styled-components';
import Subscribe from './Subscribe';
import WriteToUs from './WriteToUs';

const Section=styled.section`
    width:100%;
    height:100%;
    padding:4rem 6rem;
`;

const Container=styled.div`
    padding:3rem calc((100vw-1300px)/2);
    display:grid;
    grid-template-columns:1fr 1fr;
    grid-template-rows::800px;

    @media screen and (max-width:760px){
        grid-template-columns:1fr;
    }
`;

const CaptureDetails = () => {
    return (
        <Section>
            <Container>
                <Subscribe />
                <WriteToUs />
            </Container>
        </Section>
    )
}

export default CaptureDetails
