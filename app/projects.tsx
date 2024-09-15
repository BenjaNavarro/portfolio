declare interface ComponentProps {
    projectsRef: React.MutableRefObject<null>
}

export default function Projects({
    projectsRef
}: ComponentProps) {
    return (
        <section ref={projectsRef} className="h-screen">
            projects
        </section>
    );
}
