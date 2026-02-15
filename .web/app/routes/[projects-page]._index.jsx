

import { Fragment, useEffect } from "react"
import { Box as RadixThemesBox, Flex as RadixThemesFlex, Grid as RadixThemesGrid, Heading as RadixThemesHeading, Link as RadixThemesLink, Separator as RadixThemesSeparator, Text as RadixThemesText } from "@radix-ui/themes"
import { Link as ReactRouterLink } from "react-router"
import { Grid_180225670295547984240208493585931998792, Text_101293345110516020862261840462185915770 } from "$/utils/stateful_components"
import { jsx } from "@emotion/react"



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
,),jsx(Grid_180225670295547984240208493585931998792,{},)
,jsx(
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
{to:"https://github.com/Novinnam/reflex-portfolio"},
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
"MyResume | Projects-Page"
,),jsx("meta",{content:"favicon.ico",property:"og:image"},)
,)
  )
}
