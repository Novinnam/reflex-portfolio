import reflex as rx
from .components import navbar

@rx.page(route="/about")
def about_page() -> rx.Component:
    return rx.box(
        navbar(),
        # HERO SECTION
        rx.flex(
            # LEFT: Bottom-aligned text with divider above
            rx.flex(
                rx.box(
                    rx.divider(),
                    width="100%",
                    max_width="36rem",
                    margin_bottom="2rem"
                ),
                rx.heading(
                    rx.fragment(
                        "The one-man team ready to build your next big robotics solution."
                    ),
                    style={
                        "fontFamily": "Georgia, serif",
                        "fontSize": "50px",
                        "fontWeight": "normal",  # Or "medium" if you want a bit more strength
                        "lineHeight": "1.3",
                        "textAlign": "left"
                    }
                ),
                rx.text("Hi, I’m Mohammadhassan Novinnam (Novin).", margin_top="1.5rem"),
                rx.text("Mechanical engineer with a passion for programming and robotics.", margin_top="0.25rem"),
                rx.text("Completed a robotics course and now focused on ROS simulations in Python.", margin_top="0.25rem"),
                direction="column",
                justify="end",  # bottom-align text
                align="start",
                padding="2rem",
                flex="1",
                min_height="500px",
            ),

            # RIGHT: Image with overlay label
            rx.box(
                rx.box(
                    rx.image(
                        src="/profile_2.jpg",
                        width=["100%", "560px"],
                        height="auto",
                        object_fit="cover",
                        alt="Portrait of Mohammadhassan Novinnam",
                        border_radius="lg",
                        box_shadow="lg",
                    ),
                    rx.box(
                        rx.text(
                            "Hi, I’m Novinnam (Novin).",
                            color="white",
                            font_weight="bold",
                            font_size="1.1rem",
                        ),
                        position="absolute",
                        bottom="0",
                        left="0",
                        margin="1rem",
                        background_color="rgba(0, 0, 0, 0.6)",
                        padding="0.5rem 1rem",
                        border_radius="20px",
                    ),
                    position="relative",
                    width=["100%", "560px"],
                ),
                padding="2rem",
            ),

            spacing="6",
            wrap="wrap",
            justify="center",
            align="stretch",
            max_width="1280px",
            margin_x="auto",
            min_height="500px",
        ),

        rx.box(
            rx.divider(),
            width="100%",
            max_width="1280px",
            mx="auto",
            margin_x="auto"
        ),

        # ABOUT ME SECTION
rx.box(
    # Main Section Wrapper
    rx.flex(
        # LEFT COLUMN
        rx.box(
            rx.text(
                "I've spent years mastering mechanical engineering, focusing on mechanical design and analysis. "
                "From HVAC systems to designing chillers, I've worked on critical design calculations and production phases.",
                font_size="22px",
                color="#000000",
                line_height="1.8",
                margin_bottom="1.5em",
                text_align="left",
            ),
            rx.text(
                "After transitioning into data science, I specialized in supervised learning architectures, enhancing my problem-solving skills. "
                "This journey has been about understanding complex systems, both mechanical and data-driven."
                " Implemented AI models and optimized systems.",
                font_size="22px",
                color="#000000",
                line_height="1.8",
                margin_bottom="1.5em",
                text_align="left",
            ),
            width="50%",
            padding_right="2rem"
        ),

        # RIGHT COLUMN
        rx.box(
            rx.text(
                "Currently, I'm in Luxembourg pursuing my master's degree. "
                "Here, I've done extensive mechanical analysis, further sharpening my expertise in real-world applications.",
                font_size="22px",
                color="#000000",
                line_height="1.8",
                margin_bottom="1.5em",
                text_align="left",
            ),
            rx.text(
                "After completing a robotics course, my passion for simulations, particularly in ROS2, grew immensely. "
                "Now, I’m eager to dive deep into robotics and seek opportunities where I can combine this passion with Python.",
                font_size="22px",
                color="#000000",
                line_height="1.8",
                margin_bottom="1.5em",
                text_align="left",
            ),
            rx.text(
                "Let’s connect → ",
                rx.link("Send me an email", href="mailto:mohammadhassan.novin.001@student.uni.lu", text_decoration="underline"),
                font_size="22px",
                color="#000000",
                line_height="1.8",
                margin_top="1em",
                text_align="left",
            ),
            width="50%",
            padding_left="2rem"
        ),

        direction="row",
        justify="between",
        align="start",
        margin_top="2rem"
    ),
    max_width="1280px",
    margin_x="auto",
    padding="2rem",
    border_top="1px solid #ccc"
),

        rx.box(
            rx.divider(),
            width="100%",
            max_width="1280px",
            mx="auto",
            margin_x="auto"
        ),

        rx.grid(
    # Top (center): Robotics
    rx.box(
        rx.vstack(
            rx.icon("bot", size=50),
            rx.text(
                "Robotics",
                font_size="25px",
                font_weight="bold",
                text_align="center",
                padding_y="2",
                font_family="serif",
            ),
            rx.text("• ROS", font_family="serif", font_size="20px"),
            rx.text("• Python programming", font_family="serif", font_size="20px"),
            rx.text("• MATLAB programming", font_family="serif", font_size="20px"),
            rx.text("• Machine Learning", font_family="serif", font_size="20px"),
            rx.text("• Computer Vision", font_family="serif", font_size="20px"),
            align="center",
        ),
        style={
            "gridColumn": "2",
            "gridRow": "1",
            "padding": "6",
            "backgroundColor": "#FDFDFB",
            "borderRadius": "lg",
            "boxShadow": "20px",
            "textAlign": "center",
        }
    ),

    # Middle left: Mechanical Design
    rx.box(
        rx.vstack(
            rx.icon("bot", size=50),
            rx.text(
                "Mechanical Design",
                font_size="25px",
                font_weight="bold",
                text_align="center",
                padding_y="2",
                font_family="serif",
            ),
            rx.text("• Fusion 360", font_family="serif", font_size="20px"),
            rx.text("• Autodesk Inventor", font_family="serif", font_size="20px"),
            rx.text("• SolidWorks", font_family="serif", font_size="20px"),
            align="center",
        ),
        style={
            "gridColumn": "1",
            "gridRow": "2",
            "padding": "6",
            "backgroundColor": "#FDFDFB",
            "borderRadius": "lg",
            "boxShadow": "20px",
            "textAlign": "center",
        }
    ),

    # Middle right: Mechanical Analysis
    rx.box(
        rx.vstack(
            rx.icon("bot", size=50),
            rx.text(
                "Mechanical Analysis",
                font_size="25px",
                font_weight="bold",
                text_align="center",
                padding_y="2",
                font_family="serif",
            ),
            rx.text("• Ansys", font_family="serif", font_size="20px"),
            rx.text("• Fusion 360", font_family="serif", font_size="20px"),
            align="center",
        ),
        style={
            "gridColumn": "3",
            "gridRow": "2",
            "padding": "6",
            "backgroundColor": "#FDFDFB",
            "borderRadius": "lg",
            "boxShadow": "20px",
            "textAlign": "center",
        }
    ),

    # Bottom (center): Languages
    rx.box(
        rx.vstack(
            rx.icon("languages", size=50),
            rx.text(
                "Languages",
                font_size="25px",
                font_weight="bold",
                text_align="center",
                padding_y="2",
                font_family="serif",
            ),
            rx.text("• Persian (native)", font_family="serif", font_size="20px"),
            rx.text("• French (A2)", font_family="serif", font_size="20px"),
            rx.text("• English (C1)", font_family="serif", font_size="20px"),
            align="center",
        ),
        style={
            "gridColumn": "2",
            "gridRow": "3",
            "padding": "6",
            "backgroundColor": "#FDFDFB",
            "borderRadius": "lg",
            "boxShadow": "20px",
            "textAlign": "center",
        }
    ),

    columns="300px 300px 300px",  # 3 fixed columns
    spacing="8",
    justify_content="center",
    margin_x="auto",
    max_width="900px"
)

)


    #     # CORE SKILLS
    #     rx.box(
    #         rx.heading("Core Skills", size="8"),
    #         rx.text(
    #             "HVAC & Thermal: Shell‑and‑tube/coil HX design, chiller & AHU design, compressor selection, "
    #             "Aspen EDR, CoolSelector, thermal‑fluid analysis."
    #         ),
    #         rx.text(
    #             "Software & AI: Python, TensorFlow, computer vision, data pipelines, model evaluation, "
    #             "ROS (Robot Operating System).",
    #             margin_top="0.25rem",
    #         ),
    #         rx.text("CAD & Tools: SolidWorks, Aspen HYSYS, USA Coil.", margin_top="0.25rem"),
    #         rx.text("Soft Skills: Project management, problem solving, clear communication.", margin_top="0.25rem"),
    #         padding="2rem",
    #     ),

    #     # EDUCATION & CERTS
    #     rx.box(
    #         rx.heading("Education & Certifications", size="8"),
    #         rx.list.unordered(
    #             rx.list.item("M.Eng. Sustainable Product Creation — University of Luxembourg (ongoing)."),
    #             rx.list.item("B.Eng. Mechanical Engineering — Jundi Shapur University of Technology (15.08/20)."),
    #             rx.list.item("IELTS (valid to Nov 2025)."),
    #             rx.list.item("DeepLearning.AI — Custom Models, Layers & Losses with TensorFlow (2022)."),
    #             rx.list.item("Python Programming — Maktabkhooneh (2022)."),
    #         ),
    #         padding="2rem",
    #     ),

    #     # LANGUAGES & CONTACT
    #     rx.box(
    #         rx.heading("Languages", size="8"),
    #         rx.text("English — Professional | French — Elementary | Persian — Native/Bilingual"),
    #         padding="2rem",
    #     ),

    #     rx.box(
    #         rx.heading("Let’s Collaborate", size="8"),
    #         rx.text(
    #             "I’m open to internships, research collaborations, and industry projects at the intersection of "
    #             "thermal systems, AI, and robotics. If you have a challenging problem in HVAC optimization, "
    #             "heat exchangers, or ROS‑based automation, I’d love to help."
    #         ),
    #         # Replace with your real links when ready
    #         rx.hstack(
    #             rx.link("Email", href="mailto:you@example.com"),
    #             rx.link("LinkedIn", href="https://www.linkedin.com/in/your-handle"),
    #             rx.link("GitHub", href="https://github.com/your-handle"),
    #             spacing="4",
    #             margin_top="0.75rem",
    #         ),
    #         padding="2rem",
    #         margin_bottom="2rem",
    #     ),
    # )
