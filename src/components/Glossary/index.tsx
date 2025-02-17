import React, { useState } from 'react'
import Image from 'next/image';
import { Container, Section } from './styles'

interface GlossaryItem {
    id: number;
    titulo: string;
    texto: string;
    img: string;
}

function Glossary() {

    const [list] = useState<GlossaryItem[]>([
        { id: 0, titulo: 'Animals', texto: 'A well-known gang from west Pacifica - The Animals - invented, then polished to perfection, a method of street fighting that lets them take on implanted opponents while using custom-brewed artisanal implants that eschew electronics. Their ferocity and love of battle make them prized bouncers and guards.', img: '/assets/images/imagesGlossary/Animals.jpg' },
        { id: 1, titulo: 'Arasaka', texto: 'The Arasaka Corporation is the longest-operating megacorp in the world and a global leader in security. Today, they are known as an arms-manufacturing giant that has had its hands in military conflicts across all continents. Due to the latest advances in technology and the companys seemingly unlimited capital, Arasaka is poised to achieve its political goals on a massive scale.', img: '/assets/images/imagesGlossary/Arasaka.jpg' },
        { id: 2, titulo: 'BD (Brain Dance)', texto: 'Braindance is the transfer of the conscious experiences of the person who recorded (or "scrolled") them to one who "relives" them with the same ease as watching a movie. The raw material must first be processed, or edited, before it can be used.', img: '/assets/images/imagesGlossary/Braindance.jpg' },
        { id: 3, titulo: 'Corpo', texto: 'Corporates (or in short "corpos") are the upper class in Night City. "Rich, powerful and persuasive" could be their slogan. A nice suit is their trademark. Characters who have sworn themselves to one corporate master or another are known as Corpos.', img: '/assets/images/imagesGlossary/Corpo.jpg' },
        { id: 4, titulo: 'Cyberpsychosis', texto: 'Cyberpsychosis is a collective term for all psychotic and anxiety-related personality disorders caused by hardware implanted in the body and any and all behavioral mods, including software. Most people believe that this disorder is caused by faulty cyberware, but not everyone agrees.', img: '/assets/images/imagesGlossary/Cyberpsychosis.jpg' },
        { id: 5, titulo: 'Cyberpunk (Edgerunner)', texto: 'Cyberpunk or Edgerunner is someone who lives on the edge and always pushes themselves to the limit. More than simply being a striver, an Edgerunner continually puts themselves in danger and lives close to failure in a world where the price of failure is death.', img: '/assets/images/imagesGlossary/Cyberpunk.jpg' },
        { id: 6, titulo: 'Cyberware (Implant or Chrome)', texto: 'Cyberware (implants or chrome) is a device implanted in the human body. There are many different types. Examples range from those mounted in the eyes to enhance vision to those mounted in the legs to increase jumping ability.', img: '/assets/images/imagesGlossary/Cyberware.jpg' },
        { id: 7, titulo: 'Fixer', texto: 'A fixer is an intermediary, a middleman between mercs and clients. They will choose your crew, negotiate a decent payout (after all, he or shes taking a cut), and pull you out of whatever you might land in on the job (unless it was your gonk fault, in which case – youre on your own).', img: '/assets/images/imagesGlossary/Fixer.jpg' },
        { id: 8, titulo: 'ICE (Intrusion Countermeasures Electronics)', texto: 'ICE stands for Intrusion Countermeasures Electronics, the most advanced form of security on the Net. Every sane corporation has a crack division of netrunners making sure their data fortress is well-protected. Meanwhile, every self-respecting netrunner does everything they can to find a backdoor in corporate ICE and gain access to their subnet.', img: '/assets/images/imagesGlossary/ICE.jpg' },
        { id: 9, titulo: 'Maelstrom', texto: 'Maelstrom is a gang that controls the districts of Watson and the Northside Industrial District (NID). You can easily recognize them by their intimidating faceplates and hostile optic implants, indicating their gang affiliation and their fetishization of cyberware and cybermodification.', img: '/assets/images/imagesGlossary/Maelstrom.jpg' },
        { id: 10, titulo: 'MaxTac', texto: 'MaxTac is an elite, special ops division of the NCPD with a singular aim: eliminate cyberpsychos. MaxTac officers enjoy their pick of weapons, the best cyberware, fresh, prototype gear and a free hand in carrying out their ops. But despite these overwhelming privileges, nobody in their right mind would ever join the force.', img: '/assets/images/imagesGlossary/Militech.jpg' },
        { id: 11, titulo: 'Militech', texto: 'Founded towards the end of the 20th century, Militech is an American arms production and military service provider powerhouse. These days they are one of the key global players in the private military sector.', img: '/assets/images/imagesGlossary/Militech.jpg' },
        { id: 12, titulo: 'NCPD (Night City Police Department / Night City Police)', texto: 'Night City Police Department (NCPD) is a corporate-backed police force that protects public safety in Night City. They exist to keep the city peaceful enough that corporations can do what corporations do.', img: '/assets/images/imagesGlossary/NCPD.jpg' },
        { id: 13, titulo: 'Netrunner', texto: 'A netrunner knows the ins and outs of computer systems, the programming languages, how to write or mod a killer virus. Deck in hand, theyre just as dangerous as a corporate soldier armed to the teeth. Many netrunners are free agents working only for themselves, but a few have signed their own pacts with the megacorps and work to keep corporate data fortresses solid and impenetrable. Today, each and every corporation has a veritable army of netrunners on its payroll.', img: '/assets/images/imagesGlossary/Netrunner.jpg' },
        { id: 14, titulo: 'Night city', texto: 'Night City is a dream city built at the end of the 20th century based on an urban vision by industrialist Richard Night. He aimed to create a future city that was not bound by old ideas and cramped rules. "Watson" and "Santo Domingo" are only two out of six districts, each inhabited by a different gang.', img: '/assets/images/imagesGlossary/Night-City.jpg' },
        { id: 15, titulo: 'Ripperdoc (Ripper)', texto: 'A ripperdoc is someone between a surgeon, techie and an artist. First, they can get you chipped with the latest implant on the market just because you can afford it. Then, if youre unlucky, a friend will drop you off at their clinic in pieces, and hopefully, they can put you back together.', img: '/assets/images/imagesGlossary/Ripperdoc.jpg' },
        { id: 16, titulo: 'Sandevistan ', texto: 'Sandevistan (cyberware) is a temporary status effect that can be activated on demand. Sandevistan will slow down time to a certain percentage for a set duration. Because of that, the user of that cyberware moves too fast, and ordinary humans cannot catch the movements.', img: '/assets/images/imagesGlossary/Sandevistan.jpg' },
        { id: 17, titulo: 'Scavengers', texto: 'The scavengers specialize in acquiring high-quality implants. Purposes vary, ranging from robbing the subject to illegal trafficking.', img: '/assets/images/imagesGlossary/Scavengers.jpg' },
        { id: 18, titulo: 'Solo', texto: 'Solo is a freelance mercenary who takes on dangerous commissions within Night City, mostly fighting with weapons and cyberware. Often hired for jobs that include murder, escort, theft, etc.', img: '/assets/images/imagesGlossary/Solo.jpg' },
        { id: 19, titulo: 'Techie', texto: 'Techies are the sort to cut their teeth on tech by taking it apart and putting it back together. They open an electric panel and not only know how to shut off the power, but also send an elevator to a specific floor, reconnect alarm systems or control a military bot from a safe, remote distance. Theyre also needed wherever hardware meets soft – braindance editing being one common example.', img: '/assets/images/imagesGlossary/Techie.jpg' },
        { id: 20, titulo: 'Trauma Team', texto: 'Trauma Team International is the largest provider of medical services in Night City, ranging from healthcare products, to health insurance, to medical-grade implants and replacement surgery. This may be the only corporation that enjoys such a high level of public trust.', img: '/assets/images/imagesGlossary/Trauma-Team.jpg' },
        { id: 21, titulo: 'Tyger Claws', texto: 'As a gang the Tyger Claws are well-organized, efficient and savvy – but also unpredictable. Many members are of Asian descent. Mainly operate out of Japantown, Little China, Kabuki and Charter Hill.', img: '/assets/images/imagesGlossary/Tyger-Claws.jpg' },
    ]);

    const [title, setTitle] = useState<string>('Animals')
    const [text, setText] = useState<string>('A well-known gang from west Pacifica - The Animals - invented, then polished to perfection, a method of street fighting that lets them take on implanted opponents while using custom-brewed artisanal implants that eschew electronics. Their ferocity and love of battle make them prized bouncers and guards.')
    const [imageGlossary, setImageGlossary] = useState<string>('/assets/images/imagesGlossary/Animals.jpg')
    const [selectedItemId, setSelectedItemId] = useState<number | null>(0);

    function handleContent(id: number) {
        const selectedItem = list.find((item) => item.id === id);
        if (selectedItem) {
            setTitle(selectedItem.titulo);
            setText(selectedItem.texto);
            setImageGlossary(selectedItem.img);
            setSelectedItemId(id);
        }
    }

    return (
        <Container>
            <Section>
                <div className='title-glossary'>
                    <h1>Glossary</h1>
                </div>

                <div className='content-separator-top'>
                    <div className='separator-left'></div>
                    <div className='line-separator'></div>
                    <div className='separator-right'></div>
                </div>

                <div className="content-glossary">
                    <div className="list">
                        <div className='list-item'>
                            {list.slice(0, 10).map((item) => (
                                <p
                                    key={item.id}
                                    onClick={() => handleContent(item.id)}
                                    className={`glossary-item ${selectedItemId === item.id ? 'selected' : ''}`}
                                >
                                    {item.titulo}
                                </p>
                            ))}

                        </div>
                        <div className='list-item'>
                            {list.slice(10, 22).map((item) => (
                                <p
                                    key={item.id}
                                    onClick={() => handleContent(item.id)}
                                    className={`glossary-item ${selectedItemId === item.id ? 'selected' : ''}`}
                                >
                                    {item.titulo}
                                </p>
                            ))}

                        </div>
                    </div>
                    <div className="about-image">
                        <div className="image">
                            <Image src={imageGlossary} alt='teste' fill quality={100} />
                            <div className='gradient-overlay'></div>
                        </div>
                        <h4>{title}</h4>
                        <p>{text}</p>
                    </div>
                </div>

                <div className='content-separator-bottom'>
                    <div className='separator-left'></div>
                    <div className='line-separator'></div>
                    <div className='separator-right'></div>
                </div>

            </Section>
            <div className="black-line"></div>
        </Container>
    )
}

export default Glossary
