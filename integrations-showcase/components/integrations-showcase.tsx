"use client"

import type React from "react"

import { useEffect, useRef } from "react"

const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>, fallbackSrc: string) => {
  const target = e.target as HTMLImageElement
  if (target.src !== fallbackSrc) {
    target.src = fallbackSrc
  }
}

const integrations = [
  // First row
  [
    {
      name: "OneDrive",
      logo: "https://img.icons8.com/color/48/onedrive.png",
      fallback: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/onedrive/onedrive-original.svg",
    },
    {
      name: "Outlook",
      logo: "https://img.icons8.com/color/48/microsoft-outlook-2019.png",
      fallback:
        "https://upload.wikimedia.org/wikipedia/commons/d/df/Microsoft_Office_Outlook_%282018%E2%80%93present%29.svg",
    },
    { name: "Todoist", logo: "https://img.icons8.com/color/48/todoist.png" },
    { name: "Trello", logo: "https://img.icons8.com/color/48/trello.png" },
    { name: "Asana", logo: "https://img.icons8.com/color/48/asana.png" },
    { name: "Discord", logo: "https://img.icons8.com/color/48/discord-logo.png" },
    { name: "Miro", logo: "https://img.icons8.com/color/48/miro.png" },
    { name: "Calendly", logo: "https://img.icons8.com/color/48/calendly.png" },
    { name: "Twilio", logo: "https://img.icons8.com/color/48/twilio.png" },
    { name: "Zendesk", logo: "https://img.icons8.com/color/48/zendesk.png" },
    { name: "Intercom", logo: "https://img.icons8.com/color/48/intercom.png" },
    { name: "Microsoft Teams", logo: "https://img.icons8.com/color/48/microsoft-teams.png" },
    { name: "Salesforce", logo: "https://img.icons8.com/color/48/salesforce.png" },
    { name: "Slack", logo: "https://img.icons8.com/color/48/slack-new.png" },
    { name: "Figma", logo: "https://img.icons8.com/color/48/figma--v1.png" },
    { name: "GitHub", logo: "https://img.icons8.com/color/48/github--v1.png" },
    { name: "GitLab", logo: "https://img.icons8.com/color/48/gitlab.png" },
    { name: "Jira", logo: "https://img.icons8.com/color/48/jira.png" },
    { name: "Confluence", logo: "https://img.icons8.com/color/48/confluence.png" },
    { name: "Bitbucket", logo: "https://img.icons8.com/color/48/bitbucket.png" },
  ],
  // Second row
  [
    { name: "Google Sheets", logo: "https://img.icons8.com/color/48/google-sheets.png" },
    { name: "Evernote", logo: "https://img.icons8.com/color/48/evernote.png" },
    { name: "Typeform", logo: "https://img.icons8.com/color/48/typeform.png" },
    { name: "Basecamp", logo: "https://img.icons8.com/color/48/basecamp.png" },
    { name: "Monday.com", logo: "https://img.icons8.com/color/48/monday.png" },
    { name: "ClickUp", logo: "https://img.icons8.com/color/48/clickup.png" },
    { name: "Zoom", logo: "https://img.icons8.com/color/48/zoom.png" },
    { name: "Loom", logo: "https://img.icons8.com/color/48/loom.png" },
    { name: "Google Calendar", logo: "https://img.icons8.com/color/48/google-calendar--v2.png" },
    { name: "HubSpot", logo: "https://img.icons8.com/color/48/hubspot.png" },
    { name: "Dropbox", logo: "https://img.icons8.com/color/48/dropbox.png" },
    { name: "Google Drive", logo: "https://img.icons8.com/color/48/google-drive--v1.png" },
    { name: "Notion", logo: "https://img.icons8.com/color/48/notion--v1.png" },
    { name: "Airtable", logo: "https://img.icons8.com/color/48/airtable.png" },
    { name: "Zapier", logo: "https://img.icons8.com/color/48/zapier.png" },
    { name: "Mailchimp", logo: "https://img.icons8.com/color/48/mailchimp.png" },
    { name: "Stripe", logo: "https://img.icons8.com/color/48/stripe.png" },
    { name: "PayPal", logo: "https://img.icons8.com/color/48/paypal.png" },
    { name: "Shopify", logo: "https://img.icons8.com/color/48/shopify.png" },
    { name: "WordPress", logo: "https://img.icons8.com/color/48/wordpress.png" },
  ],
]

export function IntegrationsShowcase() {
  const firstRowRef = useRef<HTMLDivElement>(null)
  const secondRowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const firstRow = firstRowRef.current
    const secondRow = secondRowRef.current

    if (!firstRow || !secondRow) return

    // Set initial positions
    firstRow.style.transform = "translate(-22.7015%, 0px)"
    secondRow.style.transform = "translate(-27.2985%, 0px)"

    // Faster animation speed
    const animateRow = (element: HTMLElement, direction: number, initialOffset: number) => {
      let offset = initialOffset

      const animate = () => {
        offset += direction * 0.08 // Increased speed from 0.02 to 0.08

        if (offset > 0) offset = -50
        if (offset < -50) offset = 0

        element.style.transform = `translate(${offset}%, 0px)`
        requestAnimationFrame(animate)
      }

      animate()
    }

    animateRow(firstRow, 0.4, -22.7015) // Increased from 0.1 to 0.4
    animateRow(secondRow, -0.4, -27.2985) // Increased from -0.1 to -0.4
  }, [])

  return (
    <div
      className="w-full overflow-hidden cursor-default py-6 md:py-10"
      style={{
        color: "#292d34",
        lineHeight: "1.5",
        fontFamily:
          '"Plus Jakarta Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif',
      }}
    >
      <div className="w-full relative cursor-default py-2 md:py-[10px]">
        {/* Central Logo - responsive sizing */}
        <div
          className="absolute top-1/2 left-1/2 z-10 flex justify-center items-center cursor-default w-[120px] h-[120px] md:w-[193px] md:h-[193px] backdrop-blur-md bg-white/20 border border-white/30"
          style={{
            transform: "translate(-50%, -50%)",
            boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
            borderRadius: "124.516px",
          }}
        >
          <img
            src="/images/logo.png"
            alt="Logo"
            className="w-20 h-20 md:w-24 md:h-24 object-contain cursor-default relative z-10"
            style={{ alignBaseline: "baseline" }}
          />
        </div>

        {/* First Row */}
        <div className="relative overflow-hidden cursor-default my-[5px]">
          <div ref={firstRowRef} className="flex cursor-default" style={{ gap: "9px" }}>
            {[...integrations[0], ...integrations[0], ...integrations[0]].map((integration, index) => (
              <div
                key={`first-${index}`}
                className="bg-white flex-shrink-0 flex justify-center items-center cursor-default w-[50px] h-[50px] md:w-[65px] md:h-[65px]"
                style={{
                  boxShadow: "#0d15300d 0px 3.672px 9.181px 0px",
                  border: "0.8px solid #ceceea",
                  borderRadius: "13.327px",
                  width: "50px",
                  height: "50px",
                }}
              >
                <div className="cursor-default">
                  <img
                    src={integration.logo || "/placeholder.svg"}
                    alt={integration.name}
                    className="object-contain cursor-default w-[28px] h-[28px] md:w-[38px] md:h-[38px]"
                    style={{
                      alignBaseline: "baseline",
                      width: "28px",
                      height: "28px",
                    }}
                    onError={(e) =>
                      handleImageError(
                        e,
                        `https://via.placeholder.com/38x38/6366f1/white?text=${integration.name.charAt(0)}`,
                      )
                    }
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Second Row */}
        <div className="relative overflow-hidden cursor-default my-[5px]">
          <div ref={secondRowRef} className="flex cursor-default" style={{ gap: "9px" }}>
            {[...integrations[1], ...integrations[1], ...integrations[1]].map((integration, index) => (
              <div
                key={`second-${index}`}
                className="bg-white flex-shrink-0 flex justify-center items-center cursor-default w-[50px] h-[50px] md:w-[65px] md:h-[65px]"
                style={{
                  boxShadow: "#0d15300d 0px 3.672px 9.181px 0px",
                  border: "0.8px solid #ceceea",
                  borderRadius: "13.327px",
                  width: "50px",
                  height: "50px",
                }}
              >
                <div className="cursor-default">
                  <img
                    src={integration.logo || "/placeholder.svg"}
                    alt={integration.name}
                    className="object-contain cursor-default w-[28px] h-[28px] md:w-[38px] md:h-[38px]"
                    style={{
                      alignBaseline: "baseline",
                      width: "28px",
                      height: "28px",
                    }}
                    onError={(e) =>
                      handleImageError(
                        e,
                        `https://via.placeholder.com/38x38/6366f1/white?text=${integration.name.charAt(0)}`,
                      )
                    }
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
