declare interface ComponentProps {
    projectsRef: React.MutableRefObject<null>
}

export default function Projects({
    projectsRef
}: ComponentProps) {
    return (
        <section ref={projectsRef} className="h-screen flex w-full justify-center items-center">
            projects
        </section>
    );
}
