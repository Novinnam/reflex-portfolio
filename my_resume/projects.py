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
                font_size="20px",
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
            font_size="20px",
            font_weight="bold",
            color="red",
            letter_spacing="wide",
            text_align="left",
            max_width="1280px",
            margin_x="25%",
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
            max_width='800px',
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
    title="Bell Bracket Optimization | Novin",
)
def bell_bracket_page():
    return rx.box(
        navbar(),

        # 💡 Hero section with heading/subheading
        rx.vstack(
            rx.text(
                "PROJECT DETAILS",
                color="red",
                font_size="20px",
                font_weight="bold",
                letter_spacing="wide",
                margin_bottom="0.5em"
            ),
            rx.heading(
                "Bell Bracket - Topology Optimization for Additive Manufacturing",
                font_family="Georgia, serif",
                font_size={"base": "28px", "md": "42px", "lg": "56px"},
                text_align="center",
                line_height="1.3",
                font_weight="semibold",
                margin_bottom="0.5em"
            ),
            rx.text(
                "This project involved the design and optimization of a bell bracket using topology optimization in Fusion 360. "
                "The goal was to create a lightweight, functional structure that fits within predefined dimensions while ensuring it "
                "could withstand a 5kN load using LUVOCOM® 3F PET CF 9780 BK material for additive manufacturing.",
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
            font_size="20px",
            font_weight="bold",
            color="red",
            letter_spacing="wide",
            text_align="left",
            max_width="1280px",
            margin_x="16.67%",
            margin_bottom="1em"
        ),

        # 💡 Topology Optimization + Design Process
        rx.vstack(
            rx.text(
                "1. Defining the Design Space and Boundary Conditions",
                font_size="1.25em",
                font_weight="bold",
                margin_bottom="1em",
            ),
            rx.text(
                "The design process began by defining the allowable design space for the bell bracket, set at 77.1mm x 112.3mm x 15mm. "
                "Boundary conditions were established with a 5kN load applied along the positive X direction, fixed roller supports, "
                "and pin constraints, which guided the topology optimization in Fusion 360.",
                font_size="16px",
                color="gray",
                margin_bottom="1em",
            ),
            rx.hstack(
                rx.image(
                    src="/bell_bracket1_2.png",  # Image from your uploaded files
                    alt="Initial Design Space Definition",
                    max_width='50%',
                    margin_bottom="2em",
                    margin_y='auto'
                ),
                rx.image(
                    src="/bell_bracket1.png",  # Image from your uploaded files
                    alt="Initial Design Space Definition",
                    width="50%",
                    margin_bottom="2em"
                )
            ),
            rx.text(
                "2. Topology Optimization in Fusion 360",
                font_size="1.25em",
                font_weight="bold",
                margin_bottom="1em",
            ),
            rx.text(
                "Once the design space and boundary conditions were set, Fusion 360 was used to perform topology optimization. "
                "The goal was to maximize stiffness within the space while keeping the weight of the bell bracket as low as possible. "
                "The optimization process generated multiple design iterations for evaluation.",
                font_size="16px",
                color="gray",
                margin_bottom="1em",
            ),
            rx.hstack(
                rx.image(
                    src="/bell_bracket2_2.png",  # Image for optimization results
                    alt="Topology Optimization in Fusion 360",
                    max_width="50%",
                    margin_y="auto"
                ),
                rx.image(
                    src="/bell_bracket2.png",  # Image from your uploaded files
                    alt="Initial Design Space Definition",
                    max_width="50%",
                    margin_bottom="2em"
                )
            ),
            rx.text(
                "3. Reviewing Optimization Results and Refining the Design",
                font_size="1.25em",
                font_weight="bold",
                margin_bottom="1em",
            ),
            rx.text(
                "After running the topology optimization, the generated design was reviewed and further refined. "
                "This step involved adjusting the geometry to ensure it met all functional and manufacturing requirements, while "
                "also checking the safety factor for load-bearing capacity.",
                font_size="16px",
                color="gray",
                margin_bottom="1em",
            ),
            rx.image(
                src="/bell_bracket7.png",  # Image for the refined model
                alt="Refined Bell Bracket Design",
                width="100%",
                max_width="1280px",
                margin_bottom="2em"
            ),
            rx.text(
                "4. Final Design Overview",
                font_size="1.25em",
                font_weight="bold",
                margin_bottom="1em",
            ),
            rx.text(
                "Here is some views of the final design, showing its structure and how it meets the design and load-bearing requirements.",
                font_size="16px",
                color="gray",
                margin_bottom="2em",
            ),
            rx.hstack(
                rx.image(
                src="/bell_bracket4.png",  # Image for final perspective view
                alt="Final Design Overview",
                max_width="50%",
                margin_bottom="2em"
            ),
            rx.image(
                src="/bell_bracket5.png",  # Image for final perspective view
                alt="Final Design Overview",
                max_width="50%",
                margin_bottom="2em"
            )
            ),
            rx.hstack(
                rx.image(
                    src="/bell_bracket6.png",  # Image for final perspective view
                    alt="Final Design Overview",
                    width="100%",
                    max_width="50%",
                    margin_bottom="2em"
                ),
                rx.image(
                    src="/bell_bracket3.png",  # Image for final perspective view
                    alt="Final Design Overview",
                    width="100%",
                    max_width="50%",
                    margin_bottom="2em"
                )
            ),
            spacing="2",
            padding_top="4em",
            padding_bottom="3em",
            align="center",
            max_width='66.67%',
            margin_x='auto' 
        ),

        global_footer(),

        bg="#f5f5f0",
        width="100%",
        padding_x={"base": "1em", "md": "2em"},
        padding_bottom="2em",
    )
