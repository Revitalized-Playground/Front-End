import React from 'react';
import Skeleton from 'react-loading-skeleton';

const NoteworthySkeleton = () => {
    return (
        <>
            <section className="skeleton-slider">
                <section className="carousel-card-inner __near-you" >
                    <Skeleton count={1} height={275} width={300} />
                </section>
                <section className="carousel-card-inner __near-you" >
                    <Skeleton count={1} height={275} width={300} />
                </section>
                <section className="carousel-card-inner __near-you" >
                    <Skeleton count={1} height={275} width={300} />
                </section>
                <section className="carousel-card-inner __near-you" >
                    <Skeleton count={1} height={275} width={300} />
                </section>
            </section>
        </>
    );
};

export default NoteworthySkeleton;

