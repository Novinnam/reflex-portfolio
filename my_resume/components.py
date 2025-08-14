import reflex as rx
from datetime import datetime

class FooterState(rx.State):
    version: str = "1.0.0"
    today: str = datetime.now().strftime("%A %d %B at %H:%M")

    def update_time(self):
        """Update date/time dynamically."""
        self.today = datetime.now().strftime("%A %d %B at %H:%M")

def project_card(title, description, image_url, border=False, link=None):
    return rx.box(
        rx.vstack(
            rx.link(
                rx.image(
                src=image_url,
                width="100%",
                style={
                    "filter": "grayscale(100%)",
                    "transition": "filter 0.5s ease-in-out",
                },
                _hover={
                    "filter": "grayscale(0%)"
                },
                border=rx.cond(border, "1px solid red", "none"),
            ),
            href=f'/projects/{link}',
            ),
            rx.link(title, font_weight="bold", font_size="1.1em", href=f"/projects/{link}", color="black"),
            rx.text(description, font_size="0.9em", color="gray"),
        ),
        padding_x={"base": "1em", "md": "2em"},
    )

def navbar():
    return rx.box(
        # Parent container with background color to cover the entire top area
        rx.box(
            rx.hstack(
                rx.text("Novinnam", font_weight="semibold", font_size="35px", color="#000000", font_family="Sans-serif"),
                rx.spacer(),
                rx.link("Email", href="mailto:mohammadhassan.novin.001@student.uni.lu", color="red", font_size='20px'),
                rx.link("Home", href="/", color='black', font_size='20px'),
                rx.link("About", href="/about", color='black', font_size='20px'),
                rx.link("Projects", href="/projects", color='black', font_size='20px'),
                spacing="4",
            ),
            max_width="1280px",
            width="100%",
            margin="0 auto",
            padding_x={"base": "1em", "md": "2em"},
            margin_x='auto'
        )
    )


def global_footer() -> rx.Component:
    return rx.vstack(
        rx.divider(margin_x='auto', max_width='1280px'),

        rx.grid(
            # Column 1: Developer Info
            rx.box(
                rx.text("Novin", font_weight="bold", font_size="18px"),
                rx.text("An independent full-stack web developer from Ireland."),
            ),
            # Column 2: Page Links
            rx.box(
                rx.text("PAGES", color="red", font_size="16px"),
                rx.vstack(
                    rx.link("Home", href="/"),
                    rx.link("Projects", href="/projects"),
                    rx.link("About", href="/about"),
                    rx.link("Now", href="/now"),
                    align_items="start",
                ),
            ),
            # Column 3: Contact Links
            rx.box(
                rx.text("GET IN TOUCH", color="red", font_size="16px"),
                rx.vstack(
                    rx.link("Email", href="mailto:mohammadhassan.novin.001@student.uni.lu"),
                    rx.link("LinkedIn", href="https://www.linkedin.com/in/novinnnam/"),
                    rx.link("Github", href="https://github.com/Novinnam/reflex-portfolio"),
                    align_items="start",
                )
            ),
            columns="3",
            spacing="6",
            padding_x={"base": "1em", "md": "2em"},
            margin_x='auto',
            max_width='1366px'
        ),

        # Bottom black bar with hover effect
        rx.box(
            rx.flex(
                rx.text(
                    f"Version {FooterState.version} – Date: {FooterState.today}",
                    font_family="monospace",
                    font_size="0.8em",
                    color="white"
                ),
                rx.spacer(),
                rx.link("RSS", href="#", color="white"),
                rx.link("Privacy", href="#", color="white"),
                rx.link("More Info", href="#", color="white"),
                spacing="4",
                align="center",
                justify="center",
                direction="row",
                height="100%",
            ),
            background_color="black",
            transition="background-color 0.8s ease",
            _hover={"background_color":"#FF5900"},
            height="46px",
            max_width="1280px",
            padding_x="2em",
            width="100%",
            border_radius="15px",
            margin_x="auto"
        ),
        width="100%",
        margin_x='auto'
    )