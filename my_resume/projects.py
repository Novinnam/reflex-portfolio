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

@rx.page(
    route="/projects/single_power_screw",
    title="Single Power Screw Press Machine | Novin",
)
def single_power_screw_page():
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
                "Single Power Screw Press Machine - Component and Connection Calculations",
                font_family="Georgia, serif",
                font_size={"base": "28px", "md": "42px", "lg": "56px"},
                text_align="center",
                line_height="1.3",
                font_weight="semibold",
                margin_bottom="0.5em"
            ),
            rx.text(
                "This project involves the design and optimization of a Single Power Screw Press Machine. The goal is to determine "
                "the calculations for each of its components and their interconnections for optimized performance.",
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

        rx.divider(margin_y="2em", max_width="67%", margin_x="auto"),

        # 📌 Project Criteria
        rx.vstack(
            rx.text(
                "Required Project Output",
                font_size="20px",  # Font size changed to 20px
                font_weight="bold",
                color="red",  # Color changed to red
                letter_spacing="wide",
                text_align="left",
                margin_bottom="1em",
                margin_x='16.7%'
            ),
            rx.text(
                "The project involves designing a Single Power Screw Press Machine, which includes selecting suitable materials, performing "
                "analytical and numerical validation, creating 3D CAD models, generating working drawings, and providing an assembly drawing. "
                "Finally, a calculation report will document the design methodology, results, and analysis to ensure optimal performance and safety.",
                font_size="16px",
                color="black",
                margin_bottom="2em",
                max_width='60%',
                margin_x='auto'
            ),
            rx.text(
                "1. A completed project must have:",
                font_size="18px",
                font_weight="bold",
                color="black",
                margin_bottom="1em",
                margin_x='auto'
            ),
            rx.image(
                src="/single_power_screw5.png",  # First image
                alt="Screw Press Design",
                width="55%",
                margin_right="1%",
                margin_bottom='1%',
                margin_x='auto'
            ),
            rx.divider(margin_y="2em", max_width="67%", margin_x="auto"),
        ),

        # 📌 Images Section
        rx.hstack(
            rx.image(
                src="/single_power_screw1.png",  # First image
                alt="Screw Press Design",
                width="50%",
                margin_right="1%",
                margin_bottom='1%'
            ),
            rx.image(
                src="/single_power_screw2.png",  # Second image (replace with actual path)
                alt="Screw Press Design Details",
                width="50%",
                margin_left="1%",
                margin_bottom='1%'
            ),
            max_width="66.67%",
            margin_x='auto'
        ),

        rx.hstack(
            rx.image(
                src="/single_power_screw3.png",  # Third image (replace with actual path)
                alt="Assembly View",
                width="50%",
                margin_right="1%",
                margin_bottom='1%'
            ),
            rx.image(
                src="/single_power_screw4.png",  # Fourth image (replace with actual path)
                alt="Final Design",
                width="50%",
                margin_left="1%",
                margin_bottom='1%'
            ),
            max_width="66.67%",
            margin_x='auto'
        ),

        # 📌 Navigation to Calculation Pages
        rx.text(
            "CALCULATIONS",
            font_size="20px",  # Font size changed to 20px
            font_weight="bold",
            color="red",  # Color changed to red
            letter_spacing="wide",
            text_align="center",
            margin_x="auto",
            margin_bottom="1em"
        ),
        
        rx.hstack(
            # Component Calculation Link
            rx.link(
                rx.button(
                    "Component Calculation",
                    width="200px",
                    padding="1em",
                    background_color="blue.400",
                    color="white",
                    font_size="18px",
                    font_weight="bold",
                    border_radius="md",
                    margin_bottom="3em",
                ),
                href="/projects/single_power_screw/components",
            ),
            
            # Connection Calculation Link
            rx.link(
                rx.button(
                    "Connection Calculation",
                    width="200px",
                    padding="1em",
                    background_color="blue.400",
                    color="white",
                    font_size="18px",
                    font_weight="bold",
                    border_radius="md",
                    margin_bottom="3em",
                ),
                href="/projects/single_power_screw/connections",
            ),
            margin_x='40%',
            max_width='67%'
        ),
        
        global_footer(),

        bg="#f5f5f0",
        width="100%",
        padding_x={"base": "1em", "md": "2em"},
        padding_bottom="2em",
    )


@rx.page(
    route="/projects/single_power_screw/components",
    title="Component Calculations | Single Power Screw Press Machine",
)
def component_calculations_page():
    return rx.box(
        navbar(),
        
        # 💡 Heading for Component Calculations
        rx.vstack(
            rx.text(
                "Component Calculations",
                color="red",
                font_size="20px",
                font_weight="bold",
                letter_spacing="wide",
                margin_bottom="0.5em"
            ),
            rx.heading(
                "Detailed Calculations for Each Component of the Machine",
                font_family="Georgia, serif",
                font_size={"base": "28px", "md": "42px", "lg": "56px"},
                text_align="center",
                line_height="1.3",
                font_weight="semibold",
                margin_bottom="1em"
            ),
            rx.text(
                "Each component in the Single Power Screw Press Machine has unique calculations based on its design and material properties. "
                "Below, we explore the calculations for each component of the machine.",
                font_size="18px",
                max_width="750px",
                text_align="center",
                color="gray",
                margin_bottom="3em"
            ),
            # Add calculations for each component as per your requirements (e.g., for screw, base, etc.)
            rx.text("Screw Calculation: ...", font_size="16px", color="gray", margin_bottom="1em"),
            rx.text("Base Calculation: ...", font_size="16px", color="gray", margin_bottom="1em"),
            rx.text("Pressure Plate Calculation: ...", font_size="16px", color="gray", margin_bottom="1em"),
            # Add more as needed
        ),
        
        global_footer(),

        bg="#f5f5f0",
        width="100%",
        padding_x={"base": "1em", "md": "2em"},
        padding_bottom="2em",
    )

# Define the state class
class ConnectionCalculationsState(rx.State):
    # Define the base vars (state variables)
    slide_index: int = 0  # Initial slide index
    circle_pos: tuple[int, int] = (85, 640)  # Initial position of the circle

    # Define the event handler to go to the next slide
    @rx.event
    def go_to_next_slide(self):
        self.slide_index = self.slide_index + 1
        self.update_circle_position()  # Directly update the circle position

    # Define the event handler to go to the previous slide
    @rx.event
    def go_to_previous_slide(self):
        self.slide_index = self.slide_index - 1
        self.update_circle_position()  # Directly update the circle position

    # Method to update the circle position based on slide index
    def update_circle_position(self):
        positions = [
            (26.5, 615),  # Slide 1 circle position (x, y)
            (26.5, 520),  # Slide 2 circle position
            (26.5, 190),  # Slide 3 circle position, etc.
        ]
        
        # Update the position of the circle directly
        self.circle_pos = positions[self.slide_index % len(positions)]  # Calculate and update circle position


# Function to render the page
@rx.page(route="/projects/single_power_screw/connections", title="Connection Calculations | Single Power Screw Press Machine")
def connection_calculations_page():

    return rx.box(
        navbar(),

        # Heading and other text elements
        rx.vstack(
            rx.text(
                "Connection Calculations",
                color="red",
                font_size="20px",
                font_weight="bold",
                letter_spacing="wide",
                margin_bottom="0.5em",
                margin_x='auto',
                padding_top='4em'
            ),
            rx.heading(
                "Calculations for Connections Between Components",
                font_family="Georgia, serif",
                font_size={"base": "28px", "md": "42px", "lg": "56px"},
                text_align="center",
                line_height="1.3",
                font_weight="semibold",
                margin_bottom="1em",
                margin_x='auto'
            ),
            rx.text(
                "This section calculates the forces and stresses transmitted through the connections between the components of the Single "
                "Power Screw Press Machine, ensuring a well-coordinated functioning of the entire system.",
                font_size="18px",
                max_width="750px",
                text_align="center",
                color="gray",
                margin_bottom="3em",
                margin_x='auto'
            ),
            rx.divider(margin_y="2em", max_width="67%", margin_x="auto"),

            # Image with dynamic circle
            rx.box(
                rx.image(
                    src="/connection_calculations.jpg",  # Replace with actual image URL
                    alt="Connection Diagram",
                    height='100%',
                    width="100%",
                ),
                rx.box(
                    # Red border with transparent fill
                    border="5px solid red",
                    bg="transparent",  # No fill color
                    position="relative",  # Using absolute position
                    top=f"{-ConnectionCalculationsState.circle_pos[1]}px",  # Y position
                    left=f"{ConnectionCalculationsState.circle_pos[0]}%",  # X position
                    width="100px",  # Set the width of the circle
                    height="100px",  # Set the height of the circle
                    border_radius="50%",  # Make it circular
                    transition="all 0.5s ease"  # Smooth transition for circle movement
                ),
                margin_x='auto'
            ),

            # Navigation buttons
            rx.box(
                rx.button("Previous", on_click=ConnectionCalculationsState.go_to_previous_slide, bg="gray", color="white", margin_right="1em"),
                rx.button("Next", on_click=ConnectionCalculationsState.go_to_next_slide, bg="blue", color="white"),
                margin_x='auto'
            ),
        ),

        global_footer(),

        bg="#f5f5f0",
        width="100%",
        padding_x={"base": "1em", "md": "2em"},
        padding_bottom="2em",
    )
