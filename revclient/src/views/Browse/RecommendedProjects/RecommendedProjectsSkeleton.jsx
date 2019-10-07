import React from 'react';
import Skeleton from 'react-loading-skeleton';

const RecommendedProjectsSkeleton = () => {
    return (
        <>
            <section className="skeleton-slider">
                <section className="carousel-card-inner __recommended">
                    <Skeleton count={1} height={280} width={240} />
                </section>
                <section className="carousel-card-inner __recommended">
                    <Skeleton count={1} height={280} width={240} />
                </section>
                <section className="carousel-card-inner __recommended">
                    <Skeleton count={1} height={280} width={240} />
                </section>
                <section className="carousel-card-inner __recommended">
                    <Skeleton count={1} height={280} width={240} />
                </section>
                <section className="carousel-card-inner __recommended">
                    <Skeleton count={1} height={280} width={240} />
                </section>
            </section>
        </>
    );
};

export default RecommendedProjectsSkeleton;
