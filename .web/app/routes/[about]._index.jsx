

import { Fragment, useEffect } from "react"
import { Box as RadixThemesBox, Flex as RadixThemesFlex, Grid as RadixThemesGrid, Heading as RadixThemesHeading, Link as RadixThemesLink, Separator as RadixThemesSeparator, Text as RadixThemesText } from "@radix-ui/themes"
import { Link as ReactRouterLink } from "react-router"
import { Bot as LucideBot, Languages as LucideLanguages } from "lucide-react"
import { jsx } from "@emotion/react"



export default function Component() {
    




  return (
    jsx(
Fragment,
{},
jsx(
RadixThemesBox,
{},
jsx(
RadixThemesBox,
{},
jsx(
RadixThemesBox,
{css:({ ["maxWidth"] : "1280px", ["width"] : "100%", ["margin"] : "0 auto", ["padding_x"] : ({ ["base"] : "1em", ["md"] : "2em" }), ["marginInlineStart"] : "auto", ["marginInlineEnd"] : "auto" })},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",direction:"row",gap:"4"},
jsx(
RadixThemesText,
{as:"p",css:({ ["fontWeight"] : "semibold", ["fontSize"] : "35px", ["color"] : "#000000", ["fontFamily"] : "Sans-serif", ["--default-font-family"] : "Sans-serif" })},
"Novinnam"
,),jsx(RadixThemesFlex,{css:({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })},)
,jsx(
RadixThemesLink,
{asChild:true,css:({ ["color"] : "red", ["fontSize"] : "20px", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},
jsx(
ReactRouterLink,
{to:"mailto:mohammadhassan.novin.001@student.uni.lu"},
"Email"
,),),jsx(
RadixThemesLink,
{asChild:true,css:({ ["color"] : "black", ["fontSize"] : "20px", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},
jsx(
ReactRouterLink,
{to:"/"},
"Home"
,),),jsx(
RadixThemesLink,
{asChild:true,css:({ ["color"] : "black", ["fontSize"] : "20px", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},
jsx(
ReactRouterLink,
{to:"/about"},
"About"
,),),jsx(
RadixThemesLink,
{asChild:true,css:({ ["color"] : "black", ["fontSize"] : "20px", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},
jsx(
ReactRouterLink,
{to:"/projects"},
"Projects"
,),),),),),jsx(
RadixThemesFlex,
{align:"stretch",css:({ ["maxWidth"] : "1280px", ["marginInlineStart"] : "auto", ["marginInlineEnd"] : "auto", ["minHeight"] : "500px" }),justify:"center",gap:"6",wrap:"wrap"},
jsx(
RadixThemesFlex,
{align:"start",css:({ ["padding"] : "2rem", ["flex"] : "1", ["minHeight"] : "500px" }),direction:"column",justify:"end"},
jsx(
RadixThemesBox,
{css:({ ["width"] : "100%", ["maxWidth"] : "36rem", ["marginBottom"] : "2rem" })},
jsx(RadixThemesSeparator,{size:"4"},)
,),jsx(
RadixThemesHeading,
{css:({ ["fontFamily"] : "Georgia, serif", ["--default-font-family"] : "Georgia, serif", ["fontSize"] : "50px", ["fontWeight"] : "normal", ["lineHeight"] : "1.3", ["textAlign"] : "left" })},
jsx(
Fragment,
{},
"The one-man team ready to build your next big robotics solution."
,),),jsx(
RadixThemesText,
{as:"p",css:({ ["marginTop"] : "1.5rem" })},
"Hi, I\u2019m Mohammadhassan Novinnam (Novin)."
,),jsx(
RadixThemesText,
{as:"p",css:({ ["marginTop"] : "0.25rem" })},
"Mechanical engineer with a passion for programming and robotics."
,),jsx(
RadixThemesText,
{as:"p",css:({ ["marginTop"] : "0.25rem" })},
"Completed a robotics course and now focused on ROS simulations in Python."
,),),jsx(
RadixThemesBox,
{css:({ ["padding"] : "2rem" })},
jsx(
RadixThemesBox,
{css:({ ["position"] : "relative", ["@media screen and (min-width: 0)"] : ({ ["width"] : "100%" }), ["@media screen and (min-width: 30em)"] : ({ ["width"] : "560px" }) })},
jsx("img",{alt:"Portrait of Mohammadhassan Novinnam",css:({ ["@media screen and (min-width: 0)"] : ({ ["width"] : "100%" }), ["@media screen and (min-width: 30em)"] : ({ ["width"] : "560px" }), ["height"] : "auto", ["objectFit"] : "cover", ["borderRadius"] : "lg", ["boxShadow"] : "lg" }),src:"/profile_2.jpg"},)
,jsx(
RadixThemesBox,
{css:({ ["position"] : "absolute", ["bottom"] : "0", ["left"] : "0", ["margin"] : "1rem", ["backgroundColor"] : "rgba(0, 0, 0, 0.6)", ["padding"] : "0.5rem 1rem", ["borderRadius"] : "20px" })},
jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["fontWeight"] : "bold", ["fontSize"] : "1.1rem" })},
"Hi, I\u2019m Novinnam (Novin)."
,),),),),),jsx(
RadixThemesBox,
{css:({ ["width"] : "100%", ["maxWidth"] : "1280px", ["mx"] : "auto", ["marginInlineStart"] : "auto", ["marginInlineEnd"] : "auto" })},
jsx(RadixThemesSeparator,{size:"4"},)
,),jsx(
RadixThemesBox,
{css:({ ["maxWidth"] : "1280px", ["marginInlineStart"] : "auto", ["marginInlineEnd"] : "auto", ["padding"] : "2rem", ["borderTop"] : "1px solid #ccc" })},
jsx(
RadixThemesFlex,
{align:"start",css:({ ["marginTop"] : "2rem" }),direction:"row",justify:"between"},
jsx(
RadixThemesBox,
{css:({ ["width"] : "50%", ["paddingRight"] : "2rem" })},
jsx(
RadixThemesText,
{as:"p",css:({ ["fontSize"] : "22px", ["color"] : "#000000", ["lineHeight"] : "1.8", ["marginBottom"] : "1.5em", ["textAlign"] : "left" })},
"I've spent years mastering mechanical engineering, focusing on mechanical design and analysis. From HVAC systems to designing chillers, I've worked on critical design calculations and production phases."
,),jsx(
RadixThemesText,
{as:"p",css:({ ["fontSize"] : "22px", ["color"] : "#000000", ["lineHeight"] : "1.8", ["marginBottom"] : "1.5em", ["textAlign"] : "left" })},
"After transitioning into data science, I specialized in supervised learning architectures, enhancing my problem-solving skills. This journey has been about understanding complex systems, both mechanical and data-driven. Implemented AI models and optimized systems."
,),),jsx(
RadixThemesBox,
{css:({ ["width"] : "50%", ["paddingLeft"] : "2rem" })},
jsx(
RadixThemesText,
{as:"p",css:({ ["fontSize"] : "22px", ["color"] : "#000000", ["lineHeight"] : "1.8", ["marginBottom"] : "1.5em", ["textAlign"] : "left" })},
"Currently, I'm in Luxembourg pursuing my master's degree. Here, I've done extensive mechanical analysis, further sharpening my expertise in real-world applications."
,),jsx(
RadixThemesText,
{as:"p",css:({ ["fontSize"] : "22px", ["color"] : "#000000", ["lineHeight"] : "1.8", ["marginBottom"] : "1.5em", ["textAlign"] : "left" })},
"After completing a robotics course, my passion for simulations, particularly in ROS2, grew immensely. Now, I\u2019m eager to dive deep into robotics and seek opportunities where I can combine this passion with Python."
,),jsx(
RadixThemesText,
{as:"p",css:({ ["fontSize"] : "22px", ["color"] : "#000000", ["lineHeight"] : "1.8", ["marginTop"] : "1em", ["textAlign"] : "left" })},
"Let\u2019s connect \u2192 "
,jsx(
RadixThemesLink,
{asChild:true,css:({ ["textDecoration"] : "underline", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},
jsx(
ReactRouterLink,
{to:"mailto:mohammadhassan.novin.001@student.uni.lu"},
"Send me an email"
,),),),),),),jsx(
RadixThemesBox,
{css:({ ["width"] : "100%", ["maxWidth"] : "1280px", ["mx"] : "auto", ["marginInlineStart"] : "auto", ["marginInlineEnd"] : "auto" })},
jsx(RadixThemesSeparator,{size:"4"},)
,),jsx(
RadixThemesGrid,
{columns:"300px 300px 300px",css:({ ["justifyContent"] : "center", ["marginInlineStart"] : "auto", ["marginInlineEnd"] : "auto", ["maxWidth"] : "900px" }),gap:"8"},
jsx(
RadixThemesBox,
{css:({ ["gridColumn"] : "2", ["gridRow"] : "1", ["padding"] : "6", ["backgroundColor"] : "#FDFDFB", ["borderRadius"] : "lg", ["boxShadow"] : "20px", ["textAlign"] : "center" })},
jsx(
RadixThemesFlex,
{align:"center",className:"rx-Stack",direction:"column",gap:"3"},
jsx(LucideBot,{size:50},)
,jsx(
RadixThemesText,
{as:"p",css:({ ["fontSize"] : "25px", ["fontWeight"] : "bold", ["textAlign"] : "center", ["paddingTop"] : "2", ["paddingBottom"] : "2", ["fontFamily"] : "serif", ["--default-font-family"] : "serif" })},
"Robotics"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["fontFamily"] : "serif", ["--default-font-family"] : "serif", ["fontSize"] : "20px" })},
"\u2022 ROS"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["fontFamily"] : "serif", ["--default-font-family"] : "serif", ["fontSize"] : "20px" })},
"\u2022 Python programming"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["fontFamily"] : "serif", ["--default-font-family"] : "serif", ["fontSize"] : "20px" })},
"\u2022 MATLAB programming"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["fontFamily"] : "serif", ["--default-font-family"] : "serif", ["fontSize"] : "20px" })},
"\u2022 Machine Learning"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["fontFamily"] : "serif", ["--default-font-family"] : "serif", ["fontSize"] : "20px" })},
"\u2022 Computer Vision"
,),),),jsx(
RadixThemesBox,
{css:({ ["gridColumn"] : "1", ["gridRow"] : "2", ["padding"] : "6", ["backgroundColor"] : "#FDFDFB", ["borderRadius"] : "lg", ["boxShadow"] : "20px", ["textAlign"] : "center" })},
jsx(
RadixThemesFlex,
{align:"center",className:"rx-Stack",direction:"column",gap:"3"},
jsx(LucideBot,{size:50},)
,jsx(
RadixThemesText,
{as:"p",css:({ ["fontSize"] : "25px", ["fontWeight"] : "bold", ["textAlign"] : "center", ["paddingTop"] : "2", ["paddingBottom"] : "2", ["fontFamily"] : "serif", ["--default-font-family"] : "serif" })},
"Mechanical Design"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["fontFamily"] : "serif", ["--default-font-family"] : "serif", ["fontSize"] : "20px" })},
"\u2022 Fusion 360"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["fontFamily"] : "serif", ["--default-font-family"] : "serif", ["fontSize"] : "20px" })},
"\u2022 Autodesk Inventor"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["fontFamily"] : "serif", ["--default-font-family"] : "serif", ["fontSize"] : "20px" })},
"\u2022 SolidWorks"
,),),),jsx(
RadixThemesBox,
{css:({ ["gridColumn"] : "3", ["gridRow"] : "2", ["padding"] : "6", ["backgroundColor"] : "#FDFDFB", ["borderRadius"] : "lg", ["boxShadow"] : "20px", ["textAlign"] : "center" })},
jsx(
RadixThemesFlex,
{align:"center",className:"rx-Stack",direction:"column",gap:"3"},
jsx(LucideBot,{size:50},)
,jsx(
RadixThemesText,
{as:"p",css:({ ["fontSize"] : "25px", ["fontWeight"] : "bold", ["textAlign"] : "center", ["paddingTop"] : "2", ["paddingBottom"] : "2", ["fontFamily"] : "serif", ["--default-font-family"] : "serif" })},
"Mechanical Analysis"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["fontFamily"] : "serif", ["--default-font-family"] : "serif", ["fontSize"] : "20px" })},
"\u2022 Ansys"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["fontFamily"] : "serif", ["--default-font-family"] : "serif", ["fontSize"] : "20px" })},
"\u2022 Fusion 360"
,),),),jsx(
RadixThemesBox,
{css:({ ["gridColumn"] : "2", ["gridRow"] : "3", ["padding"] : "6", ["backgroundColor"] : "#FDFDFB", ["borderRadius"] : "lg", ["boxShadow"] : "20px", ["textAlign"] : "center" })},
jsx(
RadixThemesFlex,
{align:"center",className:"rx-Stack",direction:"column",gap:"3"},
jsx(LucideLanguages,{size:50},)
,jsx(
RadixThemesText,
{as:"p",css:({ ["fontSize"] : "25px", ["fontWeight"] : "bold", ["textAlign"] : "center", ["paddingTop"] : "2", ["paddingBottom"] : "2", ["fontFamily"] : "serif", ["--default-font-family"] : "serif" })},
"Languages"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["fontFamily"] : "serif", ["--default-font-family"] : "serif", ["fontSize"] : "20px" })},
"\u2022 Persian (native)"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["fontFamily"] : "serif", ["--default-font-family"] : "serif", ["fontSize"] : "20px" })},
"\u2022 French (A2)"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["fontFamily"] : "serif", ["--default-font-family"] : "serif", ["fontSize"] : "20px" })},
"\u2022 English (C1)"
,),),),),),jsx(
"title",
{},
"MyResume | About"
,),jsx("meta",{content:"favicon.ico",property:"og:image"},)
,)
  )
}
