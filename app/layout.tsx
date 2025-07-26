import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Muhammad Riyan - AI Software Engineer & Full Stack Developer",
  description:
    "Portfolio of Muhammad Riyan, an AI Software Engineer and Full Stack Developer specializing in Flutter, Node.js, and AI/ML technologies.",
  generator: "Next.js",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
