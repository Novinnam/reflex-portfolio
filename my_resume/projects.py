import reflex as rx
from .components import navbar, project_card, global_footer

@rx.page(
    route="/projects",
    title="All Projects | Novin",
)
def projects_page():
    return rx.box(
        navbar(),

        # 💡 Hero section with heading/subheading
        rx.vstack(
            rx.text(
                "LATEST PROJECTS",
                color="red",
                font_size="14px",
                font_weight="bold",
                letter_spacing="wide",
                margin_bottom="0.5em"
            ),
            rx.heading(
                "Here are some of the things I've been working on.",
                font_family="Georgia, serif",
                font_size={"base": "28px", "md": "42px", "lg": "56px"},
                text_align="center",
                line_height="1.3",
                font_weight="semibold",
                margin_bottom="0.5em"
            ),
            rx.text(
                "Here is where I keep track of all the things I've been doing over the years, "
                "whether it's new businesses I've been building out, client projects or just experiments.",
                font_size="18px",
                max_width="750px",
                text_align="center",
                color="gray",
            ),
            spacing="2",
            padding_top="4em",
            padding_bottom="3em",
            align="center"
        ),

        rx.divider(margin_y="2em", max_width="1280px", margin_x="auto"),

        # 📌 Pinned label
        rx.text(
            "PINNED",
            font_size="0.8em",
            font_weight="bold",
            color="red",
            letter_spacing="wide",
            text_align="left",
            max_width="1280px",
            margin_x="auto",
            margin_bottom="1em"
        ),

        # 🔲 Grid of project cards
        rx.grid(
            project_card(
                "Fetch",
                "A compliance and buying SAAS for veterinary groups and their practices that I’ve helped co-found.",
                "/fetch.jpg"
            ),
            project_card(
                "TACM",
                "A construction management SAAS for pharmaceutical turnover & commissioning that I’ve helped co-found.",
                "/tacm.jpg",
                border=True
            ),
            project_card(
                "Event Fan Cam",
                "A stand-alone brand activation that I’ve built, letting attendees at live events take-over the big-screen.",
                "/event_fan_cam.jpg",
                border=True
            ),
            project_card(
                "Backstage Experiential",
                "With Backstage I help experiential marketing agencies wow their clients with cutting edge event-tech and digital brand activations.",
                "/backstage.jpg"
            ),
            project_card(
                "Craft CMS Plugins",
                "x3 plugins for Craft CMS that I sell through the Craft plugin store.",
                "/craft.png"
            ),
            project_card(
                "Pubs With A Fire",
                "An app I built to find your nearest cosy pub with a fireplace. Mentioned in the Daily Mail 🔥.",
                "/pubs_with_fire.jpg"
            ),
            columns={"base": "1", "md": "2", "lg": "3"},
            spacing="6",
            margin_bottom="3em",
            max_width="1280px",
            margin_x='auto'
        ),

        global_footer(),

        bg="#f5f5f0",
        width="100%",
        padding_x={"base": "1em", "md": "2em"},
        padding_bottom="2em"
    )
