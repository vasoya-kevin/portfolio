
import { Geist_Mono, Afacad, Inter, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";

const afacad = Afacad({
    variable: "--font-afacad-sans",
    subsets: ["latin"],
    weight: "400"
});

const inter = Inter({
    variable: "--font-inter-sans",
    subsets: ["latin"],
    weight: "400"
});

const ibmPlexSans = IBM_Plex_Sans({
    variable: "--font-ibm-sans",
    subsets: ["latin"],
    weight: "400"
});

const ibmPlexMono = IBM_Plex_Mono({
    variable: "--font-ibm-mono",
    subsets: ["latin"],
    weight: "400"
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});


export {
    afacad,
    inter,
    ibmPlexSans,
    ibmPlexMono,
    geistMono
}