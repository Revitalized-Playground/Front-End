import React from 'react';
import Skeleton from 'react-loading-skeleton';

const RecommendedProjectsSkeleton = () => {
    return (
        <>
            <section className="skeleton-slider">
                <section className="carousel-card-inner __recommended">
                    <Skeleton count={1} height={345} width={296} />
                </section>
                <section className="carousel-card-inner __recommended">
                    <Skeleton count={1} height={345} width={296} />
                </section>
                <section className="carousel-card-inner __recommended">
                    <Skeleton count={1} height={345} width={296} />
                </section>
                <section className="carousel-card-inner __recommended">
                    <Skeleton count={1} height={345} width={296} />
                </section>
                <section className="carousel-card-inner __recommended">
                    <Skeleton count={1} height={345} width={296} />
                </section>
            </section>
        </>
    );
};

export default RecommendedProjectsSkeleton;
