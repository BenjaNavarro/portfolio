declare interface ComponentProps {
    aboutRef: React.MutableRefObject<null>
}

export default function About({
    aboutRef
}: ComponentProps) {
    return (
        <section ref={aboutRef} className="h-screen flex w-full justify-center items-center">
            about
        </section>
    );
}
