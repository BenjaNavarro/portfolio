declare interface ComponentProps{
    handleScroll: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export default function Header({
    handleScroll
}: ComponentProps) {

    const headerNav = [
        { label: 'Sobre mí', name: 'about' },
        { label: 'Proyectos', name: 'projects' },
        { label: 'Contacto', name: 'contact' }
    ];

    return (
        <head className='flex w-full items-center !bg-inherit'>
            <h1 className='p-4 text-3xl font-bold text-white bg-inherit'>LOGO</h1>
            <ol className='flex w-full items-center justify-around bg-inherit text-white'>
                {headerNav.map((h, i) => 
                    <li key={i}>
                        <button
                            name={h.name}
                            onClick={handleScroll}
                        >
                            {h.label}
                        </button>
                    </li>
                )} 
            </ol>
        </head>
    );
}
