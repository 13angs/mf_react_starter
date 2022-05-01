import React from 'react';
import Container from '../components/Container';
import FragmentApp from '../apps/FragmentApp';

function HomePage({ children }) {
    return (
        <section>
            <Container>
                <FragmentApp />
            </Container>
        </section>
    )
}

export default HomePage