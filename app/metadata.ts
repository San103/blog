import { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadataKeywords = [
    "Blog",
    "React",
    "MagicUI Blog",
    "MagicUI Blog Template",
    "MagicUI Blog Template Next.js",
    "MagicUI Blog Template Tailwind",
    "MagicUI Blog Template Shadcn",
    "Next.js Blog",
    "React Blog",
    "Web Development",
    "Tutorials",
    "MDX Blog",
    "Modern Blog Template",
]

export const metadata: Metadata = {
    title: siteConfig.name,
    description: siteConfig.description,
    keywords: metadataKeywords,
    authors: [
        {
            name: "MagicUI Team",
            url: "https://magicui.design",
        },
    ],
    creator: "MagicUI",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: siteConfig.url,
        title: siteConfig.name,
        description: siteConfig.description,
        siteName: siteConfig.name,
    },
    twitter: {
        card: "summary_large_image",
        title: siteConfig.name,
        description: siteConfig.description,
        creator: "@magicui_design",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};