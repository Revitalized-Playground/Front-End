import React from 'react';
import Skeleton from 'react-loading-skeleton';

const RecommendedProjectsSkeleton = () => {
    return (
        <>
            <section className="skeleton-slider">
                <section className="carousel-card-inner __recommended">
                    <Skeleton count={1} height={320} width={280} />
                </section>
                <section className="carousel-card-inner __recommended">
                    <Skeleton count={1} height={320} width={280} />
                </section>
                <section className="carousel-card-inner __recommended">
                    <Skeleton count={1} height={320} width={280} />
                </section>
                <section className="carousel-card-inner __recommended">
                    <Skeleton count={1} height={320} width={280} />
                </section>
                <section className="carousel-card-inner __recommended">
                    <Skeleton count={1} height={320} width={280} />
                </section>
            </section>
        </>
    );
};

export default RecommendedProjectsSkeleton;
