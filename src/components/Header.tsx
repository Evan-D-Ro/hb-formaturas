import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo_horizontal.png";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("inicio");
    const navRef = useRef<HTMLElement | null>(null);

    /* Fundo ao scroll */
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    /* Section ativa */
    useEffect(() => {
        const sections = document.querySelectorAll("section[id]");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                rootMargin: "-120px 0px -50% 0px",
                threshold: 0.1,
            }
        );

        sections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, []);

    /* Scroll suave */
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        const navHeight = navRef.current?.offsetHeight ?? 112;

        if (!element) return;

        const top =
            element.getBoundingClientRect().top + window.scrollY - navHeight;

        window.scrollTo({
            top,
            behavior: "smooth",
        });

        setIsMenuOpen(false);
        setActiveSection(id);
    };

    const menuItems = [
        { label: "Início", id: "inicio" },
        { label: "Sobre", id: "sobre" },
        { label: "Diferenciais", id: "diferenciais" },
        { label: "Serviços", id: "servicos" },
        { label: "Galeria", id: "galeria" },
    ];

    return (
        <nav
            ref={navRef}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                    ? "bg-black/90 backdrop-blur-md shadow-lg"
                    : "bg-transparent"
                }`}
        >

            <div className="container mx-auto px-4 md:px-8 lg:px-16">
                <div className="flex h-28 items-center justify-between relative">
                    {/* Logo / Texto */}
                    <div
                        onClick={() => scrollToSection("inicio")}
                        className="relative cursor-pointer flex items-center"
                    >
                        {/* Texto na Hero */}
                        <span
                            className={`absolute inset-x-0 flex justify-center items-center gap-1 whitespace-nowrap text-lg md:text-xl font-extrabold tracking-wide transition-all duration-500 ${activeSection === "inicio"
                                ? "opacity-100 scale-100 translate-y-0 text-white drop-shadow-md"
                                : "opacity-0 scale-90 -translate-y-2 pointer-events-none"
                                }`}
                        >
                            <span className="text-white [text-shadow:_1px_1px_0_#FFD447]">
                                HB
                            </span>
                            <span className="relative text-white font-semibold">
                                <span className="relative z-10">Formaturas</span>
                                <span className="absolute inset-x-0 bottom-0 h-1 bg-primary rounded-sm -z-0" />
                            </span>
                        </span>

                        {/* Logo fora da Hero */}
                        <img
                            src={logo}
                            alt="HB Formaturas"
                            className={`h-16 w-auto object-contain transition-all duration-700 ${activeSection !== "inicio"
                                ? "opacity-100 scale-100 translate-y-0"
                                : "opacity-0 scale-90 translate-y-2 pointer-events-none"
                                }`}
                        />
                    </div>

                    {/* Menu Desktop */}
                    <div className="hidden md:flex items-center gap-8">
                        {menuItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className={`relative font-medium transition-colors duration-300 ${activeSection === item.id
                                    ? "text-primary after:w-full"
                                    : "text-white hover:text-primary"
                                    } after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 ${activeSection === item.id
                                        ? "after:w-full"
                                        : "after:w-0 hover:after:w-full"
                                    }`}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>

                    {/* Botão Mobile */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="md:hidden text-white"
                        onClick={() => setIsMenuOpen((v) => !v)}
                    >
                        {isMenuOpen ? <X /> : <Menu />}
                    </Button>
                </div>

                {/* Menu Mobile */}
                {isMenuOpen && (
                    <div className="md:hidden py-4 border-t border-white/20">
                        {menuItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className={`block w-full text-left py-3 px-4 rounded-lg transition-all ${activeSection === item.id
                                    ? "bg-[#EB3F5B]/10 text-primary"
                                    : "text-white hover:bg-white/10"
                                    }`}
                            >
                                {item.label}
                            </button>
                        ))}

                        <div className="mt-4 px-4">
                            <Button
                                className="w-full bg-[#EB3F5B] hover:bg-[#d5344f] text-white font-semibold rounded-xl"
                                onClick={() =>
                                    window.open(
                                        "https://wa.me/554499243080?text=Olá! Gostaria de saber mais sobre os álbuns de formatura.",
                                        "_blank"
                                    )
                                }
                            >
                                Fale Conosco
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
