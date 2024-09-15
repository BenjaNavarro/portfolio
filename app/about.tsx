declare interface ComponentProps {
    aboutRef: React.MutableRefObject<null>
}

export default function About({
    aboutRef
}: ComponentProps) {
    return (
        <section ref={aboutRef} className="h-screen">
            about
        </section>
    );
}
