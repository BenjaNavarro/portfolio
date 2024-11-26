"use client"
import { useTheme } from "next-themes";
import { useEffect, useMemo } from "react";
import Dark from "./icons/dark";
declare interface ComponentProps {
    handleScroll: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export default function Header({
    handleScroll
}: ComponentProps) {
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = useMemo(
        () => theme === 'system' ? systemTheme : theme, 
        [theme, systemTheme]
    );

    useEffect(() => {
        console.log({theme});
    }, [theme]);

    const headerNav = [
        { label: 'Sobre mí', name: 'about' },
        { label: 'Proyectos', name: 'projects' },
        { label: 'Contacto', name: 'contact' }
    ];

    return (
        <header className='flex w-full items-center sticky top-0 bg-inherit px-8'>
            <h1 className='p-4 text-3xl font-bold'>LOGO</h1>
            <ol className='flex w-full items-center justify-around'>
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
            <button 
                className="w-8 p-1 m-1 flex items-center justify-center"
                onClick={() => theme == "dark"? setTheme('light'): setTheme("dark")}
            >
                <Dark
                    className="cursor-[inherit]"
                />
            </button>
        </header>
    );
}
