import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

export const HeaderSkeleton = () => {
    return (
        <SkeletonTheme color="#ffffff" highlightColor="#fafafa">

            <section className="header-skeleton">
                <section className="skeleton-card-inner __skeleton">
                    <Skeleton count={1} height={300} width={900} />
                </section>
            </section>
            
        </SkeletonTheme>
    );
};


