declare interface ComponentProps {
    contactRef: React.MutableRefObject<null>
}

export default function Contact({
    contactRef
}: ComponentProps) {
    return (
        <section ref={contactRef} className="h-screen">
            contact
        </section>
    );
}
