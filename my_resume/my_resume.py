import reflex as rx
from .about import about_page
from .projects import projects_page, rod_cap_page
from .components import project_card, navbar, global_footer
from .projects_data import all_projects

class HeroState(rx.State):
    name: str = "Novin"
    location: str = "Luxembourg"
    bio: str = "I'm Novin, an independent software developer from Luxembourg."
    description: str = (
        "I run a few of my own software businesses while also helping companies "
        "get their own products and ideas off the ground. Read a bit more about me."
    )
    social_links = [
        {"platform": "linkedin", "url": "https://www.linkedin.com/in/novinnnam/"},
        {"platform": "github", "url": "https://github.com/Novinnam"}
    ]
    profile_image: str = "/profile.jpg"


class FeaturedProjectsState(rx.State):
    @rx.var
    def projects(self) -> list:
        # Take the first 4 from the shared data
        featured = all_projects[:4]

        # Fill remaining slots with "Coming Soon" placeholders
        while len(featured) < 4:
            featured.append({
                "title": "Coming Soon",
                "description": "Coming soon",
                "image_url": "/coming_soon.jpg",
                "border": True
            })
        return featured

def hero_section():
    return rx.flex(
        # Profile Image
        rx.box(
            rx.image(
                src=HeroState.profile_image,
                width=rx.breakpoints(
                    initial="830px",
                    md="990px",
                    lg="1223px"
                ),
                height="auto",
                border_radius="lg",
            ),
            height="auto",
            overflow="hidden",
            margin_left=rx.breakpoints(
                initial="0",
                md="-2em"
            ),
        ),

        # Text Block
        rx.box(
            rx.vstack(
                rx.text(
                    HeroState.bio,
                    font_size=rx.breakpoints(
                        initial="20px",
                        sm="28px",
                        lg="50px"
                    ),
                    font_weight="medium",
                    font_family="Georgia, serif",
                    line_height="1.5",
                    text_align=rx.breakpoints(
                        initial="center",
                        md="left"
                    ),
                ),
                rx.text(
                    HeroState.description,
                    font_size="18px",
                    color="#333333",
                    line_height="1.8",
                    margin_bottom="1.5em",
                    max_width="1280px",
                    text_align=rx.breakpoints(
                        initial="center",
                        md="left"
                    ),
                ),
                rx.hstack(
                    rx.foreach(
                        HeroState.social_links,
                        lambda link: rx.link(
                            rx.icon(link["platform"]),
                            href=link["url"],
                            color="black"
                        )
                    ),
                    spacing="4",
                    justify=rx.breakpoints(
                        initial="center",
                        md="start"
                    ),
                ),
                spacing="4",
                align_items=rx.breakpoints(
                    initial="center",
                    md="start"
                ),
            ),
            width="100%",
            max_width="1280px",
            align_self="end",
            padding_left=rx.breakpoints(
                initial="0",
                md="3em"
            ),
        ),

        # Flex container
        direction=rx.breakpoints(
            initial="column",
            md="row"
        ),
        align="center",
        justify="center",
        gap="3em",
        padding_y="4em",
        padding_x={"base": "1em", "md": "2em"},
        max_width="1280px",
        width="100%",
        margin_x="auto"
    )

def footer() -> rx.Component:
    return rx.box(
        rx.flex(
            rx.text(
                "Looking for a portfolio? The code for this website is open source. ",
                rx.link(
                    "View on Github",
                    href="https://github.com/Novinnam",
                    color="red",
                    underline="always",
                    as_="span"
                ),
                font_family="monospace",
                font_size="0.9em",
                color="white",
            ),
            align="center",        # vertical centering
            justify="center",      # horizontal centering
            direction="row",       # default, but explicit for clarity
            height="100%",         # fill the box
            width="100%",
        ),
        background_color="black",
        padding_x={"base": "1em", "md": "2em"},
        width="100%",
        max_width="1344px",
        margin_x="auto",
        height="42px",             # increase if needed
    )

def featured_projects() -> rx.Component:
    # Slice first 4 real projects
    featured = all_projects[:4]

    # Fill with placeholders
    while len(featured) < 4:
        featured.append({
            "title": "Coming Soon",
            "description": "Coming soon",
            "image_url": "/coming_soon.jpg",
            "border": True
        })

    return rx.vstack(
        rx.heading(
            "Featured Projects",
            margin_bottom="1em",
            font_family="Georgia, serif",
            font_size={"base": "32px", "md": "48px", "lg": "60px"},
            text_align="center"
        ),
        rx.grid(
            rx.foreach(
                featured,  # ✅ just a plain list now
                lambda project: project_card(
                    project["title"],
                    project["description"],
                    project["image_url"],
                    border=project["border"],
                    link=project["link"]
                )
            ),
            columns={"base": "1", "md": "1", "lg": "2"},
            spacing="4",
        ),
        rx.link(
            "SEE ALL PROJECTS",
            href="/projects",
            font_weight="bold",
            color="red",
            margin_top="2em",
            align_self="flex-end"
        ),
        width="70%",
        margin_x='auto',
        margin_y='50px',
        padding={"base": "1em", "md": "2em"},
        max_width='1280px'
    )


@rx.page(
    route="/",
    title="Novin | Software Developer",
)
def index():
    return rx.box(
        navbar(),
        hero_section(),
        footer(),
        featured_projects(),
        global_footer(),
        padding_x={"base": "1em", "md": "2em"},
        bg="#f5f5f0",  # <<< SET HERE
        color="text",
        width="100%",
    )


app = rx.App()

# Register pages
app.add_page(index)
app.add_page(about_page)
app.add_page(projects_page)
app.add_page(rod_cap_page)