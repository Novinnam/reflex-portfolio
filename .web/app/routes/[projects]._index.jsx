

import { Fragment, useContext, useEffect } from "react"
import { Box as RadixThemesBox, Flex as RadixThemesFlex, Grid as RadixThemesGrid, Heading as RadixThemesHeading, Link as RadixThemesLink, Separator as RadixThemesSeparator, Text as RadixThemesText } from "@radix-ui/themes"
import { Link as ReactRouterLink } from "react-router"
import { StateContexts } from "$/utils/context"
import { jsx } from "@emotion/react"



function Text_101293345110516020862261840462185915770 () {
  
  const reflex___state____state__my_resume___components____footer_state = useContext(StateContexts.reflex___state____state__my_resume___components____footer_state)





  
  return (
    jsx(
RadixThemesText,
{as:"p",css:({ ["fontFamily"] : "monospace", ["--default-font-family"] : "monospace", ["fontSize"] : "0.8em", ["color"] : "white" })},
("Version "+reflex___state____state__my_resume___components____footer_state.version_rx_state_+" \u2013 Date: "+reflex___state____state__my_resume___components____footer_state.today_rx_state_)
,)
  )
}

export default function Component() {
    




  return (
    jsx(
Fragment,
{},
jsx(
RadixThemesBox,
{css:({ ["background"] : "#f5f5f0", ["width"] : "100%", ["padding_x"] : ({ ["base"] : "1em", ["md"] : "2em" }), ["paddingBottom"] : "2em" })},
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
"Mohammadhassan.novin.001@student.uni.lu"
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
{align:"center",className:"rx-Stack",css:({ ["paddingTop"] : "4em", ["paddingBottom"] : "3em" }),direction:"column",gap:"2"},
jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "red", ["fontSize"] : "14px", ["fontWeight"] : "bold", ["letterSpacing"] : "wide", ["marginBottom"] : "0.5em" })},
"LATEST PROJECTS"
,),jsx(
RadixThemesHeading,
{css:({ ["fontFamily"] : "Georgia, serif", ["--default-font-family"] : "Georgia, serif", ["font_size"] : ({ ["base"] : "28px", ["md"] : "42px", ["lg"] : "56px" }), ["textAlign"] : "center", ["lineHeight"] : "1.3", ["fontWeight"] : "semibold", ["marginBottom"] : "0.5em" })},
"Here are some of the things I've been working on."
,),jsx(
RadixThemesText,
{as:"p",css:({ ["fontSize"] : "18px", ["maxWidth"] : "750px", ["textAlign"] : "center", ["color"] : "gray" })},
"Here is where I keep track of all the things I've been doing over the years, whether it's new businesses I've been building out, client projects or just experiments."
,),),jsx(RadixThemesSeparator,{css:({ ["marginTop"] : "2em", ["marginBottom"] : "2em", ["maxWidth"] : "1280px", ["marginInlineStart"] : "auto", ["marginInlineEnd"] : "auto" }),size:"4"},)
,jsx(
RadixThemesText,
{as:"p",css:({ ["fontSize"] : "0.8em", ["fontWeight"] : "bold", ["color"] : "red", ["letterSpacing"] : "wide", ["textAlign"] : "left", ["maxWidth"] : "1280px", ["marginInlineStart"] : "auto", ["marginInlineEnd"] : "auto", ["marginBottom"] : "1em" })},
"PINNED"
,),jsx(
RadixThemesGrid,
{columns:({ ["base"] : "1", ["md"] : "2", ["lg"] : "3" }),css:({ ["marginBottom"] : "3em", ["maxWidth"] : "1280px", ["marginInlineStart"] : "auto", ["marginInlineEnd"] : "auto" }),gap:"6"},
jsx(
RadixThemesBox,
{css:({ ["padding_x"] : ({ ["base"] : "1em", ["md"] : "2em" }) })},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",direction:"column",gap:"3"},
jsx("img",{css:({ ["filter"] : "grayscale(100%)", ["transition"] : "filter 0.5s ease-in-out", ["width"] : "100%", ["&:hover"] : ({ ["filter"] : "grayscale(0%)" }), ["border"] : (false ? "1px solid red" : "none") }),src:"/fetch.jpg"},)
,jsx(
RadixThemesText,
{as:"p",css:({ ["fontWeight"] : "bold", ["fontSize"] : "1.1em" })},
"Fetch"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["fontSize"] : "0.9em", ["color"] : "gray" })},
"A compliance and buying SAAS for veterinary groups and their practices that I\u2019ve helped co-found."
,),),),jsx(
RadixThemesBox,
{css:({ ["padding_x"] : ({ ["base"] : "1em", ["md"] : "2em" }) })},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",direction:"column",gap:"3"},
jsx("img",{css:({ ["filter"] : "grayscale(100%)", ["transition"] : "filter 0.5s ease-in-out", ["width"] : "100%", ["&:hover"] : ({ ["filter"] : "grayscale(0%)" }), ["border"] : (true ? "1px solid red" : "none") }),src:"/tacm.jpg"},)
,jsx(
RadixThemesText,
{as:"p",css:({ ["fontWeight"] : "bold", ["fontSize"] : "1.1em" })},
"TACM"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["fontSize"] : "0.9em", ["color"] : "gray" })},
"A construction management SAAS for pharmaceutical turnover & commissioning that I\u2019ve helped co-found."
,),),),jsx(
RadixThemesBox,
{css:({ ["padding_x"] : ({ ["base"] : "1em", ["md"] : "2em" }) })},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",direction:"column",gap:"3"},
jsx("img",{css:({ ["filter"] : "grayscale(100%)", ["transition"] : "filter 0.5s ease-in-out", ["width"] : "100%", ["&:hover"] : ({ ["filter"] : "grayscale(0%)" }), ["border"] : (true ? "1px solid red" : "none") }),src:"/event_fan_cam.jpg"},)
,jsx(
RadixThemesText,
{as:"p",css:({ ["fontWeight"] : "bold", ["fontSize"] : "1.1em" })},
"Event Fan Cam"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["fontSize"] : "0.9em", ["color"] : "gray" })},
"A stand-alone brand activation that I\u2019ve built, letting attendees at live events take-over the big-screen."
,),),),jsx(
RadixThemesBox,
{css:({ ["padding_x"] : ({ ["base"] : "1em", ["md"] : "2em" }) })},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",direction:"column",gap:"3"},
jsx("img",{css:({ ["filter"] : "grayscale(100%)", ["transition"] : "filter 0.5s ease-in-out", ["width"] : "100%", ["&:hover"] : ({ ["filter"] : "grayscale(0%)" }), ["border"] : (false ? "1px solid red" : "none") }),src:"/backstage.jpg"},)
,jsx(
RadixThemesText,
{as:"p",css:({ ["fontWeight"] : "bold", ["fontSize"] : "1.1em" })},
"Backstage Experiential"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["fontSize"] : "0.9em", ["color"] : "gray" })},
"With Backstage I help experiential marketing agencies wow their clients with cutting edge event-tech and digital brand activations."
,),),),jsx(
RadixThemesBox,
{css:({ ["padding_x"] : ({ ["base"] : "1em", ["md"] : "2em" }) })},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",direction:"column",gap:"3"},
jsx("img",{css:({ ["filter"] : "grayscale(100%)", ["transition"] : "filter 0.5s ease-in-out", ["width"] : "100%", ["&:hover"] : ({ ["filter"] : "grayscale(0%)" }), ["border"] : (false ? "1px solid red" : "none") }),src:"/craft.png"},)
,jsx(
RadixThemesText,
{as:"p",css:({ ["fontWeight"] : "bold", ["fontSize"] : "1.1em" })},
"Craft CMS Plugins"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["fontSize"] : "0.9em", ["color"] : "gray" })},
"x3 plugins for Craft CMS that I sell through the Craft plugin store."
,),),),jsx(
RadixThemesBox,
{css:({ ["padding_x"] : ({ ["base"] : "1em", ["md"] : "2em" }) })},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",direction:"column",gap:"3"},
jsx("img",{css:({ ["filter"] : "grayscale(100%)", ["transition"] : "filter 0.5s ease-in-out", ["width"] : "100%", ["&:hover"] : ({ ["filter"] : "grayscale(0%)" }), ["border"] : (false ? "1px solid red" : "none") }),src:"/pubs_with_fire.jpg"},)
,jsx(
RadixThemesText,
{as:"p",css:({ ["fontWeight"] : "bold", ["fontSize"] : "1.1em" })},
"Pubs With A Fire"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["fontSize"] : "0.9em", ["color"] : "gray" })},
"An app I built to find your nearest cosy pub with a fireplace. Mentioned in the Daily Mail \ud83d\udd25."
,),),),),jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",css:({ ["width"] : "100%", ["marginInlineStart"] : "auto", ["marginInlineEnd"] : "auto" }),direction:"column",gap:"3"},
jsx(RadixThemesSeparator,{css:({ ["marginInlineStart"] : "auto", ["marginInlineEnd"] : "auto", ["maxWidth"] : "1280px" }),size:"4"},)
,jsx(
RadixThemesGrid,
{columns:"3",css:({ ["padding_x"] : ({ ["base"] : "1em", ["md"] : "2em" }), ["marginInlineStart"] : "auto", ["marginInlineEnd"] : "auto", ["maxWidth"] : "1366px" }),gap:"6"},
jsx(
RadixThemesBox,
{},
jsx(
RadixThemesText,
{as:"p",css:({ ["fontWeight"] : "bold", ["fontSize"] : "18px" })},
"Novin"
,),jsx(
RadixThemesText,
{as:"p"},
"An independent full-stack web developer from Ireland."
,),),jsx(
RadixThemesBox,
{},
jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "red", ["fontSize"] : "16px" })},
"PAGES"
,),jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",css:({ ["alignItems"] : "start" }),direction:"column",gap:"3"},
jsx(
RadixThemesLink,
{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},
jsx(
ReactRouterLink,
{to:"/"},
"Home"
,),),jsx(
RadixThemesLink,
{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},
jsx(
ReactRouterLink,
{to:"/projects"},
"Projects"
,),),jsx(
RadixThemesLink,
{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},
jsx(
ReactRouterLink,
{to:"/about"},
"About"
,),),jsx(
RadixThemesLink,
{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},
jsx(
ReactRouterLink,
{to:"/now"},
"Now"
,),),),),jsx(
RadixThemesBox,
{},
jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "red", ["fontSize"] : "16px" })},
"GET IN TOUCH"
,),jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",css:({ ["alignItems"] : "start" }),direction:"column",gap:"3"},
jsx(
RadixThemesLink,
{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},
jsx(
ReactRouterLink,
{to:"mailto:mohammadhassan.novin.001@student.uni.lu"},
"Email"
,),),jsx(
RadixThemesLink,
{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},
jsx(
ReactRouterLink,
{to:"https://www.linkedin.com/in/novinnnam/"},
"LinkedIn"
,),),jsx(
RadixThemesLink,
{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},
jsx(
ReactRouterLink,
{to:"https://github.com/Novinnam"},
"Github"
,),),),),),jsx(
RadixThemesBox,
{css:({ ["backgroundColor"] : "black", ["transition"] : "background-color 0.8s ease", ["&:hover"] : ({ ["backgroundColor"] : "#FF5900" }), ["height"] : "46px", ["maxWidth"] : "1280px", ["paddingInlineStart"] : "2em", ["paddingInlineEnd"] : "2em", ["width"] : "100%", ["borderRadius"] : "15px", ["marginInlineStart"] : "auto", ["marginInlineEnd"] : "auto" })},
jsx(
RadixThemesFlex,
{align:"center",css:({ ["height"] : "100%" }),direction:"row",justify:"center",gap:"4"},
jsx(Text_101293345110516020862261840462185915770,{},)
,jsx(RadixThemesFlex,{css:({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })},)
,jsx(
RadixThemesLink,
{asChild:true,css:({ ["color"] : "white", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},
jsx(
ReactRouterLink,
{to:"#"},
"RSS"
,),),jsx(
RadixThemesLink,
{asChild:true,css:({ ["color"] : "white", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},
jsx(
ReactRouterLink,
{to:"#"},
"Privacy"
,),),jsx(
RadixThemesLink,
{asChild:true,css:({ ["color"] : "white", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},
jsx(
ReactRouterLink,
{to:"#"},
"More Info"
,),),),),),),jsx(
"title",
{},
"All Projects | Novin"
,),jsx("meta",{content:"favicon.ico",property:"og:image"},)
,)
  )
}
