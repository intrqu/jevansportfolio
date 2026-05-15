"use client";

import { useEffect, ReactNode } from 'react';

interface GalleryWrapperProps {
    children: ReactNode;
}

function GalleryWrapper({ children }: GalleryWrapperProps) {
    useEffect(() => {
        let lightbox: { destroy: () => void } | null = null;
        let cancelled = false;

        import('glightbox').then(({ default: GLightbox }) => {
            if (cancelled) return;
            lightbox = GLightbox({
                selector: '.glightbox',
                touchNavigation: true,
                loop: true,
                autoplayVideos: true,
            });
        });

        return () => {
            cancelled = true;
            lightbox?.destroy();
        };
    }, []);

    return <>{children}</>;
}

export default GalleryWrapper;
