import reflex as rx
from .components import navbar, project_card, global_footer
from .projects_data import all_projects  # ✅ import your data

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

        # 🔲 Grid of project cards — now generated from all_projects
        rx.grid(
            rx.foreach(
                all_projects,
                lambda project: project_card(
                    project["title"],
                    project["description"],
                    project["image_url"],
                    border=project["border"],
                    link=project["link"]
                )
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


@rx.page(
    route="/projects/rod_cap",
    title="Rod Cap | Novin",
)
def rod_cap_page():
    return rx.box(
        navbar(),

        # 💡 Hero section with heading/subheading
        rx.vstack(
            rx.text(
                "PROJECT DETAILS",
                color="red",
                font_size="14px",
                font_weight="bold",
                letter_spacing="wide",
                margin_bottom="0.5em"
            ),
            rx.heading(
                "Rod Cap - 3D Scanning and Fusion 360 Modeling",
                font_family="Georgia, serif",
                font_size={"base": "28px", "md": "42px", "lg": "56px"},
                text_align="center",
                line_height="1.3",
                font_weight="semibold",
                margin_bottom="0.5em"
            ),
            rx.text(
                "This project involved using 3D scanning to capture the physical geometry of the rod cap, "
                "and then refining and designing the final model using Autodesk Fusion 360. The goal was to "
                "create a highly accurate and functional rod cap based on real-world dimensions.",
                font_size="18px",
                max_width="750px",
                text_align="center",
                color="gray",
            ),
            spacing="2",
            padding_top="4em",
            padding_bottom="3em",
            align="center",
            margin_x='auto',
            width_max='1280px'
        ),

        rx.divider(margin_y="2em", max_width="1280px", margin_x="auto"),

        # 📌 Process Section
        rx.text(
            "PROCESS",
            font_size="0.8em",
            font_weight="bold",
            color="red",
            letter_spacing="wide",
            text_align="left",
            max_width="1280px",
            margin_x="auto",
            margin_bottom="1em"
        ),

        # 💡 3D Scanning + Fusion 360 Workflow
        rx.vstack(
            rx.text(
                "1. 3D Scanning the Rod Cap",
                font_size="1.25em",
                font_weight="bold",
                margin_bottom="1em",
            ),
            rx.text(
                "The first step involved using a 3D scanner to capture the exact geometry of the rod cap, "
                "providing a digital model for reference. The scan was detailed, ensuring all physical features were captured.",
                font_size="16px",
                color="gray",
                margin_bottom="1em",
            ),
            rx.image(
                src="/rod_cap1.png",  # Replace with your actual image path
                alt="3D Scan of Rod Cap",
                width="100%",
                max_width="1280px",
                margin_bottom="2em"
            ),
            rx.text(
                "2. Refining the Model in Fusion 360",
                font_size="1.25em",
                font_weight="bold",
                margin_bottom="1em",
            ),
            rx.text(
                "Next, the scanned model was imported into Fusion 360, where I used it as a reference to create the final rod cap design. "
                "Tools like sketching, extruding, and sculpting were used to refine the geometry while maintaining the original measurements.",
                font_size="16px",
                color="gray",
                margin_bottom="1em",
            ),
            rx.image(
                src="/rod_cap2.png",  # Replace with your actual image path
                alt="Fusion 360 Workspace for Rod Cap Design",
                width="100%",
                max_width="1280px",
                margin_bottom="2em"
            ),
            rx.text(
                "3. Refining the Model with Fusion 360 Tools",
                font_size="1.25em",
                font_weight="bold",
                margin_bottom="1em",
            ),
            rx.text(
                "Using Fusion 360’s tools, I refined the geometry by adjusting the shape and ensuring that the proportions were accurate. "
                "With the design in place, I checked the rod cap's fit and alignment in 3D space for any adjustments.",
                font_size="16px",
                color="gray",
                margin_bottom="1em",
            ),
            rx.image(
                src="/rod_cap3.png",  # Replace with your actual image path (third image)
                alt="Refining the Rod Cap Model",
                width="100%",
                max_width="1280px",
                margin_bottom="2em"
            ),
            rx.text(
                "4. Finalizing the Design",
                font_size="1.25em",
                font_weight="bold",
                margin_bottom="1em",
            ),
            rx.text(
                "Once the model was complete, I used Fusion 360’s rendering tools to visualize how the rod cap would look in the real world. "
                "The model went through several iterations to ensure both functionality and aesthetics were achieved.",
                font_size="16px",
                color="gray",
                margin_bottom="2em",
            ),
            rx.image(
                src="/rod_cap4.png",  # Replace with your actual image path (final rendered model)
                alt="Rendered Image of Final Rod Cap",
                width="100%",
                max_width="1280px",
                margin_bottom="2em"
            ),
            rx.text(
                "This process helped in achieving a highly precise and customized rod cap, which now serves as a fully validated design ready for manufacturing.",
                font_size="16px",
                color="gray",
            ),
            spacing="2",
            padding_top="4em",
            padding_bottom="3em",
            align="center",
            max_width='1280px',
            margin_x='auto'
        ),

        global_footer(),

        bg="#f5f5f0",
        width="100%",
        padding_x={"base": "1em", "md": "2em"},
        padding_bottom="2em"
    )

@rx.page(
    route="/projects/bell_bracket",
    title="Bell Bracket | Novin",
)
def bell_bracket_page():
    return rx.box(
        navbar(),

        # 💡 Hero section with heading/subheading
        rx.vstack(
            rx.text(
                "PROJECT DETAILS",
                color="red",
                font_size="14px",
                font_weight="bold",
                letter_spacing="wide",
                margin_bottom="0.5em"
            ),
            rx.heading(
                "Bell Bracket - 3D Scanning and Fusion 360 Modeling",
                font_family="Georgia, serif",
                font_size={"base": "28px", "md": "42px", "lg": "56px"},
                text_align="center",
                line_height="1.3",
                font_weight="semibold",
                margin_bottom="0.5em"
            ),
            rx.text(
                "This project involved the design of a bell bracket using 3D scanning to capture the geometry of the original part, "
                "followed by refinement and modification in Autodesk Fusion 360. The goal was to create a functional and accurate "
                "bracket model for manufacturing purposes.",
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

        # 📌 Process Section
        rx.text(
            "PROCESS",
            font_size="0.8em",
            font_weight="bold",
            color="red",
            letter_spacing="wide",
            text_align="left",
            max_width="1280px",
            margin_x="auto",
            margin_bottom="1em"
        ),

        # 💡 3D Scanning + Fusion 360 Workflow
        rx.vstack(
            rx.text(
                "1. 3D Scanning the Bell Bracket",
                font_size="1.25em",
                font_weight="bold",
                margin_bottom="1em",
            ),
            rx.text(
                "The first step was to use a 3D scanner to capture the bell bracket's geometry, including all its edges, "
                "curves, and features. This scan generated a highly accurate mesh model to work with in the design process.",
                font_size="16px",
                color="gray",
                margin_bottom="1em",
            ),
            rx.image(
                src="/bell_bracket1.png",  # Replace with your actual image path
                alt="3D Scan of Bell Bracket",
                width="100%",
                max_width="1280px",
                margin_bottom="2em"
            ),
            rx.text(
                "2. Importing the Scan into Fusion 360",
                font_size="1.25em",
                font_weight="bold",
                margin_bottom="1em",
            ),
            rx.text(
                "Once the 3D scan was completed, the next step was to import the mesh into Fusion 360. "
                "In Fusion 360, I could refine and modify the scanned geometry and use it as a reference for the final design.",
                font_size="16px",
                color="gray",
                margin_bottom="1em",
            ),
            rx.image(
                src="/bell_bracket2.png",  # Replace with your actual image path
                alt="Fusion 360 Workspace for Bell Bracket",
                width="100%",
                max_width="1280px",
                margin_bottom="2em"
            ),
            rx.text(
                "3. Refining the Model in Fusion 360",
                font_size="1.25em",
                font_weight="bold",
                margin_bottom="1em",
            ),
            rx.text(
                "I used Fusion 360’s advanced tools to refine the scanned model. I adjusted the geometry, ensuring all measurements were accurate, "
                "and made necessary modifications to create the final design. This process helped in ensuring that the part would fit perfectly when fabricated.",
                font_size="16px",
                color="gray",
                margin_bottom="1em",
            ),
            rx.image(
                src="/bell_bracket3.png",  # Replace with your actual image path (third image)
                alt="Refining the Bell Bracket Model",
                width="100%",
                max_width="1280px",
                margin_bottom="2em"
            ),
            rx.text(
                "4. Finalizing the Design",
                font_size="1.25em",
                font_weight="bold",
                margin_bottom="1em",
            ),
            rx.text(
                "After the model was complete, I used Fusion 360’s rendering tools to visualize the final design. "
                "The model was iterated several times to ensure it met both functional and aesthetic requirements, making it ready for production.",
                font_size="16px",
                color="gray",
                margin_bottom="2em",
            ),
            rx.image(
                src="/bell_bracket4.png",  # Replace with your actual image path (final rendered model)
                alt="Rendered Image of Final Bell Bracket",
                width="100%",
                max_width="1280px",
                margin_bottom="2em"
            ),
            rx.text(
                "This project resulted in a highly accurate and functional bell bracket design, ready for manufacturing and further testing.",
                font_size="16px",
                color="gray",
            ),
            spacing="2",
            padding_top="4em",
            padding_bottom="3em",
            align="center",
            max_width='1280px',
            margin_x='auto' 
        ),

        global_footer(),

        bg="#f5f5f0",
        width="100%",
        padding_x={"base": "1em", "md": "2em"},
        padding_bottom="2em",
    )
